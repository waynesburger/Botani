import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { HelpPage } from '../help/help';
import { MenuController } from 'ionic-angular';
import { LoginDetails, LoginPage } from '../login/login'
import { Auth, Logger } from 'aws-amplify';
//import { DivisionalLeaderboard } from '../divisionalLeaderboard/divisionalLeaderboard';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  /**
   * constructor for the side menu
   * does not need to be instantiated
   * @param navCtrl 
   */
  constructor(public navCtrl: NavController) { }

  /**
   * set the root of the view to the page
   * @param page 
   */
  openPage(page){
    this.nav.setRoot(page);
  }

  /**
   * checks if the page is active
   * @param page 
   */
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  /*logout(LoginDetails: LoginDetails){
    LoginDetails.username = null;
    LoginDetails.password = null;
    this.navCtrl.push(LoginPage);
  }*/
}