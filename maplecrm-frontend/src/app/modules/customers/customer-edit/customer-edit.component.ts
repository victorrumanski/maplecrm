import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '@app/_core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerEditComponent implements OnInit {

  @Input() public customer: Customer;
  @Input() public error: string;

  @Output() public submitted: EventEmitter<Customer> = new EventEmitter();
  @Output() public canceled: EventEmitter<string> = new EventEmitter();
  @Output() public deleted: EventEmitter<string> = new EventEmitter();

  private angForm: FormGroup;

  private states = [
    { name: 'Alberta', code: 'AB' },
    { name: 'British Columbia', code: 'BC' },
    { name: 'Manitoba', code: 'MB' },
    { name: 'New Brunswick', code: 'NB' },
    { name: 'Newfoundland and Labrador', code: 'NL' },
    { name: 'Nova Scotia', code: 'NS' },
    { name: 'Ontario', code: 'ON' },
    { name: 'Prince Edward Island', code: 'PE' },
    { name: 'Quebec', code: 'QC' },
    { name: 'Saskatchewan', code: 'SK' },
  ];

  private genders = [
    { name: 'Male', code: 'M' },
    { name: 'Female', code: 'F' }
  ]

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: [this.customer.name, Validators.required],
      state: [this.customer.state, Validators.required],
      description: [this.customer.description],
      gender: [this.customer.gender],
      phone: [this.customer.phone],
      email: [this.customer.email],
      city: [this.customer.city],
      address: [this.customer.address],
      birthdate: [!this.customer.id ? null : new Date(this.customer.birthdate)]
    })
  }

  onSubmit() {
    if (this.angForm.invalid)
      return;
    this.submitted.next(this.angForm.value);
  }

  confirmDelete(){
    if(confirm("Are you sure to delete?")) {
      this.deleted.emit('');
    }
  }

}
