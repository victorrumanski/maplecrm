package com.junico.maplecrm.repository.user;

import java.util.List;

import com.junico.maplecrm.model.users.User;

public interface UserRepositoryCustom {

	public List<User> search(String filter);

}
