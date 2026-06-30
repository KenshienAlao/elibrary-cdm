package com.elibrary.backend.authentication;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import com.elibrary.backend.common.ApiResponse;
import com.elibrary.backend.config.JwtTokenConfig;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
class AuthController {

    private final AuthService authService;
    private final JwtTokenConfig jwtTokenConfig;
    

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthDto.SignUp.Response>> signup(@Valid @RequestBody AuthDto.SignUp entity) {
        return ResponseEntity.ok(ApiResponse.success("Sign Up Successfully", authService.signUp(entity)));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthDto.Login.Response>> login(@Valid @RequestBody AuthDto.Login entity) {
        return ResponseEntity.ok(ApiResponse.success("Login Successfully", authService.login(entity)));
    }

    @PostMapping("/refresh")
    public ApiResponse<Void> refresh(HttpServletRequest request, HttpServletResponse response) {
            var cookie = WebUtils.getCookie(request, "refresh_token");
            if (cookie == null)
                throw new IllegalArgumentException("Missing refresh token.");
    
            var accessToken = jwtTokenConfig.generateAccessToken(
                    jwtTokenConfig.extractEmail(cookie.getValue()));
    
            response.addHeader(
                    HttpHeaders.SET_COOKIE, ResponseCookie.from("access_token", accessToken)
                            .httpOnly(true)
                            .secure(true)
                            .path("/")
                            .maxAge(900)
                            .sameSite("None")
                            .build()
                            .toString() + "; Partitioned");
    
            return ApiResponse.success("Token refreshed.", null);
        }
    }