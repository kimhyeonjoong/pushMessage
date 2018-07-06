import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoaderProvider } from '../../providers/loader/loader';
import * as firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private account = {
    email : '',
    password : ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loader: LoaderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoSignup() {
   this.navCtrl.push(SignupPage); 
  }

  login() {
    this.loader.show();
    firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password)
    .then((result) => {
      console.log("login success");
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
    this.loader.hide();
  }
}
