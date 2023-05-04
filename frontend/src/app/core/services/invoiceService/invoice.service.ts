import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceRequestViewModel } from 'src/app/shared/models/view/InvoiceRequestViewModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  createInvoice(invoiceData: InvoiceRequestViewModel) {
    return this.http.post(`${environment.apiUrl}/invoice/create`, invoiceData);
  }
}
