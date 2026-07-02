package com.elibrary.backend.Scholar;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;

@RestController
@RequestMapping("/api/search")
public class ScholarController {

    private final RestClient restClient;
    private final List<String> keys;

    public ScholarController(@Value("${open-alex.base-url}") String baseUrl,
            @Value("${open-alex.key:}") String key) {
        this.restClient = RestClient.builder()
                .baseUrl(baseUrl)
                .defaultHeader("User-Agent", "elibrary-cdm/1.0 (mailto:kenshienworkacc@gmail.com)")
                .build();
        this.keys = parseKeys(key);
    }

    @GetMapping
    public ResponseEntity<?> searchPapers(@RequestParam String q, @RequestParam int page) {
        if (q == null || q.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Query is required"));
        }
        if (page < 1) {
            return ResponseEntity.badRequest().body(Map.of("message", "Page must be at least 1"));
        }

        for (String key : keys.isEmpty() ? List.of("") : keys) {
            try {
                return ResponseEntity.ok(searchOpenAlex(q.trim(), page, key));
            } catch (RestClientResponseException e) {
                if (e.getStatusCode().value() == 429) {
                    continue;
                }

                return ResponseEntity.status(HttpStatus.BAD_GATEWAY)
                        .body(Map.of("message", "Search provider returned " + e.getStatusCode().value()));
            } catch (Exception e) {
                return ResponseEntity.internalServerError().body(Map.of("message", "Search failed"));
            }
        }

        return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                .body(Map.of("message", "Search provider is rate limited. Try again shortly."));
    }

    private Map<String, Object> searchOpenAlex(String q, int page, String key) {
        return restClient.get()
                .uri(uri -> {
                    var builder = uri
                            .queryParam("search", q)
                            .queryParam("mailto", "kenshienworkacc@gmail.com")
                            .queryParam("per-page", 25)
                            .queryParam("page", page);

                    if (!key.isBlank()) {
                        builder.queryParam("api_key", key);
                    }

                    return builder.build();
                })
                .retrieve()
                .body(new ParameterizedTypeReference<Map<String, Object>>() {});
    }

    static List<String> parseKeys(String key) {
        return Arrays.stream(key.split(","))
                .map(String::trim)
                .filter(k -> !k.isBlank())
                .toList();
    }
}
