package com.junico.maplecrm.repository.order;

import java.util.List;

import com.junico.maplecrm.model.sales.Order;
import com.junico.maplecrm.payload.AccountOverview;

public interface OrderRepositoryCustom {

	public List<Order> getLastOrders(Long userId, int max);

	public AccountOverview getCurrentAccountOverview(Long userId);

}
