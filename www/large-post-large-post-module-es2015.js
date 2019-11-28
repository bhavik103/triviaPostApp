(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["large-post-large-post-module"],{

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
//# sourceMappingURL=large-post-large-post-module-es2015.js.map