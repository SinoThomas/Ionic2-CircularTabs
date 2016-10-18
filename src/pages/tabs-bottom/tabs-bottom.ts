import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TabsBottom page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs-bottom',
  templateUrl: 'tabs-bottom.html'
})
export class TabsBottom {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsBottom Page');
  }

}
