package com.elibrary.backend.cloudinary;

import java.io.IOException;
import java.util.Map;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ImageService {

    private static final long MAX_SIZE = 5 * 1024 * 1024;

    private final Cloudinary cloudinary;

public String userAvatar(MultipartFile file, Long userId) {
    if (file.getSize() > MAX_SIZE) {
        throw new IllegalArgumentException("Avatar must be under 5MB");
    }

    String contentType = file.getContentType();
    if (contentType == null || !contentType.startsWith("image/")) {
        throw new IllegalArgumentException("Avatar must be an image");
    }

    String publicId = "users/avatar_" + userId;

    try {
        Map<?, ?> result = cloudinary.uploader().upload(
            file.getBytes(),
            ObjectUtils.asMap(
                "public_id", publicId,
                "overwrite", true,
                "invalidate", true,
                "resource_type", "image"
            )
        );

        return (String) result.get("secure_url");
    } catch (IOException e) {
        throw new RuntimeException("Failed to upload image", e);
    }
    }
}