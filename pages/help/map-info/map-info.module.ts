import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapInfoPage } from './map-info';

@NgModule({
  declarations: [
    MapInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MapInfoPage),
  ],
})
export class MapInfoPageModule {}
