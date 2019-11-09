import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ToastController, Platform } from '@ionic/angular';
import * as _ from 'lodash';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Observable } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';
import { UserService } from '../services/user.service';
import 'hammerjs';
let HomePage = class HomePage {
    constructor(_userService, network, route, screenOrientation, platform, socialSharing, toastController, deeplinks, fcm, _newsService, _categoryService, router, keyboard) {
        this._userService = _userService;
        this.network = network;
        this.route = route;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.toastController = toastController;
        this.deeplinks = deeplinks;
        this.fcm = fcm;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.keyboard = keyboard;
        this.newsArray = [];
        this.horizontalSwipers = [];
        this.error = '';
        this.isVisible = false;
        this.loading = false;
        this.isTextVisible = false;
        this.isCalled = false;
        this.bookMark = false;
        this.mediaPath = config.mediaApiUrl;
    }
    // Event Listeners
    ngOnInit() {
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
        this.backButtonFunction();
        this.checkForCurrentSlideFromLocalStorage();
        this.language = localStorage.language;
        this.route.params.subscribe((param) => {
            this.pageContent(this.router.url, param);
        });
    }
    ngOnExit() {
        console.warn("ngOnExit");
    }
    ionViewDidLeave() {
        console.warn("ionViewDidLeave");
        $("#homepage-ion-content").html("");
        delete this.newsArray;
        console.warn("Removing homepage-ion-content", $("#homepage-ion-content").html());
        this.removeSwiperJs();
    }
    viewInitFunctions() {
        this.notificationTapped();
        this.removeSwiperJs();
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        this.fcmToken();
        this.checkForCurrentSlideFromLocalStorage();
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        //  Deeplinks
        this.deeplinks.route({
            '/': {},
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            this.router.navigate(['home/single-news/' + match.$args.id]);
        }, (nomatch) => {
            // alert("UnMatched" + nomatch);
        });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.loading = true;
        setTimeout(() => {
            $('#snackbar').show();
        }, 3000);
        this.checkforInternet();
    }
    //check for internet
    checkforInternet() {
        // // Check Internet conectivity
        var offline = Observable.fromEvent(document, "offline");
        var online = Observable.fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this.toast = this.toastController.create({
                message: 'No internet connection',
                animated: true,
                duration: 2000,
                showCloseButton: true,
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
    }
    // ion-content RESET 
    doRefill() {
        console.log("Reseting ion-html");
        $(document).ready(() => {
            $("#homepage-ion-content").html("");
            console.log("ion-content before loading html ", $("#homepage-ion-content").html());
            $("#homepage-ion-content").html(this.refillIonContent());
            console.log("ion-content After loading html ", $("#homepage-ion-content").html());
        });
    }
    refillIonContent() {
        return `<div class="swiper-container swiper-container-v ">
        <div class="swiper-wrapper ">
        <div class="swiper-slide background" *ngFor="let news of newsArray; let i = index" id={{news.newsId}}
        style="padding:15px">
        <div class="swiper-container swiper-container-h " id="swiper-h-{{news.newsId}}">
        <div class="swiper-wrapper" id="swiper-wrapper{{i}}">
        <div class="page_slider swiper-slide newsId-{{news.newsId}} "
        style="background-color: transparent" id="page_slider{{i}}">
        <div class='content' style="position: relative">
        <div id="sliderContent{{i}}">
        <!-- Title & Logo -->
        <ion-row>
        <ion-col size="8">
        <p *ngIf="language == 'English'" class="news-title">
        {{news.newsTitleEnglish | slice:0:55}}...</p>
        <p *ngIf="language == 'Hindi'" class="news-title" style="font-size: 27px">
        {{news.newsTitleHindi | slice:0:55}}...</p>
        </ion-col>
        <ion-col size="4">
        <img src="../../assets/images/Logo.png" style="height: 110px" />
        </ion-col>
        </ion-row>
        <!-- Post Image -->
        <div class="post_img">
        <img src="{{mediaPath}}{{news.newsImage}}" style="height:350px !important;" />
        </div>
        <!-- Content -->
        <div class="contentPost">
        <div *ngIf="language == 'English'" [innerHTML]="news.newsEnglish">
        </div>
        <div class="hindi-news" *ngIf="language == 'Hindi'"
        [innerHTML]="news.newsHindi">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <!-- Bookmark -->
        <div style="position: absolute; bottom: 0px;z-index: 28;">
        <img src="assets/images/Bookmarks.png" class="bookmark" *ngIf="!news.bookmarkKey"
        (click)="bookmark(i)" />
        <img src="assets/images/Bookmark.png" class="bookmark" *ngIf="news.bookmarkKey"
        (click)="bookmark(i)" />
        </div>
        <!-- Share button -->
        <div class="share-button" *ngIf="language == 'English'"
        (click)="sharePost(news.newsId, news.newsTitleEnglish)">
        <img src="../../assets/images/Share.png" class="icon" />
        </div>
        <div class="share-button" *ngIf="language == 'Hindi'"
        (click)="sharePost(news.newsId, news.newsTitleHindi)">
        <img src="../../assets/images/Share.png" class="icon" />
        </div>
        <div class="swiper-pagination swiper-pagination-h"></div>
        </div>
        </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-v"></div> -->
        </div>
        <ion-content *ngIf="loading">
	    <div id="loader-wrapper">
		<div id="loader">
		<span class="logo_container">
		<img src="../../assets/images/Logo.png" alt="logo">
	    </span>
		<div class="ml-loader">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		</div>
		<p class="text-center">Loding Data...</p>
		</div>
	    </div>
        </ion-content>
        </ion-content>
        `;
    }
    // RENDEREING FLOW
    // Load Content according to url -- called from each GET api.
    pageContent(url, param) {
        this.doRefill();
        console.log("Redirected From : ", url, param);
        // this.loading = true;
        setTimeout(() => {
            if (url.includes('bookmark')) {
                this.loading = false;
                this.bookMark = true;
                this.bookmarkedNews();
            }
            else if (url.includes('category')) {
                this.loading = false;
                this.catTitle = param.catTitle;
                this.catNews(param.id);
            }
            else if (url.includes('single-news')) {
                this.loading = false;
                console.log("In single news");
                this.getSingleNews(param.id);
            }
            else if (url.includes('search-news')) {
                this.loading = false;
                this.searchKey = param.key;
                this.searchNews(param.key);
            }
            else {
                this.loading = false;
                console.log("Calling for All news in Feeds");
                this.getNews();
            }
        }, 1000);
    }
    //  Load news to newsArray for all scenarios.
    loadNewsToPage(res, userId, checkForBookmark = false) {
        console.info("loadToNewsPage Called ", "res = ", res, "userId", userId, "checkForBookmark", checkForBookmark);
        this.newsArray = [];
        this.loading = false;
        this.resLength = res.length;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.newsArray = res;
        if (this.tokenLocalStorage && !checkForBookmark) {
            _.forEach(this.newsArray, (save) => {
                _.forEach(save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.delay(500).then(any => {
            this.buildForSwiper().then(() => {
                this.addSwiperJs();
            });
        });
    }
    // Back Button actions
    backButtonFunction() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.route.params.subscribe(param => {
                if (this.router.url.includes('bookmark')) {
                    this.router.navigate(['bookmarks']);
                }
                else if (this.router.url.includes('category')) {
                    this.router.navigate(['allcategory']);
                }
                else if (this.router.url.includes('single-news')) {
                    this.router.navigate(['allcategory']);
                }
                else if (this.router.url.includes('search-news')) {
                }
                else {
                    navigator['app'].exitApp();
                }
            });
        }));
    }
    // API CALLS
    // View Count increment
    newPostView(postId) {
        postId = postId.split("-")[1];
        this.data = {
            postId: postId,
            postType: localStorage.language
        };
        this._newsService.newsCount(this.data).subscribe();
    }
    /**
     * get Single news --- PENDING TO DEVELOP
     */
    getSingleNews(id) {
        //console.log("this.id", id)
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        //console.log(userId);
        this._newsService.getSingleNews(id).subscribe((res) => {
            //console.log("this.single", res);
            // this.newsArray = res;
            this.loadNewsToPage(res, userId);
            //console.log("for-----------------", this.newsArray);
            //console.log(this.newsArray);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    /**
     * Searched result
     */
    searchNews(key) {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.searchedNews(key).subscribe((res) => {
            this.keyboard.hide();
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //  Bookmarked News
    bookmarkedNews() {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.loading = false;
            var userId = this.loggedInUser;
            this.loadNewsToPage(res, userId, true);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    catNews(id) {
        console.log(this.loading);
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.allCatNews(id).subscribe((res) => {
            console.log("CATNEWS UPDATED!!!");
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //get all news - HOME PAGE ( FEEDS )
    getNews() {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe((res) => {
            console.log("all news==========>", res);
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //  On Clicking Notification
    appendSinleNews(res, userId) {
        this.loading = false;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.appendedNews = res;
        _.forEach(this.appendedNews, (news, index) => {
            if (news.newsId == this.appendedNews.newsId) {
                this.appendedNews.splice(index, 1);
            }
        });
        this.newsArray = this.appendedNews;
        if (this.tokenLocalStorage) {
            _.forEach(this.newsArray, (save) => {
                _.forEach(save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.buildForSwiper();
    }
    // last slide toast
    // lastSlideToast() {
    //     console.log("Last post %%%%%%%%%%%%%%5")
    //     this.toast = this.toastController.create({
    //         message: 'No more post',
    //         animated: true,
    //         duration: 2000,
    //         showCloseButton: true,
    //         closeButtonText: "OK",
    //         cssClass: "my-toast",
    //         position: "bottom",
    //         color: "primary"
    //     }).then((obj) => {
    //         obj.present();
    //     });
    // }
    // BUTTON ACTIONS
    //  Do Bookmark
    bookmark(index) {
        if (this.network.type == 'none') {
            this.toast = this.toastController.create({
                message: "No internet connection",
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        }
        else {
            this._newsService.bookmarkPost(this.newsArray[index].newsId).subscribe((res) => {
                this.newsArray[index].bookmarkKey = !this.newsArray[index].bookmarkKey;
                this.toast = this.toastController.create({
                    message: res.message,
                    duration: 2000,
                    color: 'success'
                }).then((toastData) => {
                    toastData.present();
                });
            }, err => {
                this.toast = this.toastController.create({
                    message: err.error.message,
                    duration: 2000,
                    color: 'danger'
                }).then((toastData) => {
                    toastData.present();
                });
            });
        }
    }
    //  Do Share Post 
    sharePost(id, newsTitle) {
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
            //console.log('success ' + JSON.stringify(entries));
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    // SWIPER 
    delay(ms) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("delay fired"));
        });
    }
    buildForSwiper() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.newsArray.length; i++) {
                $(function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        var window_height = $(document).height() * 0.60;
                        var content_height = window_height;
                        function buildNewsletter() {
                            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                                if ($('#sliderContent' + i).contents().length > 0) {
                                    let page = $("#page_slider" + i).clone().addClass("swiper-slide").css("display", "block");
                                    $(".swiper-container-h > #swiper-wrapper" + i).append(page);
                                    $(".swiper-container-h > #swiper-wrapper" + i + "> .page_slider:first-child").css("display", "none");
                                    $('#sliderContent' + i).columnize({
                                        columns: 1,
                                        target: "#swiper-wrapper" + i + " .swiper-slide:last .content",
                                        overflow: {
                                            height: content_height,
                                            id: "#sliderContent" + i,
                                            doneFunc: function () {
                                                buildNewsletter();
                                            }
                                        },
                                    });
                                }
                                else {
                                }
                            });
                        }
                        yield buildNewsletter();
                    });
                });
            }
        });
    }
    removeSwiperJs() {
        $('#scriptid').remove();
    }
    addSwiperJs() {
        var script = document.createElement('script');
        script.setAttribute('id', 'scriptid');
        script.src = "assets/js/swiper.js";
        document.body.appendChild(script);
    }
    // END SWIPER
    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
        });
    }
    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
            if (!localStorage.getItem('annonymous')) {
                this._userService.firstTimeUser().subscribe((res) => {
                    console.log("ANNONYMOUS USER SUCCESS", res);
                    localStorage.setItem('annonymous', 'true');
                    localStorage.setItem('annonymousNotify', 'true');
                }, (err) => {
                });
            }
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
                //console.log('Received in background');
            }
            else {
                //console.log('Received in foreground');
            }
        });
    }
    checkForToken() {
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    swipeevent(e, l) {
        if (l + 1 == this.resLength) {
            $('#lastPostToast').hide().fadeIn(800).delay(500).fadeOut(800);
            // $('#lastPostToast').show();
        }
    }
    checkForCurrentSlideFromLocalStorage() {
        var that = this;
        setInterval(function () {
            if (that.currentPostId != localStorage.currentPostId) {
                that.currentPostId = localStorage.currentPostId;
                console.log("postid", this.currentPostId);
                that.newPostView(localStorage.currentPostId);
            }
        }, 500);
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [UserService, Network, ActivatedRoute, ScreenOrientation, Platform, SocialSharing, ToastController, Deeplinks, FCM, NewsService, CategoryService, Router, Keyboard])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map