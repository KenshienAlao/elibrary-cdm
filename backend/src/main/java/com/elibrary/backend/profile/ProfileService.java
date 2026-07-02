package com.elibrary.backend.profile;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class ProfileService {
    private final ProfileRepository profileRepository;
    public ProfileDto.Response getProfile() {
        var profile = profileRepository.findByUserEmail(SecurityContextHolder.getContext().getAuthentication().getName())
        .orElseThrow(() -> new IllegalArgumentException("Profile not found"));
        return new ProfileDto.Response(
            profile.getUser().getEmail(),
            profile.getFirstName(),
            profile.getLastName(),
            profile.getGender(),
            profile.getRole()
        );
    }
}