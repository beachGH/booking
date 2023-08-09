import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginAndRegisterComponent } from './dialog-login-and-register.component';

describe('DialogLoginAndRegisterComponent', () => {
  let component: DialogLoginAndRegisterComponent;
  let fixture: ComponentFixture<DialogLoginAndRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLoginAndRegisterComponent]
    });
    fixture = TestBed.createComponent(DialogLoginAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
