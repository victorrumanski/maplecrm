package com.junico.maplecrm.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.junico.maplecrm.exception.BadRequestException;
import com.junico.maplecrm.model.users.AuthProvider;
import com.junico.maplecrm.model.users.Role;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.payload.ApiResponse;
import com.junico.maplecrm.payload.AuthResponse;
import com.junico.maplecrm.payload.LoginRequest;
import com.junico.maplecrm.payload.SignUpRequest;
import com.junico.maplecrm.repository.user.UserRepository;
import com.junico.maplecrm.security.TokenProvider;
import com.junico.maplecrm.security.UserPrincipal;
import com.junico.maplecrm.service.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private TokenProvider tokenProvider;

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginRequest.getEmail(),
						loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = tokenProvider.createToken(authentication);
		UserPrincipal principal = (UserPrincipal) authentication.getPrincipal();
		User user = userRepository.findById(principal.getId()).get();
		AuthResponse res = new AuthResponse(token, user);
		return ResponseEntity.ok(res);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			throw new BadRequestException("Email address already in use.");
		}

		// Creating user's account
		User user = new User();
		user.setName(signUpRequest.getName());
		user.setEmail(signUpRequest.getEmail());
		user.setPassword(signUpRequest.getPassword());
		user.setProvider(AuthProvider.local);
		user.setPassword(passwordEncoder.encode(user.getPassword()));

		User result = userService.create(user);

		URI location = ServletUriComponentsBuilder
				.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(result.getId()).toUri();

		return ResponseEntity.created(location)
				.body(new ApiResponse(true, "User registered successfully!"));
	}

	@GetMapping("/current")
	@PreAuthorize("hasRole('" + Role.DEFAULT + "')")
	public User getCurrentUser() {
		return userService.getCurrentUser();
	}

}
