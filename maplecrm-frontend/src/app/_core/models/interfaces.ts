export interface Account {
  monthlySalesGoal,
  quarterlySalesGoal,
  monthlyCustomersGoal,
  quarterlyCustomersGoal,
  monthlySalesCurrent,
  quarterlySalesCurrent,
  monthlyCustomersCurrent,
  quarterlyCustomersCurrent: number;
}

export interface Customer {
  name:string, 
  birthdate:Date

}