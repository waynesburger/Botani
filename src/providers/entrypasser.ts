import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Component, Input } from '@angular/core';
import { ToastController } from 'ionic-angular'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule } from '@angular/http';
import { HttpClientJsonpModule } from '@angular/common/http/src/module';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { stringType } from 'aws-sdk/clients/iam';

/*
* DataCollection receives an array of collected data.
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
   private baseURI: string  = "http://botaniclash.us-west-2.elasticbeanstalk.com/create_entry.php"; //"http://localhost/create_entry.php"; // //this url has to be replaced with the botaniClash server url
    constructor(public http: Http, public toastCtrl  : ToastController)
    { 

    }

    /**
    * Save a new entry for an Evergreen tree that has been added from dataCollection form
    * Use angular's http post method to submit the record data
    *
    * @public
    * @return {None}
    */
   /*createEntryEvergreen(user: number, tree : number, type: string, time: string, breaking: number, young: number, pollen: number, open: number, release: number, unripe: number, ripe: number, recent: number ) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "user": user, "tree" : tree, "type": type, "time": time, "breaking": breaking, "young": young, "pollen": pollen, "open": open, "release": release, "unripe": unripe, "ripe": ripe, "recent": recent},
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
         this.sendNotification('Something went wrong!');
      });
   }*/
   createEntry(username: string, tree : number, openPollenConesValue: number,unfoldingLeavesValue: number, fullSizedLeavesValue: number, coloredLeavesValue: number, openedFlowersValue: number, ripeFruitsValue: number, breakingNeedleBudsValue: number, youngNeedlesValue: number, freshPollenConesValue: number, unripeSeedConesValue: number, ripeSeedConesValue: number, droppedSeedConesValue: number, breakingLeafBudsValue: number, flowerBudsValue: number, fruitsValue: number, droppedFruitsValue: number, openPollenConesRadioValue:string, coloredLeavesRadioValue:string ) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "username": username, "tree" : tree, "openPollenConesValue": openPollenConesValue,"unfoldingLeavesValue": unfoldingLeavesValue, "fullSizedLeavesValue": fullSizedLeavesValue, "coloredLeavesValue": coloredLeavesValue, "openedFlowersValue":openedFlowersValue, "ripeFruitsValue": ripeFruitsValue, "breakingNeedleBudsValue": breakingLeafBudsValue, "youngNeedlesValue": youngNeedlesValue, "freshPollenConesValue": freshPollenConesValue, "unripeSeedConesValue": unripeSeedConesValue, "ripeSeedConesValue": ripeSeedConesValue, "droppedSeedConesValue": droppedSeedConesValue, "breakingLeafBudsValue": breakingLeafBudsValue, "flowerBudsValue": flowerBudsValue, "fruitsValue": fruitsValue, "droppedFruitsValue": droppedFruitsValue, "openPollenConesRadioValue": openPollenConesRadioValue, "coloredLeavesRadioValue":coloredLeavesRadioValue},
          url       : any      	=   this.baseURI; //"http://localhost/create_entry.php";
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
      /*openPollenConesValue: number = 50;
  unfoldingLeavesValue: number = 50;
  fullSizedLeavesValue: number = 50;
  coloredLeavesValue: number = 50;
  openedFlowersValue: number = 50;
  ripeFruitsValue: number = 50;
  breakingNeedleBudsValue: number = 3;
  youngNeedlesValue: number = 3;
  freshPollenConesValue: number = 3;
  unripeSeedConesValue: number = 3;
  ripeSeedConesValue: number = 3;
  droppedSeedConesValue: number = 3;
  breakingLeafBudsValue: number = 3;
  flowerBudsValue: number = 3;
  fruitsValue: number = 3;
  droppedFruitsValue: number = 3;*/

   /**
    * Save a new entry for a non Evergreen tree that has been added from dataCollection form
    * Use angular's http post method to submit the record data
    *
    * @public
    * @return {None}
    */
  /* createEntryNonEvergreen(user: number, tree : number, type: string, time: string, buds: number, unfolding: number, full: number,  color: number, falling: number, flowers: number, openFlowers: number, fruit: number, ripeFruit: number, recentFruit: number) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "user": user, "tree" : tree, "type": type, "time": time, "buds": buds, "unfolding": unfolding, "full": full,  "color": color, "falling": falling, "flowers": flowers, "openFlowers": openFlowers, "fruit":fruit, "ripeFruit": ripeFruit, "recentFruit": recentFruit },
          url       : any      	= this.baseURI;
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         console.log(data);
         // If the request was successful notify the user
         this.sendNotification(`Congratulations the information you provided was successfully recorded`);
      },
      (error : any) =>
      {
         this.sendNotification('Something went wrong!');
      });
   }*/
   
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
      notification.present();
   }
}