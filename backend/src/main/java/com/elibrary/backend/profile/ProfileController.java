package com.elibrary.backend.profile;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elibrary.backend.common.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
class ProfileController {

    private final ProfileService profileService;
    

    @GetMapping
    public ResponseEntity<ApiResponse<ProfileDto.Response>> getProfile() {
        return ResponseEntity.ok(ApiResponse.success("Profile retrieved successfully", profileService.getProfile()));
    }

    @PatchMapping(value = "/update", consumes = "multipart/form-data")
    public ResponseEntity<ApiResponse<ProfileDto.Response>> updateProfile(@ModelAttribute ProfileDto.Update entity ) {
        return ResponseEntity.ok(ApiResponse.success("Profile updated successfully", profileService.update(entity)));
    }
    
}