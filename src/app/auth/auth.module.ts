import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginImageComponent } from './login/components/login-image/login-image.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { RegisterFormComponent } from './register/components/register-form/register-form.component';
import { RegisterImageComponent } from './register/components/register-image/register-image.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginImageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterImageComponent
  ],
  imports: [
    CommonModule
  ],
})
export class AuthModule { }
