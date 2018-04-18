import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';

import { LoginPage } from '../login/login';

const logger = new Logger('ConfirmSignUp');

@Component({
  selector: 'page-confirm-signup',
  templateUrl: 'confirmSignUp.html'
})
export class ConfirmSignUpPage {
  
  public code: string;
  public username: string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,  private alert : AlertController, public navParams: NavParams) 
  
  {
    this.username = navParams.get('username');
  }

  confirm() 
  {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    Auth.confirmSignUp(this.username, this.code)
      .then(() => {
                      this.account_created();
                      this.navCtrl.push(LoginPage);
                      loading.dismiss();
                  })
      .catch(err => {
                        logger.debug('confirm error', err)
                        this.error_alert();
                        loading.dismiss();
                    });
  }

  resendCode() {
    Auth.resendSignUp(this.username)
      .then(() => logger.debug('sent'))
      .catch(err => logger.debug('send code error', err));
  }

  error_alert()
  {
    let alert = this.alert.create(
      {
        title : "Error!",
        subTitle : `Oups!! Something Went Wrong! \nPlease Try Again Later.`,
        buttons : ["Continue"]
      }
    );
    alert.present();
  }

  account_created()
  {
    let alert = this.alert.create(
      {
        title : "Congratulations!",
        subTitle : `Your account was created successfully! \n Please use your credentials to log into BotaniClash.`,
        buttons : ["Continue"]
      }
    );
    alert.present();
  }
}
