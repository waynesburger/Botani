
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

  /**
   * updates the username of user
   * @param username 
   */
  updateUsername(username : string)
  {
    this.username = username;
  }

  /**
   * gets the username of the user
   * @returns the username
   */
  getUsername()
  {
    return this.username;
  }

}
