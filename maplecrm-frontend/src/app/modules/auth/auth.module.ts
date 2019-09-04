import { NgModule } from '@angular/core';
import { SharedModule } from '@app/_shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { OAuth2RedirectComponent } from './oauth2/oauth2-redirect.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ForgotComponent,
    LoginComponent,
    OAuth2RedirectComponent
  ],
  imports: [
    SharedModule, AuthRoutingModule
  ]
})
export class AuthModule { }
