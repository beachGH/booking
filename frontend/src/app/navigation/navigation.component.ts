import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSigninAndSignupComponent } from '../dialog-signin-and-signup/dialog-signin-and-signup.component';

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
      const dialogRef = this.dialog.open(DialogSigninAndSignupComponent, {
        width: '400px',
        height: '500px'
      });
  }
}
