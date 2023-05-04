import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  usernameObservable$ = this.authService.usernameObservable$;
  lastLoginDateObservable$ = this.authService.lastLoginDateObservable$;
  roleTypeIdObservable$ = this.authService.roleObservable$;
  location = window.location.toString();

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
