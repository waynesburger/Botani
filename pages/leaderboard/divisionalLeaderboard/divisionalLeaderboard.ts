import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leaderboard } from '../leaderboard';
import { UserFactory, user } from '../../../providers/userfactory';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'divisionalLeaderboard',
  templateUrl: 'divisionalLeaderboard.html',
})
export class DivisionalLeaderboard {
  leaderboard: Leaderboard;
  users:any;
  user_list: user[];

  /**
   * constructor for the divisional leadeboard
   * sets the divisionally ranked users
   * @param navCtrl 
   * @param navParams 
   * @param UserFactory 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private UserFactory: UserFactory) {
    this.user_list = []
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
                         this.user_list.push(User); //putting users into leaderboard from database
                         
                     }
                    
                     console.log(this.user_list);
                     this.leaderboard = new Leaderboard(this.navCtrl, this.user_list);
                     this.users = this.leaderboard.locallyRankedUsers;
                     console.log('ionViewDidLoad DivisionalLeaderboard')
                    
                 });
    
  }

  /**
   * displays users based on their rank
   * @param rank 
   * @returns a string with the how the user is displayed
   */
  getLeaderboardDisplay(rank){
    if(rank <= 3)
      return ` ${this.users[rank-1].username}`;
    else
      return `${this.users[rank-1].leaderboardRank}. ${this.users[rank-1].username}`;
  }

  /**
   * each rank has a different color
   * @param rank 
   * @returns a color
   */
  getColor(rank){
    if(rank === 1) return "gold";
    else if(rank === 2) return "silver";
    else if(rank === 3) return "bronze";
    else return "others";
  }
/**
 * top 3 get icons and the rest get nothing
 * @param rank 
 * @returns an icon
 */
  getIcon(rank){
    if(rank <= 3)
      return "ribbon";
    else return null;
  }

  /**
   * format the points with commas
   * @param n 
   * @returns a formatted string
   */
  formatNumber(n){
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /**
   * change the view
   */
  viewGlobal(){
    this.navCtrl.setRoot('GlobalLeaderboard');
  }

}