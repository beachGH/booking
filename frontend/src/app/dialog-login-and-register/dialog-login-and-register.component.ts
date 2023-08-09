import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-login-and-register',
  templateUrl: './dialog-login-and-register.component.html',
  styleUrls: ['./dialog-login-and-register.component.scss']
})
export class DialogLoginAndRegisterComponent {
  status = true;

  onRegister() {
    this.status = false;
  }

  onLogin() {
    this.status = true;
  }
}
