import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { DummyTabs } from '../../providers/dummy-tabs';

import { CircularTabs } from '../../components/circular-tabs/circular-tabs';

@Component({
  selector: 'page-tabs-bottom2',
  templateUrl: 'tabs-bottom2.html'
})
export class TabsBottom2 {

  @ViewChild('myTabs') myTabs: Tabs;
  @ViewChild('myCircularTabs') circularTabs: CircularTabs;

  ionTabs: any = [];
  pages: any = [];
  tabSettings: any;

  numOfTabs: number;
  hasTitle: boolean;
  hasIcon: boolean;
  hasBadge: boolean;

  constructor(public navCtrl: NavController, public dummyTabs: DummyTabs) {

    // Menu Settings
    this.tabSettings = {
      totalAngle: 180,
      gapAngle: 2,
      startAngle: -1,
      closeOnTabSelect: false,
      closeOnBlur: false,
      closedBtnIconName: "arrow-up",
      openedBtnIconName: "close"
    };

    // add tabs
    this.numOfTabs = 5;
    this.hasTitle = false;
    this.hasIcon = true;
    this.hasBadge = false;
    this.addTabs();

  }

  ionViewDidEnter() {
    this.circularTabs.openNav();
  }

  addTabs() {
    for (var i = 0; i < this.numOfTabs; i++) {
      this.ionTabs.push(this.dummyTabs.getTab(i, this.hasTitle, this.hasIcon, this.hasBadge));
    }
  }

  resetTitle() {
    for (var i = 0; i < this.numOfTabs; i++) {
      if (this.hasTitle) {
        this.ionTabs[i].title = this.dummyTabs.getTitle(i);
      } else {
        this.ionTabs[i].title = '';
      }
    }
  }
  resetIcon() {
    for (var i = 0; i < this.numOfTabs; i++) {
      if (this.hasIcon) {
        this.ionTabs[i].iconName = this.dummyTabs.getIconName(i);
      } else {
        this.ionTabs[i].iconName = '';
      }
    }
  }
  resetBadge() {
    for (var i = 0; i < this.numOfTabs; i++) {
      if (this.hasBadge) {
        this.ionTabs[i].badge = this.dummyTabs.getBadge(i);
        this.ionTabs[i].badgeStyle = this.dummyTabs.getBadgeStyle(i);
      } else {
        this.ionTabs[i].badge = '';
        this.ionTabs[i].badgeStyle = '';
      }
    }
  }



}
