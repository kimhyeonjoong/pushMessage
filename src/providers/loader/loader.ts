import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {

  private loading : any;

  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello LoaderProvider Provider');
  }

  show() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  
    
  }

  hide() {
    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }
}
