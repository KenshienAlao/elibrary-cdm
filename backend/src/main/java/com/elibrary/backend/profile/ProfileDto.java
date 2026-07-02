package com.elibrary.backend.profile;


record ProfileDto(
    String email,
    String firstName,
    String lastName,
    String role,
    String gender
) {

    static record Response(
        String email,
        String firstName,
        String lastName,
        String role,
        String gender
    ) {}
    
}
