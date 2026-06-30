package com.elibrary.backend.Scholar;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/search")
public class ScholarController {

    private final RestClient restClient;

    public ScholarController(@Value("${open-alex.base-url}") String baseUrl) {
        this.restClient = RestClient.builder()
                .baseUrl(baseUrl)
                .defaultHeader("User-Agent", "mailto:kenshienworkacc@gmail.com")
                .build();
    }

    @GetMapping
    public ResponseEntity<Map> searchPapers(@RequestParam String q) {
        var body = restClient.get()
                .uri(uri -> uri
                        .queryParam("search", q)
                        .queryParam("filter", "has_content.pdf:true")
                        .build())
                .retrieve()
                .body(Map.class);
        return ResponseEntity.ok(body);
    }
}