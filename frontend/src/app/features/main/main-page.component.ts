import { AuthService } from './../../core/services/AuthService/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  roleTypeIdObservable$ = this.authService.roleTypeIdObservable$;
  currentRoleTypeId: number;

  ngOnInit() {
    this.roleTypeIdObservable$.subscribe((response) => {
      this.currentRoleTypeId = parseInt(response);
    });
  }
  constructor(private authService: AuthService) {}
}
