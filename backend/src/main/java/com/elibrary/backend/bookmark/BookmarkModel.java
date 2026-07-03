package com.elibrary.backend.bookmark;

import java.time.Instant;

import org.hibernate.annotations.CreationTimestamp;

import com.elibrary.backend.authentication.UsersModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Entity
@Data
@Getter
@Setter
@Builder
@Table(name = "bookmarks")
@AllArgsConstructor
@NoArgsConstructor
public class BookmarkModel {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private UsersModel user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String bookId;

    @Column(nullable = true)
    private String title;

    @Column(nullable = true)
    private String authors;

    @Column(nullable = true)
    private Integer publicationYear;

    @Column(nullable = true)
    private Integer citedByCount;

    @Column(nullable = true)
    private String url;

    @Column(nullable = true)
    private String pdfUrl;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Instant createdAt;
}
