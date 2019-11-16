(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmark-bookmark-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bookmark/bookmark.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookmark/bookmark.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/settings\" float-left></ion-icon>\n    <ion-title>Bookmark</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding class=\"feeds\" *ngFor=\"let news of newsArray; let i = index; last as isLast\" (click)=\"open(item)\">\n      <ion-item>\n        <ion-col size=\"5\" class=\"newsImg\" padding>\n          <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"73px\" width=\"100%\"\n            (click)=\"getSingleBookmark(news.newsId)\">\n        </ion-col>\n        <ion-col size=\"7\" id=\"content\">\n          <div>\n            <span class=\"optionsList\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish | slice:0:40\"\n              (click)=\"getSingleBookmark(news.newsId)\"></span><span *ngIf=\"language == 'English'\">...</span>\n            <span class=\"optionsList\" *ngIf=\"language == 'Hindi'\"\n              [innerHTML]=\"news.newsTitleHindi | slice:0:40\"></span><span *ngIf=\"language == 'Hindi'\"\n              (click)=\"getSingleBookmark(news.newsId)\">...</span>\n            <p class=\"otherInfoSecond\"><img src=\"assets/images/like.png\" alt=\"\" class=\"likeImage\"> {{news.likesCount}}\n              likes</p>\n            <p class=\"otherInfo\">{{news.createdAt | timeAgo}} | <span class=\"newsCat\"\n                (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory | slice:0:20}}</span>\n            </p>\n          </div>\n        </ion-col>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\">\n          <ion-icon slot=\"icon-only\" name=\"trash\" (click)=\"deleteBookmarked(news.newsId)\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option>\n          <ion-icon slot=\"icon-only\" name=\"share\"\n            (click)=\"shareBookmarked(news.newsImage,news.fcmLink, news.newsTitleEnglish)\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div id=\"loader-wrapper\" *ngIf=\"loading\">\n    <div id=\"loader\">\n      <div class=\"spinner\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n      </div>\n      <p class=\"text-center\">Loding...</p>\n    </div>\n  </div>\n  <p *ngIf=\"noNews == true\" class=\"noNews\">No news in this category!</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/bookmark/bookmark.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookmark/bookmark.module.ts ***!
  \*********************************************/
/*! exports provided: BookmarkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageModule", function() { return BookmarkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookmark_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmark.page */ "./src/app/bookmark/bookmark.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _bookmark_page__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"]
    }
];
let BookmarkPageModule = class BookmarkPageModule {
};
BookmarkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_bookmark_page__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"]]
    })
], BookmarkPageModule);



/***/ }),

/***/ "./src/app/bookmark/bookmark.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookmark/bookmark.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  /* margin: 4px; */\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  margin: auto 0 !important;\n  padding: 6px;\n  height: 100px;\n}\n\n.otherInfo {\n  color: gray;\n  bottom: 0;\n  margin: 0;\n  margin-top: 10px;\n}\n\n.otherInfoSecond {\n  margin: 10px auto;\n  color: gray;\n  bottom: 20px;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n\n.feeds {\n  border-bottom: 1px solid #ddd;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n}\n\n.newsCat {\n  color: #ed2424;\n}\n\n.latestNews {\n  font-size: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYm9va21hcmsvYm9va21hcmsucGFnZS5zY3NzIiwic3JjL2FwcC9ib29rbWFyay9ib29rbWFyay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsNkJBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrL2Jvb2ttYXJrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uLmhvbWVCYWNrLm1kLmh5ZHJhdGVkIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luOiA0cHg7ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubmV3c0ltZyB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm90aGVySW5mbyB7XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAyMHB4O1xufVxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5mZWVkcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmV3c0NhdCB7XG4gIGNvbG9yOiAjZWQyNDI0O1xufVxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iLCJpb24taWNvbi5ob21lQmFjay5tZC5oeWRyYXRlZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC8qIG1hcmdpbjogNHB4OyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmV3c0ltZyB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm90aGVySW5mbyB7XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAyMHB4O1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uZmVlZHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6ICNlZDI0MjQ7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bookmark/bookmark.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookmark/bookmark.page.ts ***!
  \*******************************************/
/*! exports provided: BookmarkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPage", function() { return BookmarkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");










let BookmarkPage = class BookmarkPage {
    constructor(_toastService, platform, socialSharing, actionSheetController, _newsService, _categoryService, router) {
        this._toastService = _toastService;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.error = '';
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('bookmarks')) {
                this.router.navigate(['settings']);
            }
        }));
        this.bookmarkedNews();
        this.language = localStorage.getItem('language');
    }
    onPress(newsImage, fcmLink, newsId, newsTitleEnglish, $event) {
        console.log('newsId=', newsId);
    }
    ionViewWillEnter() {
        // // Check Internet conectivity
        var offline = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "offline");
        var online = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            const message = 'No internet connection';
            const color = 'danger';
            this._toastService.toastFunction(message, color);
        });
    }
    bookmarkedNews() {
        this.loading = true;
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.loading = false;
            this.newsObj = res;
            this.newsArray = this.newsObj;
            this.bookmarkLength = this.newsArray.length;
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    deleteBookmarked(id) {
        this._newsService.bookmarkPost(id).subscribe((res) => {
            console.log("res", res);
            this._toastService.toastFunction(res.message, 'success');
            this.bookmarkedNews();
        }, err => {
            this._toastService.toastFunction(err.error.message, 'danger');
            this.bookmarkedNews();
        });
    }
    shareBookmarked(newsImage, link, title) {
        var message = "Check out this amazing news " + '"' + title + '" ';
        var subject = "Trivia Post";
        var url = link;
        // var file = this.mediaPath + newsImage;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
            console.log('success ' + JSON.stringify(entries));
        })
            .catch((error) => {
        });
    }
    getSingleBookmark(id) {
        this.router.navigate(['single-post/' + id + '/bookmark']);
    }
    categoryClick(catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    }
};
BookmarkPage.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BookmarkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookmark',
        template: __webpack_require__(/*! raw-loader!./bookmark.page.html */ "./node_modules/raw-loader/index.js!./src/app/bookmark/bookmark.page.html"),
        styles: [__webpack_require__(/*! ./bookmark.page.scss */ "./src/app/bookmark/bookmark.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BookmarkPage);



/***/ })

}]);
//# sourceMappingURL=bookmark-bookmark-module-es2015.js.map