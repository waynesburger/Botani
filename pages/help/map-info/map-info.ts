import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let map_info = "The map will show all of the trees which are currently visible. To collect data " + 
"on one of the trees that you see on the map, you must be within 15 feet. Evergreen trees are represented " + 
"by a pine tree icon, while deciduous trees are represented by a icon of a tree with leaves. See the \"Finding Trees\""+
"help menu for more info on finding trees which are hidden. ";

let collecting_data = "Click the collect data button on the map screen to make observations on the nearest tree. You can see which tree is closest by looking at you marker on the map." +
" If you are not within 15 feet of the tree you wish to collect data on, you will get a message that says " +
"\"you aren't within the range of any of the trees on the map\". See the \"Data Collection\" menu for more details on collecting data";

/**
 * This page contains information about the map, and how to begin the data collection process
 */
@IonicPage()
@Component({
  selector: 'page-map-info',
  templateUrl: 'map-info.html',
})
export class MapInfoPage {
  map:string = map_info;
  data:string = collecting_data;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapInfoPage');
  }

}