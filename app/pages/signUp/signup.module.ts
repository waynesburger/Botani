import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SignupPage } from './signup';
import { LoginPage } from '../login/login';
import { ConfirmSignUpPage } from '../confirmSignUp/confirmSignUp';

@NgModule({
  declarations: [
    SignupPage,
    LoginPage,
    ConfirmSignUpPage
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path: '', component: SignupPage},
      {path: 'login-page', component: LoginPage},
      {path: 'conf-sign', component: ConfirmSignUpPage}
    ])
  ],
})
export class SignupPageModule {}