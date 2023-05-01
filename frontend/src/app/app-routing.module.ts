import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
