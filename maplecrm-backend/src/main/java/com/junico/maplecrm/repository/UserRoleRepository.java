package com.junico.maplecrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junico.maplecrm.model.users.Role;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.model.users.UserRole;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {

	public UserRole findByUserAndRole(User user, Role role);
}
