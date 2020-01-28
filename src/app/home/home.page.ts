import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Router} from '@angular/router';
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
        this.viewInitFunctions();
    }
    
    ionViewDidEnter() {
        this.checkForLogin();
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
        if (localStorage.getItem('language')) {
            // this.getCategories();
            this.getAllPost();
        }
        this.fcmToken();
        this.checkforInternet();
    }
    
    //get all news - HOME PAGE ( FEEDS )
    getAllPost() {
        this.loading = true;
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

    //checks if user is logged in
    checkForLogin(){
        console.log("Hello from check for login")
        if(this.language && !localStorage.getItem('accessToken')){
            this._userService.serviceFunction();
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
    // getCategories() {
    //     this.language = localStorage.getItem('language');
    //     this._categoryService.getAll().subscribe((res) => {
    //         this.categories = res;
    //         console.log("after", this.categories);
    //     },
    //         (err) => {
    //         });
    // }
    //change on subscription of category
    subscribedCategory(e) {
        console.log("Event e", e);
        if (e.statusCode == 1) {
            this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
        } else if (e.statusCode == 0) {
            this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
        }
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

    //select lang on first time app opens
    selectLang() {
        let lang = $("select#languageSelect option").filter(":selected").val();
        localStorage.setItem('language', lang);
        this.fcm.getToken().then(token => {
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                if (localStorage.getItem('annonymousNotify')) {
                    this._userService.firstTimeUser(lang).subscribe((res: any) => {
                        // this.getCategories();
                        this.getAllPost();
                        this._userService.serviceFunction();
                        localStorage.setItem('annonymousNotify', 'true');
                        this.language = localStorage.getItem('language')
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
}