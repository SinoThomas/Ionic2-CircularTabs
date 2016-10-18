import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Contact Page');
  }

}
