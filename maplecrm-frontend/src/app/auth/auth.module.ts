import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [TermsComponent, RegisterComponent, ForgotComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
