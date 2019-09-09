import { NgModule } from '@angular/core';
import { SharedModule } from '@app/_shared/shared.module';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerEditContainer } from './customer-edit/customer-edit.container';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerListContainer } from './customer-list/customer.list.container';
import { CustomerRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomerListContainer,
    CustomerListComponent,
    CustomerEditContainer,
    CustomerEditComponent
  ],
  imports: [
    SharedModule, CustomerRoutingModule
  ]
})
export class CustomersModule { }
