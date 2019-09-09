package com.junico.maplecrm.service;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.junico.maplecrm.model.users.Role;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.model.users.UserRole;
import com.junico.maplecrm.repository.RoleRepository;
import com.junico.maplecrm.repository.UserRepository;
import com.junico.maplecrm.repository.UserRoleRepository;
import com.junico.maplecrm.security.UserPrincipal;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRoleRepository userRoleRepository;

	public User create(User user) {
		Optional<Role> defaultRole = roleRepository.findById(Role.DEFAULT);
		user = userRepository.save(user);
		UserRole userRole = new UserRole();
		userRole.setRole(defaultRole.get());
		userRole.setUser(user);
		userRole = userRoleRepository.save(userRole);
		user.setUserRoles(Arrays.asList(userRole));
		return user;
	}

	@PreAuthorize("hasRole('" + Role.ADMIN + "')")
	public void addRole(User user, Role role) {
		UserRole exists = userRoleRepository.findByUserAndRole(user, role);
		if (exists != null)
			return;

		UserRole newUserRole = new UserRole();
		newUserRole.setUser(user);
		newUserRole.setRole(role);
		userRoleRepository.save(newUserRole);
		return;
	}

	@PreAuthorize("hasRole('" + Role.ADMIN + "')")
	public void removeRole(UserRole userRole) {
		UserRole exists = userRoleRepository.findById(userRole.id).get();
		if (exists != null)
			return;

		userRoleRepository.delete(exists);
		return;
	}

	public User getCurrentUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		return userPrincipal.getRef();
	}

}
