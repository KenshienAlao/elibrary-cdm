package com.elibrary.backend.profile;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
    
}