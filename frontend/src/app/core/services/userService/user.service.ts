import { Injectable } from '@angular/core';
import { AuthService } from '../authService/auth-service.service';
import { Observable } from 'rxjs';
import { UserListViewModel } from 'src/app/shared/models/view/UserListViewModel';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<UserListViewModel> {
    return this.http.get<UserListViewModel>(
      `${environment.apiUrl}/user/userList`
    );
  }

  deleteUser(userId: number): Observable<number> {
    return this.http.delete<number>(
      `${environment.apiUrl}/user/deleteUser/${userId}`
    );
  }
}
