import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  @Output() newItemEvent = new EventEmitter<boolean>();

  addNewItem() {
    this.newItemEvent.emit(false);
  }
  
}
