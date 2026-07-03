package com.elibrary.backend.bookmark;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarkRepository extends JpaRepository<BookmarkModel, Long> {
    List<BookmarkModel> findAllByUserEmail(String email);

    boolean existsByBookIdAndTitleAndUserId(String bookId, String title, Long userId);
}
