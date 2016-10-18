import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Folder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-folder',
  templateUrl: 'folder.html'
})
export class Folder {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Folder Page');
  }

}
