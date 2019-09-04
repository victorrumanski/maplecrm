package com.junico.maplecrm.payload;

import java.math.BigDecimal;

public class AccountOverview {

	public Object monthlySalesGoal = BigDecimal.ONE,
			quarterlySalesGoal = BigDecimal.ONE,
			monthlyCustomersGoal = BigDecimal.ONE,
			quarterlyCustomersGoal = BigDecimal.ONE;
	public Object monthlySalesCurrent = BigDecimal.ONE,
			quarterlySalesCurrent = BigDecimal.ONE,
			monthlyCustomersCurrent = BigDecimal.ONE,
			quarterlyCustomersCurrent = BigDecimal.ONE;

	public Object getMonthlySalesGoal() {
		return monthlySalesGoal;
	}

	public void setMonthlySalesGoal(Object monthlySalesGoal) {
		this.monthlySalesGoal = monthlySalesGoal;
	}

	public Object getQuarterlySalesGoal() {
		return quarterlySalesGoal;
	}

	public void setQuarterlySalesGoal(Object quarterlySalesGoal) {
		this.quarterlySalesGoal = quarterlySalesGoal;
	}

	public Object getMonthlyCustomersGoal() {
		return monthlyCustomersGoal;
	}

	public void setMonthlyCustomersGoal(Object monthlyCustomersGoal) {
		this.monthlyCustomersGoal = monthlyCustomersGoal;
	}

	public Object getQuarterlyCustomersGoal() {
		return quarterlyCustomersGoal;
	}

	public void setQuarterlyCustomersGoal(Object quarterlyCustomersGoal) {
		this.quarterlyCustomersGoal = quarterlyCustomersGoal;
	}

	public Object getMonthlySalesCurrent() {
		return monthlySalesCurrent;
	}

	public void setMonthlySalesCurrent(Object monthlySalesCurrent) {
		this.monthlySalesCurrent = monthlySalesCurrent;
	}

	public Object getQuarterlySalesCurrent() {
		return quarterlySalesCurrent;
	}

	public void setQuarterlySalesCurrent(Object quarterlySalesCurrent) {
		this.quarterlySalesCurrent = quarterlySalesCurrent;
	}

	public Object getMonthlyCustomersCurrent() {
		return monthlyCustomersCurrent;
	}

	public void setMonthlyCustomersCurrent(Object monthlyCustomersCurrent) {
		this.monthlyCustomersCurrent = monthlyCustomersCurrent;
	}

	public Object getQuarterlyCustomersCurrent() {
		return quarterlyCustomersCurrent;
	}

	public void setQuarterlyCustomersCurrent(Object quarterlyCustomersCurrent) {
		this.quarterlyCustomersCurrent = quarterlyCustomersCurrent;
	}

}
