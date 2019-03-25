import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PersonalForest } from './forest';

@NgModule({
  declarations: [
    PersonalForest,
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path: '', component: PersonalForest}
    ])
  ],
})
export class PersonalForestModule {}
