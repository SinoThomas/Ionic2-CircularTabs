import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Settings Page');
  }

}
