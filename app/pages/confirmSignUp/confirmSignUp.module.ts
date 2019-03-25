import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ConfirmSignUpPage } from './confirmSignUp';
import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    ConfirmSignUpPage,
    LoginPage
  ],
  imports: [
    IonicModule, RouterModule.forChild([
       {path:'', component: ConfirmSignUpPage},
       {path:'login-page', component: LoginPage}
    ])
  ],
})
export class ConfirmSignUpPageModule {}