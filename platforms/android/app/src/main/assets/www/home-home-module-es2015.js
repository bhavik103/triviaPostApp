(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div no-border>\n  <div class=\"settingsToolbar\" *ngIf=\"language || (language && skip == '1')\">\n    <button float-left>\n      <ion-icon\n        name=\"settings\"\n        class=\"homeBack\"\n        routerLink=\"/settings\"\n        (click)=\"setFlagTrue()\"\n      ></ion-icon>\n    </button>\n    <span id=\"settingTitle\">\n      Trivia Post\n    </span>\n    <button float-right>\n      <ion-icon name=\"search\" class=\"searchIcon\" (click)=\"search()\"></ion-icon>\n    </button>\n  </div>\n</div>\n<div no-border>\n  <div *ngIf=\"!language\" class=\"settingsToolbar\">\n    <span id=\"settingTitle\" style=\"margin:0;width: 100%;\">\n      Language\n    </span>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!language && startTour && !loading\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p>Choose your preferred language</p>\n    </div>\n    <ion-row style=\"margin-top: 40%;\">\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <div\n          class=\"ripple_effect\"\n          *ngIf=\"i == 0\"\n          style=\"margin-top: 10px;\"\n        ></div>\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n        <div class=\"tourText tourTextModal\" *ngIf=\"i == 0\" style=\"bottom: 96%;\">\n          Choose any language of your preference!\n        </div>\n      </ion-col>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLang()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"!language && !loading && skipTheTour\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p>Choose your preferred language</p>\n    </div>\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLangSkip()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content\n  *ngIf=\"[(latestPost && language) || (language && latestPost && skip == '1') || (skip == '1' && latestPost)] && !loading && language\"\n  [ngClass]=\"{'disableScroll': !skip}\"\n>\n  <div class=\"skipTour\" *ngIf=\"!skip\" (click)=\"skipTour()\">\n    <div class=\"tourText tourTextModal\">\n      {{tourSkip[language]}}\n    </div>\n    <div class=\"ripple_effect\"></div>\n    <span><img src=\"../../assets/images/skip.png\" alt=\"\" height=\"48px\"/></span>\n  </div>\n  <ion-row class=\"feeds\" *ngIf=\"latestPost && !loading\">\n    <app-large-post\n      [news]=\"latestPost\"\n      *ngIf=\"latestPost && !loading\"\n      [language]=\"language\"\n      [skip]=\"skip\"\n    ></app-large-post>\n    <span *ngFor=\"let news of newsArray\" class=\"newsTiles\">\n      <app-post-tiles\n        [news]=\"news\"\n        [language]=\"language\"\n        *ngIf=\"newsArray && !loading\"\n      ></app-post-tiles>\n    </span>\n  </ion-row>\n</ion-content>\n<div class=\"no-news-text\" *ngIf=\"isTextVisible\">\n  <span>{{text}}</span>\n</div>\n<ion-content\n  *ngIf=\"loading && firstTimeLoad != true\"\n  class=\"loadingContent\"\n></ion-content>\n<ion-content\n  *ngIf=\"loading && firstTimeLoad == true\"\n  class=\"simpleLoader\"\n></ion-content>\n<ion-content\n  *ngIf=\"language && catSelect == '0' && skip != '1' && catLoading\"\n  class=\"loadingContent\"\n>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../category-tiles/category-tiles.module */ "./src/app/category-tiles/category-tiles.module.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");











let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_8__["CategoryTilesPageModule"],
            _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_9__["LargePostPageModule"],
            _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_10__["PostTilesPageModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                },
            ]),
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  font-size: 18.5px;\n}\n\n.tab-selected {\n  border-bottom: 3px solid;\n  color: var(--main-app-color);\n}\n\nion-tab-button {\n  --ripple-color: var(--main-app-color);\n}\n\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n\n#loader-wrapper {\n  background: #fff !important;\n}\n\n.welcomeTo {\n  font-weight: 500;\n  font-size: 30px;\n}\n\n.appDesc {\n  font-size: 25px;\n}\n\n.ion-color-primary {\n  --ion-color-contrast: var(--main-app-color) !important;\n  --ion-color-base: #fff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast-rgb: var(\n    --ion-color-primary-contrast-rgb,\n    255,\n    255,\n    255\n  ) !important;\n  --ion-color-shade: #fff !important;\n  --ion-color-tint: #fff !important;\n}\n\n.active ion-label {\n  color: var(--main-app-color) !important;\n}\n\nion-label {\n  text-transform: none !important;\n}\n\n.categoryTiles {\n  padding-bottom: 0px;\n}\n\nselect {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.langSubmit {\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.langSubmit {\n  padding: 10px;\n  background-color: red;\n  color: #fff;\n  border-radius: 6px;\n}\n\n.languageSelect select {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n.langHead {\n  padding: 10px 20px;\n}\n\n.langHead img {\n  margin-right: 17px;\n  float: left;\n}\n\n.langHead p {\n  line-height: 33px;\n  font-size: 16px;\n  margin: 0;\n}\n\nion-card {\n  pointer-events: all;\n  border-radius: 10px;\n  padding: 4vh 0;\n  text-align: center;\n  line-height: 5vh;\n  margin: 1vw 1vh;\n}\n\nion-card:focus {\n  background-color: #e41212 !important;\n  color: #fff;\n}\n\n.contButton {\n  padding: 14px;\n  margin-left: 17px;\n  margin-right: 17px;\n  width: 92%;\n  border-radius: 10px;\n  color: #e41212 !important;\n}\n\n.active {\n  background-color: red;\n}\n\n.skipTour {\n  position: fixed;\n  bottom: 10px;\n  left: 15px;\n  z-index: 1;\n  background-color: #fff;\n  border-radius: 50%;\n}\n\n.skipTour img {\n  float: left;\n}\n\n.skipTour button {\n  padding: 10px;\n  background-color: #e41212 !important;\n  color: #fff;\n}\n\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n\n.loadingContent {\n  --background: none;\n  background: url('mainLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n\n.simpleLoader {\n  --background: none;\n  background: url('simpleLoader.gif') no-repeat left center;\n  background-size: cover;\n  background-position: center;\n}\n\n.tourText {\n  position: absolute;\n  z-index: 9999;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  bottom: 120%;\n  font-size: 17px;\n  color: #fff;\n  width: 50vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.disableScroll {\n  --overflow: hidden;\n}\n\n.instructions {\n  text-align: center;\n  font-size: 20px;\n  margin: 15vh;\n}\n\n/* //////////////////////////////////////////////////////////////////////////////////////////////\n\t//   Default Modal Styles   //\n////////////////////////////////////////////////////////////////////////////////////////////// */\n\n/*   This is the background overlay   */\n\n.backgroundOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  opacity: 0.85;\n  filter: alpha(opacity=85);\n  -moz-opacity: 0.85;\n  z-index: 101;\n}\n\n/*   This is the Popup Window   */\n\n.delayedPopupWindow {\n  position: fixed;\n  width: 80%;\n  background-color: #efefef;\n  border: 2px solid #333;\n  z-index: 102;\n  padding: 10px 20px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 11px;\n}\n\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 77px;\n  height: 77px;\n  padding: 13px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n  padding-top: 5px;\n}\n\n.rateButtons {\n  float: right;\n}\n\n.delayedPopupWindow h5 {\n  margin-top: 50px;\n  text-align: center;\n  font-weight: bolder;\n  color: #e41212;\n}\n\n.delayedPopupWindow p {\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 38px;\n  padding: 0px 20px;\n}\n\n.delayedPopupWindow .ratingBack {\n  height: 248px;\n  right: 0;\n  float: right;\n  position: absolute;\n  bottom: 0;\n}\n\n#rateButton {\n  background: #e41212;\n  color: #fff;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.rateButton {\n  text-align: center;\n  position: relative;\n  z-index: 11;\n  padding: 0 17px;\n}\n\nbutton#remindLater, button#noThanks {\n  background: none;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 10px;\n  border: 1px solid #e41212;\n  color: #e41212;\n}\n\nbutton#noThanks {\n  border: none;\n}\n\n.disableScroll {\n  --overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURJQTtFQUNFLHFDQUFBO0FDREY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURLQTtFQUNFLDJCQUFBO0FDRkY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLGVB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O0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ2lCRjs7QURmQTtFQUNFLFlBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ21CRjs7QURqQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDb0JGOztBRGxCQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3FCRjs7QURuQkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNzQkY7O0FEcEJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdUJGOztBRHJCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ3dCRjs7QUR0QkE7RUFDRSxZQUFBO0FDeUJGOztBRHZCQTtFQUNFLGtCQUFBO0FDMEJGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN1cGVyLXRhYnMtdG9vbGJhciB7XG4gICR0YWJzLW1kLXRhYi1pY29uLWNvbG9yLWFjdGl2ZTogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOC41cHg7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZy5pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi8vIGxvYWRlclxuXG4jbG9hZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ud2VsY29tZVRvIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmFwcERlc2Mge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKFxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLFxuICAgIDI1NSxcbiAgICAyNTUsXG4gICAgMjU1XG4gICkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5pb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhdGVnb3J5VGlsZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuc2VsZWN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5sYW5nU3VibWl0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDU1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5sYW5nU3VibWl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGFuZ3VhZ2VTZWxlY3Qgc2VsZWN0IHtcbiAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xuXG4gIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmxhbmdIZWFkIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubGFuZ0hlYWQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxhbmdIZWFkIHAge1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5pb24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDR2aCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbjogMXZ3IDF2aDtcbn1cbmlvbi1jYXJkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250QnV0dG9uIHtcbiAgcGFkZGluZzogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgd2lkdGg6IDkyJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbn1cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5za2lwVG91ciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2tpcFRvdXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2tpcFRvdXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMzUsIDE2KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ucmlwcGxlX2VmZmVjdDpiZWZvcmUsXG4ucmlwcGxlX2VmZmVjdDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5sb2FkaW5nQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluTG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnNpbXBsZUxvYWRlciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjs7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm90dG9tOiAxMjAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTB2dztcbn1cbi50b3VyVGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMTAlO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy9tb2RhbCBwb3B1cFxuLmluc3RydWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDE1dmg7XG59XG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gICBEZWZhdWx0IE1vZGFsIFN0eWxlcyAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4vKiAgIFRoaXMgaXMgdGhlIGJhY2tncm91bmQgb3ZlcmxheSAgICovXG4uYmFja2dyb3VuZE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjg1O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODUpO1xuICAtbW96LW9wYWNpdHk6IDAuODU7XG4gIHotaW5kZXg6IDEwMTtcbn1cbi8qICAgVGhpcyBpcyB0aGUgUG9wdXAgV2luZG93ICAgKi9cbi5kZWxheWVkUG9wdXBXaW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIHotaW5kZXg6IDEwMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cbi5pbWdfYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDc3cHg7XG4gIGhlaWdodDogNzdweDtcbiAgcGFkZGluZzogMTNweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnJhdGVCdXR0b25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBoNSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNlNDEyMTI7XG59XG4uZGVsYXllZFBvcHVwV2luZG93IHB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbi5kZWxheWVkUG9wdXBXaW5kb3cgLnJhdGluZ0JhY2t7XG4gIGhlaWdodDogMjQ4cHg7XG4gIHJpZ2h0OiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuI3JhdGVCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZTQxMjEyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yYXRlQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDExO1xuICBwYWRkaW5nOiAwIDE3cHg7XG59XG5idXR0b24jcmVtaW5kTGF0ZXIsYnV0dG9uI25vVGhhbmtzIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQxMjEyO1xuICBjb2xvcjogI2U0MTIxMjtcbn1cbmJ1dHRvbiNub1RoYW5rc3tcbiAgYm9yZGVyOiBub25lO1xufVxuLmRpc2FibGVTY3JvbGx7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn0iLCJpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE4LjVweDtcbn1cblxuLnRhYi1zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICAtLXJpcHBsZS1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZy5pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbiNsb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVUbyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmFwcERlc2Mge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKFxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLFxuICAgIDI1NSxcbiAgICAyNTUsXG4gICAgMjU1XG4gICkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5VGlsZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZ1N1Ym1pdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5sYW5nU3VibWl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGFuZ3VhZ2VTZWxlY3Qgc2VsZWN0IHtcbiAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG59XG4ubGFuZ0hlYWQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5sYW5nSGVhZCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ0hlYWQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0dmggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNXZoO1xuICBtYXJnaW46IDF2dyAxdmg7XG59XG5cbmlvbi1jYXJkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRCdXR0b24ge1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICB3aWR0aDogOTIlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2tpcFRvdXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2tpcFRvdXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5za2lwVG91ciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmlwcGxlX2VmZmVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDIzMTAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ucmlwcGxlX2VmZmVjdDpiZWZvcmUsXG4ucmlwcGxlX2VmZmVjdDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21haW5Mb2FkZXIuZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zaW1wbGVMb2FkZXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm90dG9tOiAxMjAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTB2dztcbn1cblxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmRpc2FibGVTY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbnN0cnVjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxNXZoO1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vICAgRGVmYXVsdCBNb2RhbCBTdHlsZXMgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuLyogICBUaGlzIGlzIHRoZSBiYWNrZ3JvdW5kIG92ZXJsYXkgICAqL1xuLmJhY2tncm91bmRPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC44NTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTg1KTtcbiAgLW1vei1vcGFjaXR5OiAwLjg1O1xuICB6LWluZGV4OiAxMDE7XG59XG5cbi8qICAgVGhpcyBpcyB0aGUgUG9wdXAgV2luZG93ICAgKi9cbi5kZWxheWVkUG9wdXBXaW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIHotaW5kZXg6IDEwMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cblxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzdweDtcbiAgaGVpZ2h0OiA3N3B4O1xuICBwYWRkaW5nOiAxM3B4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5yYXRlQnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBoNSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNlNDEyMTI7XG59XG5cbi5kZWxheWVkUG9wdXBXaW5kb3cgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyAucmF0aW5nQmFjayB7XG4gIGhlaWdodDogMjQ4cHg7XG4gIHJpZ2h0OiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG4jcmF0ZUJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNlNDEyMTI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmF0ZUJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTtcbiAgcGFkZGluZzogMCAxN3B4O1xufVxuXG5idXR0b24jcmVtaW5kTGF0ZXIsIGJ1dHRvbiNub1RoYW5rcyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0MTIxMjtcbiAgY29sb3I6ICNlNDEyMTI7XG59XG5cbmJ1dHRvbiNub1RoYW5rcyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRpc2FibGVTY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _changeLang__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../changeLang */ "./src/app/changeLang.ts");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");




















let HomePage = class HomePage {
    constructor(market, alertController, _generalService, firebaseDynamicLinks, _toastService, _userService, screenOrientation, platform, fcm, _newsService, _categoryService, router, keyboard) {
        this.market = market;
        this.alertController = alertController;
        this._generalService = _generalService;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this._toastService = _toastService;
        this._userService = _userService;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.fcm = fcm;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.keyboard = keyboard;
        this.loading = false;
        this.opts = {
            icon: false,
            label: true,
            toolbarPos: 'top',
            scrollable: true,
        };
        this.config = {
            allowElementScroll: false,
            transitionDuration: 100
        };
        this.languageList = _changeLang__WEBPACK_IMPORTED_MODULE_16__["langList"];
        this.tourSkip = _changeLang__WEBPACK_IMPORTED_MODULE_16__["tourSkip"];
        this.rateTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateTitle"];
        this.rateText = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateText"];
        this.catTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["catTitle"];
        this.rateNow = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateNowButton"];
        this.rateLater = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateRemindButton"];
        this.rateNoThanks = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateNoThanksButton"];
        this.tourReadPost = _changeLang__WEBPACK_IMPORTED_MODULE_16__["tourReadPost"];
        this.modalBookmarkTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalBookmarkTitle"];
        this.modalBookmarkText = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalBookmarkText"];
        this.modalNotificationTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalNotificationTitle"];
        this.modalNotificationText = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalNotificationText"];
        this.proceedTour = _changeLang__WEBPACK_IMPORTED_MODULE_16__["proceedTour"];
        if (!localStorage.getItem('skip')) {
            $('body').addClass('tourBackDrop');
        }
        else {
            $('body').addClass('notfound');
        }
    }
    // Event Listeners
    ngOnInit() {
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == "1") {
            this.getAllPost();
        }
        this.firebaseLinkRoute();
        this.language = localStorage.language;
        this.viewInitFunctions();
    }
    ionViewDidEnter() {
        if (!localStorage.getItem('language')) {
            this.askForTour();
        }
        console.log('this.firstTimeLoad', this.firstTimeLoad);
        this.skip = localStorage.getItem('skip');
        this.catSelect = localStorage.getItem('catSelect');
        this.language = localStorage.getItem('language');
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
        this.notificationTapped();
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    viewInitFunctions() {
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.loading = false;
        if (localStorage.getItem('language')) {
            this.getAllPost();
        }
        if (localStorage.getItem('skip')) {
            this.skip = '1';
        }
        console.log("SKIPPPPPPPPPPPPPPPP", this.skip);
        this.navExtras = this._generalService.getExtras();
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == "1") {
            this.language = localStorage.getItem('language');
            this.catSelect = localStorage.getItem('catSelect');
        }
        this.fcmToken();
        this.checkforInternet();
    }
    askForTour() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Would you like to start the tour?',
                cssClass: 'alertCustomCss',
                buttons: [
                    {
                        text: 'Skip',
                        role: 'cancel',
                        handler: (blah) => {
                            this.loading = false;
                            this.skipTheTour = true;
                            localStorage.setItem('skip', '1');
                        }
                    }, {
                        text: 'Start',
                        handler: () => {
                            this.loading = false;
                            this.startTour = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    skipTour() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to skip the <strong>tour</strong>?',
                cssClass: 'alertCustomCss',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Skip',
                        handler: () => {
                            localStorage.setItem('skip', 'true');
                            localStorage.setItem('shareBlink', '1');
                            localStorage.setItem('catSelect', '1');
                            localStorage.setItem('firstLargePostClick', '1');
                            this.skip = localStorage.getItem('skip');
                            this.router.navigateByUrl('all-categories');
                            this.getAllPost();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //get all news - HOME PAGE ( FEEDS )
    getAllPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.newsArray = [];
            this.latestPost = [];
            localStorage.setItem('firstTimeLoaded', 'true');
            this.loading = true;
            this.language = localStorage.getItem('language');
            if (navigator.onLine) {
                this._newsService.getAllNews().subscribe((res) => {
                    this.firstTimeLoad = true;
                    this.newsArray = res;
                    this.latestPost = res[0];
                    console.log('this.latestPost', this.latestPost);
                    this.newsArray.splice(0, 1);
                    if (!localStorage.getItem('skip')) {
                    }
                    this.loading = false;
                    this.checkForRating();
                }, (err) => {
                    this.newsArray = localStorage.newsArray;
                });
            }
            else {
                this.newsArray = JSON.parse(localStorage.getItem('newsArray'));
                this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
                this.newsArray.splice(0, 1);
            }
        });
    }
    checkForRating() {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
            this.showRateModal = true;
        }
        else {
            this.showRateModal = false;
        }
    }
    //go to specific post when link click
    firebaseLinkRoute() {
        if (!_config__WEBPACK_IMPORTED_MODULE_3__["config"].isvisited && !_config__WEBPACK_IMPORTED_MODULE_3__["config"].counter) {
            this.firebaseDynamicLinks.onDynamicLink().subscribe((res) => {
                var postId = res.deepLink.split('?')[1].split('=')[1];
                console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1]);
                console.log('Is Visited:------------- 1', _config__WEBPACK_IMPORTED_MODULE_3__["config"].isvisited);
                this.router.navigate(['single-post/' + postId]);
            }, (error) => {
                console.log(error);
            });
        }
    }
    //check for internet
    checkforInternet() {
        const alertOnlineStatus = () => {
            if (navigator.onLine) {
                this.hide = false;
                // this.getAllPost();
            }
            else {
                this.hide = true;
                this._toastService.toastFunction('No internet connection', 'danger');
                // this.getAllPost();
            }
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    }
    //get categories
    getCategories() {
        // this.catLoading = true;
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._categoryService.getAll().subscribe((res) => {
                this.catLoading = false;
                this.categories = res;
                console.log("after", this.categories);
            }, (err) => {
                this.catLoading = false;
                this._toastService.toastFunction('Something went wrong while fetching category', 'danger');
            });
        }
        else {
            this.categories = JSON.parse(localStorage.getItem('categoryArray'));
        }
    }
    //change on subscription of category
    subscribedCategory(e) {
        console.log("Event e", e);
        if (e.cat === 1) {
            localStorage.setItem('catSelect', '1');
            localStorage.setItem('skip', '1');
            localStorage.setItem('language', this.language);
            this.catSelect = '1';
            this.getAllPost();
        }
        else {
            if (e.statusCode == 1) {
                this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
            }
            else if (e.statusCode == 0) {
                this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
            }
        }
    }
    //navigate to searchbar
    search() {
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/searchBar');
    }
    setFlagTrue() {
        localStorage.setItem('skip', '1');
    }
    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['/single-post/' + data.newsId]);
            if (data.wasTapped) {
                console.log('Received in background', data.wasTapped);
            }
            else {
                console.log('Received in foreground');
            }
        });
    }
    //select lang on first time app opens
    selectLang() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selected) {
                this.getAllPost();
                let lang = this.selected;
                localStorage.setItem('language', lang);
                this._generalService.setExtras(lang);
                this.language = lang;
                this._generalService.setExtras(this.language);
                this.fcm.getToken().then(token => {
                    localStorage.setItem('deviceToken', token);
                    setTimeout(() => {
                        if (localStorage.getItem('annonymousNotify')) {
                            this._userService.firstTimeUser(this.selected).subscribe((res) => {
                                // this.getCategories();
                                this._userService.serviceFunction();
                                localStorage.setItem('annonymousNotify', 'true');
                            }, (err) => {
                            });
                        }
                    }, 1000);
                });
                this.fcm.onTokenRefresh().subscribe(token => {
                    localStorage.setItem('deviceToken', token);
                });
            }
        });
    }
    //select lang on first time app opens
    selectLangSkip() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selected) {
                this.getCategories();
                localStorage.setItem('language', this.selected);
                localStorage.setItem('skip', '1');
                this.router.navigateByUrl('all-categories');
                this._generalService.setExtras(this.language);
                this.fcm.getToken().then(token => {
                    localStorage.setItem('deviceToken', token);
                    setTimeout(() => {
                        if (localStorage.getItem('annonymousNotify')) {
                            this._userService.firstTimeUser(this.selected).subscribe((res) => {
                                // this.getCategories();
                                this._userService.serviceFunction();
                                localStorage.setItem('annonymousNotify', 'true');
                            }, (err) => {
                            });
                        }
                    }, 1000);
                });
                this.fcm.onTokenRefresh().subscribe(token => {
                    localStorage.setItem('deviceToken', token);
                });
            }
        });
    }
    //set fcm token
    fcmToken() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
            }
            else {
            }
        });
    }
    //rate dialog
    rate() {
        localStorage.setItem('isRated', 'true');
        this.showRateModal = false;
        this.market.open('io.ionic.triviapost');
    }
    dismiss() {
        localStorage.setItem('isRated', 'true');
        this.showRateModal = false;
    }
    remindLater() {
        localStorage.setItem('isRated', 'pending');
        this.showRateModal = false;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__["Market"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_15__["GeneralService"] },
    { type: _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseDynamicLinks"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_14__["SuperTabs"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_14__["SuperTabs"])
], HomePage.prototype, "superTabs", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__["Market"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_general_service__WEBPACK_IMPORTED_MODULE_15__["GeneralService"], _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseDynamicLinks"], _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map