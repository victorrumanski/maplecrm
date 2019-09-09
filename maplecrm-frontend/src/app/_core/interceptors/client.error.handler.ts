import { ErrorHandler, Injectable } from '@angular/core';
import { NotificationService } from '../services';

@Injectable()
export class ClientErrorHandler implements ErrorHandler {

  constructor(
    private notificationService: NotificationService
  ) { }

  handleError(error: any) {
    console.log('ClientErrorHandler', error)
    this.notificationService.showError(error);
  }
}