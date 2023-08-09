import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  

  // constructor(
  //   public dialog: MatDialog,
  //   public _router: Router,
  //   private _coreService: CoreService
  // ) { }

  // onClickConnect() {
  //   const dialogRef = this.dialog.open(DialogLoginComponent, {
  //     width: '400px',
  //     position: {
  //       top: '0px',
  //       left: '750px'
  //     }
  //   });
  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   this.reloadCurrentPage();
  //   // });
  // }

  // onClose() {
  //   this.dialog.closeAll();
  // }

  // toRouter() {
  //   this._router.navigate(['login']);
  // }

  // _getAll() {
  //   this._coreService.getAll().pipe().subscribe(
  //     (res) => {

  //     },
  //     (err) => {
  //       console.error("[_getAll]", err)
  //     }
  //   );
  // }

  // _get(id: string) {
  //   this._coreService.get(id).pipe().subscribe(
  //     (res) => {

  //     },
  //     (err) => {
  //       console.error("[_getAll]", err)
  //     }
  //   );
  // }

  // _save(data: DataModel) {
  //   this._coreService.save(data).pipe().subscribe(
  //     (res) => {

  //     },
  //     (err) => {
  //       console.error("[_getAll]", err)
  //     }
  //   );
  // }
}
