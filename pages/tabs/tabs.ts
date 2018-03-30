import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'DivisionalLeaderboard'; //left tab
  tab2Root: any = 'BotaniMap'; //right tab
  //tab3Root: any = 'PersonalForest'; //for later iteration
  myIndex: number;
 
  /**
   * constructor for the tabs 
   * sets the indices for the tabs
   * @param navParams 
   */
  constructor(navParams: NavParams) {
      this.myIndex = navParams.data.tabIndex || 0;
  }
}