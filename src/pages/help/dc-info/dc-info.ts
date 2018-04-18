import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DcInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let general_info = "The data collection page will appear differently based on which tree you’re observing.";
let quantity_based = "For quantity-based observations, a slider will be used for input, and bar graphs will appear for visual aid.\n" +
"Simply drag the slider to match your best estimate of the quantity of an item on a tree."
let percentage_based = "For percentage-based observations, a slider will be used for input, and line graphs will appear for visual aid.\n" +
"Simply drag the slider to match your best estimate of the percentage of the specified quality on the tree."
let multiple_choice = "For multiple choice observations, simply select the option that best suits the tree you're observing.";
let evergreen_trees = "For Evergreen Trees you can observe the quantity of breaking needle buds, young needles, "+
"pollen cones, and ripe/unripe pine cones.\nYou can also observe the percentage of pine cones that are open.\n"+
"There is also a multiple choice question for how much pollen is released from the pollen cones";
let deciduous_trees = "For Deciduous Trees you can observe the quantity of breaking leaf buds, healthy flower buds, "+
"fruits, and fallen seeds.\nYou can also observe the percentage of unfolded leaves, fully-grown leaves, " + 
"colored leaves, opened flowers, and ripe fruits\nThere is also a true/false question about whether or not the tree's leaves are falling.";

@IonicPage()
@Component({
  selector: 'page-dc-info',
  templateUrl: 'dc-info.html',
})
export class DcInfoPage {
  general:string = general_info;
  quantity:string = quantity_based;
  percentage:string = percentage_based;
  multiple:string = multiple_choice;
  evergreen:string = evergreen_trees;
  deciduous:string = deciduous_trees;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DcInfoPage');
  }

}
