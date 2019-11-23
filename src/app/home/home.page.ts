import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NewsService } from '../services/news.service';
import { FCM } from '@ionic-native/fcm/ngx';
declare var $: any;
import { Platform } from '@ionic/angular';
import * as _ from 'lodash';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import 'hammerjs';
import { ToastService } from "../services/toast.service";
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    @ViewChild(SuperTabs, { static: false }) superTabs: SuperTabs;

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
        debug: true,
        allowElementScroll: false,
        transitionDuration: 100
    };
    categories: any;
    latestPost: any;
    constructor(private firebaseDynamicLinks: FirebaseDynamicLinks, private _toastService: ToastService, private _userService: UserService, private screenOrientation: ScreenOrientation, private platform: Platform, private fcm: FCM, public _newsService: NewsService, public _categoryService: CategoryService, private router: Router, public keyboard: Keyboard) {
    }

    // Event Listeners
    ngOnInit() {
        this.firebaseLinkRoute();
        this.language = localStorage.language;
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
    }

    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }

    viewInitFunctions() {
        console.log('this.firebaseDynamicLinks', this.firebaseDynamicLinks);

        this.notificationTapped();
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
        this.getCategories();
        this.getAllPost();
        this.fcmToken();
        this.loading = true;
        this.checkforInternet();
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
        var offline = Observable.fromEvent(document, "offline");
        var online = Observable.fromEvent(document, "online");

        offline.subscribe(() => {
            this.hide = false;
            this._toastService.toastFunction('No internet connection', 'danger');
        });

        online.subscribe(() => {
            this.hide = true;
        });
    }
    //get categories
    getCategories() {
        this.language = localStorage.getItem('language');
        this._categoryService.getAll().subscribe((res) => {
            this.categories = res;
            console.log("after", this.categories);
        },
            (err) => {
            });
    }
    //change on subscription of category
    subscribedCategory(e) {
        console.log("Event e", e);
        if (e.isNotify == true) {
            this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
        } else {
            this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
        }
    }
    //get all news - HOME PAGE ( FEEDS )
    getAllPost() {
        this.language = localStorage.getItem('language');
        this._newsService.getAllNews().subscribe(
            (res: any) => {
                this.loading = false;
                this.newsArray = res;
                this.latestPost = res[0];
                this.newsArray.splice(0, 1);
            },
            (err) => {
                this.newsArray = localStorage.newsArray;
            });
    }
    //navigate to searchbar
    search() {
        this.router.navigateByUrl('/searchBar');
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
    //set fcm token
    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                this._userService.firstTimeUser().subscribe((res: any) => {
                    localStorage.setItem('annonymousNotify', 'true');
                },
                    (err) => {
                    });
            }, 1000);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
                //console.log('Received in background');
            } else {
                //console.log('Received in foreground');
            }
        });
    }
}