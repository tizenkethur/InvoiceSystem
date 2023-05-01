import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';
import { UserRegistrationRequestViewModel } from 'src/app/shared/models/view/UserRegistrationRequestViewModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

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
}
