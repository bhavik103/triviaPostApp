(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-category/single-category.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-category/single-category.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/home/categories\" float-left></ion-icon>\n    <ion-title>{{catName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (swiperight)=\"goToCategories()\" ion-padding>\n    <ion-row class=\"feeds\" *ngFor=\"let news of newsArray; let i = index; last as isLast\">\n        <ion-col *ngIf=\"i == 0\" size=\"12\">\n            <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"100%\" width=\"100%\" (click)=\"singleNews(news.newsId)\">\n        </ion-col>\n        <ion-col *ngIf=\"i == 0\" size=\"12\">\n            <span class=\"latestNews\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish\"\n                (click)=\"singleNews(news.newsId)\"></span>\n            <span class=\"latestNews\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"news.newsTitleHindi\"></span>\n            <p class=\"latestNewsInfo\"><img src=\"assets/images/like.png\" alt=\"\" class=\"likeImage\"> {{news.likesCount}} likes | {{news.createdAt | timeAgo}} | <span class=\"newsCat\"\n                    (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory | slice:0:20}}</span>\n            </p>\n        </ion-col>\n        <ion-col size=\"5\" class=\"newsImg\" padding *ngIf=\"i != 0\">\n            <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"73px\" width=\"100%\" (click)=\"singleNews(news.newsId)\">\n        </ion-col>\n        <ion-col size=\"7\" *ngIf=\"i != 0\">\n            <div>\n                <span class=\"optionsList\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish | slice:0:40\"\n                    (click)=\"singleNews(news.newsId)\"></span><span *ngIf=\"language == 'English'\">...</span>\n                <span class=\"optionsList\" *ngIf=\"language == 'Hindi'\"\n                    [innerHTML]=\"news.newsTitleHindi | slice:0:40\"></span><span *ngIf=\"language == 'Hindi'\"\n                    (click)=\"singleNews(news.newsId)\">...</span>\n                <p class=\"otherInfo\">{{news.createdAt | timeAgo}} | <span class=\"newsCat\"\n                        (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory | slice:0:20}}</span>\n                </p>\n                <p class=\"otherInfoSecond\"><img src=\"assets/images/like.png\" alt=\"\" class=\"likeImage\"> {{news.likesCount}} likes</p>\n            </div>\n        </ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n    <p *ngIf=\"noNews == true\" class=\"noNews\">No news in this category!</p>\n</ion-content>"

/***/ }),

/***/ "./src/app/single-category/single-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/single-category/single-category.module.ts ***!
  \***********************************************************/
/*! exports provided: SingleCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCategoryPageModule", function() { return SingleCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-category.page */ "./src/app/single-category/single-category.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _single_category_page__WEBPACK_IMPORTED_MODULE_6__["SingleCategoryPage"]
    }
];
var SingleCategoryPageModule = /** @class */ (function () {
    function SingleCategoryPageModule() {
    }
    SingleCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_category_page__WEBPACK_IMPORTED_MODULE_6__["SingleCategoryPage"]]
        })
    ], SingleCategoryPageModule);
    return SingleCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/single-category/single-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/single-category/single-category.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  /* margin: 4px; */\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  margin: auto 0 !important;\n  padding: 6px;\n  height: 100px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  bottom: 20px;\n  position: absolute;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n\n.feeds {\n  border-bottom: 1px solid #ddd;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n}\n\n.newsCat {\n  color: #ed2424;\n}\n\n.latestNews {\n  font-size: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2luZ2xlLWNhdGVnb3J5L3NpbmdsZS1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1jYXRlZ29yeS9zaW5nbGUtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLDZCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtY2F0ZWdvcnkvc2luZ2xlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uLmhvbWVCYWNrLm1kLmh5ZHJhdGVkIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luOiA0cHg7ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubmV3c0ltZyB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG4gIC8vIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uZmVlZHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5ld3NDYXQge1xuICBjb2xvcjogI2VkMjQyNDtcbn1cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIiwiaW9uLWljb24uaG9tZUJhY2subWQuaHlkcmF0ZWQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW46IDRweDsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5ld3NJbWcge1xuICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5mZWVkcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogI2VkMjQyNDtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/single-category/single-category.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/single-category/single-category.page.ts ***!
  \*********************************************************/
/*! exports provided: SingleCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCategoryPage", function() { return SingleCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");







var SingleCategoryPage = /** @class */ (function () {
    function SingleCategoryPage(network, _toastService, _newsService, route, router) {
        this.network = network;
        this._toastService = _toastService;
        this._newsService = _newsService;
        this.route = route;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
    }
    SingleCategoryPage.prototype.ngOnInit = function () {
        this.language = localStorage.getItem('language');
        this.catName = this.route.snapshot.params['cat'];
        this.singleCategory();
    };
    SingleCategoryPage.prototype.singleCategory = function () {
        var _this = this;
        var catId = this.route.snapshot.params['id'];
        console.log('catId', catId);
        this._newsService.allCatNews(catId).subscribe(function (res) {
            console.log("catNews", res);
            _this.newsArray = res;
            if (!_this.newsArray.length) {
                _this.noNews = true;
                console.log('this.noNews', _this.noNews);
            }
        }, function (err) {
            _this._toastService.toastFunction(err.error.message, 'danger');
        });
    };
    SingleCategoryPage.prototype.goToCategories = function () {
        this.router.navigateByUrl('/home/categories');
    };
    SingleCategoryPage.prototype.singleNews = function (id) {
        this.router.navigateByUrl('/single-post/' + id + '/category');
    };
    SingleCategoryPage.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SingleCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-category',
            template: __webpack_require__(/*! raw-loader!./single-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/single-category/single-category.page.html"),
            styles: [__webpack_require__(/*! ./single-category.page.scss */ "./src/app/single-category/single-category.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SingleCategoryPage);
    return SingleCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-category-single-category-module-es5.js.map