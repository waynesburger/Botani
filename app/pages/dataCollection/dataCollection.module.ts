import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Graphs } from './dataCollection';
import { PopoverPage } from './dataCollection';

@NgModule({
  declarations: [
    Graphs, 
    PopoverPage
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path: '', component: Graphs},
       {path: 'popover-page', component: PopoverPage}
    ])
  ],
  
})
export class DataCollectionModule {}