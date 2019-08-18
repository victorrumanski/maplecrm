package com.junico.maplecrm.model.sales;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;

	private String name;

	private Date birthdate;

	private String description;

	private String gender;

	private String email;

	private String phone;

	private String address;

	private String city;

	private String state;
}
