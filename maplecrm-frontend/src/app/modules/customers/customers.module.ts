import { NgModule } from '@angular/core';
import { SharedModule } from '@app/_shared/shared.module';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent
  ],
  imports: [
    SharedModule, CustomerRoutingModule
  ]
})
export class CustomersModule { }
