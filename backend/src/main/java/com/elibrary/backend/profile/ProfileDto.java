package com.elibrary.backend.profile;

import org.springframework.web.multipart.MultipartFile;

record ProfileDto(
    String email,
    String firstName,
    String lastName,
    String role,
    String gender
) {

    record Response(
        String avatar,
        String email,
        String firstName,
        String lastName,
        String role,
        String gender
    ) {}
    
    record Update(
        MultipartFile avatar,
        String firstName,
        String lastName,
        String role,
        String gender
    ) {
    }
}
