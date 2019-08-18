package com.junico.maplecrm.model.users;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {

	public static final String DEFAULT = "USER";
	public static final String ADMIN = "ADMIN";
	public static final String MANAGER = "MANAGER";

	@Id
	public String name;

	public String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
