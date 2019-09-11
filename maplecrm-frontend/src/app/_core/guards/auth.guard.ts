import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@app/_core/services';

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
      console.log('user tried to access private route and was not logged in')
      // not logged in, redirect to login page with the return url
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    if (route.data.role && !currentUser.roles.includes(route.data.role)) {
      //route needs specific role and the user does not have it
      this.router.navigate(['/forbidden']);
      return false;
    }
    
    return true;
  }

}