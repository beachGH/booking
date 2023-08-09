import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogLoginAndRegisterComponent } from './dialog-login-and-register/dialog-login-and-register.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent},
  { path: 'login', component: DialogLoginAndRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
