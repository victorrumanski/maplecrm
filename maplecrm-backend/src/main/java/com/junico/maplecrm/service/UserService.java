package com.junico.maplecrm.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.junico.maplecrm.exception.BadRequestException;
import com.junico.maplecrm.exception.ResourceNotFoundException;
import com.junico.maplecrm.model.sales.Customer;
import com.junico.maplecrm.model.users.Role;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.model.users.UserRole;
import com.junico.maplecrm.repository.RoleRepository;
import com.junico.maplecrm.repository.UserRoleRepository;
import com.junico.maplecrm.repository.customer.CustomerRepository;
import com.junico.maplecrm.repository.user.UserRepository;
import com.junico.maplecrm.security.UserPrincipal;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private UserRoleRepository userRoleRepo;

	@Autowired
	private CustomerRepository customerRepo;

	public User create(User user) {
		Optional<Role> defaultRole = roleRepo.findById(Role.DEFAULT);
		user = userRepo.save(user);
		UserRole userRole = new UserRole();
		userRole.setRole(defaultRole.get());
		userRole.setUser(user);
		userRole = userRoleRepo.save(userRole);
		user.setUserRoles(Arrays.asList(userRole));
		return user;
	}

	public User update(User user) {
		User u = userRepo.findById(user.getId()).get();
		u.setName(user.getName());
		u.setImageUrl(user.getImageUrl());
		return userRepo.save(u);
	}

	@PreAuthorize("hasRole('" + Role.ADMIN + "')")
	public void addRole(Long userId, String roleId) {
		if (userId == null || roleId == null)
			throw new BadRequestException("User and Role are required.");

		User user = userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

		Role role = roleRepo.findById(roleId)
				.orElseThrow(() -> new ResourceNotFoundException("Role", "name", roleId));

		UserRole exists = userRoleRepo.findByUserAndRole(user, role);
		if (exists != null) {
			// do nothing
			return;
		}

		UserRole newUserRole = new UserRole();
		newUserRole.setUser(user);
		newUserRole.setRole(role);
		userRoleRepo.save(newUserRole);
	}

	@PreAuthorize("hasRole('" + Role.ADMIN + "')")
	public void removeRole(Long userId, String roleId) {

		User user = userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

		Role role = roleRepo.findById(roleId)
				.orElseThrow(() -> new ResourceNotFoundException("Role", "name", roleId));

		UserRole exists = userRoleRepo.findByUserAndRole(user, role);
		if (exists == null) {
			// do nothing
			return;
		}

		userRoleRepo.delete(exists);
	}

	public User getCurrentUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		return userPrincipal.getRef();
	}

	public void delete(Long id) {
		User x = userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "id", id));

		List<Customer> customers = customerRepo.findByCreatedBy(x);

		if (!customers.isEmpty())
			throw new BadRequestException("This User has " + customers.size() + " customers and cannot be deleted");

		x.getUserRoles().forEach(ur -> {
			userRoleRepo.delete(ur);
		});

		userRepo.delete(x);
	}

}
