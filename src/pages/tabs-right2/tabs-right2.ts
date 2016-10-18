import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tabs-right2',
  templateUrl: 'tabs-right2.html'
})
export class TabsRight2 {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsRight2 Page');
  }

}
