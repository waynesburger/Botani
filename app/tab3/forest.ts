import { Component } from '@angular/core';
import { /*IonicPage,*/ /*NavController,*/ NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

/**
 * Generated class for the Tab3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'forest',
  templateUrl: 'forest.html',
})
export class PersonalForest {

  constructor(public rout: Router, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalForest');
  }

}
