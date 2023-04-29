import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: RegistrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
