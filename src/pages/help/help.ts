import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from './about/about';
import { LeaderboardInfoPage } from './leaderboard-info/leaderboard-info';
import { MapInfoPage } from './map-info/map-info';
import { DcInfoPage } from './dc-info/dc-info';
import { TreeInfoPage } from './tree-info/tree-info';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  items: Array<string>;
  
  constructor(public navCtrl: NavController){

  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['About This App','Data Collection','Finding Trees','Leaderboard', 'Gameplay'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  goToPage(item){
    if(item == "About This App")
      this.navCtrl.push(AboutPage);
    else if (item == "Data Collection")
      this.navCtrl.push(DcInfoPage);
    else if (item == "Finding Trees")
      this.navCtrl.push(TreeInfoPage);
    else if (item == "Leaderboard")
      this.navCtrl.push(LeaderboardInfoPage);
    else if (item == "Gameplay")
      this.navCtrl.push(MapInfoPage);
  }
}
