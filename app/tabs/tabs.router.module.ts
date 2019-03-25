import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'leaderboard',
        children: [
          {
            path: '',
            loadChildren: '../tab1/globalLeaderboard/globalLeaderboard.module#GlobalLeaderboardPageModule'
          }
        ]
      },
      {
        path: 'botanimap',
        children: [
          {
            path: '',
            loadChildren: '../tab2/map.module#BotaniMapModule'
          }
        ]
      },
      {
        path: 'pforest',
        children: [
          {
            path: '',
            loadChildren: '../tab3/forest.module#PersonalForestModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/leaderboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/leaderboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
