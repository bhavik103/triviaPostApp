(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~large-post-large-post-module~sidebar-sidebar-module~single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/large-post/large-post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/large-post/large-post.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"mainDiv\">\n  <ion-col size=\"12\" class=\"latestPost\" (click)=\"singleNews(news.newsId)\">\n    <img\n      class=\"latestpostimg firstTimeBlur\"\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"100%\"\n      onerror=\"this.src='../../assets/images/placeholder.png'\"\n      *ngIf=\"!firstLargePostClick && !skip == 1\"\n      width=\"100%\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <img\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"100%\"\n      data-src=\"assets/images/placeholder.png'\"\n      onerror=\"this.src='../../assets/images/placeholder.png'\"\n      width=\"100%\"\n      *ngIf=\"firstLargePostClick === '1' || skip == 1\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <img\n      data-src=\"assets/images/placeholder.png'\"\n      onerror=\"this.src='../../assets/images/placeholder.png'\"\n      height=\"100%\"\n      width=\"100%\"\n      *ngIf=\"(firstLargePostClick === '1' || skip == 1) && noConnection\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <div\n      *ngIf=\"!firstLargePostClick && !skip == '1'\"\n      class=\"tourText tourTextTitle\"\n    >\n      {{tourReadPost[language]}}\n    </div>\n    <div class=\"textBlock\">\n      <span\n        class=\"latestNews\"\n        [ngClass]=\"{'assameseFont': language == 'as'}\"\n        *ngIf=\"!firstLargePostClick && !skip == '1' && news[language].title\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n        {{news[language].title}}\n        <div class=\"ripple_effect\"></div>\n      </span>\n      <span\n        class=\"latestNews\"\n        [ngClass]=\"{'assameseFont': language == 'as'}\"\n        *ngIf=\"(skip == '1' || firstLargePostClick === '1') && news[language].title\"\n        [innerHTML]=\"news[language].title\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n      </span>\n      <span\n        class=\"latestNews\"\n        *ngIf=\"(skip == '1' || firstLargePostClick === '1') && !news[language].title\"\n        [innerHTML]=\"news.en.title\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n      </span>\n    </div>\n    <button\n      (click)=\"singleNews(news.newsId)\"\n      class=\"categoryButton blinkCat\"\n      [ngClass]=\"{'assameseFont': language == 'as'}\"\n      *ngIf=\"!firstLargePostClick && !skip == '1'\"\n    >\n      <div class=\"ripple_effect\"></div>\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language]);wrongStatus = true\"\n      class=\"categoryButton\"\n      [ngClass]=\"{'assameseFont': language == 'as'}\"\n      *ngIf=\"(firstLargePostClick === '1' || skip == '1') && news.newsCategory[language]\"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory.en);wrongStatus = true\"\n      class=\"categoryButton\"\n      *ngIf=\"(firstLargePostClick === '1' || skip == '1') && !news.newsCategory[language]\"\n    >\n      {{news.newsCategory.en}}\n    </button>\n    <div *ngIf=\"!firstLargePostClick && !skip == '1'\" class=\"tourText\">\n      {{tourCatPost[language]}}\n    </div>\n    <span class=\"nextSpan\" *ngIf=\"!firstLargePostClick && !skip == '1'\">\n      <p class=\"nextButton\">\n        <img src=\"assets/images/nextButton.png\" alt=\"\" />\n      </p>\n      <div class=\"ripple_effect\"></div>\n    </span>\n  </ion-col>\n</ion-row>\n"

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

/***/ "./src/app/large-post/large-post.module.ts":
/*!*************************************************!*\
  !*** ./src/app/large-post/large-post.module.ts ***!
  \*************************************************/
/*! exports provided: LargePostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargePostPageModule", function() { return LargePostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _large_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./large-post.page */ "./src/app/large-post/large-post.page.ts");







var LargePostPageModule = /** @class */ (function () {
    function LargePostPageModule() {
    }
    LargePostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_large_post_page__WEBPACK_IMPORTED_MODULE_6__["LargePostPage"]],
            entryComponents: [
                _large_post_page__WEBPACK_IMPORTED_MODULE_6__["LargePostPage"],
            ],
            exports: [
                _large_post_page__WEBPACK_IMPORTED_MODULE_6__["LargePostPage"],
            ],
        })
    ], LargePostPageModule);
    return LargePostPageModule;
}());



/***/ }),

/***/ "./src/app/large-post/large-post.page.scss":
/*!*************************************************!*\
  !*** ./src/app/large-post/large-post.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsImg {\n  padding: 6px;\n  height: 88px;\n}\n\n.latestPost {\n  padding: 0;\n  height: 195px;\n  background-color: pink;\n  background-image: url('placeholder.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100% !important;\n  max-width: 100% !important;\n  background-position: center !important;\n  width: 100vw !important;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n  height: 195px;\n  min-width: 100%;\n}\n\n.latestpostimg {\n  height: 195px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  bottom: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  font-size: 12px;\n  display: block;\n  margin-top: -12%;\n  background-color: #e41212 !important;\n  color: #fff;\n  padding: 9px 9px;\n  border-radius: 8px;\n  z-index: 1;\n  position: absolute;\n  margin-left: 5%;\n  font-weight: 700;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 22px;\n  font-weight: 800;\n  position: relative;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.blink {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.blinkCat {\n  position: relative;\n}\n\n.ripple_effect {\n  background-color: #fff !important;\n}\n\n.firstTimeBlur {\n  -webkit-filter: blur(5px) grayscale(1);\n          filter: blur(5px) grayscale(1);\n}\n\n.tourText {\n  position: absolute;\n  z-index: 9;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  top: 100%;\n  font-size: 12px;\n  width: 50vw;\n  color: #fff;\n  left: 10vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 10%;\n  border-bottom: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourText.tourTextTitle {\n  left: 5px;\n  font-size: 12px;\n  top: 21px;\n}\n\n.tourText.tourTextTitle:before {\n  top: 100%;\n  border-top: 7px solid #e42310;\n  border-bottom: none;\n}\n\n.isVisited {\n  color: #609;\n}\n\n.modal-window {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  pointer-events: all;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.modal-window:target {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.modal-window > div {\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2em;\n  background: #ffffff;\n  height: 60%;\n}\n\n.modal-window header {\n  font-weight: bold;\n}\n\n.modal-window h1 {\n  font-size: 150%;\n  margin: 0 0 15px;\n}\n\n.modal-close {\n  color: #aaa;\n  line-height: 50px;\n  font-size: 80%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 70px;\n  pointer-events: all;\n  text-decoration: none;\n}\n\n.modal-close:hover {\n  color: black;\n}\n\n/* Demo Styles */\n\na {\n  color: inherit;\n}\n\n.modal-window div:not(:last-of-type) {\n  margin-bottom: 15px;\n}\n\nsmall {\n  color: #aaa;\n}\n\n.btn {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n\n.btn i {\n  padding-right: 0.3em;\n}\n\nbutton.signupButton {\n  width: 61%;\n  background-color: #cf2736;\n  color: #fff;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  padding: 12px;\n}\n\nbutton.cancelButton {\n  width: 61%;\n  background-color: #fff;\n  color: #cf2736;\n  border: 1px solid #cf2736;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  margin-top: 21px;\n}\n\n.firstTimeButton,\n.cancelButton {\n  position: relative;\n}\n\nion-slide {\n  display: block;\n}\n\n.swiper-container {\n  height: 60% !important;\n}\n\nion-slide img {\n  height: 40px !important;\n}\n\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n}\n\nion-slide h3 {\n  padding: 22px;\n}\n\n.tourBlur {\n  -webkit-filter: blur(5px) grayscale(1);\n          filter: blur(5px) grayscale(1);\n  background-color: rgba(1, 1, 1, 0.01);\n}\n\n.tourText {\n  position: absolute;\n  z-index: 111;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 12px;\n  width: 50vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 10%;\n  border-bottom: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourTextModal {\n  position: relative;\n  top: 2vw;\n  left: 25vw;\n  color: #fff;\n}\n\n.nextSpan {\n  position: absolute;\n  bottom: 5px;\n  right: -15px;\n  color: #fff;\n  z-index: 111;\n  border-radius: 50%;\n  background-color: #fff;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n  box-shadow: 0px 0px 10px -2px #e42310;\n}\n\n.nextSpan img {\n  height: 24px;\n  width: 24px;\n  margin-left: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\np.nextButton {\n  margin: 0;\n  text-align: center;\n  font-size: 20px;\n  vertical-align: middle;\n}\n\nbutton.categoryButton.assameseFont {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDUUY7O0FETEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtBQ1NGOztBRFBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDV0Y7O0FE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QkE7RUFDRSxhQUFBO0FDK0JGOztBRDdCQTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxxQ0FBQTtBQ2dDRjs7QUR6QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtBQzJCRjs7QUR6QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtBQzRCRjs7QUR6QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQzRCRjs7QUQxQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUM2QkY7O0FEM0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQzhCRjs7QUQ1QkE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUMrQkY7O0FEN0JBO0VBQ0UsMEJBQUE7QUNnQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3NJbWcge1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogODhweDtcbn1cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG59XG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMTk1cHg7XG4gIG1pbi13aWR0aDoxMDAlO1xufVxuLmxhdGVzdHBvc3RpbWcge1xuICBoZWlnaHQ6IDE5NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTEyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOXB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5ibGluayB7XG4gIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcblxuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbi5ibGlua0NhdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmZpcnN0VGltZUJsdXIge1xuICBmaWx0ZXI6IGJsdXIoNXB4KSBncmF5c2NhbGUoMSk7XG59XG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0b3A6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDUwdnc7XG4gIGNvbG9yOiAjZmZmO1xuICBsZWZ0OiAxMHZ3O1xufVxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50b3VyVGV4dC50b3VyVGV4dFRpdGxlIHtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogMjFweDtcbn1cbi50b3VyVGV4dC50b3VyVGV4dFRpdGxlOmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uaXNWaXNpdGVkIHtcbiAgY29sb3I6ICM2MDk7XG59XG4ubW9kYWwtd2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgJjp0YXJnZXQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICAmID4gZGl2IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA2MCU7XG4gIH1cbiAgaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gIH1cbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgY29sb3I6ICNhYWE7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4vKiBEZW1vIFN0eWxlcyAqL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tb2RhbC13aW5kb3cgZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbiAgfVxufVxuYnV0dG9uLnNpZ251cEJ1dHRvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjI3MzY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuYnV0dG9uLmNhbmNlbEJ1dHRvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjY2YyNzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2YyNzM2O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuXG4uZmlyc3RUaW1lQnV0dG9uLFxuLmNhbmNlbEJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xufVxuaW9uLXNsaWRlIGltZyB7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG59XG5pb24tc2xpZGUgaDMge1xuICBwYWRkaW5nOiAyMnB4O1xufVxuLnRvdXJCbHVyIHtcbiAgZmlsdGVyOiBibHVyKDVweCkgZ3JheXNjYWxlKDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuMDEpO1xufVxuLy8gLmNhdGVnb3J5X3RpdGxlLFxuLy8gLm5vdEZpcnN0VGltZSB7XG4vLyAgIGZpbHRlcjogYmx1cig1cHgpO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEsIDEsIDEsIDAuMDEpO1xuLy8gfVxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyB0b3A6IDEyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDUwdnc7XG59XG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG91clRleHRNb2RhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAydnc7XG4gIGxlZnQ6IDI1dnc7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5leHRTcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IC0xNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTExO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAtMnB4ICNlNDIzMTA7XG59XG4ubmV4dFNwYW4gaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5wLm5leHRCdXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuYnV0dG9uLmNhdGVnb3J5QnV0dG9uLmFzc2FtZXNlRm9udCB7XG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG59IiwiLm5ld3NJbWcge1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogODhweDtcbn1cblxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDE5NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG59XG5cbi5sYXRlc3RQb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMTk1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA5cHggOXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYmxpbmsge1xuICBib3JkZXI6IDVweCByZWQgc29saWQ7XG4gIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uYmxpbmtDYXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZmlyc3RUaW1lQmx1ciB7XG4gIGZpbHRlcjogYmx1cig1cHgpIGdyYXlzY2FsZSgxKTtcbn1cblxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdG9wOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA1MHZ3O1xuICBjb2xvcjogI2ZmZjtcbiAgbGVmdDogMTB2dztcbn1cblxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnRvdXJUZXh0LnRvdXJUZXh0VGl0bGUge1xuICBsZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAyMXB4O1xufVxuXG4udG91clRleHQudG91clRleHRUaXRsZTpiZWZvcmUge1xuICB0b3A6IDEwMCU7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uaXNWaXNpdGVkIHtcbiAgY29sb3I6ICM2MDk7XG59XG5cbi5tb2RhbC13aW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1vZGFsLXdpbmRvdzp0YXJnZXQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5tb2RhbC13aW5kb3cgPiBkaXYge1xuICB3aWR0aDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGhlaWdodDogNjAlO1xufVxuLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb2RhbC13aW5kb3cgaDEge1xuICBmb250LXNpemU6IDE1MCU7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG59XG5cbi5tb2RhbC1jbG9zZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogNzBweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBEZW1vIFN0eWxlcyAqL1xuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubW9kYWwtd2luZG93IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4gaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xufVxuXG5idXR0b24uc2lnbnVwQnV0dG9uIHtcbiAgd2lkdGg6IDYxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMjczNjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbmJ1dHRvbi5jYW5jZWxCdXR0b24ge1xuICB3aWR0aDogNjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2NmMjczNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmMjczNjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cblxuLmZpcnN0VGltZUJ1dHRvbixcbi5jYW5jZWxCdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG59XG5cbmlvbi1zbGlkZSBoMyB7XG4gIHBhZGRpbmc6IDIycHg7XG59XG5cbi50b3VyQmx1ciB7XG4gIGZpbHRlcjogYmx1cig1cHgpIGdyYXlzY2FsZSgxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCAxLCAwLjAxKTtcbn1cblxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG91clRleHRNb2RhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAydnc7XG4gIGxlZnQ6IDI1dnc7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmV4dFNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogLTE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxMTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC0ycHggI2U0MjMxMDtcbn1cblxuLm5leHRTcGFuIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5wLm5leHRCdXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5idXR0b24uY2F0ZWdvcnlCdXR0b24uYXNzYW1lc2VGb250IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/large-post/large-post.page.ts":
/*!***********************************************!*\
  !*** ./src/app/large-post/large-post.page.ts ***!
  \***********************************************/
/*! exports provided: LargePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargePostPage", function() { return LargePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _changeLang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../changeLang */ "./src/app/changeLang.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var LargePostPage = /** @class */ (function () {
    function LargePostPage(translate, navctrl, _toastService, router) {
        this.translate = translate;
        this.navctrl = navctrl;
        this._toastService = _toastService;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
        this.wrongStatus = false;
        this.tourReadPost = _changeLang__WEBPACK_IMPORTED_MODULE_6__["tourReadPost"];
        this.tourCatPost = _changeLang__WEBPACK_IMPORTED_MODULE_6__["tourCatPost"];
        this.tourSkip = _changeLang__WEBPACK_IMPORTED_MODULE_6__["tourSkip"];
    }
    LargePostPage.prototype.ngOnInit = function () {
        this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
        if (this.visitedArray) {
            this.isPresent = this.visitedArray.includes(this.news.newsId);
        }
        console.log("news[language].title", this.news[this.language].title);
        console.log('this.news', this.news);
        this.skip = localStorage.getItem('skip');
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        console.log("CATSELECT", this.skip);
    };
    LargePostPage.prototype.ionViewWillEnter = function () {
        var alertOnlineStatus = function () {
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
        if (!localStorage.getItem('firstLargePostClick')) {
            console.log("firstLargePostClick");
        }
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        this.skip = localStorage.getItem('skip');
        this.language = localStorage.getItem('language');
        console.log('this.language', this.language);
    };
    LargePostPage.prototype.categoryClick = function (catId, catName) {
        localStorage.setItem('firstLargePostClick', '1');
        this.firstLargePostClick = '1';
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    LargePostPage.prototype.singleNews = function (postid) {
        var _this = this;
        this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
        this.visitedArray.push(postid);
        localStorage.setItem('isVisited', JSON.stringify(this.visitedArray));
        if (navigator.onLine) {
            if (this.wrongStatus) {
                this.wrongStatus = false;
            }
            else {
                localStorage.setItem('firstLargePostClick', '1');
                this.navctrl.navigateRoot('/single-post/' + postid);
            }
        }
        else {
            this.navctrl.navigateRoot('/single-post/' + postid);
            this.translate.get('No internet connnection').subscribe(function (mes) {
                _this._toastService.toastFunction(mes, 'danger');
            });
        }
        // }
    };
    LargePostPage.prototype.closeModal = function () {
        localStorage.setItem('skip', '1');
        this.navctrl.navigateRoot('/all-categories');
    };
    LargePostPage.prototype.redirectToSignup = function () {
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/login');
    };
    LargePostPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('news'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LargePostPage.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('singleCat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LargePostPage.prototype, "singleCat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('language'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LargePostPage.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('skip'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LargePostPage.prototype, "skip", void 0);
    LargePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-large-post',
            template: __webpack_require__(/*! raw-loader!./large-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/large-post/large-post.page.html"),
            styles: [__webpack_require__(/*! ./large-post.page.scss */ "./src/app/large-post/large-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LargePostPage);
    return LargePostPage;
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
//# sourceMappingURL=default~large-post-large-post-module~sidebar-sidebar-module~single-category-single-category-module-es5.js.map