import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { GlobalLeaderboard } from './globalLeaderboard';

@NgModule({
  declarations: [
    GlobalLeaderboard,
  ],
  imports: [
    IonicModule, RouterModule.forChild([
      {path: '', component: GlobalLeaderboard}
    ])
  ],
})
export class GlobalLeaderboardPageModule {}
