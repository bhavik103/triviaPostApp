(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <!-- <ion-icon name=\"arrow-round-back\" *ngIf=\"!backKeyBookmark && !backKeyCategory && !backKeySearch\" class=\"homeBack\"\n      routerLink=\"/home/all-post\" float-left></ion-icon> -->\n\n    <ion-back-button name=\"arrow-round-back\" *ngIf=\"!backKeyBookmark && !backKeyCategory && !backKeySearch\"\n      class=\"homeBack \" defaultHref=\"/home/all-post\"></ion-back-button>\n    <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyBookmark\" class=\" homeBack\" routerLink=\"/bookmark\">\n    </ion-icon>\n    <span *ngFor=\"let news of singlepost\">\n      <!-- <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyCategory\" class=\"homeBack\"\n        routerLink=\"/single-category/{{news.newsCategoryId}}/{{news.newsCategory}}\" float-left>\n      </ion-icon> -->\n\n      <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeyCategory\" class=\" homeBack\"\n        defaultHref=\"/single-category/{{news.newsCategoryId}}/{{news.newsCategory}}\"></ion-back-button>\n    </span>\n    <!-- <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeySearch\" class=\"homeBack\" routerLink=\"/searchBar\" float-left>\n    </ion-icon> -->\n\n    <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeySearch\" class=\"homeBack \" defaultHref=\"/searchBar\">\n    </ion-back-button>\n\n    <ion-title>\n      Trivia Post\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngFor=\"let news of singlepost\" class=\"singlePost\">\n    <div class=\"postImage\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\">\n    </div>\n    <span class=\"imageCredit\" *ngIf=\"news.picCredit\"><span class=\"source\">Source: </span> {{news.picCredit}}</span>\n    <div class=\"postTitle\">\n      <p *ngIf=\"language == 'English'\">{{news.newsTitleEnglish}}</p>\n      <p *ngIf=\"language == 'Hindi'\">{{news.newsTitleHindi}}</p>\n    </div>\n    <div class=\"subPostTitle\">\n      <p class=\"newsInfo\">{{news.createdAt | timeAgo}} | <span class=\"catTitle\"\n          (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory}}</span></p>\n    </div>\n    <div class=\"actionButton\">\n      <ion-icon name=\"heart\" class=\"heart_icon liked\" *ngIf=\"news.likeKey\" (click)=\"alreadyLiked()\"></ion-icon>\n      <ion-icon name=\"heart-empty\" class=\"heart_icon\" *ngIf=\"!news.likeKey\" (click)=\"likePost(news.newsId)\"></ion-icon>\n      <span>{{news.likesCount}}</span>\n      <span class=\"shareButton\">\n        <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\"\n          (click)=\"sharePost(news.fcmLink, news.newsTitleEnglish, news.newsImage)\" />\n      </span>\n    </div>\n    <div class=\"post\">\n      <p [innerHTML]=\"news.newsEnglish\" *ngIf=\"language == 'English'\"></p>\n      <p [innerHTML]=\"news.newsHindi\" *ngIf=\"language == 'Hindi'\"></p>\n      <p class=\"createdBy\" *ngIf=\"news.srcLink && news.srcTitle\">Source: <span\n          (click)=\"openWithSystemBrowser(news.srcLink)\" id=\"sourceLink\">{{news.srcTitle}}</span></p>\n    </div>\n    <span class=\"float unbookmarkFloat\" *ngIf=\"!news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n      <ion-icon name=\"bookmark\" class=\"my-float unbookmark shareImage\"></ion-icon>\n    </span>\n    <span class=\"float bookmarkFloat\" *ngIf=\"news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n      <ion-icon name=\"bookmark\" class=\"my-float bookmarked shareImage\"></ion-icon>\n    </span>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n  <div class=\"spinner\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</ion-content>"

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

module.exports = "p {\n  margin: 5px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 10px;\n}\n\nion-back-button {\n  margin: 0 !important;\n}\n\n.postImage img {\n  min-width: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: #961300;\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.floatShare {\n  position: fixed;\n  width: 41px;\n  height: 41px;\n  bottom: 40px;\n  left: 40px;\n  background-color: #ce2837;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n}\n\n.shareImage {\n  height: 20px;\n  float: right;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: #ce2837;\n  font-size: 18px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 18px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\nion-title {\n  float: left;\n  line-height: 46px;\n  padding-left: 10px;\n}\n\n.liked {\n  color: #ce2837;\n}\n\n.newsInfo {\n  font-size: 12px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 40px;\n  right: 40px;\n  background-color: #ce2837;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n}\n\n.my-float {\n  margin-top: 28%;\n  padding-right: 30%;\n}\n\n.unbookmarkFloat {\n  background-color: #cbc9c9;\n}\n\n.bookmarkFloat {\n  background-color: #ce2837;\n}\n\n.shareButton {\n  float: right;\n  background-color: #ce2837;\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #ce2837;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin-right: 5px;\n}\n\n.postTitle {\n  margin-top: 36px;\n}\n\n.source {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDS0Y7O0FERkE7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ01GOztBREpBO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0RBQUE7RUFBQSw0Q0FBQTtBQ1NGOztBRE5BO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDU0Y7O0FETkE7RUFDRSxXQUFBO0FDU0Y7O0FEUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1VGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNXRjs7QURUQTtFQUNFLDBCQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDYUY7O0FEWEE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2NGOztBRFpBO0VBQ0UsY0FBQTtBQ2VGOztBRGJBO0VBQ0UsZUFBQTtBQ2dCRjs7QURkQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDaUJGOztBRGRBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDaUJGOztBRGZBO0VBQ0UseUJBQUE7QUNrQkY7O0FEaEJBO0VBQ0UseUJBQUE7QUNtQkY7O0FEakJBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDb0JGOztBRGxCQSxrRUFBQTs7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDcUJGOztBRGxCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3REFBQTtBQ29CRjs7QURqQkE7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDb0JGOztBRGpCQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNvQkY7O0FEakJBO0VBQ0U7SUFBZ0IsMkJBQUE7RUNxQmhCO0VEcEJBO0lBQU0sMkJBQUE7RUN1Qk47QUFDRjs7QURyQkE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUN1QkY7RUR0QkU7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0VDd0JGO0FBQ0Y7O0FEdEJBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDd0JGOztBRHRCQTtFQUNFLGdCQUFBO0FDeUJGOztBRHZCQTtFQUNFLGdCQUFBO0FDMEJGIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbjogNXB4O1xufVxuLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5pb24tYmFjay1idXR0b257XG4gIG1hcmdpbjogMCFpbXBvcnRhbnQ7XG59XG4ucG9zdEltYWdlIGltZyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zdWJQb3N0VGl0bGUsXG4ucG9zdCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2F0VGl0bGUge1xuICBjb2xvcjogIzk2MTMwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jcmVhdGVkQnkge1xuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI3NvdXJjZUxpbmsge1xuICBjb2xvcjogIzA4MDBmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuLmZsb2F0U2hhcmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJvdHRvbTogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMjgzNztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG4udW5ib29rbWFyayB7XG4gIGNvbG9yOiAjY2UyODM3O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib29rbWFya2VkIHtcbiAgY29sb3I6ICNjYmM5Yzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hY3Rpb25CdXR0b24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbmlvbi10aXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxpa2VkIHtcbiAgY29sb3I6ICNjZTI4Mzc7XG59XG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZmxvYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTI4Mzc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG59XG5cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xufVxuLnVuYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG59XG4uYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTI4Mzc7XG59XG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTI4Mzc7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuLypIdWdlIHRoYW5rcyB0byBAdG9iaWFzYWhsaW4gYXQgaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0LyAqL1xuLnNwaW5uZXIge1xuICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcbiAgd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXIgPiBkaXYge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODM3O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxuICA0MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHsgXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH0gNDAlIHsgXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICB9XG59XG4uaW1hZ2VDcmVkaXR7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucG9zdFRpdGxle1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuLnNvdXJjZXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnBvc3RJbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zdWJQb3N0VGl0bGUsXG4ucG9zdCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXRUaXRsZSB7XG4gIGNvbG9yOiAjOTYxMzAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY3JlYXRlZEJ5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzb3VyY2VMaW5rIHtcbiAgY29sb3I6ICMwODAwZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLmZsb2F0U2hhcmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MXB4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGJvdHRvbTogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMjgzNztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi51bmJvb2ttYXJrIHtcbiAgY29sb3I6ICNjZTI4Mzc7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJvb2ttYXJrZWQge1xuICBjb2xvcjogI2NiYzljOTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG5pb24tdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxpa2VkIHtcbiAgY29sb3I6ICNjZTI4Mzc7XG59XG5cbi5uZXdzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDQwcHg7XG4gIHJpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODM3O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4ubXktZmxvYXQge1xuICBtYXJnaW4tdG9wOiAyOCU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwJTtcbn1cblxuLnVuYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG59XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMjgzNztcbn1cblxuLnNoYXJlQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODM3O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLypIdWdlIHRoYW5rcyB0byBAdG9iaWFzYWhsaW4gYXQgaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0LyAqL1xuLnNwaW5uZXIge1xuICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcbiAgd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXIgPiBkaXYge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODM3O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW1hZ2VDcmVkaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ucG9zdFRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cblxuLnNvdXJjZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");












let SinglePostPage = class SinglePostPage {
    constructor(iab, firebaseAnalytics, platform, network, _toastService, _newsService, route, socialSharing, router) {
        this.iab = iab;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
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
    sharePost(link, newsTitle, newsImage) {
        var message = "Check out this amazing news " + '"' + newsTitle + '" ';
        var subject = "Trivia Post";
        var str = newsTitle;
        var file = this.mediaPath + newsImage;
        var url = link;
        this.socialSharing.share(url, subject, null, message)
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
    openWithSystemBrowser(url) {
        let target = "_blank";
        this.iab.create(url, `_blank`);
    }
};
SinglePostPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] },
    { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SinglePostPage);



/***/ })

}]);
//# sourceMappingURL=single-post-single-post-module-es2015.js.map