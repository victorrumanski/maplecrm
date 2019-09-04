import { NgModule } from '@angular/core';
import { SharedModule } from '@app/_shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { LastOrdersComponent } from './last-orders/last-orders.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AccountOverviewComponent,
    LastOrdersComponent
  ],
  imports: [
    SharedModule, 
    ChartsModule, 
    DashboardRoutingModule
  ]
})
export class DashboardModule { }