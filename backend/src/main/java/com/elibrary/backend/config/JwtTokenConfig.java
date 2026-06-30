package com.elibrary.backend.config;

import java.util.Date;
import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenConfig {

    @Value("${jwt.access-expiration}")
    private long accessExp;

    @Value("${jwt.refresh-expiration}")
    private long refreshExp;

    private final SecretKey key;

    public JwtTokenConfig(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateAccessToken(String email) {
        return buildToken(email, accessExp);
    }

    public String generateRefreshToken(String email) {
        return buildToken(email, refreshExp);
    }

    public String extractEmail(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    private String buildToken(String email, long exp) {
        return Jwts.builder()
                .subject(email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + exp))
                .signWith(key)
                .compact();
    }
}
