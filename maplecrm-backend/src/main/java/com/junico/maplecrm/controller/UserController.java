package com.junico.maplecrm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.junico.maplecrm.exception.ResourceNotFoundException;
import com.junico.maplecrm.model.users.Role;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.model.users.UserRole;
import com.junico.maplecrm.payload.ApiResponse;
import com.junico.maplecrm.repository.RoleRepository;
import com.junico.maplecrm.repository.UserRepository;
import com.junico.maplecrm.repository.UserRoleRepository;
import com.junico.maplecrm.security.UserPrincipal;
import com.junico.maplecrm.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRoleRepository userRoleRepository;

	@Autowired
	private UserService userService;

	@GetMapping("/user/me")
	@PreAuthorize("hasRole('" + Role.DEFAULT + "')")
	public User getCurrentUser(@AuthenticationPrincipal Authentication authentication) {
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		return userRepository.findById(userPrincipal.getId())
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
	}

	@PostMapping("/user/{userId}/roles")
	public ApiResponse addRole(Long userId, String roleId) {

		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

		Role role = roleRepository.findById(roleId)
				.orElseThrow(() -> new ResourceNotFoundException("Role", "name", roleId));

		userService.addRole(user, role);

		return new ApiResponse(true, "Role Added Successfully!");
	}

	@DeleteMapping("/user/{userId}/roles")
	public ApiResponse removeRole(Long userRoleId) {

		UserRole ur = userRoleRepository.findById(userRoleId)
				.orElseThrow(() -> new ResourceNotFoundException("UserRole", "id", userRoleId));

		userService.removeRole(ur);

		return new ApiResponse(true, "Role Removed Successfully!");
	}
}
