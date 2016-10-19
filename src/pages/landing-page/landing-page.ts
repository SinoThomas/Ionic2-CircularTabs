import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Home } from '../home/home';
import { Calendar } from '../calendar/calendar';
import { Camera } from '../camera/camera';
import { Cloud } from '../cloud/cloud';
import { Contact } from '../contact/contact';
import { Folder } from '../folder/folder';
import { Images } from '../images/images';
import { Map } from '../map/map';
import { Settings } from '../settings/settings';

@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html'
})
export class LandingPage {

  homeCtrl: any;
  calendarCtrl: any;
  cameraCtrl: any;
  cloudCtrl: any;
  contactCtrl: any;
  folderCtrl: any;
  imagesCtrl: any;
  mapCtrl: any;
  settingsCtrl: any;

  tabSettings: any;

  constructor(public navCtrl: NavController) {

    this.homeCtrl = Home;
    this.calendarCtrl = Calendar;
    this.cameraCtrl = Camera;
    this.cloudCtrl = Cloud;
    this.contactCtrl = Contact;
    this.folderCtrl = Folder;
    this.imagesCtrl = Images;
    this.mapCtrl = Map;
    this.settingsCtrl = Settings;

  }

}
