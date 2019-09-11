
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

export interface ApiResponse {
  message: string;
  success: boolean;
}