package com.elibrary.backend.profile;

import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.elibrary.backend.cloudinary.ImageService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class ProfileService {
        private final ProfileRepository profileRepository;
        private final ImageService imageService;

        public ProfileDto.Response getProfile() {
                var profile = profileRepository
                                .findByUserEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                                .orElseThrow(() -> new IllegalArgumentException("Profile not found"));
                return new ProfileDto.Response(
                                profile.getAvatarUrl(),
                                profile.getUser().getEmail(),
                                profile.getFirstName(),
                                profile.getLastName(),
                                profile.getRole(),
                                profile.getGender());
        }

        public ProfileDto.Response update(ProfileDto.Update entity) {
                var profile = profileRepository
                                .findByUserEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                                .orElseThrow(() -> new IllegalArgumentException("Profile not found"));

                Optional.ofNullable(entity.avatar())
                                .ifPresent(avatar -> profile.setAvatarUrl(
                                                imageService.userAvatar(avatar, profile.getUser().getId())));
                Optional.ofNullable(entity.firstName()).ifPresent(profile::setFirstName);
                Optional.ofNullable(entity.lastName()).ifPresent(profile::setLastName);
                Optional.ofNullable(entity.role()).ifPresent(profile::setRole);
                Optional.ofNullable(entity.gender()).ifPresent(profile::setGender);

                profileRepository.save(profile);
                return new ProfileDto.Response(
                                profile.getAvatarUrl(),
                                profile.getUser().getEmail(),
                                profile.getFirstName(),
                                profile.getLastName(),
                                profile.getRole(),
                                profile.getGender());
        }
}