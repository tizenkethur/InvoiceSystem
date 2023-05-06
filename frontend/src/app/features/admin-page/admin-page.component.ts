import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth-service.service';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';
import { UserListViewModel } from 'src/app/shared/models/view/UserListViewModel';
import { UserViewModel } from 'src/app/shared/models/view/UserViewModel';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  userList: UserViewModel[];
  roleTypes = [RoleType[1], RoleType[2], RoleType[3]];
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers().subscribe((list) => {
      this.userList = list.userList;
    });
  }
}
