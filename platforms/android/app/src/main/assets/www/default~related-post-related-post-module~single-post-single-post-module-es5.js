(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~related-post-related-post-module~single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/related-post/related-post.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/related-post/related-post.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"relatedPostRow{{postCount}}\">\n  <ion-col size=\"4\" class=\"newsImg\">\n    <img\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"73px\"\n      width=\"100%\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n  </ion-col>\n  <ion-col size=\"8\" class=\"contentFeeds\">\n    <span\n      class=\"optionsList\"\n      *ngIf=\"language != 'as'\"\n      [innerHTML]=\"news[language].title | slice:0:60\"\n      (click)=\"singleNews(news.newsId)\"\n    ></span>\n    <span\n      *ngIf=\"language == 'as'\"\n      class=\"optionsList assameseFont\"\n      [innerHTML]=\"news[language].title | slice:0:30\"\n      (click)=\"singleNews(news.newsId)\"\n    ></span>\n    <span *ngIf=\"news[language].title.length >= 60\">...</span>\n    <span\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n      class=\"categoryButton\"\n      *ngIf=\"news.newsCategory && language != 'as'\"\n      >{{news.newsCategory[language]}}</span\n    >\n    <span\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n      class=\"categoryButton assameseFont\"\n      *ngIf=\"news.newsCategory && language == 'as'\"\n      >{{news.newsCategory[language]}}</span\n    >\n  </ion-col>\n</ion-row>\n"

/***/ }),

/***/ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/time-ago-pipe/esm5/time-ago-pipe.js ***!
  \**********************************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimeAgoPipe = /** @class */ (function () {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var /** @type {?} */ d = new Date(value);
        var /** @type {?} */ now = new Date();
        var /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        var /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        var /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        var /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        var /** @type {?} */ years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    /**
     * @return {?}
     */
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var /** @type {?} */ min = 60;
        var /** @type {?} */ hr = min * 60;
        var /** @type {?} */ day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    return TimeAgoPipe;
}());
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=time-ago-pipe.js.map


/***/ }),

/***/ "./src/app/related-post/related-post.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/related-post/related-post.module.ts ***!
  \*****************************************************/
/*! exports provided: RelatedPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedPostPageModule", function() { return RelatedPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _related_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./related-post.page */ "./src/app/related-post/related-post.page.ts");







var routes = [
    {
        path: '',
        component: _related_post_page__WEBPACK_IMPORTED_MODULE_6__["RelatedPostPage"]
    }
];
var RelatedPostPageModule = /** @class */ (function () {
    function RelatedPostPageModule() {
    }
    RelatedPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_related_post_page__WEBPACK_IMPORTED_MODULE_6__["RelatedPostPage"]],
            entryComponents: [
                _related_post_page__WEBPACK_IMPORTED_MODULE_6__["RelatedPostPage"],
            ],
            exports: [
                _related_post_page__WEBPACK_IMPORTED_MODULE_6__["RelatedPostPage"],
            ],
        })
    ], RelatedPostPageModule);
    return RelatedPostPageModule;
}());



/***/ }),

/***/ "./src/app/related-post/related-post.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/related-post/related-post.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 5px;\n}\n\n.relatedPostRow0,\n.relatedPostRow1,\n.relatedPostRow2,\n.relatedPostRow3,\n.relatedPostRow4 {\n  margin-left: 10px;\n  margin-bottom: 6px;\n  border-bottom: 1px solid #eaeaea;\n}\n\n.relatedPostRow4 {\n  border: none;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 10px;\n}\n\nion-back-button {\n  margin: 0 !important;\n}\n\n.postImage img {\n  min-width: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 20px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 18px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 18px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\nion-title {\n  float: left;\n  line-height: 46px;\n  padding-left: 10px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: var(--main-app-color);\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n}\n\n.floatShare {\n  bottom: 11%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.unbookmarkFloat {\n  background-color: #cbc9c9;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: var(--main-app-color);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin-right: 20px;\n}\n\n.postTitle {\n  margin-top: 36px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.newsInfo span {\n  font-weight: 700;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n}\n\n.category_title {\n  display: inline-block;\n  width: 100%;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  font-size: 13px;\n  display: block;\n  margin-top: 2%;\n  color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 12px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 14.5px;\n  font-weight: bold;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 94px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9yZWxhdGVkLXBvc3QvcmVsYXRlZC1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVsYXRlZC1wb3N0L3JlbGF0ZWQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7Ozs7O0VBS0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLG9CQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDTUY7O0FESEE7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QUROQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0VBQUEsNENBQUE7QUNTRjs7QUROQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQ1NGOztBRE5BO0VBQ0UsV0FBQTtBQ1NGOztBRFBBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1VGOztBRFJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFRBO0VBQ0UsMEJBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7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L3JlbGF0ZWQtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5yZWxhdGVkUG9zdFJvdzAsXG4ucmVsYXRlZFBvc3RSb3cxLFxuLnJlbGF0ZWRQb3N0Um93Mixcbi5yZWxhdGVkUG9zdFJvdzMsXG4ucmVsYXRlZFBvc3RSb3c0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG59XG4ucmVsYXRlZFBvc3RSb3c0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tYmFjay1idXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5wb3N0SW1hZ2UgaW1nIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLnBvc3RUaXRsZSBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnN1YlBvc3RUaXRsZSxcbi5wb3N0IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jYXRUaXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY3JlYXRlZEJ5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jc291cmNlTGluayB7XG4gIGNvbG9yOiAjMDgwMGZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zaGFyZUltYWdlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG4udW5ib29rbWFyayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJvb2ttYXJrZWQge1xuICBjb2xvcjogI2NiYzljOTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWN0aW9uQnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5oZWFydF9pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuaW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubGlrZWQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuLm5ld3NJbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDMlO1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICB6LWluZGV4OiAxMTE7XG59XG4uZmxvYXRTaGFyZSB7XG4gIGJvdHRvbTogMTElO1xuICByaWdodDogNDBweDtcbn1cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cbi51bmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjOWM5O1xufVxuLmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcblxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5pbWFnZUNyZWRpdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnBvc3RUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubGlrZXNTcGFuIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cbi5uZXdzSW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5zcmNMaW5rIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbn1cbi5jYXRlZ29yeV90aXRsZSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNvbnRlbnRGZWVkcyB7XG4gIGhlaWdodDogMTEwcHg7XG59XG4uY2F0ZWdvcnlCdXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5pbWdDcmVkaXQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW1nQ3JlZGl0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIiwicCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucmVsYXRlZFBvc3RSb3cwLFxuLnJlbGF0ZWRQb3N0Um93MSxcbi5yZWxhdGVkUG9zdFJvdzIsXG4ucmVsYXRlZFBvc3RSb3czLFxuLnJlbGF0ZWRQb3N0Um93NCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xufVxuXG4ucmVsYXRlZFBvc3RSb3c0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaG9tZUJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0SW1hZ2UgaW1nIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0VGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY3JlYXRlZEJ5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzb3VyY2VMaW5rIHtcbiAgY29sb3I6ICMwODAwZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5hLmZsb2F0ICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbmEuZmxvYXQ6aG92ZXIgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICByaWdodDogNDBweDtcbn1cblxuLnVuYm9va21hcmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib29rbWFya2VkIHtcbiAgY29sb3I6ICNjYmM5Yzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5saWtlZCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5uZXdzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDMlO1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICB6LWluZGV4OiAxMTE7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgYm90dG9tOiAxMSU7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4ubXktZmxvYXQge1xuICBtYXJnaW4tdG9wOiAyOCU7XG59XG5cbi51bmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjOWM5O1xufVxuXG4uYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLnNoYXJlQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmltYWdlQ3JlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wb3N0VGl0bGUge1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuXG4ubGlrZXNTcGFuIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cblxuLm5ld3NJbmZvIHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3JjTGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyJTtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTNweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNC41cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmVlZHMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmltZ0NyZWRpdCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmltZ0NyZWRpdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/related-post/related-post.page.ts":
/*!***************************************************!*\
  !*** ./src/app/related-post/related-post.page.ts ***!
  \***************************************************/
/*! exports provided: RelatedPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedPostPage", function() { return RelatedPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





var RelatedPostPage = /** @class */ (function () {
    function RelatedPostPage(router) {
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
    }
    RelatedPostPage.prototype.ngOnInit = function () {
        console.log("RELATED POST", this.news);
        if (this.postCount <= 1) {
            $('.relatedPostRow').addClass('borderClass');
            console.log("GOT 4", this.postCount);
        }
    };
    RelatedPostPage.prototype.singleNews = function (postid) {
        console.log('postid', postid);
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/single-post/' + postid);
    };
    RelatedPostPage.prototype.categoryClick = function (catId, catName) {
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    RelatedPostPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RelatedPostPage.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RelatedPostPage.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RelatedPostPage.prototype, "postCount", void 0);
    RelatedPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-related-post',
            template: __webpack_require__(/*! raw-loader!./related-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/related-post/related-post.page.html"),
            styles: [__webpack_require__(/*! ./related-post.page.scss */ "./src/app/related-post/related-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RelatedPostPage);
    return RelatedPostPage;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~related-post-related-post-module~single-post-single-post-module-es5.js.map