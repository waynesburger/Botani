import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let descript = "BotaniClash is a crowd-source data collection app for collecting " + 
"phenological data on evergreen and decidous trees on the campus of Central Washington University.\n" +
"This project was launched per Dr.Eric Graham's request of the University's Computer Science Senior Capstone Project.";

let res = "Data collected through BotaniClash will go through the University's Ecology " +
"department, and then sent to the USA National Phenology Network (USANPN). More information " + 
"on the USANPN can be found at ";

let line2 = "For centuries the trees have talked to each other, " + 
"and lately they have been greatly harmed by climate change.";

let line3 = "BotaniClash allows you, the player, to communicate with the trees " + 
"around your campus and observe their lifecycle."

let line4 = "You earn points whenever you observe trees. " +
"The more observations you make, the more points you earn.";

/**
 * This page contains the general information about the app
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  description: string = descript;
  result: string = res;
  content2:string = line2;
  content3:string = line3;
  content4:string = line4;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
