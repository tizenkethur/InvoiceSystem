import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth-service.service';
import { UsernameListViewModel } from 'src/app/shared/models/view/UsernameListViewModel';
import { UsernameViewModel } from 'src/app/shared/models/view/usernameViewModel';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'role', 'deleteButtons'];
  dataSource: string[];

  usernameList: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers().subscribe((list) => {
      this.usernameList = list.usernameList;
    });

    // this.dataSource.push(Object.values(this.usernameList.usernameList));
  }
}
