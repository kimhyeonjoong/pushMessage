import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyDiYkhsFwl_u-fxOEeWp0r5G2ySR1hltLw",
  authDomain: "pushmessage-9e226.firebaseapp.com",
  databaseURL: "https://pushmessage-9e226.firebaseio.com",
  projectId: "pushmessage-9e226",
  storageBucket: "pushmessage-9e226.appspot.com",
  messagingSenderId: "268964357328"
};

firebase.initializeApp(config);

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      // var notificationOpenedCallback = (jsonData) => {
      //   console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      // };
  
      // window["plugins"].OneSignal
      //   .startInit("60940cd0-baae-4ccc-a700-d5b3e3b1a0b1", "268964357328")
      //   .handleNotificationOpened(notificationOpenedCallback)
      //   .endInit(); 

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

