import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logout() {
    firebase.auth().signOut().then(() => {
      console.log("logout");
    }).catch(function(error) {
      // An error happened.
    });
   }
}
