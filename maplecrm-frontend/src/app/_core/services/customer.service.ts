import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../models';

@Injectable()
export class CustomerService {

  private rootPath = `${environment.API_BASE_URL}/customers`;

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.rootPath}/${id}`);
  }

  findAll(text): Observable<[Customer]> {
    return this.http.get<[Customer]>(`${this.rootPath}?filter=${text}`)
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.rootPath}`, customer);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.rootPath}/${id}`, customer);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.rootPath}/${id}`);
  }

}