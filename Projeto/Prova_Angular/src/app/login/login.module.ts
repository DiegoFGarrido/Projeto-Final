import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';


@NgModule({
  declarations: [
    LoginComponent,
    Login2Component,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
