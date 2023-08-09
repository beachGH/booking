import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: DialogLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
