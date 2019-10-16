import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';
import { config } from '../config';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from './news';
import { FCM } from '@ionic-native/fcm/ngx';
declare var $: any;
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ToastController, Platform } from '@ionic/angular';
import * as _ from 'lodash';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit {
    toast: any;
    newsArray: any = [];
    bookmarks: any;
    tokenLocalStorage: any;
    category_array: Category[];
    error = '';
    language: string;
    loggedInUser: any;
    height;
    width;
    isVisible = false;
    mediaPath = config.mediaApiUrl;
    notifyflag: any;
    loading: boolean = false;
    currentPostId;
    data;
    mainSwiper;
    horizontalSwipers = [];
    isTextVisible = false;
    text;
    searchLength: any;
    isCalled = false;
    catTitle;
    bookMark: boolean = false;
    searchKey;
    appendedNews;
    constructor(private route: ActivatedRoute, private screenOrientation: ScreenOrientation, private platform: Platform, private socialSharing: SocialSharing, public toastController: ToastController, private deeplinks: Deeplinks, private fcm: FCM, public _newsService: NewsService, public _categoryService: CategoryService, private router: Router, public keyboard: Keyboard) {
    }
    ngAfterViewInit() {
    }
    ionViewDidLeave() {
        console.warn("ionViewDidLeave");
        this.removeSwiperJs();
    }
    removeSwiperJs() {
        console.log("Removing Swiper.js");
        $('#scriptid').remove();
    }
    addSwiperJs() {
        console.log("ReInitializing swiper");
        var script = document.createElement('script');
        script.setAttribute('id', 'scriptid');
        script.src = "assets/js/swiper.js";
        document.body.appendChild(script);
    }
    // Notification Tapped.
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
        });
    }
    viewInitFunctions() {
        console.log("viewInitFunctions")
        this.removeSwiperJs();
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        this.fcmToken();
        this.checkForCurrentSlideFromLocalStorage();
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        this.notificationTapped();
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        //  Deeplinks
        this.deeplinks.route({
            '/': {},
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            this.router.navigate(['home/single-news/' + match.$args.id]);
        },
            (nomatch) => {
                alert("UnMatched" + nomatch);
            });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    backButtonFunction() {
        this.platform.backButton.subscribe(async () => {
            this.route.params.subscribe(param => {
                if (this.router.url.includes('bookmark')) {
                    this.router.navigate(['bookmarks']);
                } else if (this.router.url.includes('category')) {
                    this.router.navigate(['allcategory']);
                } else if (this.router.url.includes('single-news')) {
                    this.router.navigate(['allcategory']);
                } else if (this.router.url.includes('search-news')) {
                } else {
                    navigator['app'].exitApp();
                }
            });
        });
    }
    doReload() {
        // localStorage.setItem('isRefresh', 'true');
        if (localStorage.getItem('isRefresh') == 'true') {
            localStorage.setItem('isRefresh', 'false');
            console.log("reloading")
            window.location.reload();
        } else {
            console.log("skipping reload")
            localStorage.setItem('isRefresh', 'true');
        }
    }
    ngOnInit() {
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
        this.backButtonFunction();
        // this.doReload();
        this.checkForCurrentSlideFromLocalStorage();
        this.language = localStorage.language;
        this.route.params.subscribe(param => {
            this.pageContent(this.router.url, param);
        });
    }
    ngOnExit() {
    }
    // Load Content according to url
    pageContent(url, param) {
        console.log("Redirected From : ", url, param)
        if (url.includes('bookmark')) {
            this.bookMark = true
            this.bookmarkedNews();
        } else if (url.includes('category')) {
            this.catTitle = param.catTitle;
            this.catNews(param.id);
        } else if (url.includes('single-news')) {
            this.getSingleNews(param.id);
        } else if (url.includes('search-news')) {
            this.searchNews(param.key);
        } else {
            this.getNews();
        }
    }
    /**
     * get Single news --- PENDING TO DEVELOP
     */
    getSingleNews(id): void {
        console.log("this.id", id)
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        console.log(userId);
        this._newsService.getSingleNews(id).subscribe((res: any) => {
            console.log("this.single", res);
            this.newsArray = res;
            this.getNews()
            console.log("for-----------------", this.newsArray);
            console.log(this.newsArray);
        },
            (err) => {
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
        this._newsService.searchedNews(key).subscribe(
            (res: News[]) => {
                this.keyboard.hide();
                this.loadNewsToPage(res, userId);
            },
            (err) => {
                this.loading = false;
                this.error = err;
            });
    }
    //  Bookmarked News
    bookmarkedNews(): void {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        this._newsService.getAllBookmarks().subscribe(
            (res) => {
                this.loading = false;
                var userId = this.loggedInUser;
                this.loadNewsToPage(res.post, userId, true);
            },
            (err) => {
                this.loading = false;
                this.error = err;
            });
    }
    catNews(id): void {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.allCatNews(id).subscribe(
            (res: any) => {
                console.log("res of cat news", res)
                this.loadNewsToPage(res, userId);
            },
            (err) => {
                this.loading = false;
                this.error = err;
            });
    }
    //get all news - HOME PAGE ( FEEDS )
    getNews(): void {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe(
            (res: any) => {
                console.log("all news==========>", res)
                this.loadNewsToPage(res, userId);
                // this.route.params.subscribe(param => {
                //  if (!this.router.url.includes('single-news')) {
                //      this.loadNewsToPage(res, userId);
                //  } else {
                //      this.appendSinleNews(res, userId)
                //  }
                // })
            },
            (err) => {
                this.loading = false;
                this.error = err;
            });
    }
    //  On Clicking Notification
    appendSinleNews(res, userId) {
        this.loading = false;
        if (!res.length) {
            console.log("res in if=======>", res);
            this.isTextVisible = true;
            this.text = "There are no news yet..."
        }
        this.appendedNews = res;
        console.log("this.app", this.appendedNews, this.newsArray);
        _.forEach(this.appendedNews, (news, index) => {
            console.log("id in foreach=========>", news.newsId);
            if (news.newsId == this.appendedNews.newsId) {
                this.appendedNews.splice(index, 1)
            }
        })
        this.newsArray = this.appendedNews;
        if (this.tokenLocalStorage) {
            _.forEach(this.newsArray, (save) => {
                console.log("in foreach======>", save)
                _.forEach(save.bookMark, (Id) => {
                    if (Id == userId) {
                        console.log("in loadNewsArray bookmark===========>", this.newsArray)
                        save['bookmarkKey'] = true
                    }
                })
            })
        }
        this.buildForSwiper();
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
    //  Load news to newsArray for all scenarios.
    loadNewsToPage(res, userId, checkForBookmark = false) {
        console.info("loadToNewsPage Called ", "res = ", res, "userId", userId, "checkForBookmark", checkForBookmark);
        this.newsArray = [];
        this.loading = false;
        if (!res.length) {
            this.isTextVisible = true
            this.text = "There are no news yet..."
        }
        this.newsArray = res;
        if (this.tokenLocalStorage && !checkForBookmark) {
            _.forEach(this.newsArray, (save) => {
                _.forEach(save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true
                    }
                })
            })
        }
        console.log("Waiting for calling BuildSwiper", Date.now())
        this.delay(500).then(any => {
            console.log("Calling BuildSwiper at ", Date.now())
            this.buildForSwiper().then(() => {
                console.log("Swiper Built. Now adding Swiper.JS")
                this.addSwiperJs();
            });
            console.log("Check function after call to buildForSwiper()");
        });
    }
    async delay(ms: number) {
        await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
    }
    async buildForSwiper() {
        for (let i = 0; i < this.newsArray.length; i++) {
            $(async function () {
                var window_height = $(document).height() * 0.66;
                var content_height = window_height;
                async function buildNewsletter() {
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
                    } else {
                    }
                }
                await buildNewsletter();
            })
        }
    }
    //  Do Bookmark
    bookmark(index) {
        this._newsService.bookmarkPost(this.newsArray[index].newsId).subscribe((res: any) => {
            this.newsArray[index].bookmarkKey = !this.newsArray[index].bookmarkKey;
            this.toast = this.toastController.create({
                message: res.message,
                duration: 2000,
                color: 'success'
            }).then((toastData) => {
                toastData.present();
            });
        }, err => {
            console.log('err===========>', err.error.message);
            this.toast = this.toastController.create({
                message: err.error.message,
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        })
    }
    //  Do Share Post 
    sharePost(id, newsTitle) {
        console.log("in sharepost=========>", id, newsTitle)
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
            })
            .catch((error) => {
                alert('error ' + JSON.stringify(error));
            });
    }
    checkForCurrentSlideFromLocalStorage() {
        var that = this;
        setInterval(function () {
            if (that.currentPostId != localStorage.currentPostId) {
                that.currentPostId = localStorage.currentPostId;
                that.newPostView(that.currentPostId);
            }
        }, 500);
    }
    // View Count increment
    newPostView(postId) {
        postId = postId.split("-")[1];
        this.data = {
            postId: postId,
            postType: localStorage.language
        }
        this._newsService.newsCount(this.data);
    }
    fcmToken() {
        this.fcm.getToken().then(token => {
            console.log("Device", token);
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            console.log("Device", token);
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['settings']);
            alert(JSON.stringify(data));
            if (data.wasTapped) {
                console.log('Received in background');
            } else {
                console.log('Received in foreground');
            }
        });
    }
}