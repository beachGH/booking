import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageHomeComponent } from './page-home/page-home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogSigninAndSignupComponent } from './dialog-signin-and-signup/dialog-signin-and-signup.component';
import { SigninComponent } from './dialog-signin-and-signup/signin/signin.component';
import { SignupComponent } from './dialog-signin-and-signup/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    NavigationComponent,
    DialogSigninAndSignupComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
