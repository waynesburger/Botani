import { Component } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth, Logger } from 'aws-amplify';
import { LoginPage } from '../login/login';
import { ConfirmSignUpPage } from '../confirmSignUp/confirmSignUp';
import {Http} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const logger = new Logger('SignUp');

export class UserDetails {
    username: string;
    email: string;
    phone_number: string;
    password: string;
}

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public userDetails: UserDetails;

  error: any;

  /**
   * constructor for the sign up page 
   * sets the user details
   * @param navCtrl 
   * @param loadingCtrl 
   */
  constructor(public rout: Router,
              public loadingCtrl: LoadingController,
              public menuCtrl: MenuController) {
   this.userDetails = new UserDetails();
   this.menuCtrl.enable(false);
   console.log("loaded constructor");
  }

  /**
   * lets the user sign up for the app. Authentication happens here
   */
  async signup() {

    const loading = await this.loadingCtrl.create({
      message: 'well get you signed in right away ...'
    });
    await loading.present();

    let details = this.userDetails;
    this.error = null;
    logger.debug('register');
    Auth.signUp(details.username, details.password, details.email, details.phone_number)
      .then(user => {
        let headers 	: any		= new HttpHeaders({ 'Content-Type':'application/json' }),
          options 	: any		=  {'username' : details.username},
          url       : any      	= "http://botaniclash.us-west-2.elasticbeanstalk.com/insertUsername.php"; 
        this.rout.navigate(['conf-sign', { username: details.username}]);
      })
      .catch(err => { this.error = err; });
      //.then(() => loading.dismiss());
    
    const {role, data} = await loading.onDidDismiss();
  }

  /**
   * logs the user in
   */
  login() {
    this.rout.navigate(['login-page'])
  }

}
