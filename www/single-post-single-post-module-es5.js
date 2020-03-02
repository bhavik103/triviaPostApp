(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/home\"\n      float-left\n      (click)=\"backClick()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\">Trivia Post</span>\n    <button float-right routerLink=\"/home\" (click)=\"homeClick()\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!loading\">\n  <div *ngIf=\"news\" class=\"singleNews\">\n    <div class=\"container\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\" class=\"postImage\" />\n      <div class=\"text-block\"></div>\n    </div>\n\n    <div class=\"subPostTitle\">\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\">\n        <span>PC : </span><span class=\"picCredit\"> {{news.picCredit}}</span>\n      </p>\n    </div>\n    <div class=\"newsContent\">\n      <div class=\"postTitle\" *ngIf=\"news[language].title\">\n        <p *ngIf=\"language != 'as'\">{{news[language].title}}</p>\n        <p class=\"assameseFont assameseFontTitle\" *ngIf=\"language == 'as'\">\n          {{news[language].title}}\n        </p>\n      </div>\n      <div class=\"category_title\">\n        <span\n          (click)=\"singleCategory(news.newsCategoryId,news.newsCategory[language])\"\n          *ngIf=\"language != 'as'\"\n        >\n          {{news.newsCategory[language] | slice:0:30}}\n        </span>\n        <span\n          (click)=\"singleCategory(news.newsCategoryId,news.newsCategory[language])\"\n          class=\"assameseFont\"\n          *ngIf=\"language == 'as'\"\n        >\n          {{news.newsCategory[language] | slice:0:30}}\n        </span>\n      </div>\n      <div class=\"post\">\n        <p [innerHTML]=\"byPassedNews\" *ngIf=\"language != 'as'\"></p>\n        <p\n          [innerHTML]=\"byPassedNews\"\n          class=\"assameseFont assameseFontContent\"\n          *ngIf=\"language == 'as'\"\n        ></p>\n      </div>\n      <span\n        class=\"float unbookmarkFloat\"\n        *ngIf=\"!news.bookmarkKey\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <span *ngIf=\"!skip\">\n          <div\n            class=\"tourText tourTextBookmark tourTextBook\"\n            *ngIf=\"bookmarkFlag != '1'\"\n          >\n            {{clickBookmark[language]}}\n          </div>\n          <div class=\"ripple_effect\" *ngIf=\"bookmarkFlag != '1'\"></div>\n        </span>\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span>\n      <!-- <span\n        class=\"float unbookmarkFloat\"\n        *ngIf=\"!news.bookmarkKey\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span> -->\n      <span\n        class=\"float bookmarkFloat\"\n        *ngIf=\"(news.bookmarkKey || loginBookmark)\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span>\n      <span\n        class=\"float floatShare\"\n        (click)=\"sharePost(news.fcmLink, news[language].title, news.newsImage)\"\n      >\n        <span *ngIf=\"!skip\">\n          <div class=\"tourText tourTextShare\" *ngIf=\"shareFlag != '1'\">\n            {{clickShare[language]}}\n          </div>\n          <div class=\"ripple_effect\" *ngIf=\"shareFlag != '1'\"></div>\n        </span>\n        <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n      </span>\n    </div>\n    <div class=\"subPostTitle postSource\">\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\">\n        <span>Source: </span\n        ><span class=\"picCredit\" (click)=\"openWithSystemBrowser(news.srcLink)\">\n          {{news.srcTitle}}</span\n        >\n      </p>\n      <p class=\"newsInfo\" *ngIf=\"!news.picCredit\"></p>\n    </div>\n  </div>\n  <p *ngIf=\"news\" class=\"alsoRead\">\n    Also Read:\n  </p>\n  <div *ngFor=\"let news of singlepost; let i = index\" class=\"singlePost\">\n    <app-related-post\n      [news]=\"news\"\n      [language]=\"language\"\n      [postCount]=\"i\"\n    ></app-related-post>\n  </div>\n\n  <!-- modal bookmark -->\n  <div id=\"open-modal\" class=\"modal-window\" *ngIf=\"bookmarkModal\">\n    <div>\n      <div class=\"img_border\">\n        <img src=\"../../assets/images/bookmarkNew.png\" alt=\"\" />\n      </div>\n      <div class=\"textBoxModal\">\n        <h3>{{modalBookmarkTitle[language]}}</h3>\n        <p>{{modalBookmarkText[language]}}</p>\n      </div>\n      <div>\n        <button class=\"signupButton\" (click)=\"bookmarkClose();signup()\">\n          {{modalSignupButton[language]}}\n        </button>\n        <button class=\"signupButton skipButton\" (click)=\"bookmarkClose()\">\n          <div class=\"ripple_effect ripple_effect_modal\" *ngIf=\"!skip\"></div>\n          {{modalSkipButton[language]}}\n        </button>\n        <div class=\"tourText tourTextModal tourTextModal\" *ngIf=\"!skip\">\n          {{modalSkipButton[language]}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- modal share -->\n  <div id=\"open-modal\" class=\"modal-window\" *ngIf=\"shareModal\">\n    <div>\n      <div class=\"img_border\">\n        <img src=\"../../assets/images/share.png\" alt=\"\" />\n      </div>\n      <div class=\"textBoxModal\">\n        <h3>{{sharePostModal[language]}}</h3>\n        <p>{{sharePostModalContent[language]}}</p>\n      </div>\n      <div>\n        <button class=\"signupButton\" (click)=\"shareClose();signup()\">\n          {{modalSignupButton[language]}}\n        </button>\n        <button class=\"signupButton skipButton\" (click)=\"shareClose()\">\n          <div class=\"ripple_effect ripple_effect_modal\" *ngIf=\"!skip\"></div>\n          {{modalSkipButton[language]}}\n        </button>\n        <div class=\"tourText tourTextModal tourTextModal\" *ngIf=\"!skip\">\n          {{modalSkipButton[language]}}\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>\n"

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

module.exports = "p {\n  margin: 5px;\n}\n\n.postImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n  padding-top: 8px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 22px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 25px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 25px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\n.singleNews {\n  border-bottom: 1px solid #eeeeee;\n}\n\n.newsContent {\n  padding-right: 10px;\n}\n\nion-title {\n  line-height: 2.5;\n  padding-left: 10px;\n  padding-top: 1px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n  margin-top: 10px;\n}\n\n.postSource {\n  margin-bottom: 20px;\n}\n\n.srctitle {\n  margin-left: 16px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: grey;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n}\n\n.float img {\n  margin-top: 31%;\n}\n\n.floatShare {\n  bottom: 13%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.loadingContent {\n  --background: none;\n  background: url('simpleLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin: 13px 13px 0px 13px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n}\n\n.alsoRead {\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 10px 0px 6px 10px;\n}\n\n.category_title {\n  display: inline-block;\n  font-weight: bold;\n  margin: 10px 0px 6px 18px;\n}\n\n.category_title span {\n  color: red;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: -1;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 84px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n\n.blink {\n  background-color: var(--main-app-color);\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    background-color: #0800ff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    background-color: #0800ff;\n  }\n}\n\n.skipTour {\n  position: fixed;\n  bottom: 10px;\n  left: 15px;\n  z-index: 1;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.skipTour img {\n  float: left;\n}\n\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n\np.assameseFont.assameseFontTitle {\n  font-size: 30px !important;\n}\n\n.firstTimeBlur {\n  border: 1px solid #f7f7f7;\n  -webkit-filter: blur(7px) grayscale(1) brightness(0.5);\n          filter: blur(7px) grayscale(1) brightness(0.5);\n}\n\n.tourText {\n  position: absolute;\n  z-index: 9999;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  bottom: 120%;\n  font-size: 12px;\n  color: #fff;\n  width: 50vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourTextShare {\n  right: 0;\n  opacity: 1;\n}\n\n.tourTextShare:before {\n  content: \"\";\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  left: 85%;\n}\n\n.tourTextHome {\n  top: 61px;\n  right: 4px;\n  display: table;\n}\n\n.tourTextHome:before {\n  content: \"\";\n  border-bottom: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  left: 85%;\n  top: -13px;\n  bottom: 100%;\n  border-top: 0;\n}\n\n.tourText.tourTextBookmark {\n  bottom: 0;\n  right: 15vw;\n  font-size: 11px;\n}\n\n.tourText.tourTextBookmark:before {\n  content: \"\";\n  margin: auto;\n  top: 10%;\n  left: 100%;\n  border-right: 7px solid transparent;\n  border-left: 7px solid #e42310;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n\n.tourClick {\n  --overflow: hidden;\n}\n\n.textBoxModal h3 {\n  text-align: center;\n  margin: 40px;\n}\n\n.textBoxModal p {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.modal-window {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  pointer-events: all;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.modal-window:target {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.modal-window > div {\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2em;\n  background: #ffffff;\n  height: 55%;\n}\n\n.modal-window header {\n  font-weight: bold;\n}\n\n.modal-window h1 {\n  font-size: 150%;\n  margin: 0 0 15px;\n}\n\n.modal-close {\n  color: #aaa;\n  line-height: 50px;\n  font-size: 80%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 70px;\n  pointer-events: all;\n  text-decoration: none;\n}\n\n.modal-close:hover {\n  color: black;\n}\n\n/* Demo Styles */\n\na {\n  color: inherit;\n}\n\n.modal-window div:not(:last-of-type) {\n  margin-bottom: 15px;\n}\n\nsmall {\n  color: #aaa;\n}\n\n.btn {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n\n.btn i {\n  padding-right: 0.3em;\n}\n\nbutton.signupButton {\n  width: 61%;\n  background-color: #cf2736;\n  color: #fff;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  padding: 12px;\n}\n\nbutton.cancelButton {\n  width: 61%;\n  background-color: #fff;\n  color: #cf2736;\n  border: 1px solid #cf2736;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  margin-top: 21px;\n}\n\n.firstTimeButton,\n.cancelButton {\n  position: relative;\n}\n\nion-slide {\n  display: block;\n}\n\n.swiper-container {\n  height: 60% !important;\n}\n\nion-slide img {\n  height: 40px !important;\n}\n\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n}\n\nion-slide h3 {\n  padding: 22px;\n}\n\n.tourBlur {\n  -webkit-filter: blur(5px) grayscale(1);\n          filter: blur(5px) grayscale(1);\n  background-color: rgba(1, 1, 1, 0.01);\n}\n\n.tourText {\n  top: unset;\n  font-size: 13px;\n  width: 50vw;\n}\n\n.tourTextModal:before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  top: unset;\n  left: 50%;\n  border-top: unset;\n  border-bottom: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourTextModal {\n  position: relative;\n  top: 2vw;\n  left: 0;\n  color: #fff;\n}\n\n.modal-window > div {\n  height: 54%;\n}\n\nbutton.signupButton.skipButton {\n  color: #cf2736;\n  margin-top: 12px;\n  background-color: #fff;\n  border: 1px solid #cf2736;\n}\n\n.ripple_effect_modal {\n  top: unset;\n  left: unset;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvREFBQTtFQUFBLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7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Q0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtBQ0dGOztBRERBO0VBQ0Usc0NBQUE7VUFBQSw4QkFBQTtFQUNBLHFDQUFBO0FDSUY7O0FER0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXBvc3Qvc2luZ2xlLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucG9zdEltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnBvc3RUaXRsZSBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnN1YlBvc3RUaXRsZSxcbi5wb3N0IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhdFRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNyZWF0ZWRCeSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jc291cmNlTGluayB7XG4gIGNvbG9yOiAjMDgwMGZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zaGFyZUltYWdlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi51bmJvb2ttYXJrIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYm9va21hcmtlZCB7XG4gIGNvbG9yOiAjY2JjOWM5O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aW9uQnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmhlYXJ0X2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zaW5nbGVOZXdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzgsIDIzOCwgMjM4KTtcbn1cblxuLm5ld3NDb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucG9zdFNvdXJjZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc3JjdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5mbG9hdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAzJTtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gIHotaW5kZXg6IDExMTtcbn1cblxuLmZsb2F0IGltZyB7XG4gIG1hcmdpbi10b3A6IDMxJTtcbn1cblxuLmZsb2F0U2hhcmUge1xuICBib3R0b206IDEzJTtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cblxuLy8gLnVuYm9va21hcmtGbG9hdCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNjYmM5Yzk7XG4vLyB9XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cblxuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NpbXBsZUxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi5pbWFnZUNyZWRpdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxM3B4IDEzcHggMHB4IDEzcHg7XG59XG5cbi8vIC5wb3N0VGl0bGUge1xuLy8gICBtYXJnaW4tdG9wOiAzNXB4O1xuLy8gfVxuLmxpa2VzU3BhbiBpbWcge1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5zcmNMaW5rIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogOSAvIDE2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFsc29SZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweCA2cHggMTBweDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxMHB4IDBweCA2cHggMThweDtcbn1cbi5jYXRlZ29yeV90aXRsZSBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cbi50ZXh0LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDclO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMiU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLy8gLmNvbnRhaW5lcjphZnRlciB7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAwO1xuLy8gICBib3R0b206IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4vLyAgIHotaW5kZXg6IDA7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vIH1cbi5jYXRlZ29yeV90aXRsZSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29udGVudEZlZWRzIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmVlZHMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmltZ0NyZWRpdCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmltZ0NyZWRpdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJsaW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDBmZjtcbiAgfVxufVxuLnNraXBUb3VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5za2lwVG91ciBpbWcge1xuICBmbG9hdDogbGVmdDtcbn1cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMzUsIDE2KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ucmlwcGxlX2VmZmVjdDpiZWZvcmUsXG4ucmlwcGxlX2VmZmVjdDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbnAuYXNzYW1lc2VGb250LmFzc2FtZXNlRm9udFRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uZmlyc3RUaW1lQmx1ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIGZpbHRlcjogYmx1cig3cHgpIGdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDAuNSk7XG59XG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3R0b206IDEyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHZ3O1xufVxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50b3VyVGV4dFNoYXJlIHtcbiAgcmlnaHQ6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG4udG91clRleHRTaGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDg1JTtcbn1cbi50b3VyVGV4dEhvbWUge1xuICB0b3A6IDYxcHg7XG4gIHJpZ2h0OiA0cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnRvdXJUZXh0SG9tZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDg1JTtcbiAgdG9wOiAtMTNweDtcbiAgYm90dG9tOiAxMDAlO1xuICBib3JkZXItdG9wOiAwO1xufVxuLnRvdXJUZXh0LnRvdXJUZXh0Qm9va21hcmsge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNXZ3O1xuICBmb250LXNpemU6IDExcHg7XG59XG4udG91clRleHQudG91clRleHRCb29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50b3VyQ2xpY2sge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG4udGV4dEJveE1vZGFsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDQwcHg7XG59XG4udGV4dEJveE1vZGFsIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4vL21vZGFsIGNzc1xuLm1vZGFsLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICY6dGFyZ2V0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cbiAgJiA+IGRpdiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGhlaWdodDogNTUlO1xuICB9XG4gIGhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICB9XG59XG5cbi5tb2RhbC1jbG9zZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogNzBweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLyogRGVtbyBTdHlsZXMgKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubW9kYWwtd2luZG93IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgaSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4zZW07XG4gIH1cbn1cbmJ1dHRvbi5zaWdudXBCdXR0b24ge1xuICB3aWR0aDogNjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YyNzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweDtcbn1cbmJ1dHRvbi5jYW5jZWxCdXR0b24ge1xuICB3aWR0aDogNjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2NmMjczNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmMjczNjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cblxuLmZpcnN0VGltZUJ1dHRvbixcbi5jYW5jZWxCdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbn1cbmlvbi1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbi5pbWdfYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xufVxuaW9uLXNsaWRlIGgzIHtcbiAgcGFkZGluZzogMjJweDtcbn1cbi50b3VyQmx1ciB7XG4gIGZpbHRlcjogYmx1cig1cHgpIGdyYXlzY2FsZSgxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCAxLCAwLjAxKTtcbn1cbi8vIC5jYXRlZ29yeV90aXRsZSxcbi8vIC5ub3RGaXJzdFRpbWUge1xuLy8gICBmaWx0ZXI6IGJsdXIoNXB4KTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCAxLCAwLjAxKTtcbi8vIH1cbi50b3VyVGV4dCB7XG4gIHRvcDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDUwdnc7XG59XG4udG91clRleHRNb2RhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwJTtcbiAgdG9wOiB1bnNldDtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItdG9wOiB1bnNldDtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufSBcblxuLnRvdXJUZXh0TW9kYWx7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAydnc7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1vZGFsLXdpbmRvdyA+IGRpdiB7XG4gIGhlaWdodDogNTQlO1xufVxuYnV0dG9uLnNpZ251cEJ1dHRvbi5za2lwQnV0dG9uIHtcbiAgY29sb3I6ICNjZjI3MzY7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZjI3MzY7XG59XG4ucmlwcGxlX2VmZmVjdF9tb2RhbHtcbiAgdG9wOiB1bnNldDtcbiAgbGVmdDogdW5zZXQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59IiwicCB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucG9zdEltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnBvc3RUaXRsZSBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnN1YlBvc3RUaXRsZSxcbi5wb3N0IHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNhdFRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNyZWF0ZWRCeSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jc291cmNlTGluayB7XG4gIGNvbG9yOiAjMDgwMGZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zaGFyZUltYWdlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuYS5mbG9hdCArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hLmZsb2F0OmhvdmVyICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJrIHtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi51bmJvb2ttYXJrIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYm9va21hcmtlZCB7XG4gIGNvbG9yOiAjY2JjOWM5O1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5hY3Rpb25CdXR0b24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWN0aW9uQnV0dG9uIHNwYW4ge1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmhlYXJ0X2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5zaW5nbGVOZXdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG59XG5cbi5uZXdzQ29udGVudCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLmxpa2VkIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLm5ld3NJbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucG9zdFNvdXJjZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zcmN0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uZmxvYXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMyU7XG4gIHJpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xuICB6LWluZGV4OiAxMTE7XG59XG5cbi5mbG9hdCBpbWcge1xuICBtYXJnaW4tdG9wOiAzMSU7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgYm90dG9tOiAxMyU7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4ubXktZmxvYXQge1xuICBtYXJnaW4tdG9wOiAyOCU7XG59XG5cbi5ib29rbWFya0Zsb2F0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uc2hhcmVCdXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cbi5sb2FkaW5nQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5pbWFnZUNyZWRpdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxM3B4IDEzcHggMHB4IDEzcHg7XG59XG5cbi5saWtlc1NwYW4gaW1nIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uc3JjTGluayB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hbHNvUmVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMTBweCAwcHggNnB4IDEwcHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweCAwcHggNnB4IDE4cHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyJTtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvbnRlbnRGZWVkcyB7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxMXB4O1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1LjVweDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmZlZWRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVBZ28ge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5pbWdDcmVkaXQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbWdDcmVkaXQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ibGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODAwZmY7XG4gIH1cbn1cbi5za2lwVG91ciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5za2lwVG91ciBpbWcge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJpcHBsZV9lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQyMzEwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLnJpcHBsZV9lZmZlY3Q6YmVmb3JlLFxuLnJpcHBsZV9lZmZlY3Q6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbnAuYXNzYW1lc2VGb250LmFzc2FtZXNlRm9udFRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maXJzdFRpbWVCbHVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgZmlsdGVyOiBibHVyKDdweCkgZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMC41KTtcbn1cblxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm90dG9tOiAxMjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTB2dztcbn1cblxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnRvdXJUZXh0U2hhcmUge1xuICByaWdodDogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRvdXJUZXh0U2hhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiA4NSU7XG59XG5cbi50b3VyVGV4dEhvbWUge1xuICB0b3A6IDYxcHg7XG4gIHJpZ2h0OiA0cHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udG91clRleHRIb21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGVmdDogODUlO1xuICB0b3A6IC0xM3B4O1xuICBib3R0b206IDEwMCU7XG4gIGJvcmRlci10b3A6IDA7XG59XG5cbi50b3VyVGV4dC50b3VyVGV4dEJvb2ttYXJrIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTV2dztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4udG91clRleHQudG91clRleHRCb29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnRvdXJDbGljayB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRleHRCb3hNb2RhbCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4udGV4dEJveE1vZGFsIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tb2RhbC13aW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1vZGFsLXdpbmRvdzp0YXJnZXQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5tb2RhbC13aW5kb3cgPiBkaXYge1xuICB3aWR0aDogOTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwYWRkaW5nOiAyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGhlaWdodDogNTUlO1xufVxuLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb2RhbC13aW5kb3cgaDEge1xuICBmb250LXNpemU6IDE1MCU7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG59XG5cbi5tb2RhbC1jbG9zZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogNzBweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBEZW1vIFN0eWxlcyAqL1xuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubW9kYWwtd2luZG93IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG4gaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xufVxuXG5idXR0b24uc2lnbnVwQnV0dG9uIHtcbiAgd2lkdGg6IDYxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMjczNjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbmJ1dHRvbi5jYW5jZWxCdXR0b24ge1xuICB3aWR0aDogNjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2NmMjczNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmMjczNjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cblxuLmZpcnN0VGltZUJ1dHRvbixcbi5jYW5jZWxCdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG59XG5cbmlvbi1zbGlkZSBoMyB7XG4gIHBhZGRpbmc6IDIycHg7XG59XG5cbi50b3VyQmx1ciB7XG4gIGZpbHRlcjogYmx1cig1cHgpIGdyYXlzY2FsZSgxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAxLCAxLCAwLjAxKTtcbn1cblxuLnRvdXJUZXh0IHtcbiAgdG9wOiB1bnNldDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogNTB2dztcbn1cblxuLnRvdXJUZXh0TW9kYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIHRvcDogdW5zZXQ7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXRvcDogdW5zZXQ7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnRvdXJUZXh0TW9kYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnZ3O1xuICBsZWZ0OiAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vZGFsLXdpbmRvdyA+IGRpdiB7XG4gIGhlaWdodDogNTQlO1xufVxuXG5idXR0b24uc2lnbnVwQnV0dG9uLnNraXBCdXR0b24ge1xuICBjb2xvcjogI2NmMjczNjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmMjczNjtcbn1cblxuLnJpcHBsZV9lZmZlY3RfbW9kYWwge1xuICB0b3A6IHVuc2V0O1xuICBsZWZ0OiB1bnNldDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn0iXX0= */"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var app_changeLang__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/changeLang */ "./src/app/changeLang.ts");
















var SinglePostPage = /** @class */ (function () {
    function SinglePostPage(appcomponent, alertController, domSanitizer, iab, firebaseAnalytics, platform, network, _toastService, _newsService, route, socialSharing, router) {
        this.appcomponent = appcomponent;
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
        this.firstTimeBlur = false;
        this.modalSignupButton = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["modalSignupButton"];
        this.clickShare = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["clickShare"];
        this.clickBookmark = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["clickBookmark"];
        this.tourCategory = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["tourCategory"];
        this.modalSkipButton = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["modalSkipButton"];
        this.modalBookmarkTitle = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["modalBookmarkTitle"];
        this.modalBookmarkText = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["modalBookmarkText"];
        this.sharePostModal = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["sharePostModal"];
        this.sharePostModalContent = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["sharePostModalContent"];
    }
    SinglePostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.appcomponent.openRatingModal();
                return [2 /*return*/];
            });
        }); });
        this.route.params.subscribe(function (param) {
            _this.configureBack(_this.router.url, param);
        });
    };
    SinglePostPage.prototype.ionViewWillLeave = function () {
        this.showRateModal = true;
    };
    SinglePostPage.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem('bookmarkFlag')) {
            this.bookmarkFlag = '1';
        }
        if (localStorage.getItem('shareFlag')) {
            this.shareFlag = '1';
        }
        this.firstTimeBlur = false;
        if (localStorage.getItem('bookmarkId')) {
            this.bookmark(localStorage.getItem('bookmarkId'));
        }
        this.shareBlink = localStorage.getItem('shareBlink');
        this.skip = localStorage.getItem('skip');
        this.increaseViews();
        this.removeRedirectItem();
        if (!this.skip) {
            this.firstTimeBlur = true;
        }
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
        if (!localStorage.getItem('shareFlag')) {
            this.shareModal = true;
        }
        else {
            console.log(link, newsTitle, newsImage);
            this.shareBlink = '1';
            this.skip = '1';
            this.firstTimeBlur = false;
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
        }
    };
    //  Do Bookmark
    SinglePostPage.prototype.bookmark = function (newsid) {
        var _this = this;
        if (!localStorage.getItem('bookmarkFlag')) {
            this.bookmarkModal = true;
        }
        else {
            this.firstTimeBlur = false;
            this.shareBlink = '1';
            this.skip = '1';
            localStorage.setItem('shareBlink', '1');
            localStorage.setItem('skip', '1');
            if (!localStorage.getItem('accessToken')) {
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
        }
    };
    SinglePostPage.prototype.alreadyLiked = function () {
        this._toastService.toastFunction('You have already liked!', 'danger');
    };
    SinglePostPage.prototype.openWithSystemBrowser = function (url) {
        if (localStorage.getItem('skip')) {
            this.iab.create(url, "_blank");
        }
    };
    SinglePostPage.prototype.singleNews = function (postid) {
        this.firstTimeBlur = false;
        localStorage.setItem('skip', '1');
        localStorage.setItem('skip', 'true');
        localStorage.setItem('shareBlink', '1');
        localStorage.setItem('catSelect', '1');
        localStorage.setItem('firstLargePostClick', '1');
        this.skip = localStorage.getItem('skip');
        this.router.navigateByUrl('/single-post/' + postid);
    };
    SinglePostPage.prototype.singleCategory = function (catId, catname) {
        if (localStorage.getItem('skip')) {
            this.firstTimeBlur = false;
            localStorage.setItem('skip', '1');
            localStorage.setItem('skip', 'true');
            localStorage.setItem('shareBlink', '1');
            localStorage.setItem('catSelect', '1');
            localStorage.setItem('firstLargePostClick', '1');
            this.skip = localStorage.getItem('skip');
            localStorage.setItem('skip', '1');
            this.router.navigateByUrl('single-category/' + catId + '/' + catname);
        }
    };
    SinglePostPage.prototype.backClick = function () {
        this.appcomponent.openRatingModal();
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
    SinglePostPage.prototype.homeClick = function () {
        localStorage.setItem('skip', '1');
    };
    SinglePostPage.prototype.bookmarkClose = function () {
        this.bookmarkModal = false;
        localStorage.setItem('bookmarkFlag', '1');
        this.bookmarkFlag = '1';
        if (localStorage.getItem('shareFlag') && localStorage.getItem('bookmarkFlag')) {
            localStorage.setItem('skip', '1');
            this.skip = '1';
        }
    };
    SinglePostPage.prototype.shareClose = function () {
        this.shareModal = false;
        localStorage.setItem('shareFlag', '1');
        this.shareFlag = '1';
        if (localStorage.getItem('shareFlag') && localStorage.getItem('bookmarkFlag')) {
            localStorage.setItem('skip', '1');
            this.skip = '1';
        }
    };
    SinglePostPage.prototype.signup = function () {
        this.router.navigateByUrl('/login');
    };
    SinglePostPage.ctorParameters = function () { return [
        { type: _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"] },
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAnalytics"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SinglePostPage);
    return SinglePostPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-post-single-post-module-es5.js.map