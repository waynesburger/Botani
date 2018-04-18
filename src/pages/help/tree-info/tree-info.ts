import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TreeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let finding_trees = "All but one of the trees will be hidden [when]. To discover other trees, "+
"simply click the \"find\" button, which is located at the bottom of the map. "+
"Once clicked, a new tree will be revealed on the map if you are within range, and data can be collected on that tree. " +
"Trees are only available to be revealed when you are close enough to the tree (about 15 feet away).";

let out_of_range = "If you’re a distance of 15 - 60 feet from a hidden tree, you will get a message telling you in which " + 
"direction (north, west, south, east, etc.) the nearest hidden tree is. You can use the compass for guidance." + 
"If you’re not close to any hidden trees at the moment, the app will let you know";

@IonicPage()
@Component({
  selector: 'page-tree-info',
  templateUrl: 'tree-info.html',
})
export class TreeInfoPage {
  finding:string = finding_trees;
  range:string = out_of_range;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreeInfoPage');
  }

}
