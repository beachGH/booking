import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogLoginAndRegisterComponent } from '../dialog-login-and-register/dialog-login-and-register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(
      public dialog: MatDialog,
  ) { }

  onDialogLogin() {
      const dialogRef = this.dialog.open(DialogLoginAndRegisterComponent, {
        width: '800px',
        height: '500px'
      });
  }
}
