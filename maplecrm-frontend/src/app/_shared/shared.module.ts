import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent, MenuComponent, NotFoundComponent } from './components';
import { ForbiddenComponent } from './components/forbidden/forbidde.component';
import { IconsModule } from './icons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    IconsModule
  ],
  declarations: [
    MenuComponent,
    HeaderComponent,
    NotFoundComponent,
    ForbiddenComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    IconsModule,
    MenuComponent,
    HeaderComponent,
    NotFoundComponent,
    ForbiddenComponent
  ]
})
export class SharedModule { }
