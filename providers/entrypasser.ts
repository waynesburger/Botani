import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';
import { Time } from '@angular/common/src/i18n/locale_data_api';

/*
* entrypasser receives a list of collected data.
* Parses it to json format 
* then sents it to the php layer which will update the database 
*/

@Injectable()
export class EntryPasser
{
    /**
    * @name baseURI
    * @type {String}
    * @public
    * @description     Remote URI for sending data to
    */
   private baseURI: string  = "http://botaniclash.us-west-2.elasticbeanstalk.com/create_entry.php"; //this url has to be replaced with the botaniClash server url
    constructor(public http: Http, public toastCtrl  : ToastController)
    { 

    }

    /**
    * Save a new entry for a tree that has been added from the dataCollection screen
    * Use angular's http post method to submit the record data to the php layers
    *
    * @public
    * @createEntry
    * @return {None}
    */
   
   createEntry(user: number, tree : number, openPollenConesValue: number,unfoldingLeavesValue: number, fullSizedLeavesValue: number, coloredLeavesValue: number, openedFlowersValue: number, ripeFruitsValue: number, breakingNeedleBudsValue: number, youngNeedlesValue: number, freshPollenConesValue: number, unripeSeedConesValue: number, ripeSeedConesValue: number, droppedSeedConesValue: number, breakingLeafBudsValue: number, flowerBudsValue: number, fruitsValue: number, droppedFruitsValue: number, openPollenConesRadioValue:string, coloredLeavesRadioValue:string ) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "user": user, "tree" : tree, "openPollenConesValue": openPollenConesValue,"unfoldingLeavesValue": unfoldingLeavesValue, "fullSizedLeavesValue": fullSizedLeavesValue, "coloredLeavesValue": coloredLeavesValue, "openedFlowersValue":openedFlowersValue, "ripeFruitsValue": ripeFruitsValue, "breakingNeedleBudsValue": breakingLeafBudsValue, "youngNeedlesValue": youngNeedlesValue, "freshPollenConesValue": freshPollenConesValue, "unripeSeedConesValue": unripeSeedConesValue, "ripeSeedConesValue": ripeSeedConesValue, "droppedSeedConesValue": droppedSeedConesValue, "breakingLeafBudsValue": breakingLeafBudsValue, "flowerBudsValue": flowerBudsValue, "fruitsValue": fruitsValue, "droppedFruitsValue": droppedFruitsValue, "openPollenConesRadioValue": openPollenConesRadioValue, "coloredLeavesRadioValue":coloredLeavesRadioValue},
          url       : any      	= this.baseURI;
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
        console.log(data);
         // If the request was successful notify the user
         this.sendNotification('Congratulations the information you provided was successfully recorded');
      },
      (error : any) =>
      {
          console.log(error);
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