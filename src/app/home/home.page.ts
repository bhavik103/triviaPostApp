import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
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
import {acceptTermsPolicy, termsTitle, privacyTitle, language, languagePageHead, rateTitle, modalBookmarkText, modalBookmarkTitle, modalNotificationText, modalNotificationTitle, proceedTour, tourReadPost, rateText, catTitle, rateNowButton, rateNoThanksButton, rateRemindButton } from '../changeLang';
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
    constructor(private market: Market, public alertController: AlertController, private _generalService: GeneralService, private firebaseDynamicLinks: FirebaseDynamicLinks, private _toastService: ToastService, private _userService: UserService, private screenOrientation: ScreenOrientation, private platform: Platform, private fcm: FCM, public _newsService: NewsService, public _categoryService: CategoryService, private router: Router, public keyboard: Keyboard) {
        if (!localStorage.getItem('skip')) {
            $('body').addClass('tourBackDrop')
        } else {
            $('body').addClass('notfound')
        }
    }

    // Event Listeners
    ngOnInit() {
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == "1") {
            this.getAllPost();
        }
        this.firebaseLinkRoute();
        this.language = localStorage.language;
        this.viewInitFunctions();
    }

    ionViewDidEnter() {
        if (!localStorage.getItem('language')) {
            this.askForTour();
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
        console.log("SKIPPPPPPPPPPPPPPPP", this.skip)
        this.navExtras = this._generalService.getExtras();
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == "1") {
            this.language = localStorage.getItem('language')
            this.catSelect = localStorage.getItem('catSelect')
        }
        this.fcmToken();
        this.checkforInternet();
    }

    async askForTour() {
        this.loading = true;
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Would you like to start the tour?',
            cssClass: 'alertCustomCss',
            buttons: [
                {
                    text: 'Skip',
                    role: 'cancel',

                    handler: (blah) => {
                        this.loading = false;
                        this.skipTheTour = true;
                        this.skip = '1';
                        localStorage.setItem('skip', '1')
                        // localStorage.setItem('catModalShow', '1')
                        // localStorage.setItem('bookmarkFlag', '1')
                        // localStorage.setItem('shareFlag', '1')
                        localStorage.setItem('firstLargePostClick', '1')
                        localStorage.setItem('catModal', '1')
                        this.catModalShow = '1'
                    }
                }, {
                    text: 'Start',
                    handler: () => {
                        this.loading = false;
                        this.startTour = true;
                    }
                }
            ]
        });

        await alert.present();
    }
    async skipTour() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Are you sure you want to skip the <strong>tour</strong>?',
            cssClass: 'alertCustomCss',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',

                    handler: (blah) => {
                    }
                }, {
                    text: 'Skip',

                    handler: () => {
                        localStorage.setItem('skip', 'true');
                        localStorage.setItem('shareBlink', '1');
                        localStorage.setItem('catSelect', '1');
                        localStorage.setItem('firstLargePostClick', '1');
                        this.skip = localStorage.getItem('skip');
                        this.router.navigateByUrl('all-categories');
                        this.getAllPost();
                    }
                }
            ]
        });

        await alert.present();
    }

    //get all news - HOME PAGE ( FEEDS )
    async getAllPost() {

        this.newsArray = []
        this.latestPost = [];
        localStorage.setItem('firstTimeLoaded', 'true');
        this.loading = true;
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._newsService.getAllNews().subscribe(
                (res: any) => {
                    this.firstTimeLoad = true;
                    this.newsArray = res;
                    this.latestPost = res[0];
                    console.log('this.latestPost', this.latestPost)
                    this.newsArray.splice(0, 1);
                    if (!localStorage.getItem('skip')) {
                    }
                    this.loading = false;
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
                console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1])
                console.log('Is Visited:------------- 1', config.isvisited);
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
                // this.getAllPost();
            } else {
                this.hide = true;
                this._toastService.toastFunction('No internet connection', 'danger');
                // this.getAllPost();
            }
        }

        window.addEventListener('online', alertOnlineStatus)
        window.addEventListener('offline', alertOnlineStatus)
    }
    //get categories
    getCategories() {
        // this.catLoading = true;
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._categoryService.getAll().subscribe((res) => {
                this.catLoading = false;
                this.categories = res;
                console.log("after", this.categories);
            }, (err) => {
                this.catLoading = false;
                this._toastService.toastFunction('Something went wrong while fetching category', 'danger')
            });

        } else {
            this.categories = JSON.parse(localStorage.getItem('categoryArray'))
        }
    }
    //change on subscription of category
    subscribedCategory(e) {
        console.log("Event e", e);
        if (e.cat === 1) {
            localStorage.setItem('catSelect', '1');
            localStorage.setItem('skip', '1');
            localStorage.setItem('language', this.language);
            this.catSelect = '1';
            this.getAllPost();
        } else {
            if (e.statusCode == 1) {
                this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
            } else if (e.statusCode == 0) {
                this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
            }
        }
    }
    //navigate to searchbar
    search() {
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/searchBar');
    }

    setFlagTrue() {
        localStorage.setItem('skip', '1');
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
        // if(this.selected){

        //     this.isTermsAndCond = e.target.checked;
        // }
    }
    //select lang on first time app opens
    async selectLang() {
        // if (this.selected && this.isTermsAndCond) {
        this.getAllPost();
        this.getCategories();
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
                        // this.getCategories();
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
        // }else{
        //     if(!this.selected){
        //         this._toastService.toastFunction('Please Select Language','')
        //     }else{
        //         this._toastService.toastFunction('Please accept T&C and Privacy Policy','')
        //     }
        // }
    }
    //select lang on first time app opens
    async selectLangSkip() {
        if (this.selected) {
            this.getCategories();
            localStorage.setItem('language', this.selected);
            localStorage.setItem('skip', '1')
            this.router.navigateByUrl('all-categories');

            this._generalService.setExtras(this.language);
            this.fcm.getToken().then(token => {
                localStorage.setItem('deviceToken', token);
                setTimeout(() => {
                    if (localStorage.getItem('annonymousNotify')) {
                        this._userService.firstTimeUser(this.selected).subscribe((res: any) => {
                            // this.getCategories();
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

}