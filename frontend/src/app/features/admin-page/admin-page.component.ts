import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  ELEMENT_DATA = [
    { name: 'Hydrogen', 'role': 1.0079, 'deleteButtons': 'H' },
    { name: 'Helium', 'role': 4.0026, 'deleteButtons': 'He' },
    { name: 'Lithium', 'role': 6.941, 'deleteButtons': 'Li' },
  ];
  displayedColumns: string[] = ['name', 'role', 'deleteButtons'];

  dataSource = this.ELEMENT_DATA;
}
