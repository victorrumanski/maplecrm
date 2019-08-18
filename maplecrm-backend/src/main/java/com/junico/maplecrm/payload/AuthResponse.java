package com.junico.maplecrm.payload;

import com.junico.maplecrm.model.users.User;

public class AuthResponse {

	private String token;
	private User user;

	public AuthResponse(String token, User user) {
		super();
		this.token = token;
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
