import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-images',
  templateUrl: 'images.html'
})
export class Images {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Images Page');
  }

}
