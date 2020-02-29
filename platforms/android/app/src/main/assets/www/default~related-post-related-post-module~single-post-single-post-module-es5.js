(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~related-post-related-post-module~single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/related-post/related-post.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/related-post/related-post.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list lines=\"none\" [ngClass]=\"{'isVisited':isPresent}\">\n  <ion-item-sliding class=\"feeds\">\n    <ion-item [ngClass]=\"{'isVisited':isPresent}\">\n      <ion-col size=\"3\" class=\"newsImg\" padding>\n        <img\n          src=\"{{mediaPath}}{{news.newsImage}}\"\n          data-src=\"../../assets/images/placeholder.png'\"\n          onerror=\"this.src='../../assets/images/placeholder.png'\"\n          width=\"100%\"\n          (click)=\"singleNews(news.newsId)\"\n          class=\"loading\"\n        />\n      </ion-col>\n      <ion-col\n        size=\"9\"\n        class=\"postDescription\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n        <div>\n          <span\n            class=\"optionsList\"\n            *ngIf=\"language != 'as'\"\n            [innerHTML]=\"news[language].title\"\n          ></span>\n          <span\n            class=\"optionsList assameseFont\"\n            *ngIf=\"language == 'as'\"\n            [innerHTML]=\"news[language].title\"\n          ></span>\n          <span\n            class=\"categoryButton assameseFont\"\n            *ngIf=\"language == 'as'\"\n            (click)=\"categoryClick(news.newsCategoryId,news.newsCategory[language]);wrongStatus = true\"\n            >{{news.newsCategory[language]}}</span\n          >\n          <span\n            class=\"categoryButton\"\n            *ngIf=\"language != 'as'\"\n            (click)=\"categoryClick(news.newsCategoryId,news.newsCategory[language]);wrongStatus = true\"\n            >{{news.newsCategory[language]}}</span\n          >\n        </div>\n      </ion-col>\n    </ion-item>\n  </ion-item-sliding>\n</ion-list>"

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

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  /* margin: 4px; */\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  padding: 0;\n  height: 100%;\n  min-width: 98px;\n  background: url('placeholder.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 50%;\n  background-position: center;\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.categoryButton {\n  font-size: 13px;\n  padding-top: 2%;\n  color: var(--main-app-color);\n  border-radius: 8px;\n  z-index: 3333;\n  display: inline-block;\n}\n\n.postDescription {\n  padding-top: 0;\n  padding-left: 13px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 12px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n  display: block;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.noBookmark {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.noBookmark img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.firstTimeBlur {\n  border: 1px solid #f7f7f7;\n  -webkit-filter: blur(7px) grayscale(1);\n          filter: blur(7px) grayscale(1);\n}\n\nion-list {\n  border-bottom: 1px solid #cacaca;\n}\n\n.isVisited {\n  --background: none;\n  background: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9yZWxhdGVkLXBvc3QvcmVsYXRlZC1wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVsYXRlZC1wb3N0L3JlbGF0ZWQtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNPRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ1FGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNRRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QUROQTtFQUNFLDRCQUFBO0FDU0Y7O0FETkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNXRjs7QURUQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ1lGOztBRFZBO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDYUY7O0FEWEE7RUFDRSxnQ0FBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ2VGIiwiZmlsZSI6InNyYy9hcHAvcmVsYXRlZC1wb3N0L3JlbGF0ZWQtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbi5ob21lQmFjay5tZC5oeWRyYXRlZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC8qIG1hcmdpbjogNHB4OyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5ld3NJbWcge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogOThweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ubGF0ZXN0UG9zdCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG59XG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMzI2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnRleHRCbG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMzMzMztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBvc3REZXNjcmlwdGlvbntcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cbi8vIGlvbi1saXN0e1xuLy8gICBtaW4taGVpZ2h0OiAxMTdweDtcbi8vICAgbWF4LWhlaWdodDogMTE3cHg7XG4vLyB9XG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTNweDtcbn1cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1LjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLm5vQm9va21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubm9Cb29rbWFyayBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRpbWVBZ28ge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZmlyc3RUaW1lQmx1cntcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgZmlsdGVyOiBibHVyKDdweCkgZ3JheXNjYWxlKDEpO1xufVxuaW9uLWxpc3R7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xufVxuLmlzVmlzaXRlZHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufSIsImlvbi1pY29uLmhvbWVCYWNrLm1kLmh5ZHJhdGVkIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luOiA0cHg7ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5uZXdzSW1nIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDk4cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubGF0ZXN0UG9zdCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sYXRlc3RQb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbn1cblxuLmxhdGVzdHBvc3RpbWcge1xuICBoZWlnaHQ6IDMyNnB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnRleHRCbG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAzMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0RGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1LjVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5ub0Jvb2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9Cb29rbWFyayBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmZpcnN0VGltZUJsdXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBmaWx0ZXI6IGJsdXIoN3B4KSBncmF5c2NhbGUoMSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhY2E7XG59XG5cbi5pc1Zpc2l0ZWQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59Il19 */"

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
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");






var RelatedPostPage = /** @class */ (function () {
    function RelatedPostPage(router, _toastService) {
        this.router = router;
        this._toastService = _toastService;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
    }
    RelatedPostPage.prototype.ngOnInit = function () {
        this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
        this.isPresent = this.visitedArray.includes(this.news.newsId);
        console.log("RELATED POST", this.news);
        $('.relatedPostRow').addClass('borderClass');
        console.log("GOT 4", this.postCount);
    };
    RelatedPostPage.prototype.singleNews = function (postid) {
        this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
        this.visitedArray.push(postid);
        localStorage.setItem('isVisited', JSON.stringify(this.visitedArray));
        if (localStorage.getItem('skip')) {
            if (navigator.onLine) {
                if (this.wrongStatus) {
                    this.wrongStatus = false;
                }
                else {
                    localStorage.setItem('firstLargePostClick', '1');
                    // localStorage.setItem('skip', '1')
                    console.log('postid', postid);
                    this.router.navigateByUrl('/single-post/' + postid);
                }
            }
            else {
                this._toastService.toastFunction('No internet connnection', 'danger');
            }
        }
    };
    RelatedPostPage.prototype.categoryClick = function (catId, catName) {
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    RelatedPostPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
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