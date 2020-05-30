(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-category/single-category.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-category/single-category.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\n    <div class=\"settingsToolbar\">\n        <ion-back-button name=\"arrow-round-back\" class=\"homeBack\" class=\"homeBack\" defaultHref=\"/home\" float-left (click)=\"backButton()\">\n        </ion-back-button>\n        <span id=\"settingTitle\">{{catName}}</span>\n        <button float-right routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n    </div>\n</div>\n<ion-content (swiperight)=\"goToCategories()\" ion-padding *ngIf=\"!loading\">\n    <ion-row class=\"feeds\" *ngIf=\"news\">\n        <app-large-post [news]=\"news\" [language]=\"language\" [singleCat]=\"true\" [skip]=\"skip\"></app-large-post>\n    </ion-row>\n    <ion-row class=\"feeds\" *ngIf=\"news && newsArray && newsArray.length\">\n        <span *ngFor=\"let news of newsArray;\">\n      <app-post-tiles\n        [news]=\"news\"\n        [language]=\"language\"\n        [singleCat]=\"true\"\n      ></app-post-tiles>\n    </span>\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more posts...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ion-row>\n    <ion-row class=\"onePost\" *ngIf=\"newsArrayLength\">\n        <ion-col size=\"12\">Only one post in this category !</ion-col>\n    </ion-row>\n    <ion-row class=\"onePost\" *ngIf=\"noNews == true\">\n        <ion-col size=\"12\">No posts in this category !</ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loading...</p>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>"

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

module.exports = ".newsImg {\n  padding: 6px;\n  height: 88px;\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.onePost {\n  margin-top: 100px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.loadingContent {\n  --background: none;\n  background: url('simpleLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9zaW5nbGUtY2F0ZWdvcnkvc2luZ2xlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2luZ2xlLWNhdGVnb3J5L3NpbmdsZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLFlBQUE7QUNVRjs7QURSQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1dGOztBRFRBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1lGOztBRFZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2FGOztBRFhBO0VBQ0UsNEJBQUE7QUNjRjs7QURaQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDZ0JGOztBRGRBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2lCRjs7QURkQTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDaUJGIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLWNhdGVnb3J5L3NpbmdsZS1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c0ltZyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xufVxuLmxhdGVzdHBvc3RpbWcge1xuICBoZWlnaHQ6IDMyNnB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250ZW50RmVlZHN7XG4gIGhlaWdodDogMTEwcHg7XG59XG4uY2F0ZWdvcnlCdXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi50aW1lQWdve1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ub25lUG9zdCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZicpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59IiwiLm5ld3NJbWcge1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogODhweDtcbn1cblxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAzMjZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRlbnRGZWVkcyB7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ub25lUG9zdCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NpbXBsZUxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/admobfree.service */ "./src/app/services/admobfree.service.ts");












let SingleCategoryPage = class SingleCategoryPage {
    constructor(_admobService, appcomponent, alertController, ngzone, platform, _generalService, network, _toastService, _newsService, route, router) {
        this._admobService = _admobService;
        this.appcomponent = appcomponent;
        this.alertController = alertController;
        this.ngzone = ngzone;
        this.platform = platform;
        this._generalService = _generalService;
        this.network = network;
        this._toastService = _toastService;
        this._newsService = _newsService;
        this.route = route;
        this.router = router;
        this.newsArray = [];
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
        this.page_number = 1;
        this.page_limit = 10;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appcomponent.openRatingModal();
        }));
        this.language = localStorage.getItem('language');
        this.catName = this.route.snapshot.params['cat'];
    }
    ionViewWillEnter() {
        this._admobService.interstitalAdOnFivePageChange();
        if (localStorage.getItem('skip')) {
            this.skip = localStorage.getItem('skip');
            this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        }
        this.singleCategory(false, '');
        this.newsArrayLength = false;
        this.language = localStorage.getItem('language');
    }
    singleCategory(isFirstLoad, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.page_number == 1) {
                this.loading = true;
            }
            var catId = this.route.snapshot.params['id'];
            console.log('catId', catId);
            this._newsService.allCatNews(catId, this.page_number, this.page_limit).subscribe((res) => {
                console.log("catNews", res);
                if (this.page_number == 1) {
                    if (res.length == 1) {
                        this.newsArrayLength = true;
                        console.log("length news", res.length);
                    }
                    else if (res.length == 0) {
                        this.noNews = true;
                        console.log('this.noNews', this.noNews);
                    }
                }
                if (isFirstLoad) {
                    event.target.complete();
                }
                if (this.page_number == 1) {
                    this.news = res.shift();
                }
                this.newsArray.push(...res);
                console.log('this.latestPost', this.latestPost);
                console.log('this.newsArray', this.newsArray);
                this.page_number++;
                this.loading = false;
                // console.log('this.latestPost', this.newsArray[0]);
            }, err => {
                this._toastService.toastFunction(err.error.message, 'danger');
            });
        });
    }
    doInfinite(event) {
        this.singleCategory(true, event);
        console.log(event);
    }
    goToCategories() {
        this.router.navigateByUrl('/home/categories');
    }
    singleNews(id) {
        this.router.navigateByUrl('/single-post/' + id + '/category');
    }
    setExtras(page) {
        localStorage.setItem('skip', '1');
        this._generalService.setExtras(page);
    }
    backButton() {
        this.appcomponent.openRatingModal();
    }
};
SingleCategoryPage.ctorParameters = () => [
    { type: _services_admobfree_service__WEBPACK_IMPORTED_MODULE_10__["AdmobfreeService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_7__["GeneralService"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_admobfree_service__WEBPACK_IMPORTED_MODULE_10__["AdmobfreeService"], _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _services_general_service__WEBPACK_IMPORTED_MODULE_7__["GeneralService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SingleCategoryPage);



/***/ })

}]);
//# sourceMappingURL=single-category-single-category-module-es2015.js.map