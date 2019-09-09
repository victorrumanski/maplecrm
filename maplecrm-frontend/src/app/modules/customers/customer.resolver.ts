import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Customer } from '@app/_core';
import { CustomerService } from '@app/_core/services/customer.service';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerResolver implements Resolve<Observable<Customer>>{

  constructor(private customerService: CustomerService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Customer> {
    const id = route.paramMap.get('id');
    return this.customerService.findById(+id)
  }

}