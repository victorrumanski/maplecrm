import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { ErrorInterceptor, JwtHttpInterceptor } from './interceptors';
import { AuthService, DashboardService, UserService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
    AuthGuard,
    UserService,
    AuthService,
    DashboardService
  ],
  declarations: []
})
export class CoreModule { }
