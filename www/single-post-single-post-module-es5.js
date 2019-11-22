(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-back-button name=\"arrow-round-back\" *ngIf=\"!backKeyBookmark && !backKeyCategory && !backKeySearch\"\n      class=\"homeBack \" defaultHref=\"/home\"></ion-back-button>\n    <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyBookmark\" class=\" homeBack\" routerLink=\"/bookmark\">\n    </ion-icon>\n    <span *ngFor=\"let news of singlepost; let i = index\">\n      <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeyCategory && i==0\" class=\"homeBack\"\n        defaultHref=\"/single-category/{{news.newsCategoryId}}/{{news.newsCategory}}\"></ion-back-button>\n    </span>\n    <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeySearch\" class=\"homeBack \" defaultHref=\"/searchBar\">\n    </ion-back-button>\n    <ion-title>\n      Trivia Post\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf=\"news\">\n    <div class=\"container\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\" style=\"width:100%;\">\n      <div class=\"text-block\">\n        <div class=\"category_title\">\n          <p *ngIf=\"language == 'English' || !news.newsCategoryHn\" (click)=\"singleCategory(news.newsCategoryId,news.newsCategory)\">\n            {{news.newsCategory | slice:0:30}}</p>\n          <p *ngIf=\"language == 'Hindi' && news.newsCategoryHn\" (click)=\"singleCategory(news.newsCategoryId,news.newsCategory)\">\n            {{news.newsCategoryHn | slice:0:30}}</p>\n        </div>\n        <p class=\"imgCredit\" *ngIf=\"news.picCredit\"><span>By: </span> {{news.picCredit}}</p>\n      </div>\n    </div>\n    <span class=\"imageCredit\">\n      <span class=\"likesSpan\">\n        {{news.createdAt | timeAgo}} | <img src=\"../../assets/images/lightbulb_black.png\" *ngIf=\"!news.likeKey\"\n          (click)=\"likePost(news.newsId)\" alt=\"\">\n        <img src=\"../../assets/images/lightbulb_red.png\" (click)=\"alreadyLiked()\" *ngIf=\"news.likeKey\" alt=\"\">\n        {{news.likesCount}}\n      </span>\n    </span>\n    <div class=\"postTitle\">\n      <p *ngIf=\"language == 'English'\">{{news.newsTitleEnglish}}</p>\n      <p *ngIf=\"language == 'Hindi'\">{{news.newsTitleHindi}}</p>\n    </div>\n    <div class=\"subPostTitle\">\n      <p class=\"newsInfo\" *ngIf=\"news.srcTitle && news.srcLink\"><span> Source</span>: <span class=\"srcLink\"\n          (click)=\"openWithSystemBrowser(news.srcLink)\"> {{news.srcTitle}}</span></p>\n    </div>\n    <div class=\"post\">\n      <p [innerHTML]=\"news.newsEnglish\" *ngIf=\"language == 'English'\"></p>\n      <p [innerHTML]=\"news.newsHindi\" *ngIf=\"language == 'Hindi'\"></p>\n    </div>\n    <span class=\"float unbookmarkFloat\" *ngIf=\"!news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n      <ion-icon name=\"bookmark\" class=\"my-float unbookmark\"></ion-icon>\n    </span>\n    <span class=\"float bookmarkFloat\" *ngIf=\"news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n      <ion-icon name=\"bookmark\" class=\"my-float bookmarked\"></ion-icon>\n    </span>\n    <span class=\"floatShare float\" (click)=\"sharePost(news.fcmLink, news.newsTitleEnglish, news.newsImage)\">\n      <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n    </span>\n    <p *ngIf=\"news\">Also Read:</p>\n  </div>\n  <div *ngFor=\"let news of singlepost\" class=\"singlePost\">\n    <app-related-post [news]=\"news\" [language]=\"language\"></app-related-post>\n  </div>\n  <div class=\"spinner\" *ngIf=\"loading\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-post.page */ "./src/app/single-post/single-post.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _related_post_related_post_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../related-post/related-post.module */ "./src/app/related-post/related-post.module.ts");









var routes = [
    {
        path: '',
        component: _single_post_page__WEBPACK_IMPORTED_MODULE_6__["SinglePostPage"]
    }
];
var SinglePostPageModule = /** @class */ (function () {
    function SinglePostPageModule() {
    }
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
    return SinglePostPageModule;
}());



/***/ }),

/***/ "./src/app/single-post/single-post.page.scss":
/*!***************************************************!*\
  !*** ./src/app/single-post/single-post.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 5px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 10px;\n}\n\nion-back-button {\n  margin: 0 !important;\n}\n\n.postImage img {\n  min-width: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 20px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 18px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 18px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\nion-title {\n  float: left;\n  line-height: 46px;\n  padding-left: 10px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: var(--main-app-color);\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n}\n\n.floatShare {\n  bottom: 11%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.unbookmarkFloat {\n  background-color: #cbc9c9;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: var(--main-app-color);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin-right: 20px;\n}\n\n.postTitle {\n  margin-top: 36px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.newsInfo span {\n  font-weight: 700;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n}\n\n.category_title {\n  display: inline-block;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: -1;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 84px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDS0Y7O0FERkE7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNPRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDUUY7O0FETEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNRRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9EQUFBO0VBQUEsNENBQUE7QUNRRjs7QURMQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQ1FGOztBRExBO0VBQ0UsV0FBQTtBQ1FGOztBRE5BO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDU0Y7O0FETkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1VGOztBRFJBO0VBQ0UsMEJBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDYUY7O0FEWEE7RUFDRSw0QkFBQTtBQ2NGOztBRFpBO0VBQ0UsZUFBQTtBQ2VGOztBRGJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDZ0JGOztBRGRBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNpQkY7O0FEZkE7RUFDRSxlQUFBO0FDa0JGOztBRGhCQTtFQUNFLHlCQUFBO0FDbUJGOztBRGpCQTtFQUNFLHVDQUFBO0FDb0JGOztBRGxCQTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3FCRjs7QURuQkEsa0VBQUE7O0FBQ0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3NCRjs7QURuQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0VBQ0Esd0RBQUE7QUNxQkY7O0FEbEJBO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQ3FCRjs7QURsQkE7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDcUJGOztBRGxCQTtFQUNFO0lBQWdCLDJCQUFBO0VDc0JoQjtFRHJCQTtJQUFNLDJCQUFBO0VDd0JOO0FBQ0Y7O0FEdEJBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLG1CQUFBO0VDd0JGO0VEdkJFO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtFQ3lCRjtBQUNGOztBRHZCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ3lCRjs7QUR2QkE7RUFDRSxnQkFBQTtBQzBCRjs7QUR4QkE7RUFDRSxZQUFBO0FDMkJGOztBRHpCQTtFQUNFLGdCQUFBO0FDNEJGOztBRDFCQTtFQUNFLDRCQUFBO0FDNkJGOztBRDNCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUM4QkY7O0FENUJBO0VBQ0UscUJBQUE7QUMrQkY7O0FEN0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZ0NGOztBRDlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUNpQ0Y7O0FEL0JBO0VBQ0UsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2tDRjs7QURoQ0E7RUFDRSxhQUFBO0FDbUNGOztBRGpDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ29DRjs7QURsQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNxQ0Y7O0FEbENBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNxQ0Y7O0FEbkNBO0VBQ0UsWUFBQTtBQ3NDRjs7QURwQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUN1Q0Y7O0FEckNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ3dDRjs7QUR0Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ3lDRjs7QUR2Q0E7RUFDRSw0QkFBQTtBQzBDRjs7QUR4Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUMyQ0Y7O0FEekNBO0VBQ0UsbUJBQUE7QUM0Q0Y7O0FEMUNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDNkNGOztBRDNDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUM4Q0Y7O0FENUNBO0VBQ0UsZUFBQTtBQytDRiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBtYXJnaW46IDVweDtcbn1cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICBtYXJnaW46IDAhaW1wb3J0YW50O1xufVxuLnBvc3RJbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNhdFRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jcmVhdGVkQnkge1xuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI3NvdXJjZUxpbmsge1xuICBjb2xvcjogIzA4MDBmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4uc2hhcmVJbWFnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmEuZmxvYXQgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYS5mbG9hdDpob3ZlciArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmxvYXRCb29rbWFyayB7XG4gIHJpZ2h0OiA0MHB4O1xufVxuLnVuYm9va21hcmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib29rbWFya2VkIHtcbiAgY29sb3I6ICNjYmM5Yzk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5hY3Rpb25CdXR0b24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbmlvbi10aXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxpa2VkIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cbi5uZXdzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mbG9hdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAzJTtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgei1pbmRleDogMTExO1xufVxuLmZsb2F0U2hhcmV7XG4gIGJvdHRvbTogMTElO1xuICByaWdodDogNDBweDtcbn1cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cbi51bmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjOWM5O1xufVxuLmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcblxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIH1cbiAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7IFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9IDQwJSB7IFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgfVxufVxuLmltYWdlQ3JlZGl0e1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5wb3N0VGl0bGV7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4ubGlrZXNTcGFuIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cbi5uZXdzSW5mbyBzcGFue1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnNyY0xpbmt7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uY29udGFpbmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbn1cbi5jYXRlZ29yeV90aXRsZSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNvbnRlbnRGZWVkc3tcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6LTE7XG59XG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmZlZWRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi50aW1lQWdve1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uaW1nQ3JlZGl0IHNwYW57XG4gIGNvbG9yOnZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbWdDcmVkaXR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnBvc3RJbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5zdWJQb3N0VGl0bGUsXG4ucG9zdCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXRUaXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jcmVhdGVkQnkge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3NvdXJjZUxpbmsge1xuICBjb2xvcjogIzA4MDBmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4uc2hhcmVJbWFnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmEuZmxvYXQgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYS5mbG9hdDpob3ZlciArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmxvYXRCb29rbWFyayB7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4udW5ib29rbWFyayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJvb2ttYXJrZWQge1xuICBjb2xvcjogI2NiYzljOTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG5pb24tdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxpa2VkIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLm5ld3NJbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmxvYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMyU7XG4gIHJpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gIHotaW5kZXg6IDExMTtcbn1cblxuLmZsb2F0U2hhcmUge1xuICBib3R0b206IDExJTtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cblxuLnVuYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG59XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDA7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyID4gZGl2IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW1hZ2VDcmVkaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnBvc3RUaXRsZSB7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG5cbi5saWtlc1NwYW4gaW1nIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4ubmV3c0luZm8gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zcmNMaW5rIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDclO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMiU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jYXRlZ29yeV90aXRsZSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29udGVudEZlZWRzIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaW1nQ3JlZGl0IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW1nQ3JlZGl0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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












var SinglePostPage = /** @class */ (function () {
    function SinglePostPage(iab, firebaseAnalytics, platform, network, _toastService, _newsService, route, socialSharing, router) {
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
    SinglePostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.singlePost();
        this.route.params.subscribe(function (param) {
            _this.configureBack(_this.router.url, param);
        });
    };
    SinglePostPage.prototype.ionViewWillEnter = function () {
        this.removeRedirectItem();
        // Firebase Analytics 'screen_view' event tracking
        this.firebaseAnalytics.setCurrentScreen('Single Post').then(function (res) {
            console.log("firebase", res);
        });
        var postId = this.route.snapshot.params['id'];
    };
    SinglePostPage.prototype.configureBack = function (url, param) {
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
    };
    SinglePostPage.prototype.removeRedirectItem = function () {
        localStorage.removeItem('bookmarkId');
        localStorage.removeItem('likepostId');
    };
    SinglePostPage.prototype.singlePost = function () {
        var _this = this;
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
        this._newsService.getSingleNews(postId).subscribe(function (res) {
            _this.loading = false;
            var singlepostArray = [];
            console.log("NEWS", res);
            singlepostArray.push(res);
            _this.singlepost = singlepostArray;
            if (_this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](res, function (save) {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.bookMark, function (Id) {
                        if (Id == _this.loggedInUser) {
                            save['bookmarkKey'] = true;
                        }
                    });
                });
            }
            if (_this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](res, function (save) {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.like, function (Id) {
                        if (Id == _this.loggedInUser) {
                            save['likeKey'] = true;
                        }
                    });
                });
            }
            _this.singlepost = res;
            _this.news = res[0];
            console.log('this.news=>>>>>>>>>>', _this.news);
            _this.singlepost.splice(0, 1);
            // console.log("News Title", this.singlepost[0]['newsTitleEnglish'])
            _this.firebaseAnalytics.logEvent('post_viewed', { postTitle: _this.singlepost[0]['newsTitleEnglish'] }).then(function (res) {
                console.log("Post Tracked", _this.singlepost[0]['newsTitleEnglish']);
            });
        });
    };
    SinglePostPage.prototype.titleCaseWord = function (word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    //  Do Share Post 
    SinglePostPage.prototype.sharePost = function (link, newsTitle, newsImage) {
        var message = "Check out this amazing news " + '"' + newsTitle + '" ';
        var subject = "Trivia Post";
        var str = newsTitle;
        var file = this.mediaPath + newsImage;
        var url = link;
        this.socialSharing.share(url, subject, null, message)
            .then(function (entries) {
        })
            .catch(function (error) {
            alert('error ' + JSON.stringify(error));
        });
    };
    //  Do Bookmark
    SinglePostPage.prototype.bookmark = function (newsid) {
        var _this = this;
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
                this._newsService.bookmarkPost(newsid).subscribe(function (res) {
                    _this._toastService.toastFunction(res.message, 'success');
                    _this.singlePost();
                }, function (err) {
                    _this._toastService.toastFunction(err.error.message, 'danger');
                });
            }
        }
    };
    //like post
    SinglePostPage.prototype.likePost = function (postid) {
        var _this = this;
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
                this._newsService.likepost(postid).subscribe(function (res) {
                    _this.singlePost();
                    _this._toastService.toastFunction(res.message, 'success');
                }), function (err) {
                    _this._toastService.toastFunction(err.error.message, 'danger');
                };
            }
        }
    };
    SinglePostPage.prototype.alreadyLiked = function () {
        this._toastService.toastFunction('You have already liked!', 'danger');
    };
    SinglePostPage.prototype.categoryClick = function (catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    SinglePostPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_blank";
        this.iab.create(url, "_blank");
    };
    SinglePostPage.prototype.singleNews = function (postid) {
        console.log('postid', postid);
        this.router.navigateByUrl('/single-post/' + postid);
    };
    SinglePostPage.prototype.singleCategory = function (catId, catname) {
        console.log('catId compoennt', catId);
        this.router.navigateByUrl('single-category/' + catId + '/' + catname);
    };
    SinglePostPage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] },
        { type: _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SinglePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-post',
            template: __webpack_require__(/*! raw-loader!./single-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html"),
            styles: [__webpack_require__(/*! ./single-post.page.scss */ "./src/app/single-post/single-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SinglePostPage);
    return SinglePostPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-post-single-post-module-es5.js.map