import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LandingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LandingPage Page');
  }

}
