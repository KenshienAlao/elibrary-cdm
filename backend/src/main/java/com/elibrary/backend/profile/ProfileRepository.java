package com.elibrary.backend.profile;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends JpaRepository<ProfileModel, Long> {
    Optional<ProfileModel> findByUserId(Long userId);

    Optional<ProfileModel> findByUserEmail(String email);
}
