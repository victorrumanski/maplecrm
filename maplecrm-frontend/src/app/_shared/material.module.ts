import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [MatDatepickerModule],
})

export class MaterialModule { }