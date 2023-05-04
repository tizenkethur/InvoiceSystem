import { UserLoginViewModel } from '../../../shared/models/view/UserLoginViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  catchError,
  of,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserRegistrationRequestViewModel } from 'src/app/shared/models/view/UserRegistrationRequestViewModel';
import { UserLoginRequestViewModel } from 'src/app/shared/models/view/UserLoginRequestViewModel';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usernameSubject = new BehaviorSubject<string>(this.getUsername());
  private lastLoginDateSubject = new BehaviorSubject<string>(
    this.getLastLoginDate()
  );
  private roleSubject = new BehaviorSubject<string>('');

  roleObservable$ = this.roleSubject.asObservable();
  usernameObservable$ = this.usernameSubject.asObservable();
  lastLoginDateObservable$ = this.lastLoginDateSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getToken(): string {
    return localStorage.getItem('token') as string;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getUsername(): string {
    return localStorage.getItem('username') as string;
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
    localStorage.setItem('username', username);
  }

  getLastLoginDate(): string {
    return localStorage.getItem('lastLoginDate') as string;
  }

  setLastLoginDate(lastLoginDate: string): void {
    this.lastLoginDateSubject.next(lastLoginDate);
    localStorage.setItem('lastLoginDate', lastLoginDate);
  }

  checkIfUsernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${environment.apiUrl}/user/checkUsername/${username}`
    );
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }

  register(userdata: UserRegistrationRequestViewModel): Observable<void> {
    return this.http
      .post<void>(`${environment.apiUrl}/user/register`, userdata)
      .pipe(
        tap(() => {
          this.router.navigate(['/login']);
        }),
        catchError(() => of(null))
      );
  }

  login(loginData: UserLoginRequestViewModel): Observable<UserLoginViewModel> {
    return this.http
      .post<UserLoginViewModel>(`${environment.apiUrl}/user/login`, loginData)
      .pipe(
        tap((response) => {
          this.setToken(response.token);
          this.setUsername(response.username);
          this.setLastLoginDate(response.lastLoginDate.toString());
          this.roleSubject.next(RoleType[response.roleTypeId]);
          console.log(RoleType[response.roleTypeId]);
          this.router.navigate(['/main']);
        }),
        catchError(() => of(null))
      );
  }

  logout(): void {
    this.clearLocalStorage();
    this.router.navigate(['/login']);
  }
}
