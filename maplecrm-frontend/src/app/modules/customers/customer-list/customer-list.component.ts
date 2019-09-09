import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '@app/_core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  @Input() public customers: [Customer];

  @Output() public filtered: EventEmitter<string> = new EventEmitter();
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate(id){
    this.router.navigate([id])
  }

}
