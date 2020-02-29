(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/home\"\n      float-left\n      (click)=\"backClick()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\">Trivia Post</span>\n    <button float-right routerLink=\"/home\" (click)=\"homeClick()\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!loading\">\n  <div *ngIf=\"news\" class=\"singleNews\">\n    <div class=\"container\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\" class=\"postImage\" />\n      <div class=\"text-block\"></div>\n    </div>\n\n    <div class=\"subPostTitle\">\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\">\n        <span>PC : </span><span class=\"picCredit\"> {{news.picCredit}}</span>\n      </p>\n    </div>\n    <div class=\"newsContent\">\n      <div class=\"postTitle\" *ngIf=\"news[language].title\">\n        <p *ngIf=\"language != 'as'\">{{news[language].title}}</p>\n        <p class=\"assameseFont assameseFontTitle\" *ngIf=\"language == 'as'\">\n          {{news[language].title}}\n        </p>\n      </div>\n      <div class=\"category_title\">\n        <span\n          (click)=\"singleCategory(news.newsCategoryId,news.newsCategory[language])\"\n          *ngIf=\"language != 'as'\"\n        >\n          {{news.newsCategory[language] | slice:0:30}}\n        </span>\n        <span\n          (click)=\"singleCategory(news.newsCategoryId,news.newsCategory[language])\"\n          class=\"assameseFont\"\n          *ngIf=\"language == 'as'\"\n        >\n          {{news.newsCategory[language] | slice:0:30}}\n        </span>\n      </div>\n      <div class=\"post\">\n        <p [innerHTML]=\"byPassedNews\" *ngIf=\"language != 'as'\"></p>\n        <p\n          [innerHTML]=\"byPassedNews\"\n          class=\"assameseFont assameseFontContent\"\n          *ngIf=\"language == 'as'\"\n        ></p>\n      </div>\n      <span\n        class=\"float unbookmarkFloat\"\n        *ngIf=\"!news.bookmarkKey\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <div class=\"tourText tourTextBookmark\" *ngIf=\"!bookmarkFlag\">\n          Click here to bookmark this post!\n        </div>\n        <div class=\"ripple_effect\" *ngIf=\"!bookmarkFlag\"></div>\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span>\n      <!-- <span\n        class=\"float unbookmarkFloat\"\n        *ngIf=\"!news.bookmarkKey\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span> -->\n      <span\n        class=\"float bookmarkFloat\"\n        *ngIf=\"(news.bookmarkKey || loginBookmark)\"\n        (click)=\"bookmark(news.newsId)\"\n      >\n        <img src=\"assets/images/bookmarkWhite.png\" height=\"52%\" alt=\"\" />\n      </span>\n      <span\n        class=\"float floatShare\"\n        (click)=\"sharePost(news.fcmLink, news[language].title, news.newsImage)\"\n      >\n        <div class=\"tourText tourTextShare\" *ngIf=\"!shareFlag\">\n          Click here to share this post!\n        </div>\n        <div class=\"ripple_effect\" *ngIf=\"!shareFlag\"></div>\n        <img src=\"../../assets/images/Share.png\" class=\"icon shareImage\" />\n      </span>\n    </div>\n    <div class=\"subPostTitle postSource\">\n      <p class=\"newsInfo\" *ngIf=\"news.picCredit\">\n        <span>Source: </span\n        ><span class=\"picCredit\" (click)=\"openWithSystemBrowser(news.srcLink)\">\n          {{news.srcTitle}}</span\n        >\n      </p>\n      <p class=\"newsInfo\" *ngIf=\"!news.picCredit\"></p>\n    </div>\n  </div>\n  <p *ngIf=\"news\" class=\"alsoRead\">\n    Also Read:\n  </p>\n  <div *ngFor=\"let news of singlepost; let i = index\" class=\"singlePost\">\n    <app-related-post\n      [news]=\"news\"\n      [language]=\"language\"\n      [postCount]=\"i\"\n    ></app-related-post>\n  </div>\n\n  <!-- modal bookmark -->\n  <div id=\"open-modal\" class=\"modal-window\" *ngIf=\"bookmarkModal\">\n    <div>\n      <div class=\"img_border\">\n        <img src=\"../../assets/images/bookmarkNew.png\" alt=\"\" />\n      </div>\n      <div class=\"textBoxModal\">\n        <h3>{{modalBookmarkTitle[language]}}</h3>\n        <p>{{modalBookmarkText[language]}}</p>\n      </div>\n      <div>\n        <button class=\"signupButton\" (click)=\"bookmarkClose()\">Close</button>\n      </div>\n    </div>\n  </div>\n\n  <!-- modal share -->\n  <div id=\"open-modal\" class=\"modal-window\" *ngIf=\"shareModal\">\n    <div>\n      <div class=\"img_border\">\n        <img src=\"../../assets/images/share.png\" alt=\"\" />\n      </div>\n      <div class=\"textBoxModal\">\n        <h3>Share Post</h3>\n        <p>So you can share interesting post with your friends</p>\n      </div>\n      <div>\n        <button class=\"signupButton\" (click)=\"shareClose()\">Close</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>\n"

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

module.exports = "p {\n  margin: 5px;\n}\n\n.postImage {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n  padding-top: 8px;\n}\n\n.subPostTitle,\n.post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: var(--main-app-color);\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 600 !important;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n#sourceLink {\n  color: #0800ff;\n  font-weight: 500;\n  border-bottom: 1px solid;\n}\n\n.shareImage {\n  height: 22px;\n  float: right;\n  margin: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: var(--main-app-color);\n  font-size: 25px;\n}\n\n.bookmarked {\n  color: #cbc9c9;\n  font-size: 25px;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n  display: table;\n  width: 100%;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\n.singleNews {\n  border-bottom: 1px solid #eeeeee;\n}\n\n.newsContent {\n  padding-right: 10px;\n}\n\nion-title {\n  line-height: 2.5;\n  padding-left: 10px;\n  padding-top: 1px;\n}\n\n.liked {\n  color: var(--main-app-color);\n}\n\n.newsInfo {\n  font-size: 12px;\n  margin-top: 10px;\n}\n\n.postSource {\n  margin-bottom: 20px;\n}\n\n.srctitle {\n  margin-left: 16px;\n}\n\n.float {\n  position: fixed;\n  width: 50px;\n  height: 50px;\n  bottom: 3%;\n  right: 40px;\n  background-color: grey;\n  color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 111;\n}\n\n.float img {\n  margin-top: 31%;\n}\n\n.floatShare {\n  bottom: 13%;\n  right: 40px;\n}\n\n.my-float {\n  margin-top: 28%;\n}\n\n.bookmarkFloat {\n  background-color: var(--main-app-color);\n}\n\n.shareButton {\n  float: right;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.loadingContent {\n  --background: none;\n  background: url('simpleLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.imageCredit {\n  float: right;\n  margin: 13px 13px 0px 13px;\n}\n\n.likesSpan img {\n  height: 18px;\n}\n\n.srcLink {\n  color: var(--main-app-color);\n}\n\n.container {\n  position: relative;\n  font-family: Arial;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n}\n\n.alsoRead {\n  font-size: 20px;\n  font-weight: bolder;\n  padding: 10px 0px 6px 10px;\n}\n\n.category_title {\n  display: inline-block;\n  font-weight: bold;\n  margin: 10px 0px 6px 18px;\n}\n\n.category_title span {\n  color: red;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 7%;\n  color: white;\n  padding: 0 2%;\n  z-index: 1;\n  font-weight: 700;\n  font-size: 17px;\n}\n\n.category_title p {\n  background-color: var(--main-app-color);\n  padding: 5px;\n  border-radius: 13px;\n  opacity: 0.9;\n  font-size: 13px;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  display: block;\n  margin-top: 4%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: -1;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 84px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.imgCredit span {\n  color: var(--main-app-color);\n  font-weight: 600;\n}\n\n.imgCredit {\n  font-size: 12px;\n}\n\n.blink {\n  background-color: var(--main-app-color);\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    background-color: #0800ff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    background-color: #0800ff;\n  }\n}\n\n.skipTour {\n  position: fixed;\n  bottom: 10px;\n  left: 15px;\n  z-index: 1;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.skipTour img {\n  float: left;\n}\n\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n\np.assameseFont.assameseFontTitle {\n  font-size: 30px !important;\n}\n\n.firstTimeBlur {\n  border: 1px solid #f7f7f7;\n  -webkit-filter: blur(7px) grayscale(1) brightness(0.5);\n          filter: blur(7px) grayscale(1) brightness(0.5);\n}\n\n.tourText {\n  position: absolute;\n  z-index: 9999;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  bottom: 120%;\n  font-size: 12px;\n  color: #fff;\n  width: 50vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourTextShare {\n  right: 0;\n  opacity: 1;\n}\n\n.tourTextShare:before {\n  content: \"\";\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  left: 85%;\n}\n\n.tourTextHome {\n  top: 61px;\n  right: 4px;\n  display: table;\n}\n\n.tourTextHome:before {\n  content: \"\";\n  border-bottom: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  left: 85%;\n  top: -13px;\n  bottom: 100%;\n  border-top: 0;\n}\n\n.tourText.tourTextBookmark {\n  bottom: 0;\n  right: 15vw;\n  font-size: 11px;\n}\n\n.tourText.tourTextBookmark:before {\n  content: \"\";\n  margin: auto;\n  left: 100%;\n  border-right: 7px solid transparent;\n  border-left: 7px solid #e42310;\n  border-top: 7px solid transparent;\n  border-bottom: 7px solid transparent;\n}\n\n.tourClick {\n  --overflow: hidden;\n}\n\n.textBoxModal h3 {\n  text-align: center;\n  margin: 40px;\n}\n\n.textBoxModal p {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.modal-window {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  pointer-events: all;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.modal-window:target {\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.modal-window > div {\n  width: 90%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 2em;\n  background: #ffffff;\n  height: 55%;\n}\n\n.modal-window header {\n  font-weight: bold;\n}\n\n.modal-window h1 {\n  font-size: 150%;\n  margin: 0 0 15px;\n}\n\n.modal-close {\n  color: #aaa;\n  line-height: 50px;\n  font-size: 80%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: 70px;\n  pointer-events: all;\n  text-decoration: none;\n}\n\n.modal-close:hover {\n  color: black;\n}\n\n/* Demo Styles */\n\na {\n  color: inherit;\n}\n\n.modal-window div:not(:last-of-type) {\n  margin-bottom: 15px;\n}\n\nsmall {\n  color: #aaa;\n}\n\n.btn {\n  background-color: #fff;\n  padding: 1em 1.5em;\n  border-radius: 3px;\n  text-decoration: none;\n}\n\n.btn i {\n  padding-right: 0.3em;\n}\n\nbutton.signupButton {\n  width: 61%;\n  background-color: #cf2736;\n  color: #fff;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  padding: 12px;\n}\n\nbutton.cancelButton {\n  width: 61%;\n  background-color: #fff;\n  color: #cf2736;\n  border: 1px solid #cf2736;\n  padding: 8px;\n  border-radius: 36px;\n  margin-right: 11px;\n  pointer-events: all;\n  margin: 0 auto;\n  display: block;\n  margin-top: 21px;\n}\n\n.firstTimeButton,\n.cancelButton {\n  position: relative;\n}\n\nion-slide {\n  display: block;\n}\n\n.swiper-container {\n  height: 60% !important;\n}\n\nion-slide img {\n  height: 40px !important;\n}\n\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 70px;\n  height: 70px;\n  padding: 10px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n}\n\nion-slide h3 {\n  padding: 22px;\n}\n\n.tourBlur {\n  -webkit-filter: blur(5px) grayscale(1);\n          filter: blur(5px) grayscale(1);\n  background-color: rgba(1, 1, 1, 0.01);\n}\n\n.tourText {\n  top: unset;\n  font-size: 13px;\n  width: 50vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  right: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourTextModal {\n  position: relative;\n  top: 2vw;\n  left: 25vw;\n  color: #fff;\n}\n\n.modal-window > div {\n  height: 42%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvREFBQTtFQUFBLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7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QUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EscUNBQUE7QUNJRjs7QURHQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5wb3N0SW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0VGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY3JlYXRlZEJ5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzb3VyY2VMaW5rIHtcbiAgY29sb3I6ICMwODAwZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5hLmZsb2F0ICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbmEuZmxvYXQ6aG92ZXIgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICByaWdodDogNDBweDtcbn1cblxuLnVuYm9va21hcmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ib29rbWFya2VkIHtcbiAgY29sb3I6ICNjYmM5Yzk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnNpbmdsZU5ld3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzOCwgMjM4LCAyMzgpO1xufVxuXG4ubmV3c0NvbnRlbnQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBsaW5lLWhlaWdodDogMi41O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi5saWtlZCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5uZXdzSW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wb3N0U291cmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zcmN0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmZsb2F0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDMlO1xuICByaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbiAgei1pbmRleDogMTExO1xufVxuXG4uZmxvYXQgaW1nIHtcbiAgbWFyZ2luLXRvcDogMzElO1xufVxuXG4uZmxvYXRTaGFyZSB7XG4gIGJvdHRvbTogMTMlO1xuICByaWdodDogNDBweDtcbn1cblxuLm15LWZsb2F0IHtcbiAgbWFyZ2luLXRvcDogMjglO1xufVxuXG4vLyAudW5ib29rbWFya0Zsb2F0IHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2NiYzljOTtcbi8vIH1cblxuLmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5zaGFyZUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLypIdWdlIHRoYW5rcyB0byBAdG9iaWFzYWhsaW4gYXQgaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0LyAqL1xuXG4ubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLmltYWdlQ3JlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMTNweCAwcHggMTNweDtcbn1cblxuLy8gLnBvc3RUaXRsZSB7XG4vLyAgIG1hcmdpbi10b3A6IDM1cHg7XG4vLyB9XG4ubGlrZXNTcGFuIGltZyB7XG4gIGhlaWdodDogMThweDtcbn1cblxuLnNyY0xpbmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWxzb1JlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDZweCAxMHB4O1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDEwcHggMHB4IDZweCAxOHB4O1xufVxuLmNhdGVnb3J5X3RpdGxlIHNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuLnRleHQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAyJTtcbiAgei1pbmRleDogMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vLyAuY29udGFpbmVyOmFmdGVyIHtcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDA7XG4vLyAgIGJvdHRvbTogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbi8vICAgei1pbmRleDogMDtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLmNhdGVnb3J5X3RpdGxlIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNS41cHg7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaW1nQ3JlZGl0IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW1nQ3JlZGl0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYmxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwMGZmO1xuICB9XG59XG4uc2tpcFRvdXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNraXBUb3VyIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnJpcHBsZV9lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAzNSwgMTYpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5yaXBwbGVfZWZmZWN0OmJlZm9yZSxcbi5yaXBwbGVfZWZmZWN0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxucC5hc3NhbWVzZUZvbnQuYXNzYW1lc2VGb250VGl0bGUge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn1cbi5maXJzdFRpbWVCbHVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgZmlsdGVyOiBibHVyKDdweCkgZ3JheXNjYWxlKDEpIGJyaWdodG5lc3MoMC41KTtcbn1cbi50b3VyVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvdHRvbTogMTIwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDUwdnc7XG59XG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnRvdXJUZXh0U2hhcmUge1xuICByaWdodDogMDtcbiAgb3BhY2l0eTogMTtcbn1cbi50b3VyVGV4dFNoYXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGVmdDogODUlO1xufVxuLnRvdXJUZXh0SG9tZSB7XG4gIHRvcDogNjFweDtcbiAgcmlnaHQ6IDRweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG4udG91clRleHRIb21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgbGVmdDogODUlO1xuICB0b3A6IC0xM3B4O1xuICBib3R0b206IDEwMCU7XG4gIGJvcmRlci10b3A6IDA7XG59XG4udG91clRleHQudG91clRleHRCb29rbWFyayB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDE1dnc7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi50b3VyVGV4dC50b3VyVGV4dEJvb2ttYXJrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4udG91ckNsaWNrIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuLnRleHRCb3hNb2RhbCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA0MHB4O1xufVxuLnRleHRCb3hNb2RhbCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLy9tb2RhbCBjc3Ncbi5tb2RhbC13aW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAmOnRhcmdldCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4gICYgPiBkaXYge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDU1JTtcbiAgfVxuICBoZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgbWFyZ2luOiAwIDAgMTVweDtcbiAgfVxufVxuXG4ubW9kYWwtY2xvc2Uge1xuICBjb2xvcjogI2FhYTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDcwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cbi8qIERlbW8gU3R5bGVzICovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1vZGFsLXdpbmRvdyBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuc21hbGwge1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xuICB9XG59XG5idXR0b24uc2lnbnVwQnV0dG9uIHtcbiAgd2lkdGg6IDYxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmMjczNjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5idXR0b24uY2FuY2VsQnV0dG9uIHtcbiAgd2lkdGg6IDYxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNjZjI3MzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZjI3MzY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG59XG5cbi5maXJzdFRpbWVCdXR0b24sXG4uY2FuY2VsQnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XG59XG5pb24tc2xpZGUgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4uaW1nX2JvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDAgI2RkZDtcbn1cbmlvbi1zbGlkZSBoMyB7XG4gIHBhZGRpbmc6IDIycHg7XG59XG4udG91ckJsdXIge1xuICBmaWx0ZXI6IGJsdXIoNXB4KSBncmF5c2NhbGUoMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC4wMSk7XG59XG4vLyAuY2F0ZWdvcnlfdGl0bGUsXG4vLyAubm90Rmlyc3RUaW1lIHtcbi8vICAgZmlsdGVyOiBibHVyKDVweCk7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC4wMSk7XG4vLyB9XG4udG91clRleHQge1xuICB0b3A6IHVuc2V0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiA1MHZ3O1xufVxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICByaWdodDogMTAlO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi50b3VyVGV4dE1vZGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJ2dztcbiAgbGVmdDogMjV2dztcbiAgY29sb3I6ICNmZmY7XG59XG4ubW9kYWwtd2luZG93ID4gZGl2IHtcbiAgaGVpZ2h0OiA0MiU7XG59XG4iLCJwIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5wb3N0SW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uc3ViUG9zdFRpdGxlLFxuLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0VGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uY3JlYXRlZEJ5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNzb3VyY2VMaW5rIHtcbiAgY29sb3I6ICMwODAwZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNoYXJlSW1hZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG5hLmZsb2F0ICsgZGl2LmxhYmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGVhc2U7XG59XG5cbmEuZmxvYXQ6aG92ZXIgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZsb2F0Qm9va21hcmsge1xuICByaWdodDogNDBweDtcbn1cblxuLnVuYm9va21hcmsge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ib29rbWFya2VkIHtcbiAgY29sb3I6ICNjYmM5Yzk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnNpbmdsZU5ld3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxuLm5ld3NDb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4ubGlrZWQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubmV3c0luZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wb3N0U291cmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNyY3RpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5mbG9hdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm90dG9tOiAzJTtcbiAgcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG4gIHotaW5kZXg6IDExMTtcbn1cblxuLmZsb2F0IGltZyB7XG4gIG1hcmdpbi10b3A6IDMxJTtcbn1cblxuLmZsb2F0U2hhcmUge1xuICBib3R0b206IDEzJTtcbiAgcmlnaHQ6IDQwcHg7XG59XG5cbi5teS1mbG9hdCB7XG4gIG1hcmdpbi10b3A6IDI4JTtcbn1cblxuLmJvb2ttYXJrRmxvYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5zaGFyZUJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLypIdWdlIHRoYW5rcyB0byBAdG9iaWFzYWhsaW4gYXQgaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0LyAqL1xuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NpbXBsZUxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmltYWdlQ3JlZGl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDEzcHggMTNweCAwcHggMTNweDtcbn1cblxuLmxpa2VzU3BhbiBpbWcge1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5zcmNMaW5rIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogOSAvIDE2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFsc29SZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweCA2cHggMTBweDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxMHB4IDBweCA2cHggMThweDtcbn1cblxuLmNhdGVnb3J5X3RpdGxlIHNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuXG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA3JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDIlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5jYXRlZ29yeV90aXRsZSBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIG9wYWNpdHk6IDAuOTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29udGVudEZlZWRzIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cblxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sYXRlc3ROZXdzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZmVlZHMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmltZ0NyZWRpdCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmltZ0NyZWRpdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJsaW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDBmZjtcbiAgfVxufVxuLnNraXBUb3VyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNraXBUb3VyIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmlwcGxlX2VmZmVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDIzMTAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ucmlwcGxlX2VmZmVjdDpiZWZvcmUsXG4ucmlwcGxlX2VmZmVjdDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxucC5hc3NhbWVzZUZvbnQuYXNzYW1lc2VGb250VGl0bGUge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmZpcnN0VGltZUJsdXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBmaWx0ZXI6IGJsdXIoN3B4KSBncmF5c2NhbGUoMSkgYnJpZ2h0bmVzcygwLjUpO1xufVxuXG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3R0b206IDEyMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG91clRleHRTaGFyZSB7XG4gIHJpZ2h0OiAwO1xuICBvcGFjaXR5OiAxO1xufVxuXG4udG91clRleHRTaGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDg1JTtcbn1cblxuLnRvdXJUZXh0SG9tZSB7XG4gIHRvcDogNjFweDtcbiAgcmlnaHQ6IDRweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50b3VyVGV4dEhvbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBsZWZ0OiA4NSU7XG4gIHRvcDogLTEzcHg7XG4gIGJvdHRvbTogMTAwJTtcbiAgYm9yZGVyLXRvcDogMDtcbn1cblxuLnRvdXJUZXh0LnRvdXJUZXh0Qm9va21hcmsge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNXZ3O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi50b3VyVGV4dC50b3VyVGV4dEJvb2ttYXJrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi50b3VyQ2xpY2sge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZXh0Qm94TW9kYWwgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNDBweDtcbn1cblxuLnRleHRCb3hNb2RhbCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubW9kYWwtd2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5tb2RhbC13aW5kb3c6dGFyZ2V0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ubW9kYWwtd2luZG93ID4gZGl2IHtcbiAgd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDU1JTtcbn1cbi5tb2RhbC13aW5kb3cgaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubW9kYWwtd2luZG93IGgxIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBtYXJnaW46IDAgMCAxNXB4O1xufVxuXG4ubW9kYWwtY2xvc2Uge1xuICBjb2xvcjogI2FhYTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDcwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tb2RhbC1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogRGVtbyBTdHlsZXMgKi9cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1vZGFsLXdpbmRvdyBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuc21hbGwge1xuICBjb2xvcjogI2FhYTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYnRuIGkge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbn1cblxuYnV0dG9uLnNpZ251cEJ1dHRvbiB7XG4gIHdpZHRoOiA2MSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjI3MzY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG5idXR0b24uY2FuY2VsQnV0dG9uIHtcbiAgd2lkdGg6IDYxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNjZjI3MzY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZjI3MzY7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG59XG5cbi5maXJzdFRpbWVCdXR0b24sXG4uY2FuY2VsQnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2xpZGUgaW1nIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdfYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xufVxuXG5pb24tc2xpZGUgaDMge1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4udG91ckJsdXIge1xuICBmaWx0ZXI6IGJsdXIoNXB4KSBncmF5c2NhbGUoMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMSwgMSwgMSwgMC4wMSk7XG59XG5cbi50b3VyVGV4dCB7XG4gIHRvcDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi50b3VyVGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG91clRleHRNb2RhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAydnc7XG4gIGxlZnQ6IDI1dnc7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubW9kYWwtd2luZG93ID4gZGl2IHtcbiAgaGVpZ2h0OiA0MiU7XG59Il19 */"

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
        this.tourCategory = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["tourCategory"];
        this.modalBookmarkTitle = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["modalBookmarkTitle"];
        this.modalBookmarkText = app_changeLang__WEBPACK_IMPORTED_MODULE_14__["modalBookmarkText"];
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
        }
    };
    SinglePostPage.prototype.alreadyLiked = function () {
        this._toastService.toastFunction('You have already liked!', 'danger');
    };
    SinglePostPage.prototype.openWithSystemBrowser = function (url) {
        if (localStorage.getItem('skip')) {
            var target = "_blank";
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
        console.log('postid', postid);
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
            console.log('catId compoennt', catId);
            this.router.navigateByUrl('single-category/' + catId + '/' + catname);
        }
    };
    SinglePostPage.prototype.backClick = function () {
        this.appcomponent.openRatingModal();
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
    SinglePostPage.prototype.homeClick = function () {
        localStorage.setItem('skip', '1');
    };
    SinglePostPage.prototype.bookmarkClose = function () {
        this.bookmarkModal = false;
        localStorage.setItem('bookmarkFlag', '1');
        this.bookmarkFlag = '1';
        if (localStorage.getItem('shareFlag') && localStorage.getItem('bookmarkFlag')) {
            localStorage.setItem('skip', '1');
        }
    };
    SinglePostPage.prototype.shareClose = function () {
        this.shareModal = false;
        localStorage.setItem('shareFlag', '1');
        this.shareFlag = '1';
        if (localStorage.getItem('shareFlag') && localStorage.getItem('bookmarkFlag')) {
            localStorage.setItem('skip', '1');
        }
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