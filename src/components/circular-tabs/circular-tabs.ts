import { Component, ElementRef, Renderer, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit, trigger, state, style, transition, animate } from '@angular/core';
import { Tabs } from 'ionic-angular';

@Component({
  selector: 'circular-tabs',
  templateUrl: 'circular-tabs.html',
  host: {
    '(document:click)': 'onClick($event)',
  },
  animations: [
    trigger('menu', [
      state('open', style({
        transform: 'scale(1)',
        opacity: '1'
      })),
      state('close', style({
        transform: 'scale(0.3)',
        opacity: '0'
      })),
      transition('close => open', animate('300ms ease-in')),
      transition('open => close', animate('300ms ease-out'))
    ])
  ]
})

export class CircularTabs implements OnChanges, AfterViewInit {

  @ViewChild('list') listRef: ElementRef;
  @ViewChild('menuButton') menuButtonRef: ElementRef;

  @Input() tabRef: Tabs;
  @Input() totalAngle: number = 180;
  @Input() gapAngle: number = 2;
  @Input() startAngle: number = -1;
  @Input() closeOnTabSelection: boolean = true;
  @Input() closeOnBlur: boolean = true;
  @Input() closedBtnText: string = "";
  @Input() openedBtnText: string = "";
  @Input() closedBtnIconName: string = "";
  @Input() openedBtnIconName: string = "";

  isNavOpened: boolean = false;
  positionXLock: boolean = false;
  positionYLock: boolean = false;


  constructor(public elemRef: ElementRef, public renderer: Renderer) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['positionLock'].currentValue != changes['positionLock'].previousValue) { }
    this.styleMenu();

    this.logSettings();
  }

  ngAfterViewInit() {
    // hide original tabbar
    this.tabRef._tabbar.nativeElement.hidden = true;

    setTimeout(() => {
      if (this.positionXLock) {
        this.lockElemPositionX();
      }
      if (this.positionYLock) {
        this.lockElemPositionY();
      }
    }, 2000);

    this.styleMenu();


    // for (var i = 0; i < 10; i ++) {
    //   setTimeout(() => {
    //     this.totalAngle = 180+i;
    //     this.styleMenu();
    //   }, 1000*i);
    // }

  }

  lockElemPositionY() {
    let top = window.getComputedStyle(this.elemRef.nativeElement, null).getPropertyValue("top");
    this.renderer.setElementStyle(this.elemRef.nativeElement, 'top', top);
  }

  lockElemPositionX() {
    let left = window.getComputedStyle(this.elemRef.nativeElement, null).getPropertyValue("left");
    this.renderer.setElementStyle(this.elemRef.nativeElement, 'left', left)

  }

  selectTab(tabIndex) {
    this.tabRef.selectedIndex = tabIndex;
    this.changeTab();
    if (this.closeOnTabSelection) {
      this.toggleNav();
    }
  }

  changeTab() {
    this.tabRef.select(this.tabRef.selectedIndex);
  }

  toggleNav() {
    this.isNavOpened ? this.closeNav() : this.openNav();
  }

  closeNav() {
    this.isNavOpened = false;
    console.log('navclosed');

  }

  openNav() {
    this.isNavOpened = true;
    console.log('navopened');

  }

  styleMenu() {
    let numofTabs = this.tabRef._tabs.length;
    let centralAngel = (this.totalAngle / numofTabs) - (((numofTabs) * this.gapAngle) / numofTabs);
    let startAngle = this.startAngle >= 0 ? this.startAngle : ((180 - this.totalAngle) / 2);
    let tabbar_bgColor = window.getComputedStyle(this.tabRef._tabbar.nativeElement, null).getPropertyValue("background-color");
    let a_bgColor = tabbar_bgColor.indexOf('a') == -1 ? tabbar_bgColor.replace(')', ', 1)').replace('rgb', 'rgba') : console.log('rbg to rbga conversion error');  //convert rbg to rbga

    for (var i = 0; i < this.tabRef._tabs.length; i++) {
      if (typeof (this.listRef.nativeElement.children[i]) != 'undefined' && this.listRef.nativeElement.children[i] != null) {
        //li
        this.renderer.setElementStyle(this.listRef.nativeElement.children[i], "transform", "rotate(" + ((i * centralAngel) + startAngle + (i * this.gapAngle)) + "deg) skew(" + (90 - centralAngel) + "deg)");
        //a
        let tabbar_color = window.getComputedStyle(this.tabRef._tabbar.nativeElement.children[i], null).getPropertyValue("color");
        this.renderer.setElementStyle(this.listRef.nativeElement.children[i].children[0], 'color', tabbar_color);
        this.renderer.setElementStyle(this.listRef.nativeElement.children[i].children[0], 'background', "radial-gradient(transparent 35%, " + a_bgColor + " 35%)");
        this.renderer.setElementStyle(this.listRef.nativeElement.children[i].children[0], 'transform', "skew(" + ((90 - centralAngel) * -1) + "deg) rotate(" + ((centralAngel / 2) - 90) + "deg)");
      }
    }
    // button
    this.renderer.setElementStyle(this.menuButtonRef.nativeElement, 'background-color', tabbar_bgColor);
  }

  onClick(event) {
    if (this.closeOnBlur) {
      // check if clicked outside this element
      if (!this.elemRef.nativeElement.contains(event.target)) {
        this.closeNav();
        // console.log(this.elemRef.nativeElement);

        console.log('clicked outside closing Nav...');
      }
    }
  }

  logSettings() {
    console.log('CircularTab Settings:');
    console.log('totalAngle: ' + this.totalAngle);
    console.log('gapAngle: ' + this.gapAngle);
    console.log('startAngle: ' + this.startAngle);
    console.log('closeOnTabSelection: ' + this.closeOnTabSelection);
    console.log('closeOnBlur: ' + this.closeOnBlur);
    console.log('closedBtnText: ' + this.closedBtnText);
    console.log('openedBtnText: ' + this.openedBtnText);
    console.log('closedBtnIconName: ' + this.closedBtnIconName);
    console.log('openedBtnIconName: ' + this.openedBtnIconName);
  }

}
