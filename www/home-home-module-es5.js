(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div no-border>\n  <div\n    class=\"settingsToolbar\"\n    *ngIf=\"[(latestPost && language) || (language && latestPost && skip == '1') || (skip == '1' && latestPost)] && !loading && language && catModalShow\"\n  >\n    <button float-left>\n      <ion-icon\n        name=\"settings\"\n        class=\"homeBack\"\n        routerLink=\"/settings\"\n        (click)=\"setFlagTrue()\"\n      ></ion-icon>\n    </button>\n    <span id=\"settingTitle\">\n      Trivia Post\n    </span>\n    <button float-right>\n      <ion-icon name=\"search\" class=\"searchIcon\" (click)=\"search()\"></ion-icon>\n    </button>\n  </div>\n</div>\n<div no-border>\n  <div *ngIf=\"!language && !loading\" class=\"settingsToolbar\">\n    <span\n      id=\"settingTitle\"\n      style=\"margin:0;width: 100%;\"\n      *ngIf=\"!loading && !selected\"\n    >\n      Language\n    </span>\n    <span\n      id=\"settingTitle\"\n      style=\"margin:0;width: 100%;\"\n      *ngIf=\"!loading && selected\"\n    >\n      {{languageStatic[selected]}}\n    </span>\n  </div>\n</div>\n<div *ngIf=\"!skip && !catModalShow && language && !catLoading\">\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/settings\"\n      float-left\n      (click)=\"backButton()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\"> {{catTitle[language]}}</span>\n    <button float-right routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!language && startTour && !loading\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p *ngIf=\"!selected\">Choose your preferred language to continue!</p>\n      <p *ngIf=\"selected\">{{languagePageHead[selected]}}</p>\n    </div>\n    <ion-row style=\"margin-top: 40%;\">\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <div\n          class=\"ripple_effect\"\n          *ngIf=\"i == 0\"\n          style=\"margin-top: 10px;\"\n        ></div>\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n        <div\n          class=\"tourText tourTextModal\"\n          *ngIf=\"i == 0 && !selected\"\n          style=\"bottom: 96%;\"\n        >\n          Choose any language of your preference!\n        </div>\n        <div\n          class=\"tourText tourTextModal\"\n          *ngIf=\"i == 0 && selected\"\n          style=\"bottom: 96%;\"\n        >\n          {{languagePageHead[selected]}}\n        </div>\n      </ion-col>\n      <div class=\"container\" *ngIf=\"selected\">\n        <input type=\"checkbox\" id=\"someID\" (change)=\"isChecked($event)\" />\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"!selected\">\n          By continuing, you accept the\n          <span class=\"redLink\"> \"Terms & Condition\"</span> &\n          <span class=\"redLink\"> \"Privacy Policy\" </span>\n        </label>\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"selected\">\n          {{acceptTermsPolicy[selected]}}\n          <span class=\"redLink\"> \"{{termsTitle[selected]}}\"</span> &\n          <span class=\"redLink\"> \"{{privacyTitle[selected]}}\" </span>\n        </label>\n      </div>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLang()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"!language && !loading && skipTheTour\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p *ngIf=\"!selected\">Choose your preferred language to continue!</p>\n      <p *ngIf=\"selected\">{{languagePageHead[selected]}}</p>\n    </div>\n    <ion-row style=\"margin-top: 40%;\">\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n      </ion-col>\n      <div class=\"container\" *ngIf=\"selected\">\n        <input type=\"checkbox\" id=\"someID\" (change)=\"isChecked($event)\" />\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"!selected\">\n          By continuing, you accept the\n          <span class=\"redLink\"> \"Terms & Condition\"</span> &\n          <span class=\"redLink\"> \"Privacy Policy\" </span>\n        </label>\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"selected\">\n          {{acceptTermsPolicy[selected]}}\n          <span class=\"redLink\"> \"{{termsTitle[selected]}}\"</span> &\n          <span class=\"redLink\"> \"{{privacyTitle[selected]}}\" </span>\n        </label>\n      </div>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLangSkip()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"!skip && !catModalShow && language && categories && !catLoading\">\n  <ion-row *ngIf=\"categories\">\n    <ion-col\n      size=\"6\"\n      *ngFor=\"let category of categories;let i = index\"\n      class=\"categoryTiles\"\n    >\n      <app-category-tiles\n        [category]=\"category\"\n        (onSubscribe)=\"subscribedCategory($event, isNotify)\"\n        [language]=\"language\"\n        [index]=\"i\"\n      ></app-category-tiles>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-content\n  *ngIf=\"[(latestPost && language) || (language && latestPost && skip == '1') || (skip == '1' && latestPost)] && !loading && language && catModalShow\"\n  [ngClass]=\"{'disableScroll': !skip}\" class=\"newsFeedBlock\"\n>\n  <ion-row class=\"feeds\" style=\"min-width: 100%;\">\n    <app-large-post\n    style=\"min-width: 100%;color: red!important;\"\n      [news]=\"latestPost\"\n      [language]=\"language\"\n      [skip]=\"skip\"\n    ></app-large-post>\n    <span *ngFor=\"let news of newsArray\" class=\"newsTiles\">\n      <app-post-tiles\n        [news]=\"news\"\n        [language]=\"language\"\n      ></app-post-tiles>\n    </span>\n  </ion-row>\n</ion-content>\n<div class=\"no-news-text\" *ngIf=\"isTextVisible\">\n  <span>{{text}}</span>\n</div>\n<ion-content\n  *ngIf=\"loading && firstTimeLoad != true\"\n  class=\"loadingContent\"\n></ion-content>\n<ion-content\n  *ngIf=\"(loading && firstTimeLoad == true) || myloader\"\n  class=\"simpleLoader\"\n></ion-content>\n<ion-content\n  *ngIf=\"language && catSelect == '0' && skip != '1' && catLoading\"\n  class=\"loadingContent\"\n>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");
/* harmony import */ var _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../category-tiles/category-tiles.module */ "./src/app/category-tiles/category-tiles.module.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
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
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nion-label {\n  font-size: 18.5px;\n}\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.contentPost {\n  text-align: left;\n}\n.no-news-text span {\n  font-size: 35px;\n}\n#loader-wrapper {\n  background: #fff !important;\n}\n.welcomeTo {\n  font-weight: 500;\n  font-size: 30px;\n}\n.appDesc {\n  font-size: 25px;\n}\n.ion-color-primary {\n  --ion-color-contrast: var(--main-app-color) !important;\n  --ion-color-base: #fff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast-rgb: var(\n    --ion-color-primary-contrast-rgb,\n    255,\n    255,\n    255\n  ) !important;\n  --ion-color-shade: #fff !important;\n  --ion-color-tint: #fff !important;\n}\n.active ion-label {\n  color: var(--main-app-color) !important;\n}\nion-label {\n  text-transform: none !important;\n}\n.categoryTiles {\n  padding-bottom: 0px;\n}\nselect {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.langSubmit {\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.langSubmit {\n  padding: 10px;\n  background-color: red;\n  color: #fff;\n  border-radius: 6px;\n}\n.languageSelect select {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n.langHead {\n  padding: 10px 20px;\n}\n.langHead img {\n  margin-right: 17px;\n  float: left;\n}\n.langHead p {\n  font-size: 16px;\n  margin: 0;\n  margin-top: 10px;\n}\nion-card {\n  pointer-events: all;\n  border-radius: 10px;\n  padding: 4vh 0;\n  text-align: center;\n  line-height: 5vh;\n  margin: 1vw 1vh;\n}\nion-card:focus {\n  background-color: #e41212 !important;\n  color: #fff;\n}\n.contButton {\n  display: none;\n  padding: 14px;\n  margin-left: 17px;\n  margin-right: 17px;\n  width: 92%;\n  border-radius: 10px;\n  color: #e41212 !important;\n  font-weight: bolder;\n}\n.active {\n  background-color: red;\n}\n.skipTour {\n  position: fixed;\n  bottom: 10px;\n  left: 15px;\n  z-index: 1;\n  background-color: #fff;\n  border-radius: 50%;\n}\n.skipTour img {\n  float: left;\n}\n.skipTour button {\n  padding: 10px;\n  background-color: #e41212 !important;\n  color: #fff;\n}\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n.loadingContent {\n  --background: none;\n  background: url('mainLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n.simpleLoader {\n  --background: none;\n  background: url('simpleLoader.gif') no-repeat left center;\n  background-size: cover;\n  background-position: center;\n  z-index: 1111111;\n  position: absolute;\n}\n.tourText {\n  position: absolute;\n  z-index: 9999;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  bottom: 120%;\n  font-size: 17px;\n  color: #fff;\n  width: 50vw;\n}\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n.disableScroll {\n  --overflow: hidden;\n}\n.instructions {\n  text-align: center;\n  font-size: 20px;\n  margin: 15vh;\n}\n/* //////////////////////////////////////////////////////////////////////////////////////////////\n\t//   Default Modal Styles   //\n////////////////////////////////////////////////////////////////////////////////////////////// */\n/*   This is the background overlay   */\n.backgroundOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  opacity: 0.85;\n  filter: alpha(opacity=85);\n  -moz-opacity: 0.85;\n  z-index: 101;\n}\n/*   This is the Popup Window   */\n.delayedPopupWindow {\n  position: fixed;\n  width: 80%;\n  background-color: #efefef;\n  border: 2px solid #333;\n  z-index: 102;\n  padding: 10px 20px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 11px;\n}\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 77px;\n  height: 77px;\n  padding: 13px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n  padding-top: 5px;\n}\n.rateButtons {\n  float: right;\n}\n.delayedPopupWindow h5 {\n  margin-top: 50px;\n  text-align: center;\n  font-weight: bolder;\n  color: #e41212;\n}\n.delayedPopupWindow p {\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 38px;\n  padding: 0px 20px;\n}\n.delayedPopupWindow .ratingBack {\n  height: 248px;\n  right: 0;\n  float: right;\n  position: absolute;\n  bottom: 0;\n}\n#rateButton {\n  background: #e41212;\n  color: #fff;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n.rateButton {\n  text-align: center;\n  position: relative;\n  z-index: 11;\n  padding: 0 17px;\n}\nbutton#remindLater,\nbutton#noThanks {\n  background: none;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 10px;\n  border: 1px solid #e41212;\n  color: #e41212;\n}\nbutton#noThanks {\n  border: none;\n}\n.disableScroll {\n  --overflow: hidden;\n}\n.container {\n  margin: 15px;\n  background-color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  width: 100%;\n  border-radius: 10px;\n  color: #a0a0a0;\n}\n#someID {\n  display: none;\n}\n.checkbox-1 {\n  cursor: pointer;\n  font-size: 14px;\n  position: relative;\n  padding-left: 40px;\n  padding-top: 5px;\n}\n.checkbox-1:before {\n  position: absolute;\n  content: \"\";\n  width: 21px;\n  height: 21px;\n  border-radius: 4px;\n  background: #fff;\n  text-align: center;\n  left: 0;\n  top: 2px;\n  border: 1px solid #e41212;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.checkbox-1:after {\n  position: absolute;\n  content: \"✔\";\n  font-family: \"Dosis\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 14px;\n  text-align: center;\n  color: #e41212;\n  left: 3px;\n  top: 7px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#someID:checked + .checkbox-1:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\nspan.redLink {\n  color: #e41212 !important;\n  border-bottom: 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0FERUY7QUNBQTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBREdGO0FDQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FER0Y7QUNEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FESUY7QUNEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRElGO0FDREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURJRjtBQ0RBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURJRjtBQ0RBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FESUY7QUNEQTtFQUNFLGdCQUFBO0FESUY7QUNEQTtFQUNFLGVBQUE7QURJRjtBQ0NBO0VBQ0UsMkJBQUE7QURFRjtBQ0FBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FER0Y7QUNEQTtFQUNFLGVBQUE7QURJRjtBQ0RBO0VBQ0Usc0RBQUE7RUFDQSxpQ0FBQTtFQUNBLDJFQUFBO0VBQ0E7Ozs7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LG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRDRCRjtBQ3pCQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUQ0QkY7QUN6QkE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FENEJGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTguNXB4O1xufVxuXG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZy5pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbiNsb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVUbyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmFwcERlc2Mge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKFxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLFxuICAgIDI1NSxcbiAgICAyNTUsXG4gICAgMjU1XG4gICkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5VGlsZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZ1N1Ym1pdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5sYW5nU3VibWl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGFuZ3VhZ2VTZWxlY3Qgc2VsZWN0IHtcbiAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG59XG4ubGFuZ0hlYWQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5sYW5nSGVhZCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ0hlYWQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDR2aCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbjogMXZ3IDF2aDtcbn1cblxuaW9uLWNhcmQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udEJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIHdpZHRoOiA5MiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5za2lwVG91ciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5za2lwVG91ciBpbWcge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNraXBUb3VyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjMxMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0OmJlZm9yZSxcbi5yaXBwbGVfZWZmZWN0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbkxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNpbXBsZUxvYWRlciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiAxMTExMTExO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b3VyVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvdHRvbTogMTIwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi50b3VyVGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMTAlO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNhYmxlU2Nyb2xsIHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTV2aDtcbn1cblxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyAgIERlZmF1bHQgTW9kYWwgU3R5bGVzICAgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbi8qICAgVGhpcyBpcyB0aGUgYmFja2dyb3VuZCBvdmVybGF5ICAgKi9cbi5iYWNrZ3JvdW5kT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT04NSk7XG4gIC1tb3otb3BhY2l0eTogMC44NTtcbiAgei1pbmRleDogMTAxO1xufVxuXG4vKiAgIFRoaXMgaXMgdGhlIFBvcHVwIFdpbmRvdyAgICovXG4uZGVsYXllZFBvcHVwV2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICB6LWluZGV4OiAxMDI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbi5pbWdfYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDc3cHg7XG4gIGhlaWdodDogNzdweDtcbiAgcGFkZGluZzogMTNweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ucmF0ZUJ1dHRvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kZWxheWVkUG9wdXBXaW5kb3cgaDUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZTQxMjEyO1xufVxuXG4uZGVsYXllZFBvcHVwV2luZG93IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG5cbi5kZWxheWVkUG9wdXBXaW5kb3cgLnJhdGluZ0JhY2sge1xuICBoZWlnaHQ6IDI0OHB4O1xuICByaWdodDogMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuI3JhdGVCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZTQxMjEyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJhdGVCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHBhZGRpbmc6IDAgMTdweDtcbn1cblxuYnV0dG9uI3JlbWluZExhdGVyLFxuYnV0dG9uI25vVGhhbmtzIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQxMjEyO1xuICBjb2xvcjogI2U0MTIxMjtcbn1cblxuYnV0dG9uI25vVGhhbmtzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbiNzb21lSUQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2hlY2tib3gtMSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNoZWNrYm94LTE6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgdG9wOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNDEyMTI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNoZWNrYm94LTE6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlNDEyMTI7XG4gIGxlZnQ6IDNweDtcbiAgdG9wOiA3cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuI3NvbWVJRDpjaGVja2VkICsgLmNoZWNrYm94LTE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5zcGFuLnJlZExpbmsge1xuICBjb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59IiwiaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOC41cHg7XG59XG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5pbWcuaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG5pbWcuYm9va21hcmsge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgei1pbmRleDogMTExMTExMTtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm5vLW5ld3MtdGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRQb3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4vLyBsb2FkZXJcblxuI2xvYWRlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLndlbGNvbWVUbyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5hcHBEZXNjIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcihcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYixcbiAgICAyNTUsXG4gICAgMjU1LFxuICAgIDI1NVxuICApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5hY3RpdmUgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jYXRlZ29yeVRpbGVzIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbnNlbGVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubGFuZ1N1Ym1pdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubGFuZ1N1Ym1pdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxhbmd1YWdlU2VsZWN0IHNlbGVjdCB7XG4gIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcblxuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5sYW5nSGVhZCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmxhbmdIZWFkIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sYW5nSGVhZCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDR2aCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbjogMXZ3IDF2aDtcbn1cbmlvbi1jYXJkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250QnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgd2lkdGg6IDkyJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5za2lwVG91ciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc2tpcFRvdXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2tpcFRvdXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMzUsIDE2KSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ucmlwcGxlX2VmZmVjdDpiZWZvcmUsXG4ucmlwcGxlX2VmZmVjdDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5sb2FkaW5nQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYWluTG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnNpbXBsZUxvYWRlciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiAxMTExMTExO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b3VyVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvdHRvbTogMTIwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDUwdnc7XG59XG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmRpc2FibGVTY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vbW9kYWwgcG9wdXBcbi5pbnN0cnVjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAxNXZoO1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vICAgRGVmYXVsdCBNb2RhbCBTdHlsZXMgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuLyogICBUaGlzIGlzIHRoZSBiYWNrZ3JvdW5kIG92ZXJsYXkgICAqL1xuLmJhY2tncm91bmRPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgb3BhY2l0eTogMC44NTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTg1KTtcbiAgLW1vei1vcGFjaXR5OiAwLjg1O1xuICB6LWluZGV4OiAxMDE7XG59XG4vKiAgIFRoaXMgaXMgdGhlIFBvcHVwIFdpbmRvdyAgICovXG4uZGVsYXllZFBvcHVwV2luZG93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICB6LWluZGV4OiAxMDI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG59XG4uaW1nX2JvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3N3B4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDAgI2RkZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5yYXRlQnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5kZWxheWVkUG9wdXBXaW5kb3cgaDUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZTQxMjEyO1xufVxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuLmRlbGF5ZWRQb3B1cFdpbmRvdyAucmF0aW5nQmFjayB7XG4gIGhlaWdodDogMjQ4cHg7XG4gIHJpZ2h0OiAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuI3JhdGVCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZTQxMjEyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yYXRlQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDExO1xuICBwYWRkaW5nOiAwIDE3cHg7XG59XG5idXR0b24jcmVtaW5kTGF0ZXIsXG5idXR0b24jbm9UaGFua3Mge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNDEyMTI7XG4gIGNvbG9yOiAjZTQxMjEyO1xufVxuYnV0dG9uI25vVGhhbmtzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRpc2FibGVTY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vY3VzdG9tIGNoZWNrYm94IHN0YXJ0c1xuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2EwYTBhMDtcbn1cblxuI3NvbWVJRCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveC0xIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uY2hlY2tib3gtMTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiAwO1xuICB0b3A6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0MTIxMjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uY2hlY2tib3gtMTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCLinJRcIjtcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2U0MTIxMjtcbiAgbGVmdDogM3B4O1xuICB0b3A6IDdweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4jc29tZUlEOmNoZWNrZWQgKyAuY2hlY2tib3gtMTphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4vL2N1c3RvbSBjaGVja2JveCBlbmRzXG5zcGFuLnJlZExpbmsge1xuICBjb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _changeLang__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../changeLang */ "./src/app/changeLang.ts");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");




















var HomePage = /** @class */ (function () {
    function HomePage(market, alertController, _generalService, firebaseDynamicLinks, _toastService, _userService, screenOrientation, platform, fcm, _newsService, _categoryService, router, keyboard) {
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
        this.privacyTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["privacyTitle"];
        this.termsTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["termsTitle"];
        this.languageStatic = _changeLang__WEBPACK_IMPORTED_MODULE_16__["language"];
        this.catTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["catTitle"];
        this.rateNow = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateNowButton"];
        this.acceptTermsPolicy = _changeLang__WEBPACK_IMPORTED_MODULE_16__["acceptTermsPolicy"];
        this.rateLater = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateRemindButton"];
        this.rateNoThanks = _changeLang__WEBPACK_IMPORTED_MODULE_16__["rateNoThanksButton"];
        this.tourReadPost = _changeLang__WEBPACK_IMPORTED_MODULE_16__["tourReadPost"];
        this.modalBookmarkTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalBookmarkTitle"];
        this.modalBookmarkText = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalBookmarkText"];
        this.modalNotificationTitle = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalNotificationTitle"];
        this.modalNotificationText = _changeLang__WEBPACK_IMPORTED_MODULE_16__["modalNotificationText"];
        this.proceedTour = _changeLang__WEBPACK_IMPORTED_MODULE_16__["proceedTour"];
        this.languagePageHead = _changeLang__WEBPACK_IMPORTED_MODULE_16__["languagePageHead"];
        if (!localStorage.getItem('skip')) {
            $('body').addClass('tourBackDrop');
        }
        else {
            $('body').addClass('notfound');
        }
    }
    // Event Listeners
    HomePage.prototype.ngOnInit = function () {
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == "1") {
            this.getAllPost();
        }
        this.firebaseLinkRoute();
        this.language = localStorage.language;
        this.viewInitFunctions();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        if (!localStorage.getItem('language')) {
            this.askForTour();
        }
        console.log('this.firstTimeLoad', this.firstTimeLoad);
        this.skip = localStorage.getItem('skip');
        this.catSelect = localStorage.getItem('catSelect');
        this.language = localStorage.getItem('language');
        this.subscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
        this.notificationTapped();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    HomePage.prototype.viewInitFunctions = function () {
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
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.catModalShow = localStorage.getItem('catModal');
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
    };
    HomePage.prototype.askForTour = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirm!',
                                message: 'Would you like to start the tour?',
                                cssClass: 'alertCustomCss',
                                buttons: [
                                    {
                                        text: 'Skip',
                                        role: 'cancel',
                                        handler: function (blah) {
                                            _this.loading = false;
                                            _this.skipTheTour = true;
                                            _this.skip = '1';
                                            localStorage.setItem('skip', '1');
                                            // localStorage.setItem('catModalShow', '1')
                                            // localStorage.setItem('bookmarkFlag', '1')
                                            // localStorage.setItem('shareFlag', '1')
                                            localStorage.setItem('firstLargePostClick', '1');
                                            localStorage.setItem('catModal', '1');
                                            _this.catModalShow = '1';
                                        }
                                    }, {
                                        text: 'Start',
                                        handler: function () {
                                            _this.loading = false;
                                            _this.startTour = true;
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.skipTour = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                        localStorage.setItem('skip', 'true');
                                        localStorage.setItem('shareBlink', '1');
                                        localStorage.setItem('catSelect', '1');
                                        localStorage.setItem('firstLargePostClick', '1');
                                        _this.skip = localStorage.getItem('skip');
                                        _this.router.navigateByUrl('all-categories');
                                        _this.getAllPost();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //get all news - HOME PAGE ( FEEDS )
    HomePage.prototype.getAllPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.newsArray = [];
                this.latestPost = [];
                localStorage.setItem('firstTimeLoaded', 'true');
                this.firstTimeLoad = true;
                this.loading = true;
                this.language = localStorage.getItem('language');
                if (navigator.onLine) {
                    this._newsService.getAllNews().subscribe(function (res) {
                        _this.loading = false;
                        _this.newsArray = res;
                        _this.latestPost = res[0];
                        console.log('this.latestPost', _this.latestPost);
                        _this.newsArray.splice(0, 1);
                        if (!localStorage.getItem('skip')) {
                        }
                        $('.newsFeedBlock').hide();
                        _this.myloader = true;
                        setTimeout(function () {
                            $('.newsFeedBlock').show();
                            _this.myloader = false;
                        }, 2000);
                        _this.checkForRating();
                    }, function (err) {
                        _this.newsArray = localStorage.newsArray;
                    });
                }
                else {
                    this.newsArray = JSON.parse(localStorage.getItem('newsArray'));
                    this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
                    this.newsArray.splice(0, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.checkForRating = function () {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
            this.showRateModal = true;
        }
        else {
            this.showRateModal = false;
        }
    };
    //go to specific post when link click
    HomePage.prototype.firebaseLinkRoute = function () {
        var _this = this;
        if (!_config__WEBPACK_IMPORTED_MODULE_3__["config"].isvisited && !_config__WEBPACK_IMPORTED_MODULE_3__["config"].counter) {
            this.firebaseDynamicLinks.onDynamicLink().subscribe(function (res) {
                var postId = res.deepLink.split('?')[1].split('=')[1];
                console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1]);
                console.log('Is Visited:------------- 1', _config__WEBPACK_IMPORTED_MODULE_3__["config"].isvisited);
                _this.router.navigate(['single-post/' + postId]);
            }, function (error) {
                console.log(error);
            });
        }
    };
    //check for internet
    HomePage.prototype.checkforInternet = function () {
        var _this = this;
        var alertOnlineStatus = function () {
            if (navigator.onLine) {
                _this.hide = false;
                // this.getAllPost();
            }
            else {
                _this.hide = true;
                _this._toastService.toastFunction('No internet connection', 'danger');
                // this.getAllPost();
            }
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    };
    //get categories
    HomePage.prototype.getCategories = function () {
        var _this = this;
        // this.catLoading = true;
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._categoryService.getAll().subscribe(function (res) {
                _this.catLoading = false;
                _this.categories = res;
                console.log("after", _this.categories);
            }, function (err) {
                _this.catLoading = false;
                _this._toastService.toastFunction('Something went wrong while fetching category', 'danger');
            });
        }
        else {
            this.categories = JSON.parse(localStorage.getItem('categoryArray'));
        }
    };
    //change on subscription of category
    HomePage.prototype.subscribedCategory = function (e) {
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
                this.categories.find(function (o) { return o.categoryId === e.catId; }).isNotify = true;
            }
            else if (e.statusCode == 0) {
                this.categories.find(function (o) { return o.categoryId === e.catId; }).isNotify = false;
            }
        }
    };
    //navigate to searchbar
    HomePage.prototype.search = function () {
        localStorage.setItem('skip', '1');
        this.router.navigateByUrl('/searchBar');
    };
    HomePage.prototype.setFlagTrue = function () {
        localStorage.setItem('skip', '1');
    };
    // Notification and utility
    HomePage.prototype.notificationTapped = function () {
        var _this = this;
        this.fcm.onNotification().subscribe(function (data) {
            _this.router.navigate(['/single-post/' + data.newsId]);
            if (data.wasTapped) {
                console.log('Received in background', data.wasTapped);
            }
            else {
                console.log('Received in foreground');
            }
        });
    };
    //check event for terms and cond.
    HomePage.prototype.isChecked = function (e) {
        var _this = this;
        if (e.target.checked) {
            if (!this.selected) {
                $('#someID').attr('checked', false);
                this._toastService.toastFunction('Please Select any Language to continue', '');
            }
            else {
                setTimeout(function () {
                    _this.selectLang();
                }, 1000);
            }
        }
        // if(this.selected){
        //     this.isTermsAndCond = e.target.checked;
        // }
    };
    //select lang on first time app opens
    HomePage.prototype.selectLang = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lang;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // if (this.selected && this.isTermsAndCond) {
                // this.getAllPost();
                this.getCategories();
                lang = this.selected;
                localStorage.setItem('language', lang);
                this._generalService.setExtras(lang);
                this.language = lang;
                this.catModal = true;
                this._generalService.setExtras(this.language);
                this.fcm.getToken().then(function (token) {
                    localStorage.setItem('deviceToken', token);
                    setTimeout(function () {
                        if (localStorage.getItem('annonymousNotify')) {
                            _this._userService.firstTimeUser(_this.selected).subscribe(function (res) {
                                // this.getCategories();
                                _this._userService.serviceFunction();
                                localStorage.setItem('annonymousNotify', 'true');
                            }, function (err) {
                            });
                        }
                    }, 1000);
                });
                this.fcm.onTokenRefresh().subscribe(function (token) {
                    localStorage.setItem('deviceToken', token);
                });
                return [2 /*return*/];
            });
        });
    };
    //select lang on first time app opens
    HomePage.prototype.selectLangSkip = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.selected) {
                    this.getCategories();
                    localStorage.setItem('language', this.selected);
                    localStorage.setItem('skip', '1');
                    this.router.navigateByUrl('all-categories');
                    this._generalService.setExtras(this.language);
                    this.fcm.getToken().then(function (token) {
                        localStorage.setItem('deviceToken', token);
                        setTimeout(function () {
                            if (localStorage.getItem('annonymousNotify')) {
                                _this._userService.firstTimeUser(_this.selected).subscribe(function (res) {
                                    // this.getCategories();
                                    _this._userService.serviceFunction();
                                    localStorage.setItem('annonymousNotify', 'true');
                                }, function (err) {
                                });
                            }
                        }, 1000);
                    });
                    this.fcm.onTokenRefresh().subscribe(function (token) {
                        localStorage.setItem('deviceToken', token);
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    //set fcm token
    HomePage.prototype.fcmToken = function () {
        var _this = this;
        this.fcm.onNotification().subscribe(function (data) {
            _this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
            }
            else {
            }
        });
    };
    //rate dialog
    HomePage.prototype.rate = function () {
        localStorage.setItem('isRated', 'true');
        this.showRateModal = false;
        this.market.open('io.ionic.triviapost');
    };
    HomePage.prototype.dismiss = function () {
        localStorage.setItem('isRated', 'true');
        this.showRateModal = false;
    };
    HomePage.prototype.remindLater = function () {
        localStorage.setItem('isRated', 'pending');
        this.showRateModal = false;
    };
    HomePage.ctorParameters = function () { return [
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
    ]; };
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
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map