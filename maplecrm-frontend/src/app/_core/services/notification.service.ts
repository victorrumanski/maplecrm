import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {

  private config = new MatSnackBarConfig();
  constructor(
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) {
    this.config.verticalPosition = 'bottom';
    this.config.horizontalPosition = 'center';
    this.config.duration = 2000;
    this.config.panelClass = undefined;
  }

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(
        message, 'X', { ...this.config, panelClass: ['success-msg'] }
      );
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(
        message, 'X', { ...this.config, panelClass: ['error-msg'], duration: 4000 }
      );
    });
  }
}