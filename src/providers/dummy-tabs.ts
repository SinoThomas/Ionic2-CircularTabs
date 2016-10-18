import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Home } from '../pages/home/home';
import { Calendar } from '../pages/calendar/calendar';
import { Camera } from '../pages/camera/camera';
import { Cloud } from '../pages/cloud/cloud';
import { Compas } from '../pages/compas/compas';
import { Contact } from '../pages/contact/contact';
import { Folder } from '../pages/folder/folder';
import { Images } from '../pages/images/images';
import { Map } from '../pages/map/map';
import { Settings } from '../pages/settings/settings';

/*
  Provider to return DummyTabs
*/
@Injectable()
export class DummyTabs {

  tabs = [
    { root: Home, title: "Home", iconName: "home" },
    { root: Calendar, title: "Calendar", iconName: "calendar" },
    { root: Camera, title: "Camera", iconName: "camera" },
    { root: Cloud, title: "Cloud", iconName: "cloud" },
    { root: Compas, title: "Compas", iconName: "compas" },
    { root: Contact, title: "Contact", iconName: "contact" },
    { root: Folder, title: "Folder", iconName: "folder" },
    { root: Images, title: "Images", iconName: "images" },
    { root: Map, title: "Map", iconName: "map" },
    { root: Settings, title: "Settings", iconName: "settings" }]
  ;

  badgeStyles = ["primary", "secondary", "danger", "light", "dark",];

  constructor() {
  }

  getTab(tabIndex: number, hasTitle: boolean, hasIcon: boolean, hasBadge: boolean) {
    let tab: any = this.tabs[tabIndex % this.tabs.length];

    hasTitle ? true : delete tab.title;
    hasIcon ? true : delete tab.iconName;

    if (hasBadge) {
      tab.badge = Math.round((Math.random() * 100)).toString();
      tab.badgeStyle = this.badgeStyles[Math.round(Math.random() * this.badgeStyles.length)];
    }
    return tab;
  }


}
