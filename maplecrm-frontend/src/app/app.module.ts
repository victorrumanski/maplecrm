import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { CoreModule } from './_core';
import { SharedModule } from './_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit() {

  }
}
