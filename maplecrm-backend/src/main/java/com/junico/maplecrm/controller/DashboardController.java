package com.junico.maplecrm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.junico.maplecrm.model.sales.Order;
import com.junico.maplecrm.payload.AccountOverview;
import com.junico.maplecrm.repository.order.OrderRepository;
import com.junico.maplecrm.security.UserPrincipal;

@RestController
@RequestMapping(path = "dashboard", produces = "application/json")
public class DashboardController {

	@Autowired
	private OrderRepository orderRepo;

	@GetMapping("/account")
	public AccountOverview account(@AuthenticationPrincipal Authentication authentication) {
		return orderRepo.getCurrentAccountOverview(((UserPrincipal) authentication.getPrincipal()).getId());
	}

	@GetMapping("/last-orders")
	public List<Order> lastOrders(@AuthenticationPrincipal Authentication authentication) {
		return orderRepo.getLastOrders(((UserPrincipal) authentication.getPrincipal()).getId(), 5);
	}

}
