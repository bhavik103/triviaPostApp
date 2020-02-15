(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~all-categories-all-categories-module~category-tiles-category-tiles-module~home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/category-tiles/category-tiles.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category-tiles/category-tiles.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container\"\n  (click)=\"singleCategory(category.categoryId,category.category[language])\"\n>\n  <img\n    src=\"{{mediaPath}}{{category.categoryImage}}\"\n    data-src=\"../../assets/images/placeholder.png'\"\n    onerror=\"this.src='../../assets/images/placeholder.png'\"\n    alt=\"Category Image\"\n    style=\"width:100%;\"\n  />\n</div>\n<div class=\"text-block\">\n  <div class=\"\">\n    <div class=\"category_title\">\n      <p\n        *ngIf=\"language != 'as'\"\n        (click)=\"singleCategory(category.categoryId,category.category[language])\"\n      >\n        {{category.category[language] | slice:0:30}}\n      </p>\n      <p\n        *ngIf=\"language == 'as'\"\n        class=\"assameseFont\"\n        (click)=\"singleCategory(category.categoryId,category.category[language])\"\n      >\n        {{category.category[language] | slice:0:30}}\n      </p>\n    </div>\n    <!-- <p class=\"postCount\">{{category.countPost}} Posts</p> -->\n    <button\n      *ngIf=\"!category.isNotify && (!firstTime || skip)\"\n      class=\"notSubscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      <ion-icon name=\"notifications-outline\"></ion-icon> Subscribe\n    </button>\n    <button\n      *ngIf=\"!category.isNotify && (firstTime && !skip) && index == 0\"\n      class=\"notSubscribed firstTimeButton\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      <div class=\"ripple_effect\"></div>\n      <ion-icon name=\"notifications-outline\"></ion-icon> Subscribe\n    </button>\n    <button\n      *ngIf=\"!category.isNotify && (firstTime && !skip) && index != 0\"\n      class=\"notSubscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      <ion-icon name=\"notifications-outline\"></ion-icon> Subscribe\n    </button>\n    <button\n      *ngIf=\"category.isNotify\"\n      class=\"subscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      Subscribed\n    </button>\n  </div>\n</div>\n\n<div id=\"open-modal\" class=\"modal-window\" *ngIf=\"modal\">\n  <div>\n    <div class=\"img_border\">\n      <img\n        src=\"../../assets/images/bookmarkNew.png\"\n        alt=\"\"\n        *ngIf=\"sliderIndex == 0 || !sliderIndex\"\n      />\n      <img\n        src=\"../../assets/images/notificationNew.png\"\n        alt=\"\"\n        *ngIf=\"sliderIndex == 1\"\n      />\n    </div>\n    <ion-slides pager (ionSlideWillChange)=\"slideDidChange()\">\n      <ion-slide>\n        <h3>Bookmark Posts</h3>\n        <p>So you don't loose your favourite reading blogs</p>\n      </ion-slide>\n\n      <ion-slide>\n        <div></div>\n        <h3>Get Notifications</h3>\n        <p>So you get instant notifications from your subscribed blogs</p>\n      </ion-slide>\n    </ion-slides>\n    <div>\n      <button class=\"signupButton\" (click)=\"redirectToSignup()\">Signup</button>\n      <button class=\"cancelButton\" (click)=\"closeModal()\">\n        <div class=\"ripple_effect\"></div>\n        Skip\n      </button>\n    </div>\n  </div>\n</div>\n"

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

/***/ "./src/app/category-tiles/category-tiles.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoryTilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTilesPageModule", function() { return CategoryTilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-tiles.page */ "./src/app/category-tiles/category-tiles.page.ts");







let CategoryTilesPageModule = class CategoryTilesPageModule {
};
CategoryTilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [_category_tiles_page__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPage"]],
        entryComponents: [
            _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPage"],
        ],
        exports: [
            _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPage"],
        ],
    })
], CategoryTilesPageModule);



/***/ }),

/***/ "./src/app/category-tiles/category-tiles.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 12px;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  position: relative;\n  background: url('placeholder.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 50%;\n  background-position: center;\n}\n\n.category_title {\n  display: inline-block;\n  width: 100%;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 13%;\n  color: white;\n  padding: 0 5%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n  left: 7px;\n  right: 12px;\n}\n\n.container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n  height: 160px;\n}\n\n.container img {\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.postCount {\n  font-size: 11px;\n  float: left;\n  background: #000;\n  margin-top: 7%;\n  padding: 2%;\n  opacity: 0.7;\n  border-radius: 3px;\n}\n\n.notSubscribed,\n.subscribed {\n  margin-top: 7%;\n  background-color: #fff;\n  opacity: 0.9;\n  border: 1px solid var(--main-app-color);\n  color: var(--main-app-color);\n  padding: 7px 15px;\n  border-radius: 3px;\n  font-size: 11px;\n  float: left;\n}\n\n.notSubscribed ion-icon {\n  float: left;\n  font-size: 11px;\n  padding-right: 3px;\n}\n\n.notSubscribed {\n  background-color: #fff;\n  border: 1px solid var(--main-app-color);\n  color: var(--main-app-color);\n  border-radius: 5px;\n}\n\n.subscribed {\n  color: #fff;\n  background-color: var(--main-app-color);\n  border-radius: 5px;\n}\n\n.modal-window {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  pointer-events: all;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.modal-window:target {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.modal-window > div {\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2em;\n  background: #ffffff;\n  height: 60%;\n}\n\n.modal-window header {\n  font-weight: bold;\n}\n\n.modal-window h1 {\n  font-size: 150%;\n  margin: 0 0 15px;\n}\n\n.modal-close {\n  color: #aaa;\n  line-height: 50px;\n  font-size: 80%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 70px;\n  pointer-events: all;\n  text-decoration: none;\n}\n\n.modal-close:hover {\n  color: black;\n}\n\n/* Demo Styles */\n\na {\n  color: inherit;\n}\n\n.modal-window div:not(:last-of-type) {\n  margin-bottom: 15px;\n}\n\nsmall {\n  color: #aaa;\n}\n\n.btn {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n\n.btn i {\n  padding-right: 0.3em;\n}\n\nbutton.signupButton {\n  width: 61%;\n  background-color: #cf2736;\n  color: #fff;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  padding: 12px;\n}\n\nbutton.cancelButton {\n  width: 61%;\n  background-color: #fff;\n  color: #cf2736;\n  border: 1px solid #cf2736;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  margin-top: 21px;\n}\n\n.firstTimeButton, .cancelButton {\n  position: relative;\n}\n\nion-slide {\n  display: block;\n}\n\n.swiper-container {\n  height: 60% !important;\n}\n\nion-slide img {\n  height: 40px !important;\n}\n\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n}\n\nion-slide h3 {\n  padding: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9jYXRlZ29yeS10aWxlcy9jYXRlZ29yeS10aWxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5LXRpbGVzL2NhdGVnb3J5LXRpbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7O0VBRUUsY0FBQTtFQUVBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNRRjs7QUROQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNTRjs7QUROQTtFQUNFLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNTRjs7QURSRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDVUo7O0FEUkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDVUo7O0FEUkU7RUFDRSxpQkFBQTtBQ1VKOztBRFJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDVUo7O0FETkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNTRjs7QURSRTtFQUNFLFlBQUE7QUNVSjs7QUROQSxnQkFBQTs7QUFFQTtFQUNFLGNBQUE7QUNRRjs7QURMQTtFQUNFLG1CQUFBO0FDUUY7O0FETEE7RUFDRSxXQUFBO0FDUUY7O0FETEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1FGOztBRFBFO0VBQ0Usb0JBQUE7QUNTSjs7QUROQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRFBBO0VBQ0Usa0JBQUE7QUNVRjs7QURSQTtFQUNFLGNBQUE7QUNXRjs7QURUQTtFQUNFLHNCQUFBO0FDWUY7O0FEVkE7RUFDRSx1QkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7QUNjRjs7QURaQTtFQUNFLGFBQUE7QUNlRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXRpbGVzL2NhdGVnb3J5LXRpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICBwYWRkaW5nOiAxMnB4O1xufVxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNhdGVnb3J5X3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEzJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDUlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxlZnQ6IDdweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cbi5jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucG9zdENvdW50IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIHBhZGRpbmc6IDIlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5ub3RTdWJzY3JpYmVkLFxuLnN1YnNjcmliZWQge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDclO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5ub3RTdWJzY3JpYmVkIGlvbi1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuXG4ubm90U3Vic2NyaWJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnN1YnNjcmliZWQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8vbW9kYWwgY3NzXG4ubW9kYWwtd2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgJjp0YXJnZXQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICAmID4gZGl2IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA2MCU7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4vKiBEZW1vIFN0eWxlcyAqL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tb2RhbC13aW5kb3cgZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbiAgfVxufVxuYnV0dG9uLnNpZ251cEJ1dHRvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjI3MzY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuYnV0dG9uLmNhbmNlbEJ1dHRvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjY2YyNzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2YyNzM2O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuXG4uZmlyc3RUaW1lQnV0dG9uLC5jYW5jZWxCdXR0b257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRlIGltZyB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG59XG5pb24tc2xpZGUgaDMge1xuICBwYWRkaW5nOiAyMnB4O1xufVxuIiwiaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1JTtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsZWZ0OiA3cHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuXG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBvc3RDb3VudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDclO1xuICBwYWRkaW5nOiAyJTtcbiAgb3BhY2l0eTogMC43O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5ub3RTdWJzY3JpYmVkLFxuLnN1YnNjcmliZWQge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5ub3RTdWJzY3JpYmVkIGlvbi1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuXG4ubm90U3Vic2NyaWJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3Vic2NyaWJlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZGFsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubW9kYWwtd2luZG93OnRhcmdldCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLm1vZGFsLXdpbmRvdyA+IGRpdiB7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA2MCU7XG59XG4ubW9kYWwtd2luZG93IGhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsLXdpbmRvdyBoMSB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubW9kYWwtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIERlbW8gU3R5bGVzICovXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tb2RhbC13aW5kb3cgZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0biBpIHtcbiAgcGFkZGluZy1yaWdodDogMC4zZW07XG59XG5cbmJ1dHRvbi5zaWdudXBCdXR0b24ge1xuICB3aWR0aDogNjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YyNzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweDtcbn1cblxuYnV0dG9uLmNhbmNlbEJ1dHRvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjY2YyNzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2YyNzM2O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuXG4uZmlyc3RUaW1lQnV0dG9uLCAuY2FuY2VsQnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGUgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xufVxuXG5pb24tc2xpZGUgaDMge1xuICBwYWRkaW5nOiAyMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/category-tiles/category-tiles.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.page.ts ***!
  \*******************************************************/
/*! exports provided: CategoryTilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTilesPage", function() { return CategoryTilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








// import {NavParams} from '@ionic/angular';

let CategoryTilesPage = class CategoryTilesPage {
    constructor(_toastService, network, _categoryService, router) {
        this._toastService = _toastService;
        this.network = network;
        this._categoryService = _categoryService;
        this.router = router;
        this.onSubscribe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_5__["config"].mediaApiUrl;
    }
    ionViewWillEnter() {
        this.skip = localStorage.getItem('skip');
    }
    ngOnInit() {
        const alertOnlineStatus = () => {
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
        console.log("this.categories in child", this.category);
        console.log("this.categories in child", this.language);
    }
    goToAllPosts() {
        this.router.navigateByUrl('/home/all-post');
    }
    singleCategory(catId, catname) {
        if (!this.firstTime) {
            this.router.navigateByUrl('single-category/' + catId + '/' + catname);
        }
    }
    addNotify(catId, isNotify) {
        console.log('isNotify', isNotify);
        if (this.firstTime) {
            this.modal = true;
        }
        else {
            if (this.network.type == 'none') {
                const message = "No internet connection";
                const color = "danger";
                this._toastService.toastFunction(message, color);
            }
            else {
                this._categoryService.notifyUser(catId).subscribe((res) => {
                    this._toastService.toastFunction(res.message, 'success');
                    var emitObject = { catId: catId, statusCode: res.statusCode };
                    console.log("EMIT OBJECT", emitObject);
                    this.onSubscribe.emit(emitObject);
                }, err => {
                    this._toastService.toastFunction(err.error.message, 'danger');
                });
            }
        }
    }
    closeModal() {
        this.modal = false;
        this.onSubscribe.emit({ cat: 1 });
    }
    redirectToSignup() {
        localStorage.setItem('language', this.language);
        localStorage.setItem('catSelect', '0');
        this.router.navigateByUrl('/login');
    }
    slideDidChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.sliderIndex = yield this.slider.getActiveIndex();
            console.log("ACTIVE INDEX", this.sliderIndex);
        });
    }
};
CategoryTilesPage.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoryTilesPage.prototype, "category", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('language'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CategoryTilesPage.prototype, "language", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('firstTime'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoryTilesPage.prototype, "firstTime", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoryTilesPage.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CategoryTilesPage.prototype, "onSubscribe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSlides"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSlides"])
], CategoryTilesPage.prototype, "slider", void 0);
CategoryTilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-tiles',
        template: __webpack_require__(/*! raw-loader!./category-tiles.page.html */ "./node_modules/raw-loader/index.js!./src/app/category-tiles/category-tiles.page.html"),
        styles: [__webpack_require__(/*! ./category-tiles.page.scss */ "./src/app/category-tiles/category-tiles.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CategoryTilesPage);



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
//# sourceMappingURL=default~all-categories-all-categories-module~category-tiles-category-tiles-module~home-home-module-es2015.js.map