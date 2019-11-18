(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookmark-bookmark-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bookmark/bookmark.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookmark/bookmark.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/settings\" float-left></ion-icon>\n    <ion-title>Bookmark</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding class=\"feeds\" *ngFor=\"let news of newsArray; let i = index; last as isLast\">\n      <ion-item>\n        <ion-col size=\"3\" class=\"newsImg\" padding>\n          <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"73px\" width=\"100%\" (click)=\"singleNews(news.newsId)\">\n        </ion-col>\n        <ion-col size=\"9\">\n          <div>\n            <span class=\"optionsList\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish\"\n              (click)=\"singleNews(news.newsId)\"></span><span *ngIf=\"language == 'English'\"></span>\n            <span class=\"optionsList\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"news.newsTitleHindi\"></span><span\n              *ngIf=\"language == 'Hindi'\" (click)=\"singleNews(news.newsId)\"></span>\n            <button (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\"\n              class=\"categoryButton\">{{news.newsCategory}}</button>\n            <p class=\"otherInfoSecond\"><img src=\"assets/images/like.png\" alt=\"\" class=\"likeImage\">\n              {{news.likesCount}} likes | {{news.createdAt | timeAgo}}</p>\n          </div>\n        </ion-col>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\">\n          <ion-icon slot=\"icon-only\" name=\"trash\" (click)=\"deleteBookmarked(news.newsId)\"></ion-icon>\n        </ion-item-option>\n        <ion-item-option>\n          <ion-icon slot=\"icon-only\" name=\"share\"\n            (click)=\"shareBookmarked(news.newsImage,news.fcmLink, news.newsTitleEnglish)\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div id=\"loader-wrapper\" *ngIf=\"loading\">\n    <div id=\"loader\">\n      <div class=\"spinner\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n      </div>\n      <p class=\"text-center\">Loding...</p>\n    </div>\n  </div>\n  <div class=\"noBookmark\">\n    <img src=\"assets/images/bookmarkEmpty.png\" *ngIf=\"noNews == true\">\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookmark_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmark.page */ "./src/app/bookmark/bookmark.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _bookmark_page__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"]
    }
];
var BookmarkPageModule = /** @class */ (function () {
    function BookmarkPageModule() {
    }
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
    return BookmarkPageModule;
}());



/***/ }),

/***/ "./src/app/bookmark/bookmark.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookmark/bookmark.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  /* margin: 4px; */\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  margin: auto 0 !important;\n  padding: 6px;\n  height: 88px;\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: #ce2837;\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: #ed2424;\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.noBookmark {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.noBookmark img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYm9va21hcmsvYm9va21hcmsucGFnZS5zY3NzIiwic3JjL2FwcC9ib29rbWFyay9ib29rbWFyay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDUUY7O0FETEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNZRjs7QURWQTtFQUNFLGNBQUE7QUNhRjs7QURYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2NGOztBRFpBO0VBQ0UsbUJBQUE7QUNlRjs7QURaQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNlRjs7QURiQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNnQkYiLCJmaWxlIjoic3JjL2FwcC9ib29rbWFyay9ib29rbWFyay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbi5ob21lQmFjay5tZC5oeWRyYXRlZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC8qIG1hcmdpbjogNHB4OyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm5ld3NJbWcge1xuICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogODhweDtcbn1cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbn1cbi5sYXRlc3RQb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbn1cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAzMjZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uY2F0ZWdvcnlCdXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTI4Mzc7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5uZXdzQ2F0IHtcbiAgY29sb3I6ICNlZDI0MjQ7XG59XG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ub0Jvb2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5vQm9va21hcmsgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbiIsImlvbi1pY29uLmhvbWVCYWNrLm1kLmh5ZHJhdGVkIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgLyogbWFyZ2luOiA0cHg7ICovXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5uZXdzSW1nIHtcbiAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG5cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xufVxuXG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMzI2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMjgzNztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogI2VkMjQyNDtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ub0Jvb2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm9Cb29rbWFyayBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");











var BookmarkPage = /** @class */ (function () {
    function BookmarkPage(network, _toastService, platform, socialSharing, actionSheetController, _newsService, _categoryService, router) {
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
    }
    BookmarkPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.router.url.includes('bookmarks')) {
                    this.router.navigate(['settings']);
                }
                return [2 /*return*/];
            });
        }); });
        this.bookmarkedNews();
        this.language = localStorage.getItem('language');
    };
    BookmarkPage.prototype.onPress = function (newsImage, fcmLink, newsId, newsTitleEnglish, $event) {
        console.log('newsId=', newsId);
    };
    BookmarkPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // // Check Internet conectivity
        var offline = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "offline");
        var online = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "online");
        offline.subscribe(function () {
            _this.hide = false;
            var message = 'No internet connection';
            var color = 'danger';
            _this._toastService.toastFunction(message, color);
        });
    };
    BookmarkPage.prototype.bookmarkedNews = function () {
        var _this = this;
        this.loading = true;
        this._newsService.getAllBookmarks().subscribe(function (res) {
            if (res.length === 0) {
                _this.noNews = true;
            }
            _this.loading = false;
            _this.newsObj = res;
            _this.newsArray = _this.newsObj;
            _this.bookmarkLength = _this.newsArray.length;
        }, function (err) {
            _this.loading = false;
            _this.error = err;
        });
    };
    BookmarkPage.prototype.deleteBookmarked = function (id) {
        var _this = this;
        if (this.network.type == 'none') {
            this._toastService.toastFunction('No internet connection', 'danger');
        }
        else {
            this._newsService.bookmarkPost(id).subscribe(function (res) {
                console.log("res", res);
                _this._toastService.toastFunction(res.message, 'success');
                _this.bookmarkedNews();
            }, function (err) {
                _this._toastService.toastFunction(err.error.message, 'danger');
                _this.bookmarkedNews();
            });
        }
    };
    BookmarkPage.prototype.shareBookmarked = function (newsImage, link, title) {
        var message = "Check out this amazing news " + '"' + title + '" ';
        var subject = "Trivia Post";
        var url = link;
        // var file = this.mediaPath + newsImage;
        this.socialSharing.share(message, subject, null, url)
            .then(function (entries) {
            console.log('success ' + JSON.stringify(entries));
        })
            .catch(function (error) {
        });
    };
    BookmarkPage.prototype.getSingleBookmark = function (id) {
        this.router.navigate(['single-post/' + id + '/bookmark']);
    };
    BookmarkPage.prototype.categoryClick = function (catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    BookmarkPage.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    BookmarkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookmark',
            template: __webpack_require__(/*! raw-loader!./bookmark.page.html */ "./node_modules/raw-loader/index.js!./src/app/bookmark/bookmark.page.html"),
            styles: [__webpack_require__(/*! ./bookmark.page.scss */ "./src/app/bookmark/bookmark.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BookmarkPage);
    return BookmarkPage;
}());



/***/ })

}]);
//# sourceMappingURL=bookmark-bookmark-module-es5.js.map