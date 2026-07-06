package com.elibrary.backend.bookmark;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elibrary.backend.common.ApiResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/bookmark")
class BookmarkController {

    private final BookmarkService bookmarkService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<BookmarkDto>>> get() {
        return ResponseEntity.ok(ApiResponse.success("Bookmark successfully fetched", bookmarkService.get()));
    }

    @PostMapping("/add")
    public ResponseEntity<ApiResponse<BookmarkDto>> add(@RequestBody BookmarkDto.Add entity) {
        System.out.println("body = " + entity);
        return ResponseEntity.ok(ApiResponse.success("Bookmark added successfully", bookmarkService.add(entity)));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<ApiResponse<Void>> delete(@RequestBody BookmarkDto.Delete entity) {
        bookmarkService.delete(entity);
        return ResponseEntity.ok(ApiResponse.success("Bookmark successfully deleted", null));
    }
}