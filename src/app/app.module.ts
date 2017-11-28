import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { CircularTabs } from '../components/circular-tabs/circular-tabs';
import { DummyTabs } from '../providers/dummy-tabs';

import { LandingPage } from '../pages/landing-page/landing-page';
import { TabsBottom } from '../pages/tabs-bottom/tabs-bottom';
import { TabsBottom2 } from '../pages/tabs-bottom2/tabs-bottom2';
import { Home } from '../pages/home/home';
import { Calendar } from '../pages/calendar/calendar';
import { Camera } from '../pages/camera/camera';
import { Cloud } from '../pages/cloud/cloud';
import { Contact } from '../pages/contact/contact';
import { Folder } from '../pages/folder/folder';
import { Images } from '../pages/images/images';
import { Map } from '../pages/map/map';
import { Settings } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    CircularTabs,
    LandingPage, TabsBottom, TabsBottom2,
    Home, Calendar, Camera, Cloud, Contact, Folder, Images, Map, Settings
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage, TabsBottom, TabsBottom2,
    Home, Calendar, Camera, Cloud, Contact, Folder, Images, Map, Settings
  ],
  providers: [
    DummyTabs,
    StatusBar
  ]
})
export class AppModule { }
