package com.junico.maplecrm.controller;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.junico.maplecrm.exception.ResourceNotFoundException;
import com.junico.maplecrm.model.sales.Customer;
import com.junico.maplecrm.model.users.User;
import com.junico.maplecrm.repository.customer.CustomerRepository;
import com.junico.maplecrm.service.CustomerService;
import com.junico.maplecrm.service.UserService;

@RestController
@RequestMapping(path = "customers", produces = "application/json")
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepo;

	@Autowired
	private UserService userService;

	@Autowired
	private CustomerService customerService;

	@GetMapping
	public List<Customer> search(@RequestParam("filter") String filter) {
		User currentUser = userService.getCurrentUser();
		return customerRepo.search(filter, currentUser.getId());
	}

	@GetMapping("/{id}")
	public Customer findById(@PathVariable Long id) {
		return customerRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "id", id));
	}

	@PostMapping
	public Customer create(@Valid @RequestBody Customer customer) {
		customer.setCreatedBy(userService.getCurrentUser());
		customer.setCreatedAt(new Date());
		return customerRepo.save(customer);
	}

	@PutMapping("/{id}")
	public Customer update(@PathVariable(value = "id") Long customerId, @Valid @RequestBody Customer customer) {
		customer.setId(customerId);
		customer.setCreatedBy(userService.getCurrentUser());
		customer.setCreatedAt(new Date());
		return customerRepo.save(customer);
	}

	@DeleteMapping("/{id}")
	@ResponseBody
	public void delete(@PathVariable(value = "id") Long id) {
		customerService.delete(id);
	}

}
