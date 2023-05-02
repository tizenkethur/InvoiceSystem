import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/AuthService/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  usernameObservable$ = this.authService.usernameObservable$;
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
