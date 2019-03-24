import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path: ''}
    ])
  ],
})
export class LoginPageModule {}

/*

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BotaniMap } from './map';

@NgModule({
  declarations: [
    BotaniMap,
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path:'', component: BotaniMap }
    ]),
  ],
})
export class BotaniMapModule {}


*/