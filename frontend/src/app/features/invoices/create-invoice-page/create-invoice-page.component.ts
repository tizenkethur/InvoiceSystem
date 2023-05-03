import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-invoice-page',
  templateUrl: './create-invoice-page.component.html',
  styleUrls: ['./create-invoice-page.component.scss'],
})
export class CreateInvoicePageComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    dateOfIssue: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    item: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get dateOfIssue(): AbstractControl {
    return this.form.get('dateOfIssue');
  }

  get dueDate(): AbstractControl {
    return this.form.get('dueDate');
  }

  get item(): AbstractControl {
    return this.form.get('item');
  }

  get description(): AbstractControl {
    return this.form.get('description');
  }

  get price(): AbstractControl {
    return this.form.get('price');
  }
}
