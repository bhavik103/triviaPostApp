import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Observable } from 'rxjs/Observable';
import { ToastController } from '@ionic/angular';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { config } from './config';
import { Events } from '@ionic/angular';
import 'rxjs/add/observable/fromEvent';
import { UserService } from './services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
import { FCM } from '@ionic-native/fcm/ngx';
import { Network } from '@ionic-native/network/ngx';
import { StorageService } from './services/storage.service';
import { CategoryService } from './services/category.service';
import {
  rateTitle,
  rateText,
  rateNowButton,
  rateNoThanksButton,
  rateRemindButton
} from './changeLang';
import { Market } from '@ionic-native/market/ngx';
import { NewsService } from './services/news.service';
import { GeneralService } from './services/general.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  hide = true;
  toast: any;
  skip: any;
  hidden: boolean;
  loginModalFlag = false;
  signupForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  rateTitle = rateTitle;
  rateText = rateText;
  rateNow = rateNowButton;
  rateLater = rateRemindButton;
  rateNoThanks = rateNoThanksButton;
  user = {
    userName: '',
    email: '',
    mobile: '',
    password: ''
  };
  loading: boolean;
  lang: string;
  language: string;
  showRateModal: boolean;
  navLinksArray = [];
  showTourConfirm: boolean;
  showLoader: boolean;
  showTourModel: boolean;
  page_number = 1;
  page_limit = 10;
  constructor(
    private network: Network,
    private fcm: FCM,
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
    private _newsService: NewsService,
    private _storageService: StorageService,
    private _categoryService: CategoryService,
    private _generalService: GeneralService,
  ) {
    // this function is also present in home page
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => {
        console.log('YEAHHHHHHHHHHHH', data);
        if (data.wasTapped) {
          $('.indexLoader').css('display', 'block');
          console.log('TAPPED', data);
          this.router.navigate(['/single-post/' + data.newsId]);
          console.log('Received in background', data.wasTapped);
        } else {
          console.log('Received in foreground');
        }
      });
      this.firebaseDynamicLinks.onDynamicLink().subscribe(
        (res: any) => {
          console.log('DEEPLINK', res);
          const postId = res.deepLink.split('?')[1].split('=')[1];
          this.router.navigate(['single-post/' + postId]);
          config.isvisited = true;
        },
        (error: any) => {
          console.log(error);
        }
      );
    });
    this.getNewsForOffline();
    this.getCatForOffline();
    if (!localStorage.getItem('clearLocalStorage')) {
      localStorage.clear();
      localStorage.setItem('clearLocalStorage', '1');
    }
    if (!localStorage.getItem('language')) {
      this.showTourConfirm = true;
    }
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 2000);
    });
    this.initializeApp();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate: any = new Date();
    const secondDate: any = JSON.parse(localStorage.getItem('ratingModalDate'));
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    if (diffDays >= 1) {
      setTimeout(() => {
        if (
          localStorage.getItem('isRated') != 'true' ||
          localStorage.getItem('isRated') == 'pending' ||
          !localStorage.getItem('isRated')
        ) {
          if (!localStorage.getItem('language')) {
            this.language = 'en';
            console.log('THIS.LANGUAGE', this.language);
          } else {
            this.language = localStorage.getItem('language');
            console.log('THIS.LANGUAGE', this.language);
          }
          this.showRateModal = true;
          localStorage.setItem('ratingModalDate', JSON.stringify(new Date()));
        } else {
          this.showRateModal = false;
        }
      }, 5 * 60 * 1000);
    }
    this.skip = localStorage.getItem('skip');
    if (localStorage.getItem('skip') != '1') {
      setTimeout(() => {
        localStorage.setItem('ratingModalDate', JSON.stringify(new Date()));
        if (
          localStorage.getItem('isRated') != 'true' ||
          localStorage.getItem('isRated') == 'pending'
        ) {
          if (!localStorage.getItem('language')) {
            this.language = 'en';
            console.log('THIS.LANGUAGE', this.language);
          } else {
            this.language = localStorage.getItem('language');
            console.log('THIS.LANGUAGE', this.language);
          }
          this.showRateModal = true;
        } else {
          this.showRateModal = false;
        }
      }, 5 * 60 * 1000);
    }
    if (localStorage.getItem('language')) {
      localStorage.setItem('skip', '1');
      localStorage.setItem('bookmarkFlag', '1');
      localStorage.setItem('shareFlag', '1');
      localStorage.setItem('firstLargePostClick', '1');
      localStorage.setItem('catModal', '1');
    }
    if (!localStorage.getItem('isVisited')) {
      const isVisited = [];
      localStorage.setItem('isVisited', JSON.stringify(isVisited));
    }
    localStorage.removeItem('firstTimeLoaded');

    this._userService.currentData.subscribe(value => {
      console.log('VALUEEEE', value);
      if (this.loginModalFlag != true) {
        // generates random time for opennig modal between 25 and 40 seconds
        const randomNum = Math.floor(Math.random() * (30 - 14 + 1)) + 14;
        setTimeout(() => {
          $('#fadeDiv').addClass('opened');
          this.hidden = true;
          this.loginModalFlag = true;
        }, randomNum * 1000);
      }
    });
    this.platform.ready().then(() => {
      this.deeplinks
        .route({
          '/': {},
          '/nr5y': { 'post:': true },
          '/post/:id': { 'post:': true }
        })
        .subscribe(
          match => {
            console.log('match link', match.$args.id);
            this.router.navigate(['single-post/' + match.$args.id]);
          },
          nomatch => { }
        );
    });
    const offline = Observable.fromEvent(document, 'offline');
    const online = Observable.fromEvent(document, 'online');

    offline.subscribe(() => {
      this.hide = false;
      this.toast = this.toastController
        .create({
          message: 'No internet connection',
          animated: true,
          showCloseButton: true,
          duration: 2000,
          closeButtonText: 'OK',
          cssClass: 'my-toast',
          position: 'bottom',
          color: 'danger'
        })
        .then(obj => {
          obj.present();
        });
    });

    online.subscribe(() => {
      this.toastController.dismiss();
      this.hide = true;
    });

    if (!localStorage.getItem('notification')) {
      localStorage.setItem('notification', 'true');
    }
    if (!localStorage.getItem('skip')) {
      // this._newsService.getAllNews(this.page_number, 'offline').subscribe((res: any) => {
      //   console.log("GOT NEWS IN APP COMPONENT", res);
      // });
    }
  }

  initializeApp() {
    const handleBranch = () => {
      this.platform.ready().then(() => {
        console.log('INSIDE PLATFORM READY');
        // this._admobService.BannerAd();
        this.statusBar.backgroundColorByHexString('#000000');
      });
    };
  }
  // rate dialog
  rate() {
    localStorage.setItem('isRated', 'true');
    this.showRateModal = false;
    this.platform.ready().then(() => {
      this.market.open('io.ionic.triviapost');
    });
  }
  dismiss() {
    localStorage.setItem('isRated', 'true');
    this.showRateModal = false;
  }
  remindLater() {
    localStorage.setItem('isRated', 'pending');
    this.showRateModal = false;
  }

  openRatingModal() {
    console.log('INSIDE APP COMPONENT');
    if (localStorage.getItem('skip')) {
      if (!localStorage.getItem('rateModalFirst')) {
        this.language = localStorage.getItem('language');
        this.showRateModal = true;
      }
      if (this.showRateModal == true) {
        localStorage.setItem('rateModalFirst', '1');
      }
    }
  }

  getNewsForOffline() {
    if (this.network.type != 'none') {
      this._storageService.getNewsForOfflineFromServer().subscribe(
        async (res: any) => {
          this._storageService.storeNewsForOffline(JSON.stringify(res.data)).then((storageRes) => {
          });
        },
        (error) => {
        });
    }
  }

  getCatForOffline() {
    if (this.network.type != 'none') {
      this._categoryService.getAll().toPromise().then(
        async (res: any) => {
          console.log(res);
          this._storageService.storeCatForOffline(JSON.stringify(res)).then((storageRes) => {
          });
        },
        (error) => {
        });

      this._generalService.getPolicy().subscribe((res) => {
      });
    }
  }
}
