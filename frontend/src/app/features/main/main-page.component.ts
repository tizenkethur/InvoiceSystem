import { Subscription } from 'rxjs';
import { AuthService } from './../../core/services/AuthService/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  roleTypeIdSubscription: Subscription;
  currentRole: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.roleTypeIdSubscription = this.authService.roleTypeId$.subscribe(
      (x) => (this.currentRole = RoleType[x])
    );
    console.log(this.currentRole);
  }
}
