package com.elibrary.backend.config;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class RateLimitFilter extends OncePerRequestFilter {

    private final Cache<String, Bucket> loginCache = Caffeine.newBuilder()
            .maximumSize(10_000)
            .expireAfterAccess(Duration.ofMinutes(2))
            .build();

    private final Cache<String, Bucket> searchCache = Caffeine.newBuilder()
            .maximumSize(10_000)
            .expireAfterAccess(Duration.ofMinutes(2))
            .build();

    private Bucket createLoginBucket() {
        // Limit: 5 requests per 1 minute
        Bandwidth limit = Bandwidth.builder()
                .capacity(5)
                .refillGreedy(5, Duration.ofMinutes(1))
                .build();
        return Bucket.builder().addLimit(limit).build();
    }

    private Bucket createSearchBucket() {
        // Limit: 20 requests per 1 minute to protect external API quotas
        Bandwidth limit = Bandwidth.builder()
                .capacity(20)
                .refillGreedy(20, Duration.ofMinutes(1))
                .build();
        return Bucket.builder().addLimit(limit).build();
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String uri = request.getRequestURI();

        // We only care about /api/auth/login (POST), /api/auth/signup (POST), and
        // /api/search endpoints
        boolean isLogin = uri.startsWith("/api/auth/login") && request.getMethod().equalsIgnoreCase("POST");
        boolean isRegister = uri.startsWith("/api/auth/signup") && request.getMethod().equalsIgnoreCase("POST");
        boolean isSearch = uri.startsWith("/api/search") && request.getMethod().equalsIgnoreCase("GET");

        if (isLogin || isRegister || isSearch) {
            String ip = request.getHeader("X-Forwarded-For");
            if (ip == null || ip.isEmpty()) {
                ip = request.getRemoteAddr();
            }

            Bucket bucket;
            if (isLogin || isRegister) {
                // Share the same strict 5-request bucket for both login and register
                bucket = loginCache.get(ip, k -> createLoginBucket());
            } else {
                bucket = searchCache.get(ip, k -> createSearchBucket());
            }

            System.out.println(
                    "RateLimitFilter: IP=" + ip + ", URI=" + uri + ", TokensRemaining=" + bucket.getAvailableTokens());

            if (!bucket.tryConsume(1)) {
                System.out.println("RateLimitFilter: BLOCKED IP=" + ip);
                response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                response.setContentType("application/json");

                String message = isSearch
                        ? "Search rate limit exceeded. Please slow down."
                        : "Too many authentication attempts. Please try again in a minute.";

                response.getWriter().write(
                        "{\"success\": false, \"message\": \"" + message + "\"}");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }
}
