import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

const logger = new Logger('ConfirmSignIn');

@Component({
  selector: 'page-confirm-signin',
  templateUrl: 'confirmSignIn.html'
})
export class ConfirmSignInPage {
  
  public code: string;
  public user: any;

  /**
   * constructor for the sign in page 
   * sets the user for the app
   * @param navCtrl nav controller
   * @param navParams nav parameters
   */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  /**
   * authentication confirmation
   */
  confirm() {
    Auth.confirmSignIn(this.user, this.code)
      .then(() => this.navCtrl.push(TabsPage))
      .catch(err => logger.debug('confirm error', err));
  }
/**
 * login to the app
 */
  login() {
    this.navCtrl.push(LoginPage);
  }

}
