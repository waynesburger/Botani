import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaderboardInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let functionality = "The leaderboard keeps track of the point ranking of everybody playing the game. " + 
"Players with more points will be higher up in rankings. The top 15 players in the game will be displayed " + 
"in the global division of the leaderboard."

let season_description = "Every 30 days, all of the players' points will be reset back to 0, to give newer " + 
"players an equal opportunity to climb the rankings in the leaderboard.";

@IonicPage()
@Component({
  selector: 'page-leaderboard-info',
  templateUrl: 'leaderboard-info.html',
})
export class LeaderboardInfoPage {
  function: string = functionality;
  seasons: string = season_description;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardInfoPage');
  }

}
