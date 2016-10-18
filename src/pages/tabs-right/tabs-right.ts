import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TabsRight page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs-right',
  templateUrl: 'tabs-right.html'
})
export class TabsRight {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsRight Page');
  }

}
