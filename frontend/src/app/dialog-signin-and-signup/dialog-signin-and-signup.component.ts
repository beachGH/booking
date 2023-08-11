import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-signin-and-signup',
  templateUrl: './dialog-signin-and-signup.component.html',
  styleUrls: ['./dialog-signin-and-signup.component.scss']
})
export class DialogSigninAndSignupComponent {

  
  status = true;
  // @Output()
  // status = new EventEmitter<boolean>();

   @Output()
  statuss = new EventEmitter<boolean>();
  // onRegister() {
  //   this.status = false;
  // }

  // onLogin() {
  //   this.status = true;
  // }
}
