import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AdminsOnlyGuard } from './core/guards/role/adminsOnly.guard';
import { NoUserGuard } from './core/guards/role/noUser.guard';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import(
        '../app/features/authentication/registration/registration.module'
      ).then((m) => m.RegistrationModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/features/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'admin-page',
    canActivate: [AuthGuard, AdminsOnlyGuard],
    loadChildren: () =>
      import('../app/features/admin-page/admin-page.module').then(
        (m) => m.AdminPageModule
      ),
  },
  {
    path: 'create-invoice',
    canActivate: [AuthGuard, NoUserGuard],
    loadChildren: () =>
      import(
        '../app/features/invoices/create-invoice-page/create-invoice-page.module'
      ).then((m) => m.CreateInvoicePageModule),
  },
  {
    path: 'invoice-list',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        '../app/features/invoices/invoice-list-page/invoice-list-page.module'
      ).then((m) => m.InvoiceListPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
