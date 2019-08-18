import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
  
  private rootPath = `${environment.API_BASE_URL}/user`;

  constructor(private http: HttpClient) { }

  me() {
    return this.http.get<User>(`${this.rootPath}/me`).pipe(map(user => user));
  }
}