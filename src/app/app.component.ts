import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from 'aws-amplify';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
 
  //rootPage:any = 'LoginPage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let globalActions = function() {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    };

    platform.ready()
      .then(() => {
        Auth.currentAuthenticatedUser()
          .then(() => { this.rootPage = TabsPage; })
          .catch(() => { this.rootPage = LoginPage; })
          .then(() => globalActions());
      });
  }
  
  openPage(page){
    this.nav.setRoot(page);
  }

  logout(){
    this.nav.push(LoginPage);
  }

}


