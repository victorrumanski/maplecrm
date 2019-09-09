package com.junico.maplecrm.repository.customer;

import java.util.List;

import com.junico.maplecrm.model.sales.Customer;

public interface CustomerRepositoryCustom {

	public List<Customer> search(String filter, Long userId);

}
