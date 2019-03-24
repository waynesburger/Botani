import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';
import { JSONPBackend } from '@angular/http/src/backends/jsonp_backend';
import { ToastController } from '@ionic/angular';
//import { Leaderboard } from '../pages/leaderboard/leaderboard';

/*
* userfacactory creates a list of "users" from the data received from the php layer. 
*/


@Injectable()
export class UserFactory
{
   private  users : Array<user> = [];
    
    /* constructor calls the getJson function
    */
    constructor( public http: Http, public toastCtrl  : ToastController)
    { 
    
       this.getJSON();
        
    }

    /**
    * Retrieve the JSON encoded data from the remote server(botaniClash server)
    * Using Angular's Http class 
    * 
    * @public
    * @method getJSON()
    * @return {None}
    */

   getJSON() : Observable<any>
    {
      return this.http.get('http://botaniclash.us-west-2.elasticbeanstalk.com/users.php')
            .map(res =>
                {
                   return res.json()
                });
           
               
     }
    /*Returns the users list to the leaderboardComponent*/
    getUsers() : user[]
    {
        return this.users;
    }

    /**
    * Update a user's information  
    * Use angular's http post method to submit the record data
    * to our remote PHP script
    *
    * @public
    * @method updateUser
    * @param username 			{string} 			
    * @param points 	{int} 			
    * @return {None}
    */
   updateUser(username: number, points : number) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type':'application/json' }),
          options 	: any		=  {'username' : username, 'points' : points},
          url       : any      	= "http://botaniclash.us-west-2.elasticbeanstalk.com/update_users.php";

      this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe((data: any) =>
      {
          console.log(data);
         // If the request was successful notify the user
         this.sendNotification('Congratulations the information you provided was successfully recorded');
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
      });
   }
    /**
    * Manage notifying the user of the outcome of remote operations
    *
    * @public
    * @method sendNotification
    * @param message 	{String} 			Message to be displayed in the notification
    * @return {None}
    */
    sendNotification(message : string)  : void
    {
       let notification = this.toastCtrl.create({
           message       : message,
           duration      : 3000
       });
       //notification.present();
    }


}
//interface serves as a buffer between raw JSON and user objects
export interface user
{
    leaderboardRank: number,
    username : String,
    points : number
    
}