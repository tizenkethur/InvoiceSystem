import { UserLoginViewModel } from '../../../shared/models/view/UserLoginViewModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { UserLoginRequestViewModel } from 'src/app/shared/models/view/UserLoginRequestViewModel';
import { UserRegistrationRequestViewModel } from 'src/app/shared/models/view/UserRegistrationRequestViewModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usernameSubject = new BehaviorSubject<string>(this.getUsername());
  usernameObservable$ = this.usernameSubject.asObservable();

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
    localStorage.setItem('username', username);
  }

  getRoleTypeId(): string {
    return localStorage.getItem('roleTypeId') as string;
  }

  setRoleTypeId(roleTypeId: number): void {
    localStorage.setItem('roleTypeId', roleTypeId.toString());
  }

  checkIfUsernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${environment.apiUrl}/user/checkUsername/${username}`
    );
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
          this.setToken(response.token),
            this.setUsername(response.username),
            this.setRoleTypeId(response.roleTypeId);
          this.router.navigate(['/main']);
        }),
        catchError(() => of(null))
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
