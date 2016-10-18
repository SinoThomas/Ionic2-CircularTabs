import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { DummyTabs } from '../../providers/dummy-tabs';
import { Settings } from '../settings/settings';

import { CircularTabs } from '../../components/circular-tabs/circular-tabs';

@Component({
  selector: 'page-tabs-bottom',
  templateUrl: 'tabs-bottom.html'
})
export class TabsBottom {

  @ViewChild('myCircularTabs') circularTabs: CircularTabs;

  ionTabs: any = [];
  pages: any = [];
  menuSettings: any;

  constructor(public navCtrl: NavController, public DummyTabs: DummyTabs) {
    console.log('constructor !');

    // Menu Settings
    this.menuSettings = {
      totalAngle: 200,
      gapAngle: 2,
      startAngle: -1,
      closeOnTabSelect: false,
      isNavOpened: true,
      closedBtnText: "Menu",
      openedBtnText: "Close"
    };

    // add 4 tabs
    for (var i = 0; i < 4; i++) {
      this.addTab(i);
    }


  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter !');
    this.circularTabs.openNav();

  }

  addTab(index: number) {
    this.ionTabs.push(this.DummyTabs.getTab(index, true, true, true))
  }



}
