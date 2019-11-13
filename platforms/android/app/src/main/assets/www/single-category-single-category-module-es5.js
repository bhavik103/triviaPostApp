(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-category/single-category.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-category/single-category.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/home/categories\" float-left></ion-icon>\n    <ion-title>{{catName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content (swiperight)=\"goToCategories()\" ion-padding>\n    <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let news of newsArray; let i = index; last as isLast\">\n            <ion-card (click)=\"singleNews(news.newsId)\">\n                <ion-card-header>\n                    <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"91px\" alt=\"\">\n                </ion-card-header>\n\n                <ion-card-content>\n                    {{news.newsTitleEnglish | slice:0:40}}\n                    <span *ngIf=\"news.newsTitleEnglish.length >=40\">...</span>\n                    <!-- <p class=\"postTime\">56 min</p> -->\n                </ion-card-content>\n                <ion-row class=\"cardfooter\">\n                    <ion-col size=\"9\">\n                        {{news.createdAt | timeAgo}}\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        {{news.likesCount}} <span *ngIf=\"news.likesCount == 0\">like</span><span *ngIf=\"news.likesCount == 1\">like</span><span\n                            *ngIf=\"news.likesCount > 1\">likes</span>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <p *ngIf=\"noNews == true\" class=\"noNews\">No news in this category!</p>\n</ion-content>"

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

module.exports = "ion-card-header {\n  padding: 0;\n  padding-top: 55%;\n  position: relative;\n}\n\nion-card-header img {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-card-content {\n  padding: 5px 10px 10px 10px;\n  min-height: 60px;\n}\n\nion-card,\nion-col {\n  padding: 0;\n  border-radius: 0;\n}\n\nion-button {\n  --background-focused: #961300;\n}\n\n.cardfooter {\n  padding: 10px 10px;\n  font-size: 10px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\n.noNews {\n  font-size: 30px;\n  top: 50%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  margin: auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2luZ2xlLWNhdGVnb3J5L3NpbmdsZS1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1jYXRlZ29yeS9zaW5nbGUtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQUE7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7O0VBRUUsVUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSw2QkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtY2F0ZWdvcnkvc2luZ2xlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jYXJkLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1jYXJkLFxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzk2MTMwMDtcbn1cblxuLmNhcmRmb290ZXIge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5ub05ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG5pb24tY2FyZCxcbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM5NjEzMDA7XG59XG5cbi5jYXJkZm9vdGVyIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLm5vTmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

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