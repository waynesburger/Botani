import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DcInfoPage } from './dc-info';

@NgModule({
  declarations: [
    DcInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DcInfoPage),
  ],
})
export class DcInfoPageModule {}
