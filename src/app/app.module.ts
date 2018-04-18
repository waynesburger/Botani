import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TreeFactory } from '../providers/treefactory';
import { UserFactory } from '../providers/userfactory';
import { BotaniMap } from '../pages/map/map';

import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module'
import { SignupPage } from '../pages/signup/signup';
import { ConfirmSignInPage } from '../pages/confirmSignIn/confirmSignIn';
import { ConfirmSignUpPage } from '../pages/confirmSignUp/confirmSignUp';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { TabsPageModule } from '../pages/tabs/tabs.module'

import { Camera } from '@ionic-native/camera';

import { BotaniMapModule } from '../pages/map/map.module';
import { HelpPageModule } from '../pages/help/help.module'
import { DataCollectionModule } from  '../pages/dataCollection/dataCollection.module';
import { EntryPasser } from '../providers/entrypasser';
import { PopoverPage } from '../pages/dataCollection/dataCollection';

import { DynamoDB } from '../providers/aws.dynamodb';

import { AboutPageModule } from '../pages/help/about/about.module';
import { DcInfoPageModule } from '../pages/help/dc-info/dc-info.module';
import { LeaderboardInfoPageModule } from '../pages/help/leaderboard-info/leaderboard-info.module';
import { MapInfoPageModule } from '../pages/help/map-info/map-info.module';
import { TreeInfoPageModule } from '../pages/help/tree-info/tree-info.module';

import Amplify from 'aws-amplify';
import { LoginInfoProvider } from '../providers/login-info/login-info';
const aws_exports = require('../aws-exports').default;

Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmSignInPage,
    ConfirmSignUpPage,
    AccountPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    DataCollectionModule,
    HelpPageModule,
    TabsPageModule,
    AboutPageModule,
    DcInfoPageModule,
    LeaderboardInfoPageModule,
    MapInfoPageModule,
    TreeInfoPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverPage,
    LoginPage,
    SignupPage,
    ConfirmSignInPage,
    ConfirmSignUpPage,
    AccountPage,
    TabsPage,
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TreeFactory,
    UserFactory,
    HttpModule,
    EntryPasser,
    Camera,
    DynamoDB,
    LoginInfoProvider
  ]
})
export class AppModule {}

declare var AWS;
AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';