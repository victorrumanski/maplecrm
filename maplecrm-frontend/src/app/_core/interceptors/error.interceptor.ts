import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@app/_core/services';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401].indexOf(err.status) !== -1) {
                if (!request.url.search('auth')) {
                    // auto logout if 401 Unauthorized response returned from api
                    this.authenticationService.logout();
                    location.reload(true);
                }
            }
            console.log('ErrorInterceptor', err)
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}