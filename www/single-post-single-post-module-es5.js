(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-back-button name=\"arrow-round-back\" *ngIf=\"!backKeyBookmark && !backKeyCategory && !backKeySearch\" class=\"homeBack \" defaultHref=\"/home\"></ion-back-button>\n        <ion-icon name=\"arrow-round-back\" *ngIf=\"backKeyBookmark\" class=\" homeBack\" routerLink=\"/bookmark\">\n        </ion-icon>\n        <span *ngFor=\"let news of singlepost; let i = index\">\n      <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeyCategory && i==0\" class=\"homeBack\"\n        defaultHref=\"/single-category/{{news.newsCategoryId}}/{{news.newsCategory}}\"></ion-back-button>\n    </span>\n        <ion-back-button name=\"arrow-round-back\" *ngIf=\"backKeySearch\" class=\"homeBack \" defaultHref=\"/searchBar\">\n        </ion-back-button>\n        <ion-title>\n            Trivia Post\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <div class=\"spinner\" *ngIf=\"singleNewsLoading\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n    </div>\n    <div *ngIf=\"news\" class=\"singleNews\">\n        <div class=\"container\">\n            <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\" class=\"postImage\">\n            <div class=\"text-block\">\n                <div class=\"category_title\">\n                    <p *ngIf=\"language == 'English' || !news.newsCategoryHn\" (click)=\"singleCategory(news.newsCategoryId,news.newsCategory)\">\n                        {{news.newsCategory | slice:0:30}}</p>\n                    <p *ngIf=\"language == 'Hindi' && news.newsCategoryHn\" (click)=\"singleCategory(news.newsCategoryId,news.newsCategory)\">\n                        {{news.newsCategoryHn | slice:0:30}}</p>\n                </div>\n                <!-- <p class=\"imgCredit\" *ngIf=\"news.picCredit\"><span>By: </span> {{news.picCredit}}</p> -->\n            </div>\n        </div>\n        <div class=\"newsContent\">\n            <div>\n                <span class=\"imageCredit\">\n          <span class=\"likesSpan\">{{news.createdAt | timeAgo}} | <img src=\"../../assets/images/lightbulb_black.png\"\n              *ngIf=\"!news.likeKey\" (click)=\"likePost(news.newsId)\" alt=\"\">\n            <img src=\"../../assets/images/lightbulb_red.png\" (click)=\"alreadyLiked()\" *ngIf=\"news.likeKey\" alt=\"\">\n            {{news.likesCount}}\n          </span>\n                </span>\n            </div>\n            <div class=\"postTitle\">\n                <p *ngIf=\"language == 'English'\">{{news.newsTitleEnglish}}</p>\n                <p *ngIf=\"language == 'Hindi'\">{{news.newsTitleHindi}}</p>\n            </div>\n            <div class=\"subPostTitle\">\n                <p class=\"newsInfo\" *ngIf=\"news.srcTitle && news.srcLink\"><span> Source</span>: <span class=\"srcLink\" (click)=\"openWithSystemBrowser(news.srcLink)\"> {{news.srcTitle}}</span></p>\n                <p class=\"newsInfo\" *ngIf=\"news.picCredit\"><span>Picture: </span><span class=\"picCredit\">\n            {{news.picCredit}}</span></p>\n            </div>\n            <div class=\"post\">\n                <p [innerHTML]=\"news.newsEnglish\" *ngIf=\"language == 'English'\"></p>\n                <p [innerHTML]=\"news.newsHindi\" *ngIf=\"language == 'Hindi'\"></p>\n            </div>\n            <span class=\"float unbookmarkFloat\" *ngIf=\"!news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\">\n        <!-- <ion-icon name=\"bookmark\" class=\"my-float unbookmark\"></ion-icon> -->\n      </span>\n            <span class=\"float bookmarkFloat\" *ngIf=\"news.bookmarkKey\" (click)=\"bookmark(news.newsId)\">\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\">\n      </span>\n            <span class=\"floatShare float\" (click)=\"sharePost(news.fcmLink, news.newsTitleEnglish, news.newsImage)\">\n        <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n      </span>\n        </div>\n    </div>\n    <p *ngIf=\"news\" class=\"alsoRead\">Also Read:</p>\n    <div *ngFor=\"let news of singlepost; let i = index\" class=\"singlePost\">\n        <app-related-post [news]=\"news\" [language]=\"language\" [postCount]=\"i\"></app-related-post>\n    </div>\n    <div class=\"spinner\" *ngIf=\"loading\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n    </div>\n</ion-content>"

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

module.exports = "p {\n  margin: 5px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 10px;\n}\n\nion-back-button {\n  margin: 0 !important;\n}\n\n.postImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n  padding-top: 43px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 22px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.picCredit {\n  font-weight: normal !important;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 25px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 25px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\n.singleNews {\n  border-bottom: 1px solid #eeeeee;\n}\n\n.newsContent {\n  padding-right: 10px;\n}\n\nion-title {\n  float: left;\n  line-height: 46px;\n  padding-left: 10px;\n  padding-top: 1px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: var(--main-app-color);\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n  opacity: 0.7;\n}\n\n.float img {\n  margin-top: 31%;\n}\n\n.floatShare {\n  bottom: 13%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.unbookmarkFloat {\n  background-color: #cbc9c9;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: var(--main-app-color);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin: 13px 13px 0px 13px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.newsInfo span {\n  font-weight: 700;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n}\n\n.alsoRead {\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 20px 0px 20px 10px;\n}\n\n.category_title {\n  display: inline-block;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: -1;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 84px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBOztFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvREFBQTtFQUFBLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FB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QUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLmhvbWVCYWNrIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnBvc3RJbWFnZSB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnBvc3RUaXRsZSBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHBhZGRpbmctdG9wOiA0M3B4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0VGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNyZWF0ZWRCeSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzb3VyY2VMaW5rIHtcbiAgICBjb2xvcjogIzA4MDBmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICAgIGhlaWdodDogMjJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuXG5hLmZsb2F0K2Rpdi5sYWJlbC1jb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyK2Rpdi5sYWJlbC1jb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICAgIHJpZ2h0OiA0MHB4O1xufVxuXG4ucGljQ3JlZGl0IHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsIWltcG9ydGFudDtcbn1cblxuLnVuYm9va21hcmsge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYm9va21hcmtlZCB7XG4gICAgY29sb3I6ICNjYmM5Yzk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcGFkZGluZzogNXB4IDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc2luZ2xlTmV3cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cblxuLm5ld3NDb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4ubGlrZWQge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5uZXdzSW5mbyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmxvYXQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiAzJTtcbiAgICByaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgICB6LWluZGV4OiAxMTE7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG4uZmxvYXQgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAzMSU7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgICBib3R0b206IDEzJTtcbiAgICByaWdodDogNDBweDtcbn1cblxuLm15LWZsb2F0IHtcbiAgICBtYXJnaW4tdG9wOiAyOCU7XG59XG5cbi51bmJvb2ttYXJrRmxvYXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG59XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5zaGFyZUJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cblxuLnNwaW5uZXIge1xuICAgIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXI+ZGl2IHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgICAwJSxcbiAgICA4MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gICAgMCUsXG4gICAgODAlLFxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbi5pbWFnZUNyZWRpdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMTNweCAxM3B4IDBweCAxM3B4O1xufVxuXG4vLyAucG9zdFRpdGxlIHtcbi8vICAgbWFyZ2luLXRvcDogMzVweDtcbi8vIH1cbi5saWtlc1NwYW4gaW1nIHtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5uZXdzSW5mbyBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3JjTGluayB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogOSAvIDE2KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWxzb1JlYWQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMTBweDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0LWJsb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA3JTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAyJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vLyAuY29udGFpbmVyOmFmdGVyIHtcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbi8vICAgei1pbmRleDogMDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLmNhdGVnb3J5X3RpdGxlIHAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29udGVudEZlZWRzIHtcbiAgICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE1LjVweDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg0cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmVlZHMge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lQWdvIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmltZ0NyZWRpdCBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbWdDcmVkaXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn0iLCJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnBvc3RJbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctdG9wOiA0M3B4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0VGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY3JlYXRlZEJ5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzb3VyY2VMaW5rIHtcbiAgY29sb3I6ICMwODAwZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5hLmZsb2F0ICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbmEuZmxvYXQ6aG92ZXIgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICByaWdodDogNDBweDtcbn1cblxuLnBpY0NyZWRpdCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnVuYm9va21hcmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ib29rbWFya2VkIHtcbiAgY29sb3I6ICNjYmM5Yzk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnNpbmdsZU5ld3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxuLm5ld3NDb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5saWtlZCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5uZXdzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDMlO1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICB6LWluZGV4OiAxMTE7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmZsb2F0IGltZyB7XG4gIG1hcmdpbi10b3A6IDMxJTtcbn1cblxuLmZsb2F0U2hhcmUge1xuICBib3R0b206IDEzJTtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cblxuLnVuYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG59XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDA7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyID4gZGl2IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW1hZ2VDcmVkaXQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTNweCAxM3B4IDBweCAxM3B4O1xufVxuXG4ubGlrZXNTcGFuIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cblxuLm5ld3NJbmZvIHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3JjTGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hbHNvUmVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAxMHB4O1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50ZXh0LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDclO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMiU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNS41cHg7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaW1nQ3JlZGl0IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW1nQ3JlZGl0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

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
            console.log("News single", _this.news.newsEnglish);
            //condition for youtube icon
            if (!_this.news.newsEnglish.includes("https://img.icons8.com/color/96/000000/youtube-play.png")) {
                _this.loading = false;
                _this.singleNewsLoading = false;
            }
            else {
                _this.singleNewsLoading = true;
                setTimeout(function () {
                    $('.singleNews').css('visibility', 'hidden');
                }, 0.1);
            }
            _this.firebaseAnalytics.logEvent('post_viewed', { postTitle: _this.singlepost[0]['newsTitleEnglish'] }).then(function (res) {
                console.log("Post Tracked", _this.singlepost[0]['newsTitleEnglish']);
            });
            //for youtube play icon
            setTimeout(function () {
                $("[src='https://img.icons8.com/color/96/000000/youtube-play.png']").css({ "position": "absolute", "margin-top": "22%", "margin-left": "33%", "pointer-events": "none" });
                $('.singleNews').css('visibility', 'visible');
                _this.loading = false;
                _this.singleNewsLoading = false;
            }, 1000);
        });
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