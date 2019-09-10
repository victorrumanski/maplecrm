import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { User, UserService } from '@app/_core';
import { Observable } from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<Observable<User>>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = route.paramMap.get('id');
    return this.userService.findById(+id)
  }

}