package com.elibrary.backend.bookmark;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.elibrary.backend.authentication.AuthRespository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
class BookmarkService {

        private final BookmarkRepository bookmarkRepository;
        private final AuthRespository authRespository;

        public List<BookmarkDto> get() {
                return bookmarkRepository
                                .findAllByUserEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                                .stream()
                                .map(b -> new BookmarkDto(b.getId(), b.getBookId(), b.getTitle(), b.getAuthors(),
                                                b.getPublicationYear(), b.getCitedByCount(), b.getUrl(),
                                                b.getPdfUrl(), b.getCreatedAt()))
                                .toList();
        }

        public BookmarkDto add(BookmarkDto.Add entity) {
                var user = authRespository
                                .findByEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                                .orElseThrow(() -> new IllegalArgumentException("User not found"));

                if (bookmarkRepository.existsByBookIdAndTitleAndUserId(entity.book_id(), entity.title(),
                                user.getId())) {
                        throw new IllegalArgumentException("Bookmark already exists");
                }

                var result = bookmarkRepository.save(BookmarkModel.builder()
                                .user(user)
                                .bookId(entity.book_id())
                                .title(entity.title())
                                .authors(entity.authors())
                                .publicationYear(entity.publication_year())
                                .citedByCount(entity.cited_by_count())
                                .url(entity.url())
                                .pdfUrl(entity.pdf_url())
                                .build());

                return new BookmarkDto(
                                result.getId(),
                                result.getBookId(),
                                result.getTitle(),
                                result.getAuthors(),
                                result.getPublicationYear(),
                                result.getCitedByCount(),
                                result.getUrl(),
                                result.getPdfUrl(),
                                result.getCreatedAt());
        }

        public void delete(BookmarkDto.Delete entity) {
                var user = authRespository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName())
                                .orElseThrow(() -> new IllegalArgumentException("User not found"));

                if (!bookmarkRepository.existsByBookIdAndIdAndUserId(entity.book_id(), entity.id(),
                                user.getId())) {
                        throw new IllegalArgumentException("Bookmark not found");
                }

                bookmarkRepository.deleteByBookIdAndIdAndUserId(entity.book_id(), entity.id(),
                                user.getId());
        }

}
