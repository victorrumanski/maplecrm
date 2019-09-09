package com.junico.maplecrm.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.junico.maplecrm.exception.BadRequestException;
import com.junico.maplecrm.exception.ResourceNotFoundException;
import com.junico.maplecrm.model.sales.Customer;
import com.junico.maplecrm.model.sales.Order;
import com.junico.maplecrm.repository.customer.CustomerRepository;
import com.junico.maplecrm.repository.order.OrderRepository;

@Service
public class CustomerService {

	@Autowired
	private UserService userService;

	@Autowired
	private CustomerRepository customerRepo;

	@Autowired
	private OrderRepository orderRepo;

	public Customer create(Customer customer) {
		customer.setCreatedBy(userService.getCurrentUser());
		customer.setCreatedAt(new Date());
		return customerRepo.save(customer);
	}

	public void delete(Long id) {
		Customer c = customerRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "id", id));

		List<Order> orders = orderRepo.findByCustomer(c);
		if (!orders.isEmpty())
			throw new BadRequestException("This Customer has " + orders.size() + " orders and cannot be deleted");

		customerRepo.delete(c);
	}

}
