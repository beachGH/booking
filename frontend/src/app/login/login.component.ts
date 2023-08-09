import { MatDialog } from '@angular/material/dialog';

import { Component } from '@angular/core';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import {  Router } from '@angular/router';
import { CoreService } from '../service/core.service';
import { DataModel } from '../models/data.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    public dialog: MatDialog,
    public _router: Router,
    private _coreService: CoreService
  ) { }

  onClickConnect() {
    const dialogRef = this.dialog.open(DialogLoginComponent, {
      width: '550px',
      height: '600px',
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   this.reloadCurrentPage();
    // });
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  onClose() {
    this.dialog.closeAll();
  }

  toRouter(){
    this._router.navigate(['login']);
  }

  _getAll(){
    this._coreService.getAll().pipe().subscribe(
      (res) => {

      },
      (err) => {
        console.error("[_getAll]",err)
      }
    )
  }

  _get(ID: string){

    this._coreService.get(ID).pipe().subscribe(
      (res) => {

      },
      (err) => {
        console.error("[_getAll]",err)
      }
    )
  }

  _seve(data: DataModel){

    this._coreService.seve(data).pipe().subscribe(
      (res) => {

      },
      (err) => {
        console.error("[_getAll]",err)
      }
    )
  }
}
