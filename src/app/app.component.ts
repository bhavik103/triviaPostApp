import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Observable } from 'rxjs/Observable';
import { ToastController, } from '@ionic/angular';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { config } from './config';
import { Events } from '@ionic/angular';
import 'rxjs/add/observable/fromEvent';
import { UserService } from './services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
import { rateTitle, rateText, rateNowButton, rateNoThanksButton, rateRemindButton } from './changeLang';
import { Market } from '@ionic-native/market/ngx';
import { NewsService } from './services/news.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  hide: boolean = true;
  toast: any;
  skip: any;
  hidden: boolean;
  loginModalFlag = false;
  signupForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  rateTitle = rateTitle;
  rateText = rateText;
  rateNow = rateNowButton;
  rateLater = rateRemindButton;
  rateNoThanks = rateNoThanksButton;
  user = {
    userName: "",
    email: "",
    mobile: "",
    password: "",
  }
  loading: boolean;
  lang: string;
  language: string;
  showRateModal: boolean;
  navLinksArray = [];
  showTourConfirm: boolean;
  showLoader: boolean;
  showTourModel: boolean;
  constructor(
    private market: Market,
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private _userService: UserService,
    public toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    protected deeplinks: Deeplinks,
    public events: Events,
    private _newsService: NewsService
  ) {
    if(!localStorage.getItem('language')){
      this.showTourConfirm = true
    }
    setTimeout(() => {
      this.splashScreen.hide();
    }, 2000);
    this.initializeApp();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate: any = new Date();
    const secondDate: any = JSON.parse(localStorage.getItem('ratingModalDate'))
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    if (diffDays >= 1) {
      setTimeout(() => {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending' || !localStorage.getItem('isRated')) {
          if (!localStorage.getItem('language')) {
            this.language = 'en';
            console.log("THIS.LANGUAGE", this.language)
          } else {
            this.language = localStorage.getItem('language')
            console.log("THIS.LANGUAGE", this.language)
          }
          this.showRateModal = true;
          localStorage.setItem('ratingModalDate', JSON.stringify(new Date()))
        } else {
          this.showRateModal = false;
        }
      }, 5 * 60 * 1000);
    }
    this.skip = localStorage.getItem('skip')
    if (localStorage.getItem('skip') != '1') {
      setTimeout(() => {
        localStorage.setItem('ratingModalDate', JSON.stringify(new Date()))
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
          if (!localStorage.getItem('language')) {
            this.language = 'en';
            console.log("THIS.LANGUAGE", this.language)
          } else {
            this.language = localStorage.getItem('language')
            console.log("THIS.LANGUAGE", this.language)
          }
          this.showRateModal = true;
        } else {
          this.showRateModal = false;
        }
      }, 5 * 60 * 1000);
    }
    if (localStorage.getItem('language')) {
      localStorage.setItem('skip', '1')
      localStorage.setItem('bookmarkFlag', '1')
      localStorage.setItem('shareFlag', '1')
      localStorage.setItem('firstLargePostClick', '1')
      localStorage.setItem('catModal', '1')
    }
    if (!localStorage.getItem('isVisited')) {
      let isVisited = [];
      localStorage.setItem('isVisited', JSON.stringify(isVisited))
    }
    localStorage.removeItem('firstTimeLoaded');

    this._userService.currentData.subscribe(value => {
      console.log("VALUEEEE", value)
      if (this.loginModalFlag != true) {
        //generates random time for opennig modal between 25 and 40 seconds
        let randomNum = Math.floor(Math.random() * (30 - 14 + 1)) + 14;
        setTimeout(() => {
          $('#fadeDiv').addClass('opened');
          this.hidden = true;
          this.loginModalFlag = true;
        }, randomNum * 1000);
      }
    });
    this.deeplinks.route({
      '/': {},
      '/nr5y': { "post:": true },
      '/post/:id': { "post:": true }
    }).subscribe((match) => {
      console.log("match link", match.$args.id);
      this.router.navigate(['single-post/' + match.$args.id]);
    },
      (nomatch) => {
      });
    var offline = Observable.fromEvent(document, "offline");
    var online = Observable.fromEvent(document, "online");

    offline.subscribe(() => {
      this.hide = false;
      this.toast = this.toastController.create({
        message: 'No internet connection',
        animated: true,
        showCloseButton: true,
        duration: 2000,
        closeButtonText: "OK",
        cssClass: "my-toast",
        position: "bottom",
        color: "danger"
      }).then((obj) => {
        obj.present();
      });
    });

    online.subscribe(() => {
      this.toastController.dismiss();
      this.hide = true;
    });

    if (!localStorage.getItem('notification')) {
      localStorage.setItem('notification', "true");
    }
    if (!localStorage.getItem('skip')) {
      this._newsService.getAllNews().subscribe(
        (res: any) => {
          console.log("GOT NEWS IN APP COMPONENT", res)
        })
    }
  }

  initializeApp() {
    const handleBranch = () => {
      this.platform.ready().then(() => {
        console.log("INSIDE PLATFORM READY")
        // this._admobService.BannerAd();
        this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
          var postId = res.deepLink.split('?')[1].split('=')[1];
          this.router.navigate(['single-post/' + postId]);
          config.isvisited = true;
        }, (error: any) => {
          console.log(error)
        });
        this.statusBar.backgroundColorByHexString('#000000');
      });
    }
  }
  //rate dialog
  rate() {
    localStorage.setItem('isRated', 'true')
    this.showRateModal = false
    this.market.open('io.ionic.triviapost');
  }
  dismiss() {
    localStorage.setItem('isRated', 'true')
    this.showRateModal = false
  }
  remindLater() {
    localStorage.setItem('isRated', 'pending')
    this.showRateModal = false
  }

  openRatingModal() {
    console.log("INSIDE APP COMPONENT");
    if (!localStorage.getItem('rateModalFirst')) {
      this.language = localStorage.getItem('language')
      this.showRateModal = true;
    }
    if (this.showRateModal == true) {
      localStorage.setItem('rateModalFirst', '1')
    }
  }
}