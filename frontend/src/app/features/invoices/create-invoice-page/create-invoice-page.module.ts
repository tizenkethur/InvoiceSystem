import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateInvoicePageComponent } from './create-invoice-page.component';
import { CreateInvoicePageRoutingModule } from './create-invoice-page-routing.module';

@NgModule({
  declarations: [CreateInvoicePageComponent],
  imports: [CommonModule, CreateInvoicePageRoutingModule, SharedModule],
})
export class CreateInvoicePageModule {}
