import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListPageComponent } from './invoice-list-page.component';

const routes: Routes = [{ path: '', component: InvoiceListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceListPageRoutingModule {}
