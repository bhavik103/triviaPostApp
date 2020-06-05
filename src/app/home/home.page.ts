import { LargePostPage } from './../large-post/large-post.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { FCM } from '@ionic-native/fcm/ngx';
declare var $: any;
import { Platform, MenuController, NavController } from '@ionic/angular';
import * as _ from 'lodash';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { UserService } from '../services/user.service';
import 'hammerjs';
import { ToastService } from '../services/toast.service';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { GeneralService } from '../services/general.service';
import { langList, tourSkip } from '../changeLang';
import { AlertController } from '@ionic/angular';
import { Market } from '@ionic-native/market/ngx';
import { andText, acceptTermsPolicy, termsTitle, privacyTitle, language, languagePageHead, rateTitle, modalBookmarkText, modalBookmarkTitle, modalNotificationText, modalNotificationTitle, proceedTour, tourReadPost, rateText, catTitle, rateNowButton, rateNoThanksButton, rateRemindButton } from '../changeLang';
import { AdmobfreeService } from '../services/admobfree.service';
import { IonContent } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { StorageService } from '../services/storage.service';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;
    @ViewChild(IonContent, { static: false }) content: IonContent;

    selected;
    tokenLocalStorage: any;
    language: string;
    loggedInUser: any;
    notifyflag: any;
    newsArray: any;
    loading = false;
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
    modalBookmarkTitle = modalBookmarkTitle;
    modalBookmarkText = modalBookmarkText;
    modalNotificationTitle = modalNotificationTitle;
    modalNotificationText = modalNotificationText;
    proceedTour = proceedTour;
    languagePageHead = languagePageHead;
    isTermsAndCond: any;
    catModal: any;
    catModalShow: string;
    counter: number;
    myloader: boolean;
    showTourConfirm: boolean;
    smallLoading: boolean;
    iframe: any;
    page_number = 1;
    page_limit = 20;
    navigate: { title: string; url: string; icon: string; }[];

    constructor(
        private menu: MenuController, private network: Network, private _admobService: AdmobfreeService, private market: Market,
        public alertController: AlertController, private _generalService: GeneralService, private nav: NavController,
        private firebaseDynamicLinks: FirebaseDynamicLinks, private _toastService: ToastService, private _userService: UserService,
        private screenOrientation: ScreenOrientation, private platform: Platform, private fcm: FCM, public _newsService: NewsService,
        private router: Router, public keyboard: Keyboard, public _storageService: StorageService
    ) {
        console.log('INSIDE CONSTRUCTER');
    }

    // Event Listeners
    ngOnInit() {
        console.log('HELLO 33');
        this.platform.ready().then(() => {
            this.firebaseLinkRoute();
        });
        this.language = localStorage.language;
        this.viewInitFunctions();
    }

    ionViewDidEnter() {
        this.notificationTapped();
        this.platform.ready().then(async () => {
            if (!localStorage.getItem('deviceToken')) {
                this.fcm.getToken().then(token => {
                    localStorage.setItem('deviceToken', token);
                    setTimeout(async () => {
                        console.log('this.selected', localStorage.getItem('language'));
                        if (!localStorage.getItem('accessToken')) {
                            this._userService.firstTimeUser(await localStorage.getItem('language')).subscribe((res: any) => {
                                this._userService.serviceFunction();
                                if (!localStorage.getItem('annonymousNotify')) {
                                    localStorage.setItem('annonymousNotify', 'true');
                                }
                            },
                                (err) => {
                                });
                        } else {
                            const accessToken = await localStorage.getItem('accessToken');
                            const deviceToken = await localStorage.getItem('deviceToken');
                            this._userService.loggedInUserDeviceToken(accessToken, deviceToken).subscribe((res: any) => {
                                console.log('RES FROM UPDATING DEVICE TOKEN', res);
                            });
                        }
                    }, 1000);
                });
                this.fcm.onTokenRefresh().subscribe(token => {
                    localStorage.setItem('deviceToken', token);
                });
            } else {
                // setTimeout(async () => {
                console.log('this.selected', localStorage.getItem('language'));
                if (!localStorage.getItem('accessToken')) {
                    this._userService.firstTimeUser(await localStorage.getItem('language')).subscribe((res: any) => {
                        this._userService.serviceFunction();
                        if (!localStorage.getItem('annonymousNotify')) {
                            localStorage.setItem('annonymousNotify', 'true');
                        }
                    },
                        (err) => {
                        });
                } else {
                    const accessToken = await localStorage.getItem('accessToken');
                    const deviceToken = await localStorage.getItem('deviceToken');
                    this._userService.loggedInUserDeviceToken(accessToken, deviceToken).subscribe((res: any) => {
                        console.log('RES FROM UPDATING DEVICE TOKEN', res);
                    });
                }
                // }, 1000);
            }
        });
        if (!localStorage.getItem('firstLargePostClick') && localStorage.getItem('language')) {
            this.router.navigateByUrl('sidebar/tour-home');
        }
        if (this.platform.is('cordova')) {
            this._admobService.interstitalAdOnFivePageChange();
        }
        this.catModalShow = localStorage.getItem('catModalShow');
        if (!localStorage.getItem('language')) {
            this.askForTour('none');
        }
        console.log('this.firstTimeLoad', this.firstTimeLoad);
        this.skip = localStorage.getItem('skip');
        this.catSelect = localStorage.getItem('catSelect');
        this.language = localStorage.getItem('language');
    }

    ionViewWillLeave() {
        console.log('Leaving Home page');
        this.page_number = 1;
        this.newsArray = [];
        this.latestPost = {};
        this.subscription.unsubscribe();
    }

    ionViewWillUnload() {
        console.log('Unloading Home page');
    }

    viewInitFunctions() {
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            });
        }

        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            const base64Url = this.tokenLocalStorage.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        console.log('HELLO, BYE');
        if (!localStorage.getItem('language')) {
            $('.tourModal').show();
            this.showTourConfirm = true;
        }
        if (localStorage.getItem('language')) {
            this.smallLoading = true;
            if (this.platform.is('cordova')) {
                this._admobService.BannerAd();
            }
            this.getAllPost(false, '');
        }
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
        this.catModalShow = localStorage.getItem('catModal');
        // this.loading = false
        if (localStorage.getItem('skip')) {
            this.skip = '1';
        }
        this.navExtras = this._generalService.getExtras();
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == '1') {
            this.language = localStorage.getItem('language');
            this.catSelect = localStorage.getItem('catSelect');
        }
        this.platform.ready().then(() => {
            this.fcmToken();
        });
        this.checkforInternet();
    }

    askForTour(promptReply) {
        this.loading = true;
    }
    // get all news - HOME PAGE ( FEEDS )
    async getAllPost(isFirstLoad, event) {
        console.log('HELLOOOOOO');
        if (this.page_number == 1) {
            this.smallLoading = true;
            this.newsArray = [];
            this.latestPost = {};
        }
        // this.latestPost = {};
        localStorage.setItem('firstTimeLoaded', 'true');
        if (this.network.type != 'none') {

            this._newsService.getAllNews(this.page_number, this.page_limit).subscribe(
                (res: any) => {
                    if (this.page_number == 1) {
                        this.latestPost = res.shift();
                    }
                    console.log('this.latestPost', this.latestPost);
                    this.newsArray.push(...res);
                    // this.newsArray = res;
                    if (isFirstLoad) {
                        event.target.complete();
                    }

                    this.page_number++;
                    // this.latestPost = this.newsArray.shift();
                    console.log('this.allnews =======', this.newsArray);
                    console.log('this.allnews =======', this.latestPost);
                    // this.checkForRating();
                    // setTimeout(() => {
                    this.smallLoading = false;
                    // }, 5000);
                },
                (err) => {
                    this.smallLoading = false;
                    this.newsArray = JSON.parse(localStorage.newsArray);
                    this.latestPost = this.newsArray.shift();
                });
        } else {
            const newsArrayOffline = await this._storageService.getNewsForOffline();
            this.newsArray = JSON.parse(newsArrayOffline);
            this.latestPost = this.newsArray.shift();
            this.smallLoading = false;
        }
    }

    doInfinite(event) {
        if (this.network.type == 'none') {
            this._toastService.toastFunction('No internet connection', 'danger');
            event.target.complete();
        } else {
            this.getAllPost(true, event);
        }
        console.log(event);
    }

    checkForRating() {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
            this.showRateModal = true;
        } else {
            this.showRateModal = false;
        }
    }
    // go to specific post when link click
    firebaseLinkRoute() {
        if (!config.isvisited && !config.counter) {
            this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
                const postId = res.deepLink.split('?')[1].split('=')[1];
                this.router.navigate(['single-post/' + postId]);
            }, (error: any) => {
                console.log(error);
            });
        }
    }
    // check for internet
    checkforInternet() {
        const alertOnlineStatus = () => {
            if (navigator.onLine) {
                this.hide = false;
            } else {
                this.hide = true;
                this._toastService.toastFunction('No internet connection', 'danger');
            }
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    }
    // navigate to searchbar
    search() {
        if (localStorage.getItem('skip')) {
            this.nav.navigateRoot('/searchBar');
        }
    }
    settings() {
        if (localStorage.getItem('skip')) {
            // this.router.navigateByUrl('/settings');
            this.nav.navigateRoot('/settings');
        }
    }
    // Notification and utility
    notificationTapped() {
        console.log('TAPPED');
        this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
                console.log('TAPPED', data);
                this.router.navigate(['/single-post/' + data.newsId]);
                console.log('Received in background', data.wasTapped);
            } else {
                console.log('Received in foreground');
            }
        });
    }

    // check event for terms and cond.
    isChecked(e) {
        if (e.target.checked) {
            if (!this.selected) {
                $('#someID').attr('checked', false);
                this._toastService.toastFunction('Please Select any Language to continue', '');
            } else {
                setTimeout(() => {
                    this.selectLang();
                }, 1000);
            }
        }
    }

    // selectLangDiv
    selectLangDiv() {
        $('#someID').attr('checked', true);
        setTimeout(() => {
            this.selectLang();
        }, 500);

    }
    // select lang on first time app opens
    selectLang() {
        if (localStorage.getItem('skip')) {
            this.router.navigateByUrl('/login');
        } else {
            // this.getAllPost();
        }
        const lang = this.selected;
        localStorage.setItem('language', lang);
        console.log('Date in home', new Date().getSeconds());
        this.router.navigateByUrl('sidebar/tour-home');
    }

    // set fcm token
    fcmToken() {
        this.platform.ready().then(() => {
            this.fcm.onNotification().subscribe(data => {
                this.router.navigate(['home/single-news/' + data.newsId]);
                if (data.wasTapped) {
                } else {
                }
            });
        });
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

    startTourFunction() {
        $('.tourModal').hide();
        $('.loadingContent').removeClass('showDifferentLoader');

        setTimeout(() => {
            this.showTourConfirm = false;
        }, 1000);
        this.loading = false;
        this.startTour = true;
    }

    skipTourFunction() {
        $('.tourModal').hide();
        this.loading = false;
        $('.loadingContent').removeClass('showDifferentLoader');
        this.skipTheTour = true;
        this.skip = '1';
        localStorage.setItem('bookmarkFlag', '1');
        localStorage.setItem('shareFlag', '1');
        localStorage.setItem('skip', '1');
        localStorage.setItem('firstLargePostClick', '1');
        localStorage.setItem('catModal', '1');
        this.catModalShow = '1';
        $('.skipLanguage').show();
    }

    openMenu() {
        console.log('HELLO');
        this.menu.open('mainContent');
    }
}
