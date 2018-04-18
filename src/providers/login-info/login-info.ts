
import { Injectable } from '@angular/core';
import { String } from 'aws-sdk/clients/mobileanalytics';

/*
  Generated class for the LoginInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginInfoProvider {

  username : String
  
  constructor() {
    console.log('Recording logininfo');
  }

  updateUsername(username : string)
  {
    this.username = username;
  }

  getUsername()
  {
    return this.username;
  }

}
