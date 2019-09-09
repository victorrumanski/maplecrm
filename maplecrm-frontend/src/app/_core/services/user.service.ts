import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable()
export class UserService {

  private rootPath = `${environment.API_BASE_URL}/user`;

  constructor(private http: HttpClient) { }

}