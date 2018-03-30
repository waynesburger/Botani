import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { Graphs } from './dataCollection';
import { PopoverPage } from './dataCollection';

@NgModule({
  declarations: [Graphs, PopoverPage],
  imports: [
    IonicPageModule.forChild(Graphs),
  ],
  
})
export class DataCollectionModule {}
