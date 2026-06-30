package com.elibrary.backend.authentication;

import org.springframework.data.jpa.repository.JpaRepository;
public interface AuthRespository extends JpaRepository<UsersModal, Long> {

    boolean existsByEmail (String email);
    
}
