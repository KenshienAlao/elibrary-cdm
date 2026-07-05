package com.elibrary.backend.bookmark;

import java.time.Instant;

record BookmarkDto(
                Long id,
                String book_id,
                String title,
                String authors,
                Integer publication_year,
                Integer cited_by_count,
                String url,
                String pdf_url,
                Instant created_at

) {
        public record Add(
                        String book_id,
                        String title,
                        String authors,
                        Integer publication_year,
                        Integer cited_by_count,
                        String url,
                        String pdf_url) {
        }

        public record Delete(
                        Long id,
                        String book_id) {
        }
}
