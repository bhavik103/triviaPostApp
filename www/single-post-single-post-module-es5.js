(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/home\"\n      float-left\n      (click)=\"backClick()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\">Trivia Post</span>\n    <button float-right routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!loading\">\n  <div *ngIf=\"news\" class=\"singleNews\">\n    <div class=\"container\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\" class=\"postImage\" />\n      <div class=\"text-block\"></div>\n    </div>\n\n    <div class=\"subPostTitle\">\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\">\n        <span>PC : </span><span class=\"picCredit\"> {{news.picCredit}}</span>\n      </p>\n    </div>\n    <div class=\"newsContent\">\n      <div class=\"postTitle\" *ngIf=\"news[language].title\">\n        <p *ngIf=\"language != 'as'\">{{news[language].title}}</p>\n        <p class=\"assameseFont assameseFontTitle\" *ngIf=\"language == 'as'\">\n          {{news[language].title}}\n        </p>\n      </div>\n      <div class=\"category_title\">\n        <span\n          (click)=\"singleCategory(news.newsCategoryId,news.newsCategory[language])\"\n          *ngIf=\"language != 'as'\"\n        >\n          {{news.newsCategory[language] | slice:0:30}}\n        </span>\n        <span\n          (click)=\"singleCategory(news.newsCategoryId,news.newsCategory[language])\"\n          class=\"assameseFont\"\n          *ngIf=\"language == 'as'\"\n        >\n          {{news.newsCategory[language] | slice:0:30}}\n        </span>\n      </div>\n      <div class=\"post\">\n        <p [innerHTML]=\"byPassedNews\" *ngIf=\"language != 'as'\"></p>\n        <p\n          [innerHTML]=\"byPassedNews\"\n          class=\"assameseFont assameseFontContent\"\n          *ngIf=\"language == 'as'\"\n        ></p>\n      </div>\n      <span\n        class=\"float unbookmarkFloat\"\n        *ngIf=\"!news.bookmarkKey && skip == 1\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n        <!-- <ion-icon name=\"bookmark\" class=\"my-float unbookmark\"></ion-icon> -->\n      </span>\n      <span\n        class=\"float bookmarkFloat\"\n        *ngIf=\"(news.bookmarkKey || loginBookmark) && skip == 1\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span>\n      <span\n        class=\"float unbookmarkFloat\"\n        *ngIf=\"!news.bookmarkKey && skip != 1\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <div class=\"ripple_effect\"></div>\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span>\n      <span\n        class=\"float floatShare\"\n        *ngIf=\"shareBlink !='1' && skip != '1'\"\n        (click)=\"sharePost(news.fcmLink, news[language].title, news.newsImage)\"\n      >\n        <div class=\"ripple_effect\"></div>\n        <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n      </span>\n      <span\n        class=\"float floatShare\"\n        *ngIf=\"shareBlink =='1' || skip == '1'\"\n        (click)=\"sharePost(news.fcmLink, news[language].title, news.newsImage)\"\n      >\n        <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n      </span>\n    </div>\n    <div class=\"subPostTitle postSource\">\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\">\n        <span>Source: </span\n        ><span class=\"picCredit\" (click)=\"openWithSystemBrowser(news.srcLink)\">\n          {{news.srcTitle}}</span\n        >\n      </p>\n      <p class=\"newsInfo\" *ngIf=\"!news.picCredit\"></p>\n    </div>\n  </div>\n  <p *ngIf=\"news\" class=\"alsoRead\">Also Read:</p>\n  <div *ngFor=\"let news of singlepost; let i = index\" class=\"singlePost\">\n    <app-related-post\n      [news]=\"news\"\n      [language]=\"language\"\n      [postCount]=\"i\"\n    ></app-related-post>\n  </div>\n  <div class=\"skipTour\" *ngIf=\"!skip\" (click)=\"skipTour()\">\n    <div class=\"ripple_effect\"></div>\n    <span>Skip Tour > ></span>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>\n"

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

module.exports = "p {\n  margin: 5px;\n}\n\n.postImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n  padding-top: 8px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 22px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 25px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 25px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\n.singleNews {\n  border-bottom: 1px solid #eeeeee;\n}\n\n.newsContent {\n  padding-right: 10px;\n}\n\nion-title {\n  line-height: 2.5;\n  padding-left: 10px;\n  padding-top: 1px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n  margin-top: 10px;\n}\n\n.postSource {\n  margin-bottom: 20px;\n}\n\n.srctitle {\n  margin-left: 16px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: grey;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n  opacity: 0.8;\n}\n\n.float img {\n  margin-top: 31%;\n}\n\n.floatShare {\n  bottom: 13%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.loadingContent {\n  --background: none;\n  background: url('newLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin: 13px 13px 0px 13px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n}\n\n.alsoRead {\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 10px 0px 6px 10px;\n}\n\n.category_title {\n  display: inline-block;\n  font-weight: bold;\n  margin: 10px 0px 6px 18px;\n}\n\n.category_title span {\n  color: red;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: -1;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 84px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n\n.blink {\n  background-color: var(--main-app-color);\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    background-color: #0800ff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    background-color: #0800ff;\n  }\n}\n\n.skipTour {\n  background-color: #e42310;\n  color: #fff;\n  padding: 8px 25px;\n  border-radius: 5px;\n  position: fixed;\n  bottom: 10px;\n  z-index: 1;\n  font-weight: 700;\n  left: 10px;\n}\n\n.skipTour button {\n  padding: 10px;\n  background-color: #e41212 !important;\n  color: #fff;\n}\n\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n\np.assameseFont.assameseFontTitle {\n  font-size: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvREFBQTtFQUFBLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREdBO0VBQ0UsdUNBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBLGtFQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURJQTtFQUNFO0lBR0UsMkJBQUE7RUNIRjtFREtBO0lBQ0UsMkJBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0U7SUFHRSwyQkFBQTtJQUNBLG1CQUFBO0VDTkY7RURRQTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUNORjtBQUNGOztBRFNBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FDUEY7O0FEYUE7RUFDRSxZQUFBO0FDVkY7O0FEY0E7RUFDRSw0QkFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDWEY7O0FEY0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNYRjs7QURhQTtFQUNFLFVBQUE7QUNWRjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1RGOztBRHVCQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsYUFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDcEJGOztBRHVCQTtFQUNFLFlBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDcEJGOztBRHVCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSw0QkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsbUJBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDcEJGOztBRHVCQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsZUFBQTtBQ3BCRjs7QUR1QkE7RUFDRSx1Q0FBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDcEJGOztBRHVCQTtFQUNFO0lBQ0UseUJBQUE7RUNwQkY7QUFDRjs7QURpQkE7RUFDRTtJQUNFLHlCQUFBO0VDcEJGO0FBQ0Y7O0FEc0JBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ3BCRjs7QURzQkE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FDbkJGOztBRHFCQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7QUNsQkY7O0FEb0JBOztFQUVFLGtCQUFBO0FDakJGOztBRG1CQTtFQUNFLDBCQUFBO0FDaEJGIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucG9zdEltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnBvc3RUaXRsZSBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnN1YlBvc3RUaXRsZSxcbi5wb3N0IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhdFRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNyZWF0ZWRCeSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jc291cmNlTGluayB7XG4gIGNvbG9yOiAjMDgwMGZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zaGFyZUltYWdlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi51bmJvb2ttYXJrIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYm9va21hcmtlZCB7XG4gIGNvbG9yOiAjY2JjOWM5O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aW9uQnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmhlYXJ0X2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zaW5nbGVOZXdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cblxuLm5ld3NDb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucG9zdFNvdXJjZXtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zcmN0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDMlO1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgei1pbmRleDogMTExO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5mbG9hdCBpbWcge1xuICBtYXJnaW4tdG9wOiAzMSU7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgYm90dG9tOiAxMyU7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4ubXktZmxvYXQge1xuICBtYXJnaW4tdG9wOiAyOCU7XG59XG5cbi8vIC51bmJvb2ttYXJrRmxvYXQge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JjOWM5O1xuLy8gfVxuXG4uYm9va21hcmtGbG9hdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLnNoYXJlQnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG5cbi5sb2FkaW5nQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL25ld0xvYWRlci5naWYnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLmltYWdlQ3JlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMTNweCAwcHggMTNweDtcbn1cblxuLy8gLnBvc3RUaXRsZSB7XG4vLyAgIG1hcmdpbi10b3A6IDM1cHg7XG4vLyB9XG4ubGlrZXNTcGFuIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cblxuXG4uc3JjTGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hbHNvUmVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMTBweCAwcHggNnB4IDEwcHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweCAwcHggNnB4IDE4cHg7XG59XG4uY2F0ZWdvcnlfdGl0bGUgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi8vIC5jb250YWluZXI6YWZ0ZXIge1xuLy8gICBjb250ZW50OiBcIlwiO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICBsZWZ0OiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuLy8gICB6LWluZGV4OiAwO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG4uY2F0ZWdvcnlfdGl0bGUgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbnRlbnRGZWVkcyB7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1LjVweDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmZlZWRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVBZ28ge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbWdDcmVkaXQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbWdDcmVkaXQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ibGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODAwZmY7XG4gIH1cbn1cbi5za2lwVG91ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDIzMTA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGVmdDogMTBweDtcbn1cbi5za2lwVG91ciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnJpcHBsZV9lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAzNSwgMTYpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5yaXBwbGVfZWZmZWN0OmJlZm9yZSxcbi5yaXBwbGVfZWZmZWN0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxucC5hc3NhbWVzZUZvbnQuYXNzYW1lc2VGb250VGl0bGUge1xuICBmb250LXNpemU6IDMwcHghaW1wb3J0YW50O1xufSIsInAge1xuICBtYXJnaW46IDVweDtcbn1cblxuLnBvc3RJbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5wb3N0VGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5zdWJQb3N0VGl0bGUsXG4ucG9zdCBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXRUaXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jcmVhdGVkQnkge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuI3NvdXJjZUxpbmsge1xuICBjb2xvcjogIzA4MDBmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuXG4uc2hhcmVJbWFnZSB7XG4gIGhlaWdodDogMjJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbmEuZmxvYXQgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYS5mbG9hdDpob3ZlciArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmxvYXRCb29rbWFyayB7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4udW5ib29rbWFyayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmJvb2ttYXJrZWQge1xuICBjb2xvcjogI2NiYzljOTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFydF9pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc2luZ2xlTmV3cyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuXG4ubmV3c0NvbnRlbnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBsaW5lLWhlaWdodDogMi41O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5saWtlZCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5uZXdzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBvc3RTb3VyY2Uge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc3JjdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDMlO1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgei1pbmRleDogMTExO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5mbG9hdCBpbWcge1xuICBtYXJnaW4tdG9wOiAzMSU7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgYm90dG9tOiAxMyU7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4ubXktZmxvYXQge1xuICBtYXJnaW4tdG9wOiAyOCU7XG59XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cbi5sb2FkaW5nQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdMb2FkZXIuZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5pbWFnZUNyZWRpdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxM3B4IDEzcHggMHB4IDEzcHg7XG59XG5cbi5saWtlc1NwYW4gaW1nIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uc3JjTGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hbHNvUmVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMTBweCAwcHggNnB4IDEwcHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweCAwcHggNnB4IDE4cHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyJTtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbnRlbnRGZWVkcyB7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1LjVweDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmZlZWRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVBZ28ge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbWdDcmVkaXQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbWdDcmVkaXQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ibGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODAwZmY7XG4gIH1cbn1cbi5za2lwVG91ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDIzMTA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGVmdDogMTBweDtcbn1cblxuLnNraXBUb3VyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjMxMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0OmJlZm9yZSxcbi5yaXBwbGVfZWZmZWN0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG5wLmFzc2FtZXNlRm9udC5hc3NhbWVzZUZvbnRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");














var SinglePostPage = /** @class */ (function () {
    function SinglePostPage(alertController, domSanitizer, iab, firebaseAnalytics, platform, network, _toastService, _newsService, route, socialSharing, router) {
        this.alertController = alertController;
        this.domSanitizer = domSanitizer;
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
        // this.singlePost();
        this.route.params.subscribe(function (param) {
            _this.configureBack(_this.router.url, param);
        });
    };
    SinglePostPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('bookmarkId')) {
            this.bookmark(localStorage.getItem('bookmarkId'));
        }
        this.shareBlink = localStorage.getItem('shareBlink');
        this.skip = localStorage.getItem('skip');
        this.increaseViews();
        this.removeRedirectItem();
        var postId = this.route.snapshot.params['id'];
        if (this.platform.is('cordova')) {
            // Firebase Analytics 'screen_view' event tracking
            this.firebaseAnalytics.setCurrentScreen('Single Post').then(function (res) {
                console.log("firebase", res);
            });
        }
        this.singlePost();
    };
    SinglePostPage.prototype.configureBack = function (url, param) {
        console.log("url, param", url, param);
        if (url.includes('bookmark')) {
            this.singlePost();
            this.backKeyBookmark = true;
        }
        else if (url.includes('category')) {
            this.backKeyCategory = true;
        }
        else if (url.includes('search')) {
            this.backKeySearch = true;
        }
        else {
            this.singlePost();
        }
    };
    SinglePostPage.prototype.increaseViews = function () {
        var postId = this.route.snapshot.params['id'];
        this._newsService.increaseView(postId).subscribe(function (res) {
            console.log("GOT RESPONSE FROM INCREASE VIEW API CALL", res);
        });
    };
    SinglePostPage.prototype.removeRedirectItem = function () {
        localStorage.removeItem('bookmarkId');
        localStorage.removeItem('likepostId');
    };
    SinglePostPage.prototype.singlePost = function () {
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
        this.singlePostfun(postId);
    };
    SinglePostPage.prototype.singlePostfun = function (postid) {
        var _this = this;
        // this.singlepost = [];
        // this.news = [];
        // this.byPassedNews = [];
        this._newsService.getSingleNews(postid).subscribe(function (res) {
            var singlepostArray = [];
            singlepostArray.push(JSON.parse(JSON.stringify(res)));
            _this.singlepost = JSON.parse(JSON.stringify(singlepostArray));
            if (_this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](res, function (save) {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.bookMark, function (Id) {
                        if (Id.toString() == _this.loggedInUser) {
                            console.log("ID =====", Id);
                            save['bookmarkKey'] = true;
                        }
                    });
                });
            }
            _this.singlepost = JSON.parse(JSON.stringify(res));
            _this.news = JSON.parse(JSON.stringify(res[0]));
            _this.singlepost.splice(0, 1);
            _this.loading = false;
            console.log("SINGLE POST", _this.news);
            _this.byPassedNews = _this.domSanitizer.bypassSecurityTrustHtml(_this.news[_this.language].content);
            _this.byPassedNews = _this.byPassedNews.changingThisBreaksApplicationSecurity;
            console.log('this.byPassedNews', res);
            if (_this.platform.is('cordova')) {
                _this.firebaseAnalytics.logEvent('post_viewed', { postTitle: _this.news[_this.language].title }).then(function (res) {
                    // console.log("Post Tracked", this.news[this.language].title)
                });
            }
        });
    };
    //  Do Share Post 
    SinglePostPage.prototype.sharePost = function (link, newsTitle, newsImage) {
        console.log(link, newsTitle, newsImage);
        this.shareBlink = '1';
        this.skip = '1';
        localStorage.setItem('shareBlink', '1');
        localStorage.setItem('skip', '1');
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
        this.shareBlink = '1';
        this.skip = '1';
        localStorage.setItem('shareBlink', '1');
        localStorage.setItem('skip', '1');
        if (!localStorage.getItem('accessToken')) {
            console.log("newsId done", newsid);
            localStorage.setItem('bookmarkId', newsid);
            this._toastService.toastFunction('You need to login first', 'danger');
            this.router.navigateByUrl('/login');
        }
        else {
            if (this.network.type == 'none') {
                this.singlePostfun(newsid);
                this._toastService.toastFunction('No internet connection', 'danger');
            }
            else {
                console.log("BOOKMARK");
                this._newsService.bookmarkPost(newsid).subscribe(function (res) {
                    _this._toastService.toastFunction(res.message, 'success');
                    _this.singlePostfun(newsid);
                    if (localStorage.getItem('bookmarkId')) {
                        localStorage.removeItem('bookmarkId');
                        _this.loginBookmark = true;
                    }
                }, function (err) {
                    _this._toastService.toastFunction(err.error.message, 'danger');
                });
            }
        }
    };
    SinglePostPage.prototype.alreadyLiked = function () {
        this._toastService.toastFunction('You have already liked!', 'danger');
    };
    SinglePostPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_blank";
        this.iab.create(url, "_blank");
    };
    SinglePostPage.prototype.singleNews = function (postid) {
        localStorage.setItem('skip', '1');
        localStorage.setItem('skip', 'true');
        localStorage.setItem('shareBlink', '1');
        localStorage.setItem('catSelect', '1');
        localStorage.setItem('firstLargePostClick', '1');
        this.skip = localStorage.getItem('skip');
        console.log('postid', postid);
        this.router.navigateByUrl('/single-post/' + postid);
    };
    SinglePostPage.prototype.singleCategory = function (catId, catname) {
        localStorage.setItem('skip', '1');
        localStorage.setItem('skip', 'true');
        localStorage.setItem('shareBlink', '1');
        localStorage.setItem('catSelect', '1');
        localStorage.setItem('firstLargePostClick', '1');
        this.skip = localStorage.getItem('skip');
        localStorage.setItem('skip', '1');
        console.log('catId compoennt', catId);
        this.router.navigateByUrl('single-category/' + catId + '/' + catname);
    };
    SinglePostPage.prototype.backClick = function () {
        // localStorage.setItem('skip', '1')
    };
    SinglePostPage.prototype.skipTour = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!localStorage.getItem('skip') && localStorage.getItem('firstLargePostClick'))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirm!',
                                message: 'Are you sure you want to skip the <strong>tour</strong>?',
                                cssClass: 'alertCustomCss',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        handler: function (blah) {
                                        }
                                    }, {
                                        text: 'Skip',
                                        handler: function () {
                                            localStorage.setItem('skip', '1');
                                            localStorage.setItem('skip', 'true');
                                            localStorage.setItem('shareBlink', '1');
                                            localStorage.setItem('catSelect', '1');
                                            localStorage.setItem('firstLargePostClick', '1');
                                            _this.skip = localStorage.getItem('skip');
                                            _this.router.navigateByUrl('all-categories');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SinglePostPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] },
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SinglePostPage);
    return SinglePostPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-post-single-post-module-es5.js.map