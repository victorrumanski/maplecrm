import { NgModule } from '@angular/core';
import { SharedModule } from '@app/_shared/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserEditContainer } from './user-edit/user-edit.container';
import { UserListComponent } from './user-list/user-list.component';
import { UserListContainer } from './user-list/user-list.container';
import { UserRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserEditComponent,
    UserEditContainer,
    UserListComponent,
    UserListContainer
  ],
  imports: [
    SharedModule, UserRoutingModule
  ]
})
export class UsersModule { }
