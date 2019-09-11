import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerService, NotificationService } from '@app/_core';

@Component({
  selector: 'app-customer-edit-container',
  template: `
    <app-customer-edit 
      [customer]="customer" 
      (submitted)="submitted($event)"
      (canceled)="canceled($event)"
      (deleted)="deleted($event)"
    ></app-customer-edit>`
})
export class CustomerEditContainer implements OnInit {

  public customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.customer = this.route.snapshot.data['customer'];
    if (!this.customer)
      this.customer = new Customer();
  }

  private home() {
    this.router.navigate(['/customers']);
  }

  canceled(event) {
    this.home();
  }

  deleted(event) {
    this.customerService.delete(this.customer.id)
      .subscribe(
        msg => {
          this.notificationService.showSuccess(`Customer ${this.customer.id} was deleted.`);
          this.home()
        }
      );
  }

  submitted(event) {
    const d = new Date(event.birthdate);
    const date = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    event.birthdate = date;
    if (!this.customer.id) {
      this.customerService.create(event)
        .subscribe(
          newCustomer => {
            this.customer = newCustomer;
            this.notificationService.showSuccess(`Customer ${newCustomer.id} created`)
            this.home();
          }
        );
    } else {
      this.customerService.update(this.customer.id, event)
        .subscribe(
          updatedCustomer => {
            this.customer = updatedCustomer;
            this.notificationService.showSuccess(`Customer ${updatedCustomer.id} updated`)
            this.home();
          }
        );
    }
  }

}
