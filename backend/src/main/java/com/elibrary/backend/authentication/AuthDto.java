package com.elibrary.backend.authentication;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AuthDto(
        @Size(min = 1, max = 50)
        String firstName,
        @Size(min = 1, max = 50)
        String lastName,
        @Size(min = 1, max = 20)
        String gender,
        @Size(min = 1, max = 50)
        String email,
        @Size(min = 1, max = 50)
        String password,
        @Size(min = 1, max = 50)
        String confirmPassword,
        @Size(min = 1, max = 10)
        String role,
        Boolean terms) {

    public record SignUp(                   
        @NotBlank(message = "First name is required")
        @Size(min = 1, max = 50)
        String firstName,
        @NotBlank(message = "Last name is required")
        @Size(min = 1, max = 50)
        String lastName,
        @NotBlank(message = "Gender is required")
        @Size(min = 1, max = 20)
        String gender,
        @NotBlank(message = "Email is required")
        @Size(min = 1, max = 50)
        String email,
        @NotBlank(message = "Password is required")
        @Size(min = 1, max = 50)
        String password,
        @NotBlank(message = "Confirm password is required")
        @Size(min = 1, max = 50)
        String confirmPassword,
        @NotBlank(message = "Role is required")
        @Size(min = 1, max = 10)
        String role,
        @NotNull(message = "Terms agreement is required")
        Boolean terms
    ) {
        public record Response(
            Long id,
            String firstName,
            String lastName,
            String gender,
            String email,
            String role
        ) {
        }
    }

    public record Login(
        @NotBlank(message = "Email is required")
        @Size(min = 1, max = 50)
        String email,
        @NotBlank(message = "Password is required")
        @Size(min = 1, max = 50)
        String password
    ) {
         public record Response(
            Long id,
            String firstName,
            String lastName,
            String gender,
            String email,
            String role
        ) {
        }
    }

    

}
