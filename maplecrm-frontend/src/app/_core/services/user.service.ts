import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { User, ApiResponse, Role } from '../models';

@Injectable()
export class UserService {

  private rootPath = `${environment.API_BASE_URL}/users`;

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

  addRole(userId: number, roleId: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.rootPath}/${userId}/roles`, { name: roleId });
  }

  removeRole(userId: number, roleId: string): Observable<Object> {
    return this.http.request('delete', `${this.rootPath}/${userId}/roles`, { body: { name: roleId } });

    //return this.http.delete<ApiResponse>, { name: roleId });
  }

  getAllRoles(): Observable<[Role]> {
    return this.http.get<[Role]>(`${this.rootPath}/roles`);
  }

}