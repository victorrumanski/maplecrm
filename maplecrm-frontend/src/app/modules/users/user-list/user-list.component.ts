import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@app/_core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
    .user-pic{ height:40px; border-radius:50%}
  `]
})
export class UserListComponent implements OnInit {
  
  @Input() public users: [User];

  @Output() public filtered: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(id) {
    this.router.navigate([id])
  }

}