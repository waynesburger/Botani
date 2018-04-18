import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaderboardInfoPage } from './leaderboard-info';

@NgModule({
  declarations: [
    LeaderboardInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaderboardInfoPage),
  ],
})
export class LeaderboardInfoPageModule {}
