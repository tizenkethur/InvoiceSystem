import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';
import { AuthService } from './../../core/services/AuthService/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private authService: AuthService) {}
}
