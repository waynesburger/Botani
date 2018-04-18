import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leaderboard } from '../leaderboard';
import { UserFactory, user } from '../../../providers/userfactory';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'globalLeaderboard',
  templateUrl: 'globalLeaderboard.html',
})
export class GlobalLeaderboard {
  leaderboard: Leaderboard;
  users:any;
  user_list: user[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private UserFactory: UserFactory) 
  {
    this.user_list = [];
  }

  ionViewDidLoad() 
  {
    this.UserFactory.getJSON().subscribe
            (res => 
                {
                     console.log(res);
                     for (let i = 0; i <res.length; i++)
                     {
                         var obj = JSON.parse(JSON.stringify(res[i]));
                         var User: user =  
                             {
                                 username : obj.username,
                                 points : obj.totalPoints,
                                 leaderboardRank: 0
         
                             };
                         this.user_list.push(User);
                         
                     }
                    
                     console.log(this.user_list);
                     this.leaderboard = new Leaderboard(this.navCtrl, this.user_list);
                     this.users = this.leaderboard.globallyRankedUsers;
                     console.log('ionViewDidLoad GlobalLeaderboard');
                    
                 });
  }

  getLeaderboardDisplay(rank){
    if(rank <= 3)
      return ` ${this.users[rank-1].username}`;
    else
      return `${this.users[rank-1].leaderboardRank}. ${this.users[rank-1].username}`;
  }

  getColor(rank){
    if(rank === 1) return "gold";
    else if(rank === 2) return "silver";
    else if(rank === 3) return "bronze";
    else return "others";
  }

  getIcon(rank){
    if(rank <= 3)
      return "trophy";
    else return null;
  }

  formatNumber(n){
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  viewLocal(){
    this.navCtrl.setRoot('DivisionalLeaderboard');
  }

}
