import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public admob: AdMobFree) {
    this.showBanner();
  }
  
  showBanner() {
    let bannerConfig: AdMobFreeBannerConfig = {
       isTesting: true,
       autoShow: true,
       id: 'ca-app-pub-3940256099942544/6300978111'
     };
      this.admob.banner.config(bannerConfig);
      
      this.admob.banner.prepare().then(() => {
      
      }).catch(e => console.log(e));
  }

}
