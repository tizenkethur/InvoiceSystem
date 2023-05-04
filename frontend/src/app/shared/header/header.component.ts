import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/AuthService/auth-service.service';
import { RoleType } from '../models/enums/RoleTypeEnum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  usernameObservable$ = this.authService.usernameObservable$;
  lastLoginDateObservable$ = this.authService.lastLoginDateObservable$;

  roleTypeIdSubscription: Subscription;
  currentRole: string;
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnInit() {
    this.roleTypeIdSubscription = this.authService.roleTypeId$.subscribe(
      (x) => (this.currentRole = RoleType[x])
    );
  }
}
