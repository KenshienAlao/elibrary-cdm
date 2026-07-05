package com.elibrary.backend.bookmark;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BookmarkRepository extends JpaRepository<BookmarkModel, Long> {
    List<BookmarkModel> findAllByUserEmail(String email);

    boolean existsByBookIdAndTitleAndUserId(String bookId, String title, Long userId);

    boolean existsByBookIdAndIdAndUserId(String bookId, Long id, Long userId);

    @Modifying
    @Transactional
    @Query("DELETE FROM BookmarkModel b WHERE b.bookId = :bookId AND b.id = :id AND b.user.id = :userId")
    void deleteByBookIdAndIdAndUserId(String bookId, Long id, Long userId);
}
