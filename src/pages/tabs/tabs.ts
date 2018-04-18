import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'DivisionalLeaderboard';
  tab2Root: any = 'BotaniMap';
  //tab3Root: any = 'PersonalForest';
  myIndex: number;
 
  constructor(navParams: NavParams) {
      this.myIndex = navParams.data.tabIndex || 0;
  }
}