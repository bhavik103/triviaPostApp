(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~all-categories-all-categories-module~category-tiles-category-tiles-module~home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/category-tiles/category-tiles.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category-tiles/category-tiles.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"container\"\n  (click)=\"singleCategory(category.categoryId,category.category[language])\"\n>\n  <img\n    src=\"{{mediaPath}}{{category.categoryImage}}\"\n    alt=\"Category Image\"\n    style=\"width:100%;\"\n  />\n</div>\n<div class=\"text-block\">\n  <div class=\"\">\n    <div class=\"category_title\">\n      <p\n        (click)=\"singleCategory(category.categoryId,category.category[language])\"\n      >\n        {{category.category[language] | slice:0:30}}\n      </p>\n    </div>\n    <!-- <p class=\"postCount\">{{category.countPost}} Posts</p> -->\n    <button\n      *ngIf=\"!category.isNotify && (!firstTime || skip)\"\n      class=\"notSubscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      <ion-icon name=\"notifications-outline\"></ion-icon> Subscribe\n    </button>\n    <button\n      *ngIf=\"!category.isNotify && (firstTime && !skip)\"\n      class=\"notSubscribed firstTimeButton\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      <ion-icon name=\"notifications-outline\"></ion-icon> Subscribe\n    </button>\n    <button\n      *ngIf=\"category.isNotify\"\n      class=\"subscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify,firstTime)\"\n    >\n      Subscribed\n    </button>\n  </div>\n</div>\n\n<div id=\"open-modal\" class=\"modal-window\" *ngIf=\"modal\">\n  <div>\n    <div class=\"img_border\">\n      <img src=\"../../assets/images/bookmarkNew.png\" alt=\"\" *ngIf=\"sliderIndex == 0 || !sliderIndex\"/>\n      <img src=\"../../assets/images/notificationNew.png\" alt=\"\" *ngIf=\"sliderIndex == 1\" />\n    </div>\n    <ion-slides pager (ionSlideWillChange)=\"slideDidChange()\">\n      <ion-slide>\n        <h3>Bookmark Posts</h3>\n        <p>So you don't loose your favourite reading blogs</p>\n      </ion-slide>\n\n      <ion-slide>\n        <div>\n        </div>\n        <h3>Get Notifications</h3>\n        <p>So you get instant notifications from your subscribed blogs</p>\n      </ion-slide>\n    </ion-slides>\n    <div>\n      <button class=\"signupButton\" (click)=\"redirectToSignup()\">Signup</button>\n      <button class=\"cancelButton\" (click)=\"closeModal()\">Skip</button>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-tiles.page */ "./src/app/category-tiles/category-tiles.page.ts");







var CategoryTilesPageModule = /** @class */ (function () {
    function CategoryTilesPageModule() {
    }
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
    return CategoryTilesPageModule;
}());



/***/ }),

/***/ "./src/app/category-tiles/category-tiles.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 12px;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  position: relative;\n}\n\n.category_title {\n  display: inline-block;\n  width: 100%;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 13%;\n  color: white;\n  padding: 0 5%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n  left: 12px;\n  right: 12px;\n}\n\n.container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n  height: 160px;\n}\n\n.container img {\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.postCount {\n  font-size: 11px;\n  float: left;\n  background: #000;\n  margin-top: 7%;\n  padding: 2%;\n  opacity: 0.7;\n  border-radius: 3px;\n}\n\n.notSubscribed,\n.subscribed {\n  margin-top: 7%;\n  background-color: #fff;\n  opacity: 0.9;\n  border: 1px solid var(--main-app-color);\n  color: var(--main-app-color);\n  padding: 4px;\n  border-radius: 3px;\n  font-size: 10px;\n  float: left;\n}\n\n.notSubscribed ion-icon {\n  float: left;\n}\n\n.notSubscribed {\n  background-color: #fff;\n  border: 1px solid var(--main-app-color);\n  color: var(--main-app-color);\n  border-radius: 5px;\n}\n\n.subscribed {\n  color: #fff;\n  background-color: var(--main-app-color);\n  border-radius: 5px;\n}\n\n.modal-window {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  pointer-events: all;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.modal-window:target {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.modal-window > div {\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2em;\n  background: #ffffff;\n  height: 60%;\n}\n\n.modal-window header {\n  font-weight: bold;\n}\n\n.modal-window h1 {\n  font-size: 150%;\n  margin: 0 0 15px;\n}\n\n.modal-close {\n  color: #aaa;\n  line-height: 50px;\n  font-size: 80%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 70px;\n  pointer-events: all;\n  text-decoration: none;\n}\n\n.modal-close:hover {\n  color: black;\n}\n\n/* Demo Styles */\n\na {\n  color: inherit;\n}\n\n.modal-window div:not(:last-of-type) {\n  margin-bottom: 15px;\n}\n\nsmall {\n  color: #aaa;\n}\n\n.btn {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n\n.btn i {\n  padding-right: 0.3em;\n}\n\nbutton.signupButton {\n  width: 100%;\n  background-color: #CF2736;\n  color: #fff;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n}\n\nbutton.cancelButton {\n  background-color: #fff;\n  color: #CF2736;\n  border: 1px solid #CF2736;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  width: 100%;\n  margin-top: 21px;\n}\n\n.firstTimeButton,\n.cancelButton {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\nion-slide {\n  display: block;\n}\n\n.swiper-container {\n  height: 60% !important;\n}\n\nion-slide img {\n  height: 40px !important;\n}\n\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n}\n\nion-slide h3 {\n  padding: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9jYXRlZ29yeS10aWxlcy9jYXRlZ29yeS10aWxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5LXRpbGVzL2NhdGVnb3J5LXRpbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNNRjs7QURKQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QUROQTs7RUFFRSxjQUFBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0FDU0Y7O0FETkE7RUFDRSxzQkFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0UsV0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7QUNVRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDU0Y7O0FEUkU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQ1VKOztBRFJFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRFJFO0VBQ0UsaUJBQUE7QUNVSjs7QURSRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRE5BO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDU0Y7O0FEUkU7RUFDRSxZQUFBO0FDVUo7O0FETkEsZ0JBQUE7O0FBRUE7RUFDRSxjQUFBO0FDUUY7O0FETEE7RUFDRSxtQkFBQTtBQ1FGOztBRExBO0VBQ0UsV0FBQTtBQ1FGOztBRExBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNRRjs7QURQRTtFQUNFLG9CQUFBO0FDU0o7O0FETkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1NGOztBRFBBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDVUY7O0FEUkE7O0VBRUUscUJBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ1VGOztBRFBBO0VBQ0U7SUFDRSxrQkFBQTtFQ1VGO0FBQ0Y7O0FEYkE7RUFDRTtJQUNFLGtCQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFLGNBQUE7QUNVRjs7QURSQTtFQUNFLHNCQUFBO0FDV0Y7O0FEVEE7RUFDRSx1QkFBQTtBQ1lGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7QUNhRjs7QURYQTtFQUNFLGFBQUE7QUNjRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXRpbGVzL2NhdGVnb3J5LXRpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICBwYWRkaW5nOiAxMnB4O1xufVxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRleHQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTMlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgNSU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGVmdDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cbi5jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucG9zdENvdW50IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIHBhZGRpbmc6IDIlO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5ub3RTdWJzY3JpYmVkLFxuLnN1YnNjcmliZWQge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgLy8gbWFyZ2luLWxlZnQ6IDclO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubm90U3Vic2NyaWJlZCBpb24taWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubm90U3Vic2NyaWJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnN1YnNjcmliZWQge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8vbW9kYWwgY3NzXG4ubW9kYWwtd2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgJjp0YXJnZXQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICAmID4gZGl2IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA2MCU7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4vKiBEZW1vIFN0eWxlcyAqL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tb2RhbC13aW5kb3cgZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbiAgfVxufVxuYnV0dG9uLnNpZ251cEJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0YyNzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5idXR0b24uY2FuY2VsQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNDRjI3MzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDRjI3MzY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cbi5maXJzdFRpbWVCdXR0b24sXG4uY2FuY2VsQnV0dG9uIHtcbiAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xuXG4gIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbn1cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRlIGltZyB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG59XG5pb24tc2xpZGUgaDN7XG4gIHBhZGRpbmc6IDIycHg7XG59IiwiaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEzJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDUlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxlZnQ6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuXG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnBvc3RDb3VudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDclO1xuICBwYWRkaW5nOiAyJTtcbiAgb3BhY2l0eTogMC43O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5ub3RTdWJzY3JpYmVkLFxuLnN1YnNjcmliZWQge1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubm90U3Vic2NyaWJlZCBpb24taWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubm90U3Vic2NyaWJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3Vic2NyaWJlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vZGFsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubW9kYWwtd2luZG93OnRhcmdldCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLm1vZGFsLXdpbmRvdyA+IGRpdiB7XG4gIHdpZHRoOiA5MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA2MCU7XG59XG4ubW9kYWwtd2luZG93IGhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1vZGFsLXdpbmRvdyBoMSB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubW9kYWwtY2xvc2U6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIERlbW8gU3R5bGVzICovXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tb2RhbC13aW5kb3cgZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ0biBpIHtcbiAgcGFkZGluZy1yaWdodDogMC4zZW07XG59XG5cbmJ1dHRvbi5zaWdudXBCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGMjczNjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG5idXR0b24uY2FuY2VsQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNDRjI3MzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDRjI3MzY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cblxuLmZpcnN0VGltZUJ1dHRvbixcbi5jYW5jZWxCdXR0b24ge1xuICBib3JkZXI6IDVweCByZWQgc29saWQ7XG4gIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbn1cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG59XG5cbmlvbi1zbGlkZSBoMyB7XG4gIHBhZGRpbmc6IDIycHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








// import {NavParams} from '@ionic/angular';

var CategoryTilesPage = /** @class */ (function () {
    function CategoryTilesPage(_toastService, network, _categoryService, router) {
        this._toastService = _toastService;
        this.network = network;
        this._categoryService = _categoryService;
        this.router = router;
        this.onSubscribe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_5__["config"].mediaApiUrl;
    }
    CategoryTilesPage.prototype.ionViewWillEnter = function () {
        this.skip = localStorage.getItem('skip');
    };
    CategoryTilesPage.prototype.ngOnInit = function () {
        console.log("this.categories in child", this.category);
        console.log("this.categories in child", this.language);
    };
    CategoryTilesPage.prototype.goToAllPosts = function () {
        this.router.navigateByUrl('/home/all-post');
    };
    CategoryTilesPage.prototype.singleCategory = function (catId, catname) {
        if (!this.firstTime) {
            this.router.navigateByUrl('single-category/' + catId + '/' + catname);
        }
    };
    CategoryTilesPage.prototype.addNotify = function (catId, isNotify) {
        var _this = this;
        console.log('isNotify', isNotify);
        if (this.firstTime) {
            this.modal = true;
        }
        else {
            if (this.network.type == 'none') {
                var message = "No internet connection";
                var color = "danger";
                this._toastService.toastFunction(message, color);
            }
            else {
                this._categoryService.notifyUser(catId).subscribe(function (res) {
                    _this._toastService.toastFunction(res.message, 'success');
                    var emitObject = { catId: catId, statusCode: res.statusCode };
                    _this.onSubscribe.emit(emitObject);
                }, function (err) {
                    _this._toastService.toastFunction(err.error.message, 'danger');
                });
            }
        }
    };
    CategoryTilesPage.prototype.closeModal = function () {
        this.modal = false;
        this.onSubscribe.emit({ cat: 1 });
    };
    CategoryTilesPage.prototype.redirectToSignup = function () {
        localStorage.setItem('language', this.language);
        localStorage.setItem('catSelect', '0');
        this.router.navigateByUrl('/login');
    };
    CategoryTilesPage.prototype.slideDidChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        _a.sliderIndex = _b.sent();
                        console.log("ACTIVE INDEX", this.sliderIndex);
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryTilesPage.ctorParameters = function () { return [
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
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
    return CategoryTilesPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var CategoryService = /** @class */ (function () {
    function CategoryService(network, http) {
        this.network = network;
        this.http = http;
    }
    CategoryService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Error! something went wrong.');
    };
    //get all cateogries
    CategoryService.prototype.getAll = function () {
        var _this = this;
        var tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
            var base64Url = tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
            console.log("Decoded", this.loggedInUser);
        }
        if (this.network.type == 'none') {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                console.log(JSON.parse(localStorage.getItem("categoryArray")));
                _this.categories = JSON.parse(localStorage.getItem("categoryArray"));
                setTimeout(function () {
                    observer.next(_this.categories);
                    observer.complete();
                }, 1);
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category").subscribe(function (result) {
                    _this.categories = result['data'];
                    _this.notifyChange();
                    console.log('this.categories', _this.categories);
                    // localStorage.setItem('categoryArray', JSON.stringify(this.categories))
                    observer.next(_this.categories);
                    observer.complete();
                }, function (error) {
                    observer.error(error);
                });
            });
        }
    };
    //append notification key
    CategoryService.prototype.notifyChange = function () {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.categories, function (user) {
            lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, function (Id) {
                if (Id == _this.loggedInUser) {
                    console.log("NOTIFIED CATEGORY", Id);
                    user['isNotify'] = true;
                }
            });
        });
    };
    //subcribing category
    CategoryService.prototype.notifyUser = function (catId) {
        console.log(catId);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category-notify", { categoryId: catId });
    };
    CategoryService.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
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
//# sourceMappingURL=default~all-categories-all-categories-module~category-tiles-category-tiles-module~home-home-module-es5.js.map