(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-back-button name=\"arrow-round-back\" *ngIf=\"!backKeyBookmark && !backKeyCategory && !backKeySearch\"\n      class=\"homeBack \" defaultHref=\"/home\"></ion-back-button>\n    <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyBookmark\" class=\" homeBack\" routerLink=\"/bookmark\">\n    </ion-icon>\n    <span *ngFor=\"let news of singlepost; let i = index\">\n      <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeyCategory && i==0\" class=\"homeBack\"\n        defaultHref=\"/single-category/{{news.newsCategoryId}}/{{news.newsCategory}}\"></ion-back-button>\n    </span>\n    <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeySearch\" class=\"homeBack \" defaultHref=\"/searchBar\">\n    </ion-back-button>\n    <ion-title>\n      Trivia Post\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\"news\" class=\"singleNews\">\n    <div class=\"container\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\" class=\"postImage\">\n      <div class=\"text-block\">\n        <div class=\"category_title\">\n          <p *ngIf=\"language == 'English' || !news.newsCategoryHn\"\n            (click)=\"singleCategory(news.newsCategoryId,news.newsCategory)\">\n            {{news.newsCategory | slice:0:30}}</p>\n          <p *ngIf=\"language == 'Hindi' && news.newsCategoryHn\"\n            (click)=\"singleCategory(news.newsCategoryId,news.newsCategory)\">\n            {{news.newsCategoryHn | slice:0:30}}</p>\n        </div>\n        <!-- <p class=\"imgCredit\" *ngIf=\"news.picCredit\"><span>By: </span> {{news.picCredit}}</p> -->\n      </div>\n    </div>\n    <div>\n      <span class=\"imageCredit\">\n        <span class=\"likesSpan\">\n          {{news.createdAt | timeAgo}} | <img src=\"../../assets/images/lightbulb_black.png\" *ngIf=\"!news.likeKey\"\n            (click)=\"likePost(news.newsId)\" alt=\"\">\n          <img src=\"../../assets/images/lightbulb_red.png\" (click)=\"alreadyLiked()\" *ngIf=\"news.likeKey\" alt=\"\">\n          {{news.likesCount}}\n        </span>\n      </span>\n    </div>\n    <div class=\"postTitle\">\n      <p *ngIf=\"language == 'English'\">{{news.newsTitleEnglish}}</p>\n      <p *ngIf=\"language == 'Hindi'\">{{news.newsTitleHindi}}</p>\n    </div>\n    <div class=\"subPostTitle\">\n      <p class=\"newsInfo\" *ngIf=\"news.srcTitle && news.srcLink\"><span> Source</span>: <span class=\"srcLink\"\n          (click)=\"openWithSystemBrowser(news.srcLink)\"> {{news.srcTitle}}</span></p>\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\"><span>Picture: </span><span class=\"srcLink\">\n          {{news.picCredit}}</span></p>\n    </div>\n    <div class=\"post\">\n      <p [innerHTML]=\"news.newsEnglish\" *ngIf=\"language == 'English'\"></p>\n      <p [innerHTML]=\"news.newsHindi\" *ngIf=\"language == 'Hindi'\"></p>\n    </div>\n    <span class=\"float unbookmarkFloat\" *ngIf=\"!news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n      <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\">\n      <!-- <ion-icon name=\"bookmark\" class=\"my-float unbookmark\"></ion-icon> -->\n    </span>\n    <span class=\"float bookmarkFloat\" *ngIf=\"news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\">\n    </span>\n    <span class=\"floatShare float\" (click)=\"sharePost(news.fcmLink, news.newsTitleEnglish, news.newsImage)\">\n      <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n    </span>\n  </div>\n  <p *ngIf=\"news\" class=\"alsoRead\">Also Read:</p>\n  <div *ngFor=\"let news of singlepost; let i = index\" class=\"singlePost\">\n    <app-related-post [news]=\"news\" [language]=\"language\" [postCount]=\"i\"></app-related-post>\n  </div>\n  <div class=\"spinner\" *ngIf=\"loading\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</ion-content>"

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
/* harmony import */ var _related_post_related_post_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../related-post/related-post.module */ "./src/app/related-post/related-post.module.ts");









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
            _related_post_related_post_module__WEBPACK_IMPORTED_MODULE_8__["RelatedPostPageModule"],
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

module.exports = "p {\n  margin: 5px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 10px;\n}\n\nion-back-button {\n  margin: 0 !important;\n}\n\n.postImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n  padding-top: 43px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 22px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 25px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 25px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\n.singleNews {\n  border-bottom: 1px solid #eeeeee;\n}\n\nion-title {\n  float: left;\n  line-height: 46px;\n  padding-left: 10px;\n  padding-top: 1px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: var(--main-app-color);\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n  opacity: 0.7;\n}\n\n.float img {\n  margin-top: 31%;\n}\n\n.floatShare {\n  bottom: 11%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.unbookmarkFloat {\n  background-color: #cbc9c9;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: var(--main-app-color);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin: 13px 13px 0px 13px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.newsInfo span {\n  font-weight: 700;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n}\n\n.alsoRead {\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 20px 0px 20px 10px;\n}\n\n.category_title {\n  display: inline-block;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: -1;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 84px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQ01GOztBREpBO0VBQ0UsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNRRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1FGOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0RBQUE7RUFBQSw0Q0FBQTtBQ1FGOztBRExBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDUUY7O0FETEE7RUFDRSxXQUFBO0FDUUY7O0FETkE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUNTRjs7QUROQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFD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ImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBtYXJnaW46IDVweDtcbn1cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWJhY2stYnV0dG9uIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4ucG9zdEltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctdG9wOiA0M3B4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNhdFRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jcmVhdGVkQnkge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNzb3VyY2VMaW5rIHtcbiAgY29sb3I6ICMwODAwZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5hLmZsb2F0ICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbmEuZmxvYXQ6aG92ZXIgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICByaWdodDogNDBweDtcbn1cbi51bmJvb2ttYXJrIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYm9va21hcmtlZCB7XG4gIGNvbG9yOiAjY2JjOWM5O1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uYWN0aW9uQnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuLmhlYXJ0X2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uc2luZ2xlTmV3cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM4LCAyMzgsIDIzOCk7XG59XG5pb24tdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cbi5saWtlZCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZmxvYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMyU7XG4gIHJpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gIHotaW5kZXg6IDExMTtcbiAgb3BhY2l0eTogMC43O1xufVxuLmZsb2F0IGltZyB7XG4gIG1hcmdpbi10b3A6IDMxJTtcbn1cbi5mbG9hdFNoYXJlIHtcbiAgYm90dG9tOiAxMSU7XG4gIHJpZ2h0OiA0MHB4O1xufVxuLm15LWZsb2F0IHtcbiAgbWFyZ2luLXRvcDogMjglO1xufVxuLnVuYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG59XG4uYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cbi5zaGFyZUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDA7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyID4gZGl2IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmltYWdlQ3JlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMTNweCAwcHggMTNweDtcbn1cbi8vIC5wb3N0VGl0bGUge1xuLy8gICBtYXJnaW4tdG9wOiAzNXB4O1xuLy8gfVxuLmxpa2VzU3BhbiBpbWcge1xuICBoZWlnaHQ6IDE4cHg7XG59XG4ubmV3c0luZm8gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uc3JjTGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWxzb1JlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMTBweDtcbn1cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50ZXh0LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDclO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMiU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi8vIC5jb250YWluZXI6YWZ0ZXIge1xuLy8gICBjb250ZW50OiBcIlwiO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBsZWZ0OiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuLy8gICB6LWluZGV4OiAwO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG4uY2F0ZWdvcnlfdGl0bGUgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogLTE7XG59XG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1LjVweDtcbn1cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5pbWdDcmVkaXQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW1nQ3JlZGl0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuIiwicCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uaG9tZUJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0SW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLXRvcDogNDNweDtcbn1cblxuLnN1YlBvc3RUaXRsZSxcbi5wb3N0IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhdFRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNyZWF0ZWRCeSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jc291cmNlTGluayB7XG4gIGNvbG9yOiAjMDgwMGZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zaGFyZUltYWdlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi51bmJvb2ttYXJrIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYm9va21hcmtlZCB7XG4gIGNvbG9yOiAjY2JjOWM5O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aW9uQnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmhlYXJ0X2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zaW5nbGVOZXdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mbG9hdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAzJTtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgei1pbmRleDogMTExO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mbG9hdCBpbWcge1xuICBtYXJnaW4tdG9wOiAzMSU7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgYm90dG9tOiAxMSU7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4ubXktZmxvYXQge1xuICBtYXJnaW4tdG9wOiAyOCU7XG59XG5cbi51bmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjOWM5O1xufVxuXG4uYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLnNoYXJlQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmltYWdlQ3JlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMTNweCAwcHggMTNweDtcbn1cblxuLmxpa2VzU3BhbiBpbWcge1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdzSW5mbyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNyY0xpbmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWxzb1JlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMTBweDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29udGVudEZlZWRzIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmVlZHMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmltZ0NyZWRpdCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmltZ0NyZWRpdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

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
        this.removeRedirectItem();
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
    removeRedirectItem() {
        localStorage.removeItem('bookmarkId');
        localStorage.removeItem('likepostId');
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
            console.log("NEWS", res);
            singlepostArray.push(res);
            this.singlepost = singlepostArray;
            if (this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](res, (save) => {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.bookMark, (Id) => {
                        if (Id == this.loggedInUser) {
                            save['bookmarkKey'] = true;
                        }
                    });
                });
            }
            if (this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](res, (save) => {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.like, (Id) => {
                        if (Id == this.loggedInUser) {
                            save['likeKey'] = true;
                        }
                    });
                });
            }
            this.singlepost = res;
            this.news = res[0];
            console.log('this.news=>>>>>>>>>>', this.news);
            this.singlepost.splice(0, 1);
            // console.log("News Title", this.singlepost[0]['newsTitleEnglish'])
            this.firebaseAnalytics.logEvent('post_viewed', { postTitle: this.singlepost[0]['newsTitleEnglish'] }).then(res => {
                console.log("Post Tracked", this.singlepost[0]['newsTitleEnglish']);
            });
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
        if (!localStorage.getItem('accessToken')) {
            console.log("newsId done", newsid);
            localStorage.setItem('bookmarkId', newsid);
            this._toastService.toastFunction('You need to login first', 'danger');
            this.router.navigateByUrl('/login');
        }
        else {
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
    }
    //like post
    likePost(postid) {
        if (!localStorage.getItem('accessToken')) {
            console.log("newsId done", postid);
            localStorage.setItem('likepostId', postid);
            this._toastService.toastFunction('Please login first!', 'danger');
            this.router.navigateByUrl('/login');
        }
        else {
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
    singleNews(postid) {
        console.log('postid', postid);
        this.router.navigateByUrl('/single-post/' + postid);
    }
    singleCategory(catId, catname) {
        console.log('catId compoennt', catId);
        this.router.navigateByUrl('single-category/' + catId + '/' + catname);
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