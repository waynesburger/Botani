import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreeInfoPage } from './tree-info';

@NgModule({
  declarations: [
    TreeInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TreeInfoPage),
  ],
})
export class TreeInfoPageModule {}
