import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  checkIfUsernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${environment.apiUrl}/user/checkUsername/${username}`
    );
  }
}
