package com.junico.maplecrm.repository.customer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junico.maplecrm.model.sales.Customer;
import com.junico.maplecrm.model.users.User;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>, CustomerRepositoryCustom {

	List<Customer> findByCreatedBy(User createdBy);

}
