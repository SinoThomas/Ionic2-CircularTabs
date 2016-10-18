import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-compas',
  templateUrl: 'compas.html'
})
export class Compas {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Compas Page');
  }

}
