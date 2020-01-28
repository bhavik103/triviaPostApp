(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-category/single-category.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-category/single-category.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-back-button name=\"arrow-round-back\" class=\"homeBack\" class=\"homeBack\" defaultHref=\"/home\"></ion-back-button>\n        <ion-title>{{catName}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content (swiperight)=\"goToCategories()\" ion-padding>\n    <ion-row class=\"feeds\" *ngIf=\"news\">\n        <app-large-post [news]=\"news\" [language]=\"language\" [singleCat]=\"true\"></app-large-post>\n    </ion-row>\n    <ion-row class=\"feeds\" *ngIf=\"news && newsArray && newsArray.length\">\n        <span *ngFor=\"let news of newsArray;\">\n            <app-post-tiles [news]=\"news\" [language]=\"language\" [singleCat]=\"true\"></app-post-tiles>\n        </span>\n    </ion-row>\n    <ion-row class=\"onePost\" *ngIf=\"newsArrayLength\">\n        <ion-col size=\"12\">Only one post in this category !</ion-col>\n    </ion-row>\n    <ion-row class=\"onePost\" *ngIf=\"noNews == true\">\n        <ion-col size=\"12\">No posts in this category !</ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loading...</p>\n        </div>\n    </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");
/* harmony import */ var _single_category_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-category.page */ "./src/app/single-category/single-category.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");










const routes = [
    {
        path: '',
        component: _single_category_page__WEBPACK_IMPORTED_MODULE_8__["SingleCategoryPage"]
    }
];
let SingleCategoryPageModule = class SingleCategoryPageModule {
};
SingleCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_7__["PostTilesPageModule"],
            _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_6__["LargePostPageModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_single_category_page__WEBPACK_IMPORTED_MODULE_8__["SingleCategoryPage"]]
    })
], SingleCategoryPageModule);



/***/ }),

/***/ "./src/app/single-category/single-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/single-category/single-category.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  padding: 6px;\n  height: 88px;\n}\n\nion-title {\n  margin-top: 3%;\n  padding: 0;\n}\n\nion-back-button {\n  float: left;\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.onePost {\n  margin-top: 100px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9zaW5nbGUtY2F0ZWdvcnkvc2luZ2xlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2luZ2xlLWNhdGVnb3J5L3NpbmdsZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0FDSUY7O0FERkE7RUFDRSxVQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDUUY7O0FETkE7RUFDRSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDV0Y7O0FEVEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1lGOztBRFZBO0VBQ0UsWUFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDY0Y7O0FEWkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDZUY7O0FEYkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsNEJBQUE7QUNpQkY7O0FEZkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDbUJGOztBRGpCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNvQkYiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtY2F0ZWdvcnkvc2luZ2xlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uLmhvbWVCYWNrLm1kLmh5ZHJhdGVkIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uZXdzSW1nIHtcbiAgcGFkZGluZzogNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG5pb24tdGl0bGV7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICBmbG9hdDogbGVmdDtcbn1cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbn1cbi5sYXRlc3RQb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbn1cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAzMjZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGVudEZlZWRze1xuICBoZWlnaHQ6IDExMHB4O1xufVxuLmNhdGVnb3J5QnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4udGltZUFnb3tcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm9uZVBvc3Qge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59IiwiaW9uLWljb24uaG9tZUJhY2subWQuaHlkcmF0ZWQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmV3c0ltZyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xufVxuXG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMzI2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLm9uZVBvc3Qge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");







let SingleCategoryPage = class SingleCategoryPage {
    constructor(network, _toastService, _newsService, route, router) {
        this.network = network;
        this._toastService = _toastService;
        this._newsService = _newsService;
        this.route = route;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
    }
    ngOnInit() {
        this.language = localStorage.getItem('language');
        this.catName = this.route.snapshot.params['cat'];
    }
    ionViewWillEnter() {
        this.singleCategory();
        this.newsArrayLength = false;
        this.language = localStorage.getItem('language');
    }
    singleCategory() {
        var catId = this.route.snapshot.params['id'];
        console.log('catId', catId);
        this._newsService.allCatNews(catId).subscribe((res) => {
            console.log("catNews", res);
            if (res.length == 1) {
                this.newsArrayLength = true;
                console.log("length news", res.length);
            }
            else if (res.length == 0) {
                this.noNews = true;
                console.log('this.noNews', this.noNews);
            }
            this.newsArray = res;
            this.news = res[0];
            console.log('this.news large', this.news);
            this.newsArray.splice(0, 1);
            this.latestPost = JSON.parse(JSON.stringify(res[0]));
            console.log('this.latestPost', this.newsArray[0]);
        }, err => {
            this._toastService.toastFunction(err.error.message, 'danger');
        });
    }
    goToCategories() {
        this.router.navigateByUrl('/home/categories');
    }
    singleNews(id) {
        this.router.navigateByUrl('/single-post/' + id + '/category');
    }
};
SingleCategoryPage.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SingleCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-category',
        template: __webpack_require__(/*! raw-loader!./single-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/single-category/single-category.page.html"),
        styles: [__webpack_require__(/*! ./single-category.page.scss */ "./src/app/single-category/single-category.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SingleCategoryPage);



/***/ })

}]);
//# sourceMappingURL=single-category-single-category-module-es2015.js.map