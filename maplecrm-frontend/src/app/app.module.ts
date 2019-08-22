import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './_components/not-found.component';
import { ErrorInterceptor } from './_services/error.interceptor';
import { JwtHttpInterceptor } from './_services/jwt.interceptor';
import { IconsModule } from './_icons/icons.module';
import { MenuComponent } from './_components/menu/menu.component';
import { HeaderComponent } from './_components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    IconsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit() {

  }
}
