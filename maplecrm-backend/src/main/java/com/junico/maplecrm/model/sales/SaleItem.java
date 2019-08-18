package com.junico.maplecrm.model.sales;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SaleItem {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;

	@ManyToOne
	private Product product;

	@ManyToOne
	private Sale sale;

	private BigDecimal quantity;

	private BigDecimal price;

}
