package com.junico.maplecrm.repository.order;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import com.junico.maplecrm.model.sales.Customer;
import com.junico.maplecrm.model.sales.Order;
import com.junico.maplecrm.model.sales.Order.OrderStatus;
import com.junico.maplecrm.payload.AccountOverview;

public class OrderRepositoryImpl implements OrderRepositoryCustom {

	@Autowired
	private NamedParameterJdbcTemplate jdbc;

	@Override
	public List<Order> getLastOrders(Long userId, int max) {
		String sql = "select \n" +
				"	o.id, \n" +
				"	o.created_at,\n" +
				"	o.status,\n" +
				"	c.id customer_id,\n" +
				"	c.name customer_name,\n" +
				"	c.createdAt customersince,\n" +
				"	count(1) items,\n" +
				"	sum(i.price*i.quantity) total\n" +
				" from orders o \n" +
				" join customer c on o.customer_id=c.id \n" +
				" join orderitem i on i.order_id=o.id \n" +
				" where o.createdby_id = " + userId + "\n" +
				" group by o.id, c.id \n" +
				" order by o.created_at desc \n" +
				" limit " + max;
		MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
		return jdbc.query(
				sql,
				mapSqlParameterSource,
				(rs, rowNum) -> {
					int idx = 1;
					Order o = new Order();
					o.setId(rs.getLong(idx++));
					o.setCreatedAt(rs.getDate(idx++));
					o.setStatus(OrderStatus.parse(rs.getString(idx++)));
					Customer customer = new Customer();
					customer.setId(rs.getLong(idx++));
					customer.setName(rs.getString(idx++));
					customer.setCreatedAt(rs.getDate(idx++));
					o.setCustomer(customer);
					o.setItemcount(rs.getObject(idx++));
					o.setTotal(rs.getObject(idx++));
					return o;
				});
	}

	@Override
	public AccountOverview getCurrentAccountOverview(Long userId) {
		AccountOverview aco = new AccountOverview();
		Map<String, Object> vals = getAccountSummary(userId, " now() - interval '1 month' and now() ");
		aco.setMonthlyCustomersCurrent(vals.get("customers"));
		aco.setMonthlySalesCurrent(vals.get("total"));

		vals = getAccountSummary(userId, " now() - interval '3 month' and now() ");
		aco.setQuarterlyCustomersCurrent(vals.get("customers"));
		aco.setQuarterlySalesCurrent(vals.get("total"));
		return aco;
	}

	private Map<String, Object> getAccountSummary(Long userId, String period) {
		String sql = "select \n" +
				" round(coalesce(count(distinct c.id),0),0) customers,\n" +
				" round(coalesce(sum(i.price*i.quantity),0),0) total\n" +
				" from orders o \n" +
				" join customer c on o.customer_id=c.id \n" +
				" join orderitem i on i.order_id=o.id \n" +
				" where o.createdby_id = " + userId + " and o.created_at between " + period;
		MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
		return jdbc.queryForMap(sql, mapSqlParameterSource);
	}

}
