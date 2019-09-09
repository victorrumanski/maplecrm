import { Component, OnInit } from '@angular/core';
import { Account, DashboardService, Order } from '@app/_core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  public account$: Observable<Account>;
  public orders$: Observable<Order>;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.account$ = this.dashboardService.account();
    this.orders$ = this.dashboardService.lastOrders();
  }

}
