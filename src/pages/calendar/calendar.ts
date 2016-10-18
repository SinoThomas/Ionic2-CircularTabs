import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Calendar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class Calendar {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Calendar Page');
  }

}
