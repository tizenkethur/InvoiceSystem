import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { InvoiceService } from 'src/app/core/services/invoiceService/invoice.service';

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

  // constructor(private invoiceService: InvoiceService) {}

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

  // createInvoice(): void {
  //   if (this.form.valid) {
  //     this.invoiceService.createInvoice(this.form.getRawValue()).subscribe();
  //   }
  // }
}
