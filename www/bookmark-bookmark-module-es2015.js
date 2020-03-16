(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmark-bookmark-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bookmark/bookmark.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookmark/bookmark.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/settings\"\n      float-left\n      (click)=\"backButton()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\">{{bookmarkTitle[language]}}</span>\n    <button float-right routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!loading\">\n  <ion-list>\n    <ion-item-sliding\n      class=\"feeds\"\n      *ngFor=\"let news of newsArray; let i = index; last as isLast\"\n    >\n      <ion-item>\n        <ion-col size=\"3\" class=\"newsImg\" padding>\n          <img\n            src=\"{{mediaPath}}{{news.newsImage}}\"\n            height=\"73px\"\n            width=\"100%\"\n            (click)=\"getSingleBookmark(news.newsId)\"\n          />\n        </ion-col>\n        <ion-col size=\"9\" (click)=\"getSingleBookmark(news.newsId)\">\n          <div>\n            <span\n              class=\"optionsList\"\n              *ngIf=\"language != 'as'\"\n              [innerHTML]=\"news[language].title\"\n            ></span>\n            <span\n              class=\"optionsList assameseFont\"\n              *ngIf=\"language == 'as'\"\n              [innerHTML]=\"news[language].title\"\n            ></span>\n            <span\n            class=\"categoryButton assameseFont\"\n            *ngIf=\"news.newsCategory[language]\"\n            [ngClass]=\"{'assameseFont': language == 'as'}\"\n            (click)=\"categoryClick(news.newsCategoryId,news.newsCategory[language]);wrongStatus = true\"\n            >{{news.newsCategory[language]}}</span\n          >\n          <span\n            class=\"categoryButton\"\n            *ngIf=\"!news.newsCategory[language]\"\n            (click)=\"categoryClick(news.newsCategoryId,news.newsCategory.en);wrongStatus = true\"\n            >{{news.newsCategory.en}}</span\n          >\n          </div>\n        </ion-col>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\">\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"trash\"\n            (click)=\"deleteBookmarked(news.newsId)\"\n          ></ion-icon>\n        </ion-item-option>\n        <ion-item-option>\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"share\"\n            *ngIf=\"language != 'as'\"\n            (click)=\"shareBookmarked(news.newsImage,news.fcmLink, news[language].title)\"\n          ></ion-icon>\n          <ion-icon\n            slot=\"icon-only\"\n            name=\"share\"\n            *ngIf=\"language == 'as'\"\n            (click)=\"shareBookmarked(news.newsImage,news.fcmLink, news.en.title)\"\n          ></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div class=\"noBookmark\" *ngIf=\"bookmarkLength == 0\">\n    <img src=\"assets/images/bookmarkEmpty.png\" />\n  </div>\n</ion-content>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>"

/***/ }),

/***/ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js":
/*!*************************************************************!*\
  !*** ./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js ***!
  \*************************************************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimeAgoPipe {
    /**
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     */
    constructor(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        this.removeTimer();
        let /** @type {?} */ d = new Date(value);
        let /** @type {?} */ now = new Date();
        let /** @type {?} */ seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        let /** @type {?} */ timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(() => {
            if (typeof window !== 'undefined') {
                return window.setTimeout(() => {
                    this.ngZone.run(() => this.changeDetectorRef.markForCheck());
                }, timeToUpdate);
            }
            return null;
        });
        let /** @type {?} */ minutes = Math.round(Math.abs(seconds / 60));
        let /** @type {?} */ hours = Math.round(Math.abs(minutes / 60));
        let /** @type {?} */ days = Math.round(Math.abs(hours / 24));
        let /** @type {?} */ months = Math.round(Math.abs(days / 30.416));
        let /** @type {?} */ years = Math.round(Math.abs(days / 365));
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeTimer();
    }
    /**
     * @return {?}
     */
    removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    getSecondsUntilUpdate(seconds) {
        let /** @type {?} */ min = 60;
        let /** @type {?} */ hr = min * 60;
        let /** @type {?} */ day = hr * 24;
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
    }
}
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'timeAgo',
                pure: false
            },] },
];
/** @nocollapse */
TimeAgoPipe.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=time-ago-pipe.js.map


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

module.exports = ".newsImg {\n  margin: auto 0 !important;\n  height: 98px;\n  padding: 0;\n  padding-bottom: 13px;\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 2%;\n  font-size: 13px;\n  color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 12px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 60px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.noBookmark {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.noBookmark img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.loadingContent {\n  --background: none;\n  background: url('simpleLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9ib29rbWFyay9ib29rbWFyay5wYWdlLnNjc3MiLCJzcmMvYXBwL2Jvb2ttYXJrL2Jvb2ttYXJrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ09GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ09GOztBRExBO0VBQ0UsWUFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1dGOztBRFRBO0VBQ0UsNEJBQUE7QUNZRjs7QURUQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1lGOztBRFZBO0VBQ0UsbUJBQUE7QUNhRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNhRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNjRjs7QURaQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ2VGOztBRGJBO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNnQkYiLCJmaWxlIjoic3JjL2FwcC9ib29rbWFyay9ib29rbWFyay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c0ltZyB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOThweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59XG4ubGF0ZXN0UG9zdCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG59XG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMzI2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnRleHRCbG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDEzcHg7XG59XG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ub0Jvb2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5vQm9va21hcmsgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NpbXBsZUxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbiIsIi5uZXdzSW1nIHtcbiAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5OHB4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbn1cblxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAzMjZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogNjBweDtcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmZlZWRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm5vQm9va21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub0Jvb2ttYXJrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _changeLang__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../changeLang */ "./src/app/changeLang.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/admobfree.service */ "./src/app/services/admobfree.service.ts");














let BookmarkPage = class BookmarkPage {
    constructor(_admobService, appcomponent, network, _toastService, platform, socialSharing, actionSheetController, _newsService, _categoryService, router) {
        this._admobService = _admobService;
        this.appcomponent = appcomponent;
        this.network = network;
        this._toastService = _toastService;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.error = '';
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
        this.bookmarkTitle = _changeLang__WEBPACK_IMPORTED_MODULE_11__["bookmark"];
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appcomponent.openRatingModal();
            if (this.router.url.includes('bookmarks')) {
                this.router.navigate(['settings']);
            }
        }));
        this.language = localStorage.getItem('language');
    }
    onPress(newsImage, fcmLink, newsId, newsTitleEnglish, $event) {
        console.log('newsId=', newsId);
    }
    ionViewWillEnter() {
        this._admobService.interstitalAdOnFivePageChange();
        this.bookmarkedNews();
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
            if (res.length === 0) {
                this.noNews = true;
            }
            this.loading = false;
            this.newsObj = res;
            this.newsArray = this.newsObj;
            console.log(" BOOKMARKED NEWS", this.newsArray);
            this.bookmarkLength = this.newsArray.length;
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    deleteBookmarked(id) {
        if (this.network.type == 'none') {
            this._toastService.toastFunction('No internet connection', 'danger');
        }
        else {
            this._newsService.bookmarkPost(id).subscribe((res) => {
                console.log("res", res);
                this._toastService.toastFunction(res.message, 'success');
                this.bookmarkedNews();
            }, err => {
                this._toastService.toastFunction(err.error.message, 'danger');
                this.bookmarkedNews();
            });
        }
    }
    shareBookmarked(newsImage, link, title) {
        if (localStorage.getItem('accessToken')) {
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
        else {
            this._toastService.toastFunction('You need to login first!', 'danger');
        }
    }
    getSingleBookmark(id) {
        if (this.wrongStatus) {
            this.wrongStatus = false;
        }
        else {
            console.log("bookmark id", id);
            this.router.navigate(['single-post/' + id + '/bookmark']);
        }
    }
    categoryClick(catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    }
    backButton() {
        this.appcomponent.openRatingModal();
    }
};
BookmarkPage.ctorParameters = () => [
    { type: _services_admobfree_service__WEBPACK_IMPORTED_MODULE_13__["AdmobfreeService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admobfree_service__WEBPACK_IMPORTED_MODULE_13__["AdmobfreeService"], _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BookmarkPage);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let CategoryService = class CategoryService {
    constructor(network, http) {
        this.network = network;
        this.http = http;
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Error! something went wrong.');
    }
    //get all cateogries
    getAll() {
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
            var base64Url = tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
            console.log("Decoded", this.loggedInUser);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category").subscribe((result) => {
                this.categories = result['data'];
                var prop = ['category', 'categoryId', 'notify'];
                let offlineArray = JSON.parse(JSON.stringify(this.categories));
                offlineArray.forEach(element => {
                    for (var k in element) {
                        if (prop.indexOf(k) < 0) {
                            delete element[k];
                        }
                    }
                });
                localStorage.removeItem('categoryArray');
                localStorage.setItem('categoryArray', JSON.stringify(offlineArray));
                if (tokenLocalStorage) {
                    this.notifyChange();
                }
                observer.next(this.categories);
                observer.complete();
            }, (error) => {
                observer.error(error);
            });
        });
    }
    //append notification key
    notifyChange() {
        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.categories, (user) => {
            lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, (Id) => {
                if (Id == this.loggedInUser) {
                    console.log("NOTIFIED CATEGORY", Id);
                    user['isNotify'] = true;
                }
            });
        });
    }
    //subcribing category
    notifyUser(catId) {
        console.log(catId);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category-notify", { categoryId: catId });
    }
};
CategoryService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CategoryService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=bookmark-bookmark-module-es2015.js.map