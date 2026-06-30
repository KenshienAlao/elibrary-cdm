package com.elibrary.backend.authentication;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class AuthService {

    private final AuthRespository authRespository;

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
            .password(entity.password())
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
}


// login next