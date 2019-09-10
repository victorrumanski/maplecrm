import { OnInit, Component } from '@angular/core';
import { UserService, User } from '@app/_core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list-container',
  template: `<app-user-list></app-user-list>`
})
export class UserListContainer implements OnInit {

  public users$: Observable<[User]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.findAll('');
  }
}