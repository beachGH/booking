import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { DialogSigninAndSignupComponent } from './dialog-signin-and-signup/dialog-signin-and-signup.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent},
  { path: 'login', component: DialogSigninAndSignupComponent},
  { path: 'home', component: PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
