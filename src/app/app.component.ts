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
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
import { FCM } from '@ionic-native/fcm/ngx';
import { Network } from '@ionic-native/network/ngx';
import { StorageService } from './services/storage.service';
import { CategoryService } from './services/category.service';
import { ToastService } from './services/toast.service';
import {
  rateTitle,
  rateText,
  rateNowButton,
  rateNoThanksButton,
  rateRemindButton
} from './changeLang';
import { Market } from '@ionic-native/market/ngx';
import { GeneralService } from './services/general.service';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService,
    private market: Market,
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    public toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    protected deeplinks: Deeplinks,
    public events: Events,
    private _storageService: StorageService,
    private _categoryService: CategoryService,
    private _generalService: GeneralService,
    private _toastService: ToastService,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('INSIDE PLATFORM READY');
      this.checkforInternet();
      this.setLanguage();
      this.onTapLinkAndnotification();
      this.getNewsForOffline();
      this.getCatForOffline();
      this.setLocalStorageItems();
      this.showRateModalFun();
      // this._admobService.BannerAd();
      this.statusBar.backgroundColorByHexString('#000000');
    });
    // };
  }
  subscriber(message: Observable<any>): string {
    let msg;
    message.subscribe(res => {
      msg = res;
    });
    console.log(msg);
    return msg;
  }
  // rate dialog
  rate() {
    localStorage.setItem('isRated', 'true');
    this.showRateModal = false;
    this.market.open('io.ionic.triviapost');
  }
  dismiss() {
    localStorage.setItem('isRated', 'true');
    this.showRateModal = false;
  }
  remindLater() {
    localStorage.setItem('isRated', 'pending');
    this.showRateModal = false;
  }

  setLanguage() {
    this.translate.addLangs(['en', 'hn', 'as', 'bn']);
    this.translate.setDefaultLang('en');
    if (localStorage.getItem('language')) {
      this.translate.use(localStorage.getItem('language'))
    }
  }

  onTapLinkAndnotification() {
    this.firebaseDynamicLinks.onDynamicLink().subscribe(
      (res: any) => {
        const postId = res.deepLink.split('?')[1].split('=')[1];
        this.router.navigate(['single-post/' + postId]);
        config.isvisited = true;
      },
      (error: any) => {
      }
    );
  }

  setLocalStorageItems() {
    if (!localStorage.getItem('clearLocalStorage')) {
      localStorage.clear();
      localStorage.setItem('clearLocalStorage', '1');
    }
    if(localStorage.getItem('interAdCounter')){
      localStorage.removeItem('interAdCounter')
    }
    if (!localStorage.getItem('language')) {
      this.showTourConfirm = true;
    }
    setTimeout(() => {
      this.splashScreen.hide();
    }, 2000);

    if (!localStorage.getItem('notification')) {
      localStorage.setItem('notification', 'true');
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

  showRateModalFun() {
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

  // check for internet
  checkforInternet() {
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.translate.get('No internet connection').subscribe((mes: any) => {
        this._toastService.toastFunction(mes, 'danger');
      })
    });
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