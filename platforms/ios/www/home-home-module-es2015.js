(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-icon name=\"settings\" class=\"homeBack\" routerLink=\"/settings\" float-left></ion-icon>\n        <ion-icon name=\"search\" class=\"searchIcon\" float-right (click)=\"search()\"></ion-icon>\n        <ion-title class=\"ion-text-center\">\n            Trivia Post\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"homepage-ion-content\" *ngIf=\"!loading && !isTextVisible\">\n    <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n            <ion-tab-button tab=\"categories\">\n                <ion-label>Categories</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"all-post\">\n                <ion-label>Feeds</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n    <div id=\"loader-wrapper\">\n        <div id=\"loader\">\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"ml-loader\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n            <p class=\"text-center\">Loding Data...</p>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"isTextVisible\">\n    <div class=\"no-news-text\">\n        <span>{{text}}</span>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'categories',
                loadChildren: '../categories/categories.module#CategoriesPageModule'
            },
            {
                path: 'all-post',
                loadChildren: '../all-post/all-post.module#AllPostPageModule'
            }
        ]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeBack, .searchIcon {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-label {\n  font-size: 15px;\n}\n\n.searchIcon {\n  padding-right: 15px;\n}\n\n.tab-selected {\n  border-bottom: 3px solid;\n  color: #c21c00;\n}\n\nion-tab-button {\n  --ripple-color: #c21c00;\n}\n\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: #c21c00;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZUJhY2ssLnNlYXJjaEljb257XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zZWFyY2hJY29ue1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi50YWItc2VsZWN0ZWR7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgIGNvbG9yOiAjYzIxYzAwO1xufVxuaW9uLXRhYi1idXR0b257XG4gICAgLS1yaXBwbGUtY29sb3I6ICNjMjFjMDA7XG59XG5cbi5wb3N0X2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2hhcmUtYnV0dG9ue1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzIxYzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuaW1nLmljb24ge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG5pbWcuYm9va21hcmsge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uby1uZXdzLXRleHQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufSIsIi5ob21lQmFjaywgLnNlYXJjaEljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNlYXJjaEljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICBjb2xvcjogI2MyMWMwMDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLXJpcHBsZS1jb2xvcjogI2MyMWMwMDtcbn1cblxuLnBvc3RfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWMwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW1nLmljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuaW1nLmJvb2ttYXJrIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi5uby1uZXdzLXRleHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50UG9zdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uby1uZXdzLXRleHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");


















let HomePage = class HomePage {
    constructor(localNotifications, _toastService, _userService, network, route, screenOrientation, platform, socialSharing, deeplinks, fcm, _newsService, _categoryService, router, keyboard) {
        this.localNotifications = localNotifications;
        this._toastService = _toastService;
        this._userService = _userService;
        this.network = network;
        this.route = route;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.deeplinks = deeplinks;
        this.fcm = fcm;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.keyboard = keyboard;
        this.newsArray = [];
        this.horizontalSwipers = [];
        this.error = '';
        this.isVisible = false;
        this.loading = false;
        this.isTextVisible = false;
        this.isCalled = false;
        this.bookMark = false;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
    }
    // Event Listeners
    ngOnInit() {
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
        this.language = localStorage.language;
        this.route.params.subscribe((param) => {
            this.pageContent(this.router.url, param);
        });
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    viewInitFunctions() {
        this.notificationTapped();
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        //  Deeplinks
        this.deeplinks.route({
            '/': {},
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            this.router.navigate(['single-post/' + match.$args.id]);
        }, (nomatch) => {
            // alert("UnMatched" + nomatch);
        });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
        });
        this.getNews();
        this.fcmToken();
        this.loading = true;
        setTimeout(() => {
            $('#snackbar').show();
        }, 3000);
        this.checkforInternet();
    }
    //check for internet
    checkforInternet() {
        // // Check Internet conectivity
        var offline = rxjs__WEBPACK_IMPORTED_MODULE_12__["Observable"].fromEvent(document, "offline");
        var online = rxjs__WEBPACK_IMPORTED_MODULE_12__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this._toastService.toastFunction('No internet connection', 'danger');
        });
        online.subscribe(() => {
            this.hide = true;
        });
    }
    pageContent(url, param) {
        console.log("Redirected From : ", url, param);
    }
    //get all news - HOME PAGE ( FEEDS )
    getNews() {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe((res) => {
            console.log("all news==========>", res);
            this.newsArray = res;
            this.loading = false;
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    search() {
        this.router.navigate(['searchBar']);
    }
    //  Do Bookmark
    bookmark(index) {
        if (this.network.type == 'none') {
            this._toastService.toastFunction('No internet connection', 'danger');
        }
        else {
            this._newsService.bookmarkPost(this.newsArray[index].newsId).subscribe((res) => {
                this.newsArray[index].bookmarkKey = !this.newsArray[index].bookmarkKey;
                this._toastService.toastFunction(res.message, 'success');
            }, err => {
                this._toastService.toastFunction(err.error.message, 'danger');
            });
        }
    }
    //  Do Share Post 
    sharePost(id, newsTitle) {
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['/single-post/' + data.newsId]);
            if (data.wasTapped) {
                console.log('Received in background', data.wasTapped);
            }
            else {
                // this.router.navigate(['/home/leave-application'])
                this.router.navigate([data.redirectTo]);
                console.log('Received in foreground');
                this.localNotifications.schedule({
                    id: data.id,
                    title: 'Trivia Post',
                    text: data.body,
                    foreground: true // Show the notification while app is open
                });
            }
        });
    }
    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                this._userService.firstTimeUser().subscribe((res) => {
                    localStorage.setItem('annonymousNotify', 'true');
                }, (err) => {
                });
            }, 1000);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
                //console.log('Received in background');
            }
            else {
                //console.log('Received in foreground');
            }
        });
    }
    checkForToken() {
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_17__["LocalNotifications"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_16__["ToastService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__["Network"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_17__["LocalNotifications"], _services_toast_service__WEBPACK_IMPORTED_MODULE_16__["ToastService"], _services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_13__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_10__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map