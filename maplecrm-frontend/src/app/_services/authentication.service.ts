import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/_models';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '@app/_constants';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private ITEM_KEY = 'currentUser';
  private rootPath = `${environment.API_BASE_URL}/auth`;
  public OAuthURLS = {
    google: GOOGLE_AUTH_URL,
    facebook: FACEBOOK_AUTH_URL,
    github: GITHUB_AUTH_URL,
  }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient
    //  , private userService: UserService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.ITEM_KEY)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string, user: User }>(`${this.rootPath}/login`, { email, password })
      .pipe(map(auth => {
        // login successful if there's a jwt token in the response
        if (auth.token && auth.user) {
          auth.user.token = auth.token;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.ITEM_KEY, JSON.stringify(auth.user));
          //call next on observable so listeners can react
          this.currentUserSubject.next(auth.user);
        }
        return auth.user;
      }));
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<{ success: boolean, message: string }>(`${this.rootPath}/signup`, { name, email, password })
  }


  //this is when oauth went ok and a token was generated
  processOAuth2LoginResult(token: string) {
    //beacuse we still do not have the localstorage user key, I need to manually set the auth header
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${environment.API_BASE_URL}/user/me`, { headers })
      .pipe(tap(user => {
        user.token = token;
        localStorage.setItem(this.ITEM_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.ITEM_KEY);
    this.currentUserSubject.next(null);
  }
}