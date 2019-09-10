import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable()
export class UserService {

  private rootPath = `${environment.API_BASE_URL}/user`;

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.rootPath}/${id}`);
  }

  findAll(text): Observable<[User]> {
    return this.http.get<[User]>(`${this.rootPath}?filter=${text}`)
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.rootPath}`, user);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.rootPath}/${id}`, user);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.rootPath}/${id}`);
  }

}