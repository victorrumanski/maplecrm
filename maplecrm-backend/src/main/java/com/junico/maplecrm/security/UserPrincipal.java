package com.junico.maplecrm.security;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.junico.maplecrm.model.users.User;

public class UserPrincipal implements OAuth2User, UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String email;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	private Map<String, Object> attributes;
	private User ref;

	public UserPrincipal(Long id, String email, String password, Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}

	public static UserPrincipal create(User user) {
		List<GrantedAuthority> roles = user.getUserRoles().stream()
				.map(userRole -> new SimpleGrantedAuthority("ROLE_" + userRole.getRole().getName()))
				.collect(Collectors.toList());

		UserPrincipal up = new UserPrincipal(
				user.getId(),
				user.getEmail(),
				user.getPassword(),
				roles);
		up.ref = user;
		return up;
	}

	public static UserPrincipal create(User user, Map<String, Object> attributes) {
		UserPrincipal userPrincipal = UserPrincipal.create(user);
		userPrincipal.setAttributes(attributes);
		return userPrincipal;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public Map<String, Object> getAttributes() {
		return attributes;
	}

	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}

	@Override
	public String getName() {
		return String.valueOf(id);
	}

	@Override
	public String toString() {
		return "UserPrincipal [id=" + id + ", email=" + email + ", authorities=" + authorities + "]";
	}

	public User getRef() {
		return ref;
	}

	public void setRef(User ref) {
		this.ref = ref;
	}

}
