import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public admob: AdMobFree, private statusBar: StatusBar) {
    // this.showBanner();
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#000');
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
