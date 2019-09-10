import { Component, OnDestroy, OnInit } from '@angular/core';
import { Customer, CustomerService } from '@app/_core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-list-container',
  template: `
  <app-customer-list
    [customers]="customers"
    (filtered)="filter($event)"
  ></app-customer-list>
  `
})
export class CustomerListContainer implements OnInit, OnDestroy {

  customers: [Customer];
  filter$ = new Subject<string>();
  subscription: Subscription = new Subscription();

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.filter$.pipe(
        //debounceTime(300),
        distinctUntilChanged(),
        switchMap(text => this.customerService.findAll(text))
      ).subscribe(
        results => this.customers = results
      )
    )
    this.filter$.next('')
  }

  filter(text) {
    this.filter$.next(text);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}