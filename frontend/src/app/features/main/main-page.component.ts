import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/authService/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  currentRole = this.authService.currentRole;

  constructor(private authService: AuthService) {}
}
