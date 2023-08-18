import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-signin-and-signup',
  templateUrl: './dialog-signin-and-signup.component.html',
  styleUrls: ['./dialog-signin-and-signup.component.scss']
})
export class DialogSigninAndSignupComponent {

  status = true;

  addItem(NewItem: boolean) {
    this.status = NewItem
  }

  onInit(): void {
    
  }

}
