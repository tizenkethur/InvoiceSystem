import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/userService/user.service';
import { RoleType } from 'src/app/shared/models/enums/RoleTypeEnum';
import { UserViewModel } from 'src/app/shared/models/view/UserViewModel';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  userList: UserViewModel[];
  roleTypes = [RoleType[1], RoleType[2], RoleType[3]];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((list) => {
      this.userList = list.userList;
    });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe();
  }
}
