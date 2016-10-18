import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Images page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
