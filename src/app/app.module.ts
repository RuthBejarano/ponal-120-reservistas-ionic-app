import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Clipboard } from '@ionic-native/clipboard';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { CheckinPage } from '../pages/checkin/checkin';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { ObligationsPage } from '../pages/obligations/obligations';
import { RightsPage } from './../pages/rights/rights';
import { LawPage } from './../pages/law/law';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CheckinPage,
    IntroPage,
    ObligationsPage,
    RightsPage,
    LawPage,
    StartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CheckinPage,
    IntroPage,
    RightsPage,
    ObligationsPage,
    LawPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Clipboard
  ]
})
export class AppModule {}