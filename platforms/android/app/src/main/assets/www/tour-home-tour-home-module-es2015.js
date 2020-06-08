(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-home-tour-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tour-home/tour-home.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tour-home/tour-home.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div no-border class=\"triviaHeader\" *ngIf=\"language && newsArray && latestPost\">\n    <div class=\"settingsToolbar\">\n        <ion-menu-button></ion-menu-button>\n        <span id=\"settingTitle\">\n    Trivia Post\n  </span>\n        <button float-right>\n      <ion-icon name=\"search\" class=\"searchIcon\" (click)=\"search()\"></ion-icon>\n  </button>\n        <button float-left>\n              <ion-icon name=\"settings\" class=\"homeBack\" (click)=\"settings()\"></ion-icon>\n  </button>\n    </div>\n</div>\n<ion-content *ngIf=\"language && newsArray\" [ngClass]=\"{'disableScroll': !skip}\" class=\"newsFeedBlock\">\n    <ion-row class=\"feeds\" style=\"min-width: 100%;width: 100%;\" *ngIf=\"!smallLoading\">\n        <app-large-post [news]=\"latestPost\" [language]=\"language\" [skip]=\"skip\"></app-large-post>\n        <span *ngFor=\"let news of newsArray;let i = index\" class=\"newsTiles\">\n      <app-post-tiles\n        [news]=\"news\"\n        [language]=\"language\"\n        [index]=\"i\"\n      ></app-post-tiles>\n    </span>\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more posts...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ion-row>\n    <span class=\"loadingContent\" *ngIf=\"smallLoading\">\n    <img\n      src=\"assets/images/simpleLoader.gif\"\n      alt=\"\"\n      class=\"smallLoading\"\n    />\n  </span>\n</ion-content>"

/***/ }),

/***/ "./src/app/tour-home/tour-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tour-home/tour-home.module.ts ***!
  \***********************************************/
/*! exports provided: TourHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourHomePageModule", function() { return TourHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-home.page */ "./src/app/tour-home/tour-home.page.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");









const routes = [
    {
        path: '',
        component: _tour_home_page__WEBPACK_IMPORTED_MODULE_6__["TourHomePage"]
    }
];
let TourHomePageModule = class TourHomePageModule {
};
TourHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_7__["LargePostPageModule"],
            _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_8__["PostTilesPageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tour_home_page__WEBPACK_IMPORTED_MODULE_6__["TourHomePage"]]
    })
], TourHomePageModule);



/***/ }),

/***/ "./src/app/tour-home/tour-home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/tour-home/tour-home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.smallLoading {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.disableScroll {\n  --overflow: hidden;\n}\n\n.settingsToolbar button {\n  width: 45px;\n}\n\nion-menu-button {\n  float: left;\n}\n\n.settingsToolbar #settingTitle {\n  width: calc(100% - 162px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC90b3VyLWhvbWUvdG91ci1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdG91ci1ob21lL3RvdXItaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdG91ci1ob21lL3RvdXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcuc21hbGxMb2FkaW5nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kaXNhYmxlU2Nyb2xsIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgYnV0dG9uIHtcbiAgICB3aWR0aDogNDVweFxufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2V0dGluZ3NUb29sYmFyICNzZXR0aW5nVGl0bGUge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjJweClcbn0iLCJpbWcuc21hbGxMb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kaXNhYmxlU2Nyb2xsIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2V0dGluZ3NUb29sYmFyIGJ1dHRvbiB7XG4gIHdpZHRoOiA0NXB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNldHRpbmdzVG9vbGJhciAjc2V0dGluZ1RpdGxlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2MnB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tour-home/tour-home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/tour-home/tour-home.page.ts ***!
  \*********************************************/
/*! exports provided: TourHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourHomePage", function() { return TourHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let TourHomePage = class TourHomePage {
    constructor(navctrl, _storageService, storage, _userService, _newsService, router) {
        this.navctrl = navctrl;
        this._storageService = _storageService;
        this.storage = storage;
        this._userService = _userService;
        this._newsService = _newsService;
        this.router = router;
        this.page_number = 2;
        this.page_limit = 20;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.skip = localStorage.getItem('skip');
        console.log("Date in home tour", new Date().getSeconds());
        this.smallLoading = true;
        this.getAllPost(false, '');
    }
    //get all news - HOME PAGE ( FEEDS )
    getAllPost(isFirstLoad, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.newsArray = [];
            this.latestPost = [];
            localStorage.setItem('firstTimeLoaded', 'true');
            this.language = localStorage.getItem('language');
            if (!this.storage.get('news')) {
                if (navigator.onLine) {
                    this._newsService.getAllNews(this.page_number, this.page_limit).subscribe((res) => {
                        if (this.page_number == 2) {
                            this.latestPost = res.shift();
                        }
                        this.newsArray.push(...res);
                        if (localStorage.getItem('firstLargePostClick') && [!localStorage.getItem('bookmarkFlag') || localStorage.getItem('shareFlag')] && !localStorage.getItem('skip')) {
                            this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
                        }
                        if (isFirstLoad)
                            event.target.complete();
                        console.log('this.latestPost', this.latestPost);
                        this.newsArray.splice(0, 1);
                        $('.newsFeedBlock').hide();
                        if (!this.skip) {
                            console.log(new Date());
                            $('.newsFeedBlock').show();
                            setTimeout(() => {
                                this.smallLoading = false;
                                this.loading = false;
                            }, 1500);
                        }
                        else {
                            this.smallLoading = false;
                            this.loading = false;
                            $('.newsFeedBlock').show();
                        }
                        this.page_number++;
                        this.checkForRating();
                    }, (err) => {
                        this.newsArray = localStorage.newsArray;
                    });
                }
                else {
                    this.newsArray = yield this._storageService.getNewsForOffline();
                    this.latestPost = this.newsArray[0];
                    this.newsArray.splice(0, 1);
                }
            }
            else {
                let offlinePosts = yield this._storageService.getNewsForOffline();
                this.newsArray = JSON.parse(offlinePosts);
                this.latestPost = this.newsArray[0];
                this.newsArray.splice(0, 1);
                if (localStorage.getItem('firstLargePostClick') && [!localStorage.getItem('bookmarkFlag') || localStorage.getItem('shareFlag')] && !localStorage.getItem('skip')) {
                    this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
                }
                else {
                    this.smallLoading = false;
                }
            }
            this._userService.firstTimeUser(yield localStorage.getItem('language')).subscribe((res) => {
                this._userService.serviceFunction();
                localStorage.setItem('annonymousNotify', 'true');
            }, (err) => {
            });
        });
    }
    doInfinite(event) {
        this.getPagePosts(true, event);
        console.log(event);
    }
    getPagePosts(isFirstLoad, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.smallLoading = true;
            localStorage.setItem('firstTimeLoaded', 'true');
            this._newsService.getAllNews(this.page_number, this.page_limit).subscribe((res) => {
                if (this.page_number == 1) {
                    this.latestPost = res.shift();
                }
                this.newsArray.push(...res);
                // this.newsArray = res;
                if (isFirstLoad)
                    event.target.complete();
                this.page_number++;
                // this.latestPost = this.newsArray.shift();
                console.log('this.allnews =======', this.newsArray);
                console.log('this.allnews =======', this.latestPost);
                this.checkForRating();
                // this.smallLoading = false;
            }, (err) => {
                this.newsArray = localStorage.newsArray;
            });
        });
    }
    checkForRating() {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
            this.showRateModal = true;
        }
        else {
            this.showRateModal = false;
        }
    }
    //navigate to searchbar
    search() {
        if (localStorage.getItem('skip')) {
            this.navctrl.navigateRoot('/searchBar');
        }
    }
    settings() {
        if (localStorage.getItem('skip')) {
            this.navctrl.navigateRoot('/settings');
        }
    }
};
TourHomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TourHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tour-home',
        template: __webpack_require__(/*! raw-loader!./tour-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/tour-home/tour-home.page.html"),
        styles: [__webpack_require__(/*! ./tour-home.page.scss */ "./src/app/tour-home/tour-home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], TourHomePage);



/***/ })

}]);
//# sourceMappingURL=tour-home-tour-home-module-es2015.js.map