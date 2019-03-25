import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { BotaniMap } from './map';
import { Graphs } from '../pages/dataCollection/dataCollection';

@NgModule({
  declarations: [
    BotaniMap,
    Graphs
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path:'', component: BotaniMap },
      {path:'graphs', component: Graphs}
    ]),
  ],
})
export class BotaniMapModule {}
