package com.junico.maplecrm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.junico.maplecrm.exception.ResourceNotFoundException;
import com.junico.maplecrm.model.users.Role;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.payload.ApiResponse;
import com.junico.maplecrm.repository.RoleRepository;
import com.junico.maplecrm.repository.user.UserRepository;
import com.junico.maplecrm.service.UserService;

@RestController
@RequestMapping("/users")
@PreAuthorize("hasRole('" + Role.ADMIN + "')")
public class UserController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private UserService userService;

	@GetMapping("/roles")
	public List<Role> getAllRoles() {
		return roleRepo.findAllByOrderByNameDesc();
	}

	@PostMapping("/{userId}/roles")
	public ApiResponse addRole(@PathVariable Long userId, @RequestBody Role role) {
		userService.addRole(userId, role.name);
		return new ApiResponse(true, "Role Added Successfully!");
	}

	@DeleteMapping("/{userId}/roles")
	public ApiResponse removeRole(@PathVariable Long userId, @RequestBody Role role) {
		userService.removeRole(userId, role.name);
		return new ApiResponse(true, "Role Removed Successfully!");
	}

	@GetMapping
	public List<User> search(@RequestParam("filter") String filter) {
		return userRepo.search(filter);
	}

	@GetMapping("/{id}")
	public User findById(@PathVariable Long id) {
		return userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", id));
	}

	@PutMapping("/{id}")
	public User update(@PathVariable(value = "id") Long id, @RequestBody User user) {
		user.setId(id);
		return userService.update(user);
	}

}
