import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-login-and-register',
  templateUrl: './dialog-login-and-register.component.html',
  styleUrls: ['./dialog-login-and-register.component.scss']
})
export class DialogLoginAndRegisterComponent {
  
  status = true;

  addItem(newItem: boolean) {
    this.status = newItem;
  }

  onInit(): void {
    
  }


}
