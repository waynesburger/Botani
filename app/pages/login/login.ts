import { Component } from '@angular/core';

import { LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth, Logger } from 'aws-amplify';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
//import { ConfirmSignInPage } from '../confirmSignIn/confirmSignIn';
import { LoginInfoProvider } from '../../../providers/login-info/login-info';

import {Http} from '@angular/http';

const logger = new Logger('Login');

export class LoginDetails {
  username: string;
  password: string;

}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  public loginDetails: LoginDetails;
  private saveLogIn;

  /**
   * The constructor for the log in page 
   * sets the login details and sets the 'save login' field
   * 
   * @param navCtrl 
   * @param loadingCtrl 
   * @param saveLogIn 
   */
  constructor(public rout: Router,
              public loadingCtrl: LoadingController, saveLogIn : LoginInfoProvider,
              public menuCtrl: MenuController) {
    this.loginDetails = new LoginDetails(); 
    this.saveLogIn = saveLogIn
    this.menuCtrl.enable(false);
  }

  /**
   * logs the users in
   */
  login() {
    let loading = this.loadingCtrl.create({
      spinner: null,
      message: 'login in progress ...',
      translucent: true
    });
    //loading.present();

    let details = this.loginDetails;
    logger.info('login..');
    Auth.signIn(details.username, details.password)
      .then(user => {
        logger.debug('signed in user', user);
          this.saveLogIn.updateUsername(details.username);
          this.navCtrl.setRoot(TabsPage);
       // }
      })
      .catch(err => logger.debug('ooops. login issues.', err))
      .then(() => loading.dismiss());
  }

  /**
   * goes to the signup page
   */
  signup() {
    this.navCtrl.push(SignupPage);
  }

}
