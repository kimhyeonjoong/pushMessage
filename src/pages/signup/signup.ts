import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import * as moment from 'moment';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})    
export class SignupPage {

  private account = {
    name : '',
    email : '',
    password : '',
    group : ''
  }

  private playerID : any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.getOneSignalPlayerId();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    console.log("account");
    console.log(this.account);
    firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
    .then((result) => {

      var today = moment().format('YYYY-MM-DD');

      

      var tmpData = {
        name: this.account.name,
        id: result.uid,
        email: this.account.email,
        password: this.account.password,
        group: this.account.group,
        playerId: this.playerID,
        date: today
      };
  
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/users/' + tmpData.id] = tmpData;
    
      firebase.database().ref().update(updates)
      .then(()=>{
        console.log("success put in data");
      })
      .catch((error) => {
        console.log(error.message);
      });
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  getOneSignalPlayerId() {
    // window["plugins"].OneSignal.getPermissionSubscriptionState((status) => {
    //   status.permissionStatus.hasPrompted;
    //   status.permissionStatus.status;

    //   status.subscriptionStatus.subscribed;
    //   status.subscriptionStatus.userSubscriptionSetting;
    //   status.subscriptionStatus.pushToken;

    //   this.playerID = status.subscriptionStatus.userId;
    //   console.log("playerId");
    //   console.log(status.subscriptionStatus.userId);
    // });
  }
}
