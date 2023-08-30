package com.piperseneca.fullstack.repository;

import com.piperseneca.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
