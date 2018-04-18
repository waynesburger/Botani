import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController, public http: Http) {
   this.userDetails = new UserDetails();
  }

  signup() {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let details = this.userDetails;
    this.error = null;
    logger.debug('register');
    Auth.signUp(details.username, details.password, details.email, details.phone_number)
      .then(user => {
        this.CreateUser(details.username, 0);
        this.navCtrl.push(ConfirmSignUpPage, {username: details.username});
        
      })
      .catch(err => { this.error = err; })
      .then(() => loading.dismiss());
  }
  CreateUser(username: string, points: number) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type':'application/json' }),
          options 	: any		=  {'username' : username, 'points' : points},
          url       : any      	=  "http://botaniclash.us-west-2.elasticbeanstalk.com/insertUsername.php"; //"http://localhost/insertUsername.php";  
      this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe((data: any) =>
      {
          console.log(data);
      },
      (error : any) =>
      {
         console.log(error);
      });
   }


  login() {
    this.navCtrl.push(LoginPage);
  }

}
