import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  @Input()
  status!: Boolean

  onRegister() {
    this.status = false
    console.log(this.status)
  }
  
}
