import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmSignInPage } from './confirmSignIn';

@NgModule({
  declarations: [
    ConfirmSignInPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmSignInPage),
  ],
})
export class ConfirmSignInPageModule {}