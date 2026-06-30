package com.elibrary.backend.authentication;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.elibrary.backend.config.JwtTokenConfig;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class AuthService {

    private final AuthRespository authRespository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenConfig jwtTokenConfig;
    private final HttpServletResponse response;

    public AuthDto.SignUp.Response signUp(AuthDto.SignUp entity) {
        if (authRespository.existsByEmail(entity.email())){
            throw new IllegalArgumentException("Email already exists");
        }

        if (!entity.password().equals(entity.confirmPassword())){
            throw new IllegalArgumentException("Password do not match");
        }

        var result = authRespository.save(UsersModal.builder()
            .firstName(entity.firstName())
            .lastName(entity.lastName())
            .gender(entity.gender())
            .email(entity.email())
            .role(entity.role())
            .password(passwordEncoder.encode(entity.password()))
            .terms(entity.terms())
            .build());

        return new AuthDto.SignUp.Response(
            result.getId(),
            result.getFirstName(),
            result.getLastName(),
            result.getGender(),
            result.getEmail(),
            result.getRole()
        );
    }

    public AuthDto.Login.Response login(AuthDto.Login entity) {
        var user = authRespository.findByEmail(entity.email())
            .filter(u -> passwordEncoder.matches(entity.password(), u.getPassword()))
            .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
        
        var email = user.getEmail();
        setCookie("access_token", jwtTokenConfig.generateAccessToken(email), 900);
        setCookie("refresh_token", jwtTokenConfig.generateRefreshToken(email), 604800);
        
        return new AuthDto.Login.Response(
            user.getId(),
            user.getFirstName(),
            user.getLastName(),
            user.getGender(),
            user.getEmail(),
            user.getRole()
        );
    }

     private void setCookie(String name, String value, long maxAge) {
        response.addHeader(HttpHeaders.SET_COOKIE, ResponseCookie.from(name, value)
                .httpOnly(true).secure(true).path("/").maxAge(maxAge).sameSite("None").build().toString() + "; Partitioned");
    }
}
