import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Home } from '../pages/home/home';
import { Calendar } from '../pages/calendar/calendar';
import { Camera } from '../pages/camera/camera';
import { Cloud } from '../pages/cloud/cloud';
import { Contact } from '../pages/contact/contact';
import { Folder } from '../pages/folder/folder';
import { Images } from '../pages/images/images';
import { Map } from '../pages/map/map';
import { Settings } from '../pages/settings/settings';

/*
  Provider to return DummyTabs data
*/
@Injectable()
export class DummyTabs {

  tabs: any;
  badgeStyles: any;

  constructor() {
    this.tabs = [
      { root: Home, title: "Home", iconName: "home" },
      { root: Calendar, title: "Calendar", iconName: "calendar" },
      { root: Camera, title: "Camera", iconName: "camera" },
      { root: Cloud, title: "Cloud", iconName: "cloud" },
      { root: Contact, title: "Contact", iconName: "contact" },
      { root: Folder, title: "Folder", iconName: "folder" },
      { root: Images, title: "Images", iconName: "images" },
      { root: Map, title: "Map", iconName: "map" },
      { root: Settings, title: "Settings", iconName: "settings" }]
      ;

    this.badgeStyles = ["primary", "secondary", "danger", "light", "dark"];

    //set badge and badgeStyle
    this.tabs.forEach(element => {
      element.badge = Math.round((Math.random() * 100));
      element.badgeStyle = this.badgeStyles[Math.round(Math.random() * this.badgeStyles.length)];
    });

  }

  getTab(tabIndex: number, hasTitle: boolean, hasIcon: boolean, hasBadge: boolean) {
    let tab = Object.create(this.tabs[tabIndex % this.tabs.length]);

    if (!hasTitle) {
      tab.title = '';
    }

    if (!hasIcon) {
      tab.iconName = '';
    }

    if (!hasBadge) {
      tab.badge = '';
      tab.badgeStyle = '';
    }

    return tab;
  }

  getTitle(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].title;
  }

  getIconName(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].iconName;
  }

  getBadge(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].badge;
  }
  getBadgeStyle(tabIndex: number) {
    return this.tabs[tabIndex % this.tabs.length].badgeStyle;
  }


}
