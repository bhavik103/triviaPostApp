(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-round-back\" *ngIf=\"!backKeyBookmark && !backKeyCategory && !backKeySearch\" class=\"homeBack\"\n      routerLink=\"/home/all-post\" float-left></ion-icon>\n    <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyBookmark\" class=\"homeBack\" routerLink=\"/bookmarks\" float-left>\n    </ion-icon>\n    <span *ngFor=\"let news of singlepost\">\n      <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyCategory\" class=\"homeBack\" routerLink=\"/single-category/{{news.newsCategoryId}}/{{news.newsCategory}}\" float-left>\n      </ion-icon>\n    </span>\n    <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeySearch\" class=\"homeBack\" routerLink=\"/searchBar\" float-left>\n    </ion-icon>\n    <ion-title>\n      Trivia Post\n    </ion-title>\n    <img src=\"../../assets/images/Share.png\" *ngFor=\"let news of singlepost\" class=\"icon shareImage\"\n      (click)=\"sharePost(news.newsId, news.newsTitleEnglish)\" />\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngFor=\"let news of singlepost\" class=\"singlePost\">\n    <div class=\"postImage\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\">\n    </div>\n    <div class=\"postTitle\">\n      <p *ngIf=\"language == 'English'\">{{news.newsTitleEnglish}}</p>\n      <p *ngIf=\"language == 'Hindi'\">{{news.newsTitleHindi}}</p>\n    </div>\n    <div class=\"subPostTitle\">\n      <!-- <p class=\"createdBy\">By {{news.createdBy.firstName | titlecase}}</p> -->\n      <p class=\"newsInfo\">{{news.createdAt | timeAgo}} | <span class=\"catTitle\"\n          (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory}}</span></p>\n    </div>\n    <div class=\"actionButton\">\n      <ion-icon name=\"heart\" class=\"heart_icon liked\" *ngIf=\"news.likeKey\" (click)=\"alreadyLiked()\"></ion-icon>\n      <ion-icon name=\"heart-empty\" class=\"heart_icon\" *ngIf=\"!news.likeKey\" (click)=\"likePost(news.newsId)\"></ion-icon>\n      <span>{{news.likesCount}}</span>\n      <a>\n        <ion-icon name=\"bookmark\" class=\"unbookmark  shareImage\" *ngIf=\"!news.bookmarkKey\"\n          (click)=\"bookmark(news.newsId)\"></ion-icon>\n        <ion-icon name=\"bookmark\" class=\"bookmarked shareImage\" *ngIf=\"news.bookmarkKey\"\n          (click)=\"bookmark(news.newsId)\"></ion-icon>\n      </a>\n    </div>\n    <div class=\"post\">\n      <p [innerHTML]=\"news.newsEnglish\" *ngIf=\"language == 'English'\"></p>\n      <p [innerHTML]=\"news.newsHindi\" *ngIf=\"language == 'Hindi'\"></p>\n    </div>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n  <div id=\"loader-wrapper\">\n      <div id=\"loader\">\n          <span class=\"logo_container\">\n              <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n          </span>\n          <div class=\"ml-loader\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n          </div>\n          <p class=\"text-center\">Loding Data...</p>\n      </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/single-post/single-post.module.ts":
/*!***************************************************!*\
  !*** ./src/app/single-post/single-post.module.ts ***!
  \***************************************************/
/*! exports provided: SinglePostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostPageModule", function() { return SinglePostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-post.page */ "./src/app/single-post/single-post.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _single_post_page__WEBPACK_IMPORTED_MODULE_6__["SinglePostPage"]
    }
];
let SinglePostPageModule = class SinglePostPageModule {
};
SinglePostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_single_post_page__WEBPACK_IMPORTED_MODULE_6__["SinglePostPage"]]
    })
], SinglePostPageModule);



/***/ }),

/***/ "./src/app/single-post/single-post.page.scss":
/*!***************************************************!*\
  !*** ./src/app/single-post/single-post.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 5px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\n.postImage img {\n  min-width: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n}\n\n.subPostTitle, .post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: #961300;\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 400;\n}\n\n.floatShare {\n  position: fixed;\n  width: 41px;\n  height: 41px;\n  bottom: 40px;\n  left: 40px;\n  background-color: #CE2837;\n  color: #FFF;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n}\n\n.shareImage {\n  height: 21px;\n  float: right;\n  padding-right: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: black;\n  float: right;\n}\n\n.bookmarked {\n  color: #CE2837;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\nion-title {\n  float: left;\n}\n\n.liked {\n  color: #CE2837;\n}\n\n.newsInfo {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDSUY7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREhBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNNRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0VBQUEsNENBQUE7QUNNRjs7QURIQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQ01GOztBREhBO0VBQ0UsV0FBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNPRjs7QURKQTtFQUNFLGNBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNFLFdBQUE7QUNRSjs7QUROQTtFQUNFLDBCQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxjQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnBvc3RJbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3ViUG9zdFRpdGxlLC5wb3N0IHB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNhdFRpdGxle1xuICAgIGNvbG9yOiM5NjEzMDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jcmVhdGVkQnl7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZsb2F0U2hhcmV7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogNDFweDtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0UyODM3O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4uc2hhcmVJbWFnZXtcbiAgaGVpZ2h0OiAyMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmEuZmxvYXQgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYS5mbG9hdDpob3ZlciArIGRpdi5sYWJlbC1jb250YWluZXJ7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJre1xuICByaWdodDogNDBweDtcbn1cbi51bmJvb2ttYXJre1xuICBjb2xvcjogYmxhY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJvb2ttYXJrZWR7XG4gIGNvbG9yOiAjQ0UyODM3O1xufVxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJVxufVxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbn1cbi5oZWFydF9pY29ue1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5pb24tdGl0bGV7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmxpa2Vke1xuICBjb2xvcjojQ0UyODM3O1xufVxuLm5ld3NJbmZve1xuICBmb250LXNpemU6MTJweDtcbn0iLCJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnBvc3RJbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zdWJQb3N0VGl0bGUsIC5wb3N0IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhdFRpdGxlIHtcbiAgY29sb3I6ICM5NjEzMDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jcmVhdGVkQnkge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZmxvYXRTaGFyZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogNDFweDtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0UyODM3O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4uc2hhcmVJbWFnZSB7XG4gIGhlaWdodDogMjFweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5hLmZsb2F0ICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbmEuZmxvYXQ6aG92ZXIgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICByaWdodDogNDBweDtcbn1cblxuLnVuYm9va21hcmsge1xuICBjb2xvcjogYmxhY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJvb2ttYXJrZWQge1xuICBjb2xvcjogI0NFMjgzNztcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saWtlZCB7XG4gIGNvbG9yOiAjQ0UyODM3O1xufVxuXG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/single-post/single-post.page.ts":
/*!*************************************************!*\
  !*** ./src/app/single-post/single-post.page.ts ***!
  \*************************************************/
/*! exports provided: SinglePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostPage", function() { return SinglePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");










let SinglePostPage = class SinglePostPage {
    constructor(firebaseAnalytics, network, _toastService, _newsService, route, socialSharing, router) {
        this.firebaseAnalytics = firebaseAnalytics;
        this.network = network;
        this._toastService = _toastService;
        this._newsService = _newsService;
        this.route = route;
        this.socialSharing = socialSharing;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
    }
    ngOnInit() {
        this.singlePost();
        this.route.params.subscribe((param) => {
            this.configureBack(this.router.url, param);
        });
    }
    ionViewWillEnter() {
        console.log('ionViewDidLoad ProfilePage');
        // Firebase Analytics 'screen_view' event tracking
        this.firebaseAnalytics.setCurrentScreen('Single Post').then(res => {
            console.log("firebase", res);
        });
        var postId = this.route.snapshot.params['id'];
    }
    configureBack(url, param) {
        console.log("url, param", url, param);
        if (url.includes('bookmark')) {
            this.backKeyBookmark = true;
        }
        else if (url.includes('category')) {
            this.backKeyCategory = true;
        }
        else if (url.includes('search')) {
            this.backKeySearch = true;
        }
    }
    singlePost() {
        this.loading = true;
        this.language = localStorage.getItem('language');
        var postId = this.route.snapshot.params['id'];
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
        this._newsService.getSingleNews(postId).subscribe(res => {
            this.loading = false;
            const singlepostArray = [];
            singlepostArray.push(res[0]);
            this.singlepost = singlepostArray;
            if (this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](this.singlepost, (save) => {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.bookMark, (Id) => {
                        if (Id == this.loggedInUser) {
                            save['bookmarkKey'] = true;
                        }
                    });
                });
            }
            if (this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](this.singlepost, (save) => {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.like, (Id) => {
                        if (Id == this.loggedInUser) {
                            save['likeKey'] = true;
                        }
                    });
                });
            }
            // console.log("News Title", this.singlepost[0]['newsTitleEnglish'])
            this.firebaseAnalytics.logEvent('post_viewed', { postTitle: this.singlepost[0]['newsTitleEnglish'] }).then(res => {
                console.log("Post Tracked", res);
            });
            console.log("Single newsssssss", this.singlepost);
        });
    }
    titleCaseWord(word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    //  Do Share Post 
    sharePost(id, newsTitle) {
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.in/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    //  Do Bookmark
    bookmark(newsid) {
        if (this.network.type == 'none') {
            this.singlePost();
            this._toastService.toastFunction('No internet connection', 'danger');
        }
        else {
            this._newsService.bookmarkPost(newsid).subscribe((res) => {
                this._toastService.toastFunction(res.message, 'success');
                this.singlePost();
            }, err => {
                this._toastService.toastFunction(err.error.message, 'danger');
            });
        }
    }
    //like post
    likePost(postid) {
        if (this.network.type == 'none') {
            this._toastService.toastFunction('No internet connection', 'danger');
            this.singlePost();
        }
        else {
            this._newsService.likepost(postid).subscribe((res) => {
                this.singlePost();
                this._toastService.toastFunction(res.message, 'success');
            }), err => {
                this._toastService.toastFunction(err.error.message, 'danger');
            };
        }
    }
    alreadyLiked() {
        this._toastService.toastFunction('You have already liked!', 'danger');
    }
    categoryClick(catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    }
};
SinglePostPage.ctorParameters = () => [
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseAnalytics"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SinglePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-post',
        template: __webpack_require__(/*! raw-loader!./single-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html"),
        styles: [__webpack_require__(/*! ./single-post.page.scss */ "./src/app/single-post/single-post.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseAnalytics"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SinglePostPage);



/***/ })

}]);
//# sourceMappingURL=single-post-single-post-module-es2015.js.map