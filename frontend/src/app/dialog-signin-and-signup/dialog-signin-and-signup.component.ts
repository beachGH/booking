import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-signin-and-signup',
  templateUrl: './dialog-signin-and-signup.component.html',
  styleUrls: ['./dialog-signin-and-signup.component.scss']
})
export class DialogSigninAndSignupComponent {
  status = true;

  onRegister() {
    this.status = false;
  }

  onLogin() {
    this.status = true;
  }
}
