import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { GlobalLeaderboardPageModule } from '../tab1/globalLeaderboard/globalLeaderboard.module';
import { BotaniMapModule } from '../tab2/map.module';
import { PersonalForestModule } from '../tab3/forest.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    GlobalLeaderboardPageModule,
    BotaniMapModule,
    PersonalForestModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
