package com.junico.maplecrm.repository.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.junico.maplecrm.model.sales.Customer;
import com.junico.maplecrm.model.sales.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>, OrderRepositoryCustom {

	List<Order> findByCustomer(Customer customer);

}
