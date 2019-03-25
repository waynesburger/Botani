import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../../tabs/tabs.page';

@NgModule({
  declarations: [
    LoginPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path: '', component: LoginPage},
      {path: 'sign-up', component: SignupPage},
      {path: 'tabspage', component: TabsPage}
    ])
  ],
})
export class LoginPageModule {}