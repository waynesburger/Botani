import { Component } from '@angular/core';

import { NavController, LoadingController, AlertController, PopoverController } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';


import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ConfirmSignInPage } from '../confirmSignIn/confirmSignIn';
import { LoginInfoProvider } from '../../providers/login-info/login-info';

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

  constructor(public navCtrl: NavController, private alert : AlertController,
              public loadingCtrl: LoadingController, saveLogIn : LoginInfoProvider) {
    this.loginDetails = new LoginDetails(); 
    this.saveLogIn = saveLogIn
    
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let details = this.loginDetails;
    logger.info('login..');
    Auth.signIn(details.username, details.password)
      .then(user => {
        logger.debug('signed in user', user);
          this.saveLogIn.updateUsername(details.username);
          this.navCtrl.setRoot(TabsPage);
      })
      .catch(err => {
                        logger.debug('errrror', err);
                        this.error_alert();
                    })
      .then(() => {
                    loading.dismiss()
                  });
  }
  
  signup() {
    this.navCtrl.push(SignupPage);
  }

  error_alert()
  {
    let alert = this.alert.create(
      {
        title : "Error!",
        subTitle : `Invalid Username or Password.\n Please Reenter your Credentials`,
        buttons : ["Continue"]
      }
    );
    alert.present();
  }


}
