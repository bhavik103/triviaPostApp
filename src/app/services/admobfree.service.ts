import { Injectable } from '@angular/core';
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobfreeService {

  //Reward Video Ad's Configurations
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    isTesting: true, // Remove in production
    autoShow: false,
    id: "ca-app-pub-4273722207594594/6858203920"
  };

  constructor(
    private admobFree: AdMobFree,
    public platform: Platform
  ) {
    //Handle interstitial's close event to Prepare Ad again
    this.admobFree.on('admob.interstitial.events.CLOSE').subscribe(() => {
      // this.admobFree.interstitial.prepare()
      //   .then(() => {
      //     alert("Interstitial CLOSE");
      //   }).catch(e => alert(e));
    });
    //Handle Reward's close event to Prepare Ad again
    this.admobFree.on('admob.rewardvideo.events.CLOSE').subscribe(() => {
      // this.admobFree.rewardVideo.prepare()
      //   .then(() => {
      //     alert("Reward Video CLOSE");
      //   }).catch(e => alert(e));
    });
  }


  BannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true, 
      id: "ca-app-pub-4273722207594594/7353027940"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }

  InterstitialAd() {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-4273722207594594/4423612275"
    };
    this.admobFree.interstitial.config(interstitialConfig);

    this.admobFree.interstitial.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }

  RewardVideoAd() {
    let rewardConfig: AdMobFreeRewardVideoConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      // id: "ca-app-pub-4273722207594594/7353027940"
    };
    this.admobFree.rewardVideo.config(rewardConfig);

    this.admobFree.rewardVideo.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }

  interstitalAdOnFivePageChange(){
    if(!localStorage.getItem('interAdCounter')){
      localStorage.setItem('interAdCounter','1')
    }else if(localStorage.getItem('interAdCounter') == '1'){
      localStorage.setItem('interAdCounter','2')
    }else if(localStorage.getItem('interAdCounter') == '2'){
      localStorage.setItem('interAdCounter','3')
    }else if(localStorage.getItem('interAdCounter') == '3'){
      localStorage.setItem('interAdCounter','4')
    }else if(localStorage.getItem('interAdCounter') == '4'){
      localStorage.setItem('interAdCounter','5');
    }else if(localStorage.getItem('interAdCounter') == '5'){
      if(this.platform.is('cordova') && localStorage.getItem('skip')){
        this.InterstitialAd();
      }
      localStorage.setItem('interAdCounter','1');
    }
  }
}
