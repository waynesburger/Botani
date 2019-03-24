import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { UserFactory, user } from '../../providers/userfactory';

/**
 * Generated class for the GlobalLeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({})
export class Leaderboard {

    globallyRankedUsers: any [] = [null]
    locallyRankedUsers: any [] = [null]
    allusers : user[];
/**
 * the contructor for the leaderboard 
 * instantiates the array of all users on the leaderboard and loads them into their respective divisions
 * @param navCtrl 
 * @param AllUsers 
 */
  constructor(public navCtrl: NavController, private AllUsers: user[], public menuCtrl: MenuController) 
  {
    this.allusers = AllUsers;
    console.log(this.allusers)
    this.loadUsers();
    this.menuCtrl.enable(true);
  }
  
  /**
   * puts the users into the correct division
   */
  loadUsers(){
    if(this.allusers.length < 15){
        for(let x = 0; x < this.allusers.length; x++){
            this.globallyRankedUsers[x] = this.allusers[x];
            this.locallyRankedUsers[x] = this.allusers[x];
            this.globallyRankedUsers[x].leaderboardRank = x+1;
            this.locallyRankedUsers[x].leaderboardRank = x+1;
        }
    }
    else{
        for(let x = 0; x < 15; x++){
            this.globallyRankedUsers[x] = this.allusers[x];
            this.globallyRankedUsers[x].leaderboardRank = x+1;
        }
        for(let x = 15; x < this.allusers.length; x++){
            this.locallyRankedUsers[x-15] = this.allusers[x];
            this.locallyRankedUsers[x-15].leaderboardRank = x-14;
        }
    }
  }
}