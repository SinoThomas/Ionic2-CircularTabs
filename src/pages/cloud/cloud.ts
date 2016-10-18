import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cloud page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cloud',
  templateUrl: 'cloud.html'
})
export class Cloud {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Cloud Page');
  }

}
