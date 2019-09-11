package com.junico.maplecrm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junico.maplecrm.model.users.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {

	List<Role> findAllByOrderByNameDesc();

}
