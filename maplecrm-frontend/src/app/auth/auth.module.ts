import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuth2RedirectComponent } from './oauth2/oauth2-redirect.component';


@NgModule({
  declarations: [AuthComponent, RegisterComponent, ForgotComponent, LoginComponent, OAuth2RedirectComponent],
  imports: [
    CommonModule, AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
