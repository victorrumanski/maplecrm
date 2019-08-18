package com.junico.maplecrm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.junico.maplecrm.config.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class MapleCRMApplication {

	public static void main(String[] args) {
		
//		String encode = new BCryptPasswordEncoder().encode("saq123");
//		System.out.println(encode);
		
		SpringApplication.run(MapleCRMApplication.class, args);
		
	}
}
