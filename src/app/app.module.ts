import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LandingPage } from '../pages/landing-page/landing-page';
import { TabsBottom } from '../pages/tabs-bottom/tabs-bottom';
import { TabsBottom2 } from '../pages/tabs-bottom2/tabs-bottom2';
import { TabsRight } from '../pages/tabs-right/tabs-right';
import { TabsRight2 } from '../pages/tabs-right2/tabs-right2';

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    TabsBottom,
    TabsBottom2,
    TabsRight,
    TabsRight2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    TabsBottom,
    TabsBottom2,
    TabsRight,
    TabsRight2
  ],
  providers: []
})
export class AppModule {}
