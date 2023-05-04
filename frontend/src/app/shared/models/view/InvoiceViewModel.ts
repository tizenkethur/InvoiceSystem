export interface InvoiceViewModel {
  id: number;
  userId: number;
  name: string;
  dateOfIssue: Date;
  dueDate: Date;
  item: string;
  price: string;
}
