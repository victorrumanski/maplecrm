package com.junico.maplecrm.repository.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import com.junico.maplecrm.model.sales.Customer;
import com.nimbusds.oauth2.sdk.util.StringUtils;

public class CustomerRepositoryImpl implements CustomerRepositoryCustom {

	@Autowired
	private NamedParameterJdbcTemplate jdbc;

	@Override
	public List<Customer> search(String filter, Long userId) {
		String filterParam = StringUtils.isBlank(filter) ? "" : " and c.name ilike :name ";
		String sql = "select \n" +
				"	c.id customer_id,\n" +
				"	c.name customer_name,\n" +
				"	c.createdat createdat,\n" +
				"	c.city ,\n" +
				"	c.state,\n" +
				"	count(1) orders,\n" +
				"	sum(i.price*i.quantity) total\n" +
				" from customer c \n" +
				" left outer join orders o on o.customer_id=c.id \n" +
				" left outer join orderitem i on i.order_id=o.id \n" +
				" where c.createdby_id = " + userId + "\n" +
				filterParam +
				" group by c.id \n" +
				" order by c.name \n";
		MapSqlParameterSource mapSqlParameterSource = new MapSqlParameterSource();
		mapSqlParameterSource.addValue("name", "%" + filter + "%");
		return jdbc.query(
				sql,
				mapSqlParameterSource,
				(rs, rowNum) -> {
					int idx = 1;
					Customer customer = new Customer();
					customer.setId(rs.getLong(idx++));
					customer.setName(rs.getString(idx++));
					customer.setCreatedAt(rs.getDate(idx++));
					customer.setCity(rs.getString(idx++));
					customer.setState(rs.getString(idx++));
					customer.setOrdercount(rs.getObject(idx++));
					customer.setTotal(rs.getObject(idx++));
					return customer;
				});
	}

}
