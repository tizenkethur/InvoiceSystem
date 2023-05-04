import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/AuthService/auth-service.service';
import { RoleType } from '../models/enums/RoleTypeEnum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  usernameObservable$ = this.authService.usernameObservable$;
  lastLoginDateObservable$ = this.authService.lastLoginDateObservable$;
  roleTypeIdObservable$ = this.authService.roleObservable$;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
