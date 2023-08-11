import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSigninAndSignupComponent } from './dialog-signin-and-signup.component';

describe('DialogSigninAndSignupComponent', () => {
  let component: DialogSigninAndSignupComponent;
  let fixture: ComponentFixture<DialogSigninAndSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSigninAndSignupComponent]
    });
    fixture = TestBed.createComponent(DialogSigninAndSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
