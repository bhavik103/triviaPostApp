import { Component, OnInit, ViewChild } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { FCM } from '@ionic-native/fcm/ngx';
declare var $: any;
import { Platform } from '@ionic/angular';
import * as _ from 'lodash';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { UserService } from '../services/user.service';
import 'hammerjs';
import { ToastService } from "../services/toast.service";
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { GeneralService } from '../services/general.service'
import { langList, tourSkip } from '../changeLang';
import { AlertController } from '@ionic/angular';
import { Market } from '@ionic-native/market/ngx';
import { andText, acceptTermsPolicy, termsTitle, privacyTitle, language, languagePageHead, rateTitle, modalBookmarkText, modalBookmarkTitle, modalNotificationText, modalNotificationTitle, proceedTour, tourReadPost, rateText, catTitle, rateNowButton, rateNoThanksButton, rateRemindButton } from '../changeLang';
import { AdmobfreeService } from '../services/admobfree.service';
import {
    AdMobFree
} from '@ionic-native/admob-free/ngx';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;
    selected;
    tokenLocalStorage: any;
    language: string;
    loggedInUser: any;
    notifyflag: any;
    newsArray: any;
    loading: boolean = false;
    hide: boolean;
    subscription: any;
    opts = {
        icon: false,
        label: true,
        toolbarPos: 'top',
        scrollable: true,
    };

    config: SuperTabsConfig = {
        allowElementScroll: false,
        transitionDuration: 100
    };
    categories: any;
    latestPost: any;
    navExtras: any;
    catSelect: any;
    languageList = langList;
    tourSkip = tourSkip;
    currentLangSelected: any;
    skip: string;
    offline: boolean;
    catLoading: boolean;
    firstTimeLoad: boolean;
    skipTheTour: boolean;
    startTour: boolean;
    showRateModal: boolean;
    rateTitle = rateTitle;
    rateText = rateText;
    andText = andText;
    privacyTitle = privacyTitle;
    termsTitle = termsTitle;
    languageStatic = language;
    catTitle = catTitle;
    rateNow = rateNowButton;
    acceptTermsPolicy = acceptTermsPolicy;
    rateLater = rateRemindButton;
    rateNoThanks = rateNoThanksButton;
    tourReadPost = tourReadPost;
    modalBookmarkTitle = modalBookmarkTitle
    modalBookmarkText = modalBookmarkText
    modalNotificationTitle = modalNotificationTitle
    modalNotificationText = modalNotificationText
    proceedTour = proceedTour
    languagePageHead = languagePageHead
    isTermsAndCond: any;
    catModal: any;
    catModalShow: string;
    counter: number;
    myloader: boolean;
    showTourConfirm: boolean;
    smallLoading: boolean;
    constructor(private admobFree: AdMobFree, private _admobService: AdmobfreeService, private market: Market, public alertController: AlertController, private _generalService: GeneralService, private firebaseDynamicLinks: FirebaseDynamicLinks, private _toastService: ToastService, private _userService: UserService, private screenOrientation: ScreenOrientation, private platform: Platform, private fcm: FCM, public _newsService: NewsService, private router: Router, public keyboard: Keyboard) {
    }

    // Event Listeners
    ngOnInit() {
        this.firebaseLinkRoute();
        this.language = localStorage.language;
        this.viewInitFunctions();
    }

    ionViewDidEnter() {
        this._admobService.interstitalAdOnFivePageChange()
        this.catModalShow = localStorage.getItem('catModalShow')
        if (!localStorage.getItem('language')) {
            this.showTourConfirm = true;
        }
        if (!localStorage.getItem('language')) {
            this.askForTour('none');
        }
        console.log('this.firstTimeLoad', this.firstTimeLoad)
        this.skip = localStorage.getItem('skip');
        this.catSelect = localStorage.getItem('catSelect');
        this.language = localStorage.getItem('language')
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
        this.notificationTapped();

    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }

    viewInitFunctions() {
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.catModalShow = localStorage.getItem('catModal');
        this.loading = false
        if (localStorage.getItem('language')) {
            this.getAllPost()
        }
        if (localStorage.getItem('skip')) {
            this.skip = '1';
        }
        this.navExtras = this._generalService.getExtras();
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == "1") {
            this.language = localStorage.getItem('language')
            this.catSelect = localStorage.getItem('catSelect')
        }
        this.fcmToken();
        this.checkforInternet();
    }

    askForTour(promptReply) {
        this.loading = true;
    }

    //get all news - HOME PAGE ( FEEDS )
    async getAllPost() {
        if (localStorage.getItem('skip')) {
            // this._admobService.BannerAd();
        }
        this.newsArray = []
        this.latestPost = [];
        localStorage.setItem('firstTimeLoaded', 'true');

        this.smallLoading = true;
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._newsService.getAllNews().subscribe(
                (res: any) => {
                    this.newsArray = res;
                    this.latestPost = res[0];
                    if (localStorage.getItem('firstLargePostClick') && [!localStorage.getItem('bookmarkFlag') || localStorage.getItem('shareFlag')] && !localStorage.getItem('skip')) {
                        this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
                    }
                    console.log('this.latestPost', this.latestPost)
                    this.newsArray.splice(0, 1);
                    if (!localStorage.getItem('skip')) {
                    }
                    $('.newsFeedBlock').hide();

                    if (!this.skip) {
                        $('.newsFeedBlock').show();
                        setTimeout(() => {
                            this.smallLoading = false;
                            this.loading = false
                        }, 1500);
                    } else {
                        this.smallLoading = false;
                        this.loading = false
                        $('.newsFeedBlock').show();
                    }
                    this.checkForRating();
                },
                (err) => {
                    this.newsArray = localStorage.newsArray;
                });
        } else {
            this.newsArray = JSON.parse(localStorage.getItem('newsArray'))
            this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
            this.newsArray.splice(0, 1)
        }
    }

    checkForRating() {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
            this.showRateModal = true;
        } else {
            this.showRateModal = false;
        }
    }
    //go to specific post when link click
    firebaseLinkRoute() {
        if (!config.isvisited && !config.counter) {
            this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
                var postId = res.deepLink.split('?')[1].split('=')[1];
                this.router.navigate(['single-post/' + postId]);
            }, (error: any) => {
                console.log(error)
            });
        }
    }
    //check for internet
    checkforInternet() {
        const alertOnlineStatus = () => {
            if (navigator.onLine) {
                this.hide = false;
            } else {
                this.hide = true;
                this._toastService.toastFunction('No internet connection', 'danger');
            }
        }
        window.addEventListener('online', alertOnlineStatus)
        window.addEventListener('offline', alertOnlineStatus)
    }
    //navigate to searchbar
    search() {
        if (localStorage.getItem('skip')) {
            this.router.navigateByUrl('/searchBar');
        }
    }
    settings() {
        if (localStorage.getItem('skip')) {
            this.router.navigateByUrl('/settings');
        }
    }
    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['/single-post/' + data.newsId]);
            if (data.wasTapped) {
                console.log('Received in background', data.wasTapped);
            } else {
                console.log('Received in foreground');
            }
        });
    }

    //check event for terms and cond.
    isChecked(e) {
        if (e.target.checked) {
            if (!this.selected) {
                $('#someID').attr('checked', false);
                this._toastService.toastFunction('Please Select any Language to continue', '')
            } else {
                setTimeout(() => {
                    this.selectLang();
                }, 1000);
            }
        }
    }

    //selectLangDiv
    selectLangDiv() {
        $('#someID').attr("checked", true);
        setTimeout(() => {
            this.selectLang()
        }, 500);

    }
    //select lang on first time app opens
    selectLang() {
        if (localStorage.getItem('skip')) {
            this.router.navigateByUrl('/login')
        } else {
            this.getAllPost();
        }
        let lang = this.selected;
        localStorage.setItem('language', lang);
        this._generalService.setExtras(lang);
        this.language = lang;
        this.catModal = true;
        this._generalService.setExtras(this.language);
        this.fcm.getToken().then(token => {
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                if (localStorage.getItem('annonymousNotify')) {
                    this._userService.firstTimeUser(this.selected).subscribe((res: any) => {
                        this._userService.serviceFunction();
                        localStorage.setItem('annonymousNotify', 'true');
                    },
                        (err) => {
                        });
                }
            }, 1000);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
    }

    //set fcm token
    fcmToken() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
            } else {
            }
        });
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

    startTourFunction() {
        this.showTourConfirm = false;
        $('.loadingContent').removeClass('showDifferentLoader')
        this.loading = false;
        this.startTour = true;
    }

    skipTourFunction() {
        this.loading = false;
        $('.loadingContent').removeClass('showDifferentLoader')
        this.skipTheTour = true;
        this.skip = '1';
        localStorage.setItem('bookmarkFlag', '1')
        localStorage.setItem('shareFlag', '1')
        localStorage.setItem('skip', '1')
        localStorage.setItem('firstLargePostClick', '1')
        localStorage.setItem('catModal', '1')
        this.catModalShow = '1'
    }
}