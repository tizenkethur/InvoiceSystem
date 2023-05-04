import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceListPageComponent } from './invoice-list-page.component';
import { InvoiceListPageRoutingModule } from './invoice-list-page-routing.module';

@NgModule({
  declarations: [InvoiceListPageComponent],
  imports: [CommonModule, InvoiceListPageRoutingModule, SharedModule],
})
export class InvoiceListPageModule {}
