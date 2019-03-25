import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth, Logger } from 'aws-amplify';
//import { LoginPage } from '../login/login';

const logger = new Logger('ConfirmSignUp');

@Component({
  selector: 'page-confirm-signup',
  templateUrl: 'confirmSignUp.html'
})
export class ConfirmSignUpPage {
  
  public code: string;
  public username: string;
/**
 * constructor for the sign up confirmation page 
 * sets the username for a new user
 * @param navCtrl 
 * @param navParams 
 */
  constructor(public rout: Router, public navParams: NavParams) {
    this.username = navParams.get('username');
  }

  /**
   * confirmation of sign up
   */
  confirm() {
    Auth.confirmSignUp(this.username, this.code)
      .then(() => this.rout.navigate(['login-page']))
      .catch(err => logger.debug('confirm error', err));
  }

  /**
   * resend confirmation code in sign up confirmation page
   */
  resendCode() {
    Auth.resendSignUp(this.username)
      .then(() => logger.debug('code was sent'))
      .catch(err => logger.debug('code was not sent', err));
  }
}
