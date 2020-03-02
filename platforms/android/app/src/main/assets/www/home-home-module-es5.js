(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div no-border>\n  <div\n    class=\"settingsToolbar\"\n    *ngIf=\"(language || (language && skip == '1')) && catModalShow\"\n  >\n    <button float-left>\n      <ion-icon\n        name=\"settings\"\n        class=\"homeBack\"\n        routerLink=\"/settings\"\n        (click)=\"setFlagTrue()\"\n      ></ion-icon>\n    </button>\n    <span id=\"settingTitle\">\n      Trivia Post\n    </span>\n    <button float-right>\n      <ion-icon name=\"search\" class=\"searchIcon\" (click)=\"search()\"></ion-icon>\n    </button>\n  </div>\n</div>\n<div no-border>\n  <div *ngIf=\"!language\" class=\"settingsToolbar\">\n    <span id=\"settingTitle\" style=\"margin:0;width: 100%;\" *ngIf=\"!loading && !selected\">\n      Language\n    </span>\n    <span id=\"settingTitle\" style=\"margin:0;width: 100%;\" *ngIf=\"!loading && selected\">\n      {{languageStatic[selected]}}\n    </span>\n  </div>\n</div>\n<div *ngIf=\"!skip && !catModalShow && language\">\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/settings\"\n      float-left\n      (click)=\"backButton()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\"> {{catTitle[language]}}</span>\n    <button float-right routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!language && startTour && !loading\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p *ngIf=\"!selected\">Choose any language of your preference!</p>\n      <p *ngIf=\"selected\">{{languagePageHead[selected]}}</p>\n    </div>\n    <ion-row style=\"margin-top: 40%;\">\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <div\n          class=\"ripple_effect\"\n          *ngIf=\"i == 0\"\n          style=\"margin-top: 10px;\"\n        ></div>\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n        <div class=\"tourText tourTextModal\" *ngIf=\"i == 0 && !selected\" style=\"bottom: 96%;\">\n          Choose any language of your preference!\n        </div>\n        <div class=\"tourText tourTextModal\" *ngIf=\"i == 0 && selected\" style=\"bottom: 96%;\">\n          {{languagePageHead[selected]}}\n        </div>\n      </ion-col>\n      <div class=\"container\" *ngIf=\"selected\">\n        <input type=\"checkbox\" id=\"someID\" (change)=\"isChecked($event)\" />\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"!selected\">\n          By continuing, you accept the\n          <span class=\"redLink\"> \"Terms & Condition\"</span> &\n          <span class=\"redLink\"> \"Privacy Policy\" </span>\n        </label>\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"selected\">\n          {{acceptTermsPolicy[selected]}}\n          <span class=\"redLink\"> \"{{termsTitle[selected]}}\"</span> &\n          <span class=\"redLink\"> \"{{privacyTitle[selected]}}\" </span>\n        </label>\n      </div>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLang()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"!language && !loading && skipTheTour\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p *ngIf=\"!selected\">Choose any language of your preference!</p>\n      <p *ngIf=\"selected\">{{languagePageHead[selected]}}</p>\n    </div>\n    <ion-row style=\"margin-top: 40%;\">\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n      </ion-col>\n      <div class=\"container\" *ngIf=\"selected\">\n        <input type=\"checkbox\" id=\"someID\" (change)=\"isChecked($event)\" />\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"!selected\">\n          By continuing, you accept the\n          <span class=\"redLink\"> \"Terms & Condition\"</span> &\n          <span class=\"redLink\"> \"Privacy Policy\" </span>\n        </label>\n        <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"selected\">\n          {{acceptTermsPolicy[selected]}}\n          <span class=\"redLink\"> \"{{termsTitle[selected]}}\"</span> &\n          <span class=\"redLink\"> \"{{privacyTitle[selected]}}\" </span>\n        </label>\n      </div>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLangSkip()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content *ngIf=\"!skip && !catModalShow && language && categories\">\n  <ion-row *ngIf=\"categories\">\n    <ion-col size=\"6\" *ngFor=\"let category of categories;let i = index\" class=\"categoryTiles\">\n      <app-category-tiles\n        [category]=\"category\"\n        (onSubscribe)=\"subscribedCategory($event, isNotify)\"\n        [language]=\"language\"\n        [index]=\"i\"\n      ></app-category-tiles>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-content\n  *ngIf=\"[(latestPost && language) || (language && latestPost && skip == '1') || (skip == '1' && latestPost)] && !loading && language && catModalShow\"\n  [ngClass]=\"{'disableScroll': !skip}\"\n>\n  <!-- <div class=\"skipTour\" *ngIf=\"!skip\" (click)=\"skipTour()\">\n    <div class=\"tourText tourTextModal\">\n      {{tourSkip[language]}}\n    </div>\n    <div class=\"ripple_effect\"></div>\n    <span><img src=\"../../assets/images/skip.png\" alt=\"\" height=\"48px\"/></span>\n  </div> -->\n  <ion-row class=\"feeds\" *ngIf=\"latestPost && !loading\">\n    <app-large-post\n      [news]=\"latestPost\"\n      *ngIf=\"latestPost && !loading\"\n      [language]=\"language\"\n      [skip]=\"skip\"\n    ></app-large-post>\n    <span *ngFor=\"let news of newsArray\" class=\"newsTiles\">\n      <app-post-tiles\n        [news]=\"news\"\n        [language]=\"language\"\n        *ngIf=\"newsArray && !loading\"\n      ></app-post-tiles>\n    </span>\n  </ion-row>\n</ion-content>\n<div class=\"no-news-text\" *ngIf=\"isTextVisible\">\n  <span>{{text}}</span>\n</div>\n<ion-content\n  *ngIf=\"loading && firstTimeLoad != true\"\n  class=\"loadingContent\"\n></ion-content>\n<ion-content\n  *ngIf=\"loading && firstTimeLoad == true\"\n  class=\"simpleLoader\"\n></ion-content>\n<ion-content\n  *ngIf=\"language && catSelect == '0' && skip != '1' && catLoading\"\n  class=\"loadingContent\"\n>\n</ion-content>"

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

module.exports = "@charset \"UTF-8\";\nion-label {\n  font-size: 18.5px;\n}\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.contentPost {\n  text-align: left;\n}\n.no-news-text span {\n  font-size: 35px;\n}\n#loader-wrapper {\n  background: #fff !important;\n}\n.welcomeTo {\n  font-weight: 500;\n  font-size: 30px;\n}\n.appDesc {\n  font-size: 25px;\n}\n.ion-color-primary {\n  --ion-color-contrast: var(--main-app-color) !important;\n  --ion-color-base: #fff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast-rgb: var(\n    --ion-color-primary-contrast-rgb,\n    255,\n    255,\n    255\n  ) !important;\n  --ion-color-shade: #fff !important;\n  --ion-color-tint: #fff !important;\n}\n.active ion-label {\n  color: var(--main-app-color) !important;\n}\nion-label {\n  text-transform: none !important;\n}\n.categoryTiles {\n  padding-bottom: 0px;\n}\nselect {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.langSubmit {\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.langSubmit {\n  padding: 10px;\n  background-color: red;\n  color: #fff;\n  border-radius: 6px;\n}\n.languageSelect select {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n.langHead {\n  padding: 10px 20px;\n}\n.langHead img {\n  margin-right: 17px;\n  float: left;\n}\n.langHead p {\n  font-size: 16px;\n  margin: 0;\n}\nion-card {\n  pointer-events: all;\n  border-radius: 10px;\n  padding: 4vh 0;\n  text-align: center;\n  line-height: 5vh;\n  margin: 1vw 1vh;\n}\nion-card:focus {\n  background-color: #e41212 !important;\n  color: #fff;\n}\n.contButton {\n  display: none;\n  padding: 14px;\n  margin-left: 17px;\n  margin-right: 17px;\n  width: 92%;\n  border-radius: 10px;\n  color: #e41212 !important;\n  font-weight: bolder;\n}\n.active {\n  background-color: red;\n}\n.skipTour {\n  position: fixed;\n  bottom: 10px;\n  left: 15px;\n  z-index: 1;\n  background-color: #fff;\n  border-radius: 50%;\n}\n.skipTour img {\n  float: left;\n}\n.skipTour button {\n  padding: 10px;\n  background-color: #e41212 !important;\n  color: #fff;\n}\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n.loadingContent {\n  --background: none;\n  background: url('mainLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n.simpleLoader {\n  --background: none;\n  background: url('simpleLoader.gif') no-repeat left center;\n  background-size: cover;\n  background-position: center;\n}\n.tourText {\n  position: absolute;\n  z-index: 9999;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  bottom: 120%;\n  font-size: 17px;\n  color: #fff;\n  width: 50vw;\n}\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n.disableScroll {\n  --overflow: hidden;\n}\n.instructions {\n  text-align: center;\n  font-size: 20px;\n  margin: 15vh;\n}\n/* //////////////////////////////////////////////////////////////////////////////////////////////\n\t//   Default Modal Styles   //\n////////////////////////////////////////////////////////////////////////////////////////////// */\n/*   This is the background overlay   */\n.backgroundOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  opacity: 0.85;\n  filter: alpha(opacity=85);\n  -moz-opacity: 0.85;\n  z-index: 101;\n}\n/*   This is the Popup Window   */\n.delayedPopupWindow {\n  position: fixed;\n  width: 80%;\n  background-color: #efefef;\n  border: 2px solid #333;\n  z-index: 102;\n  padding: 10px 20px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 11px;\n}\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 77px;\n  height: 77px;\n  padding: 13px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n  padding-top: 5px;\n}\n.rateButtons {\n  float: right;\n}\n.delayedPopupWindow h5 {\n  margin-top: 50px;\n  text-align: center;\n  font-weight: bolder;\n  color: #e41212;\n}\n.delayedPopupWindow p {\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 38px;\n  padding: 0px 20px;\n}\n.delayedPopupWindow .ratingBack {\n  height: 248px;\n  right: 0;\n  float: right;\n  position: absolute;\n  bottom: 0;\n}\n#rateButton {\n  background: #e41212;\n  color: #fff;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n.rateButton {\n  text-align: center;\n  position: relative;\n  z-index: 11;\n  padding: 0 17px;\n}\nbutton#remindLater,\nbutton#noThanks {\n  background: none;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 10px;\n  border: 1px solid #e41212;\n  color: #e41212;\n}\nbutton#noThanks {\n  border: none;\n}\n.disableScroll {\n  --overflow: hidden;\n}\n.container {\n  margin: 15px;\n  background-color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  width: 100%;\n  border-radius: 10px;\n  color: #a0a0a0;\n}\n#someID {\n  display: none;\n}\n.checkbox-1 {\n  cursor: pointer;\n  font-size: 14px;\n  position: relative;\n  padding-left: 40px;\n  padding-top: 5px;\n}\n.checkbox-1:before {\n  position: absolute;\n  content: \"\";\n  width: 21px;\n  height: 21px;\n  border-radius: 4px;\n  background: #fff;\n  text-align: center;\n  left: 0;\n  top: 2px;\n  border: 1px solid #e41212;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.checkbox-1:after {\n  position: absolute;\n  content: \"✔\";\n  font-family: \"Dosis\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 14px;\n  text-align: center;\n  color: #e41212;\n  left: 3px;\n  top: 7px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#someID:checked + .checkbox-1:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\nspan.redLink {\n  color: #e41212 !important;\n  border-bottom: 2px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0FERUY7QUNBQTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBREdGO0FDQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FER0Y7QUNEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FESUY7QUNEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRElGO0FDREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURJRjtBQ0RBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURJRjtBQ0RBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FESUY7QUNEQTtFQUNFLGdCQUFBO0FESUY7QUNEQTtFQUNFLGVBQUE7QURJRjtBQ0NBO0VBQ0UsMkJBQUE7QURFRjtBQ0FBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FER0Y7QUNEQTtFQUNFLGVBQUE7QURJRjtBQ0RBO0VBQ0Usc0RBQUE7RUFDQSxpQ0FBQTtFQUNBLDJFQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQSxrQ0FBQTtFQUNBLGlDQUFBO0FESUY7QUNGQTtFQUNFLHVDQUFBO0FES0Y7QUNIQTtFQUNFLCtCQUFBO0FETUY7QUNKQTtFQUNFLG1CQUFBO0FET0Y7QUNMQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QURRRjtBQ05BO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBRFNGO0FDUEE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURVRjtBQ1BBO0VBQ0UscUJBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBRFNGO0FDTkE7RUFDRTtJQUNFLGtCQUFBO0VEU0Y7QUFDRjtBQ1pBO0VBQ0U7SUFDRSxrQkFBQTtFRFNGO0FBQ0Y7QUNOQTtFQUNFLGtCQUFBO0FEUUY7QUNMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRFFGO0FDTEE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBRFFGO0FDTkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEU0Y7QUNQQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBRFVGO0FDUkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FEV0Y7QUNUQTtFQUNFLHFCQUFBO0FEWUY7QUNUQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEWUY7QUNWQTtFQUNFLFdBQUE7QURhRjtBQ1hBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBRGNGO0FDWkE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FEZUY7QUNiQTs7RUFFRSxrQkFBQTtBRGdCRjtBQ2RBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QURpQkY7QUNmQTtFQUNFLGtCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FEa0JGO0FDZkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEa0JGO0FDaEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7QURtQkY7QUNqQkE7RUFDRSxrQkFBQTtBRG9CRjtBQ2hCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURtQkY7QUNoQkE7O2dHQUFBO0FBR0EsdUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEbUJGO0FDakJBLGlDQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxtQkFBQTtBRG9CRjtBQ2xCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QURxQkY7QUNuQkE7RUFDRSxZQUFBO0FEc0JGO0FDcEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRHVCRjtBQ3JCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUR3QkY7QUN0QkE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUR5QkY7QUN2QkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUQwQkY7QUN4QkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQyQkY7QUN6QkE7O0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FENEJGO0FDMUJBO0VBQ0UsWUFBQTtBRDZCRjtBQzNCQTtFQUNFLGtCQUFBO0FEOEJGO0FDMUJBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0dBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRDRCRjtBQ3pCQTtFQUNFLGFBQUE7QUQ0QkY7QUN6QkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDRCRjtBQ3pCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUQ0QkY7QUN6QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRDRCRjtBQ3pCQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUQ0QkY7QUN6QkE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FENEJGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTguNXB4O1xufVxuXG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZy5pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbiNsb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLndlbGNvbWVUbyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmFwcERlc2Mge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKFxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLFxuICAgIDI1NSxcbiAgICAyNTUsXG4gICAgMjU1XG4gICkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNhdGVnb3J5VGlsZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5zZWxlY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZ1N1Ym1pdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5sYW5nU3VibWl0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGFuZ3VhZ2VTZWxlY3Qgc2VsZWN0IHtcbiAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG59XG4ubGFuZ0hlYWQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5sYW5nSGVhZCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ0hlYWQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDR2aCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA1dmg7XG4gIG1hcmdpbjogMXZ3IDF2aDtcbn1cblxuaW9uLWNhcmQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udEJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIHdpZHRoOiA5MiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5za2lwVG91ciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNXB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5za2lwVG91ciBpbWcge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNraXBUb3VyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjMxMCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0OmJlZm9yZSxcbi5yaXBwbGVfZWZmZWN0OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbkxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNpbXBsZUxvYWRlciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3R0b206IDEyMCU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDE1dmg7XG59XG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gICBEZWZhdWx0IE1vZGFsIFN0eWxlcyAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4vKiAgIFRoaXMgaXMgdGhlIGJhY2tncm91bmQgb3ZlcmxheSAgICovXG4uYmFja2dyb3VuZE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjg1O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODUpO1xuICAtbW96LW9wYWNpdHk6IDAuODU7XG4gIHotaW5kZXg6IDEwMTtcbn1cblxuLyogICBUaGlzIGlzIHRoZSBQb3B1cCBXaW5kb3cgICAqL1xuLmRlbGF5ZWRQb3B1cFdpbmRvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzMzMztcbiAgei1pbmRleDogMTAyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xufVxuXG4uaW1nX2JvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3N3B4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4IDAgI2RkZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnJhdGVCdXR0b25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZGVsYXllZFBvcHVwV2luZG93IGg1IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogI2U0MTIxMjtcbn1cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uZGVsYXllZFBvcHVwV2luZG93IC5yYXRpbmdCYWNrIHtcbiAgaGVpZ2h0OiAyNDhweDtcbiAgcmlnaHQ6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbiNyYXRlQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2U0MTIxMjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yYXRlQnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDExO1xuICBwYWRkaW5nOiAwIDE3cHg7XG59XG5cbmJ1dHRvbiNyZW1pbmRMYXRlcixcbmJ1dHRvbiNub1RoYW5rcyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0MTIxMjtcbiAgY29sb3I6ICNlNDEyMTI7XG59XG5cbmJ1dHRvbiNub1RoYW5rcyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRpc2FibGVTY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuXG4jc29tZUlEIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94LTEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jaGVja2JveC0xOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQxMjEyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5jaGVja2JveC0xOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIuKclFwiO1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTQxMjEyO1xuICBsZWZ0OiAzcHg7XG4gIHRvcDogN3B4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbiNzb21lSUQ6Y2hlY2tlZCArIC5jaGVja2JveC0xOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuc3Bhbi5yZWRMaW5rIHtcbiAgY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xufSIsImlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTguNXB4O1xufVxuLnBvc3RfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNoYXJlLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW1nLmljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuaW1nLmJvb2ttYXJrIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi5uby1uZXdzLXRleHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50UG9zdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uby1uZXdzLXRleHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLy8gbG9hZGVyXG5cbiNsb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi53ZWxjb21lVG8ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uYXBwRGVzYyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLW1haW4tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsXG4gICAgMjU1LFxuICAgIDI1NSxcbiAgICAyNTVcbiAgKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnlUaWxlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5zZWxlY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxhbmdTdWJtaXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxhbmdTdWJtaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sYW5ndWFnZVNlbGVjdCBzZWxlY3Qge1xuICBib3JkZXI6IDVweCByZWQgc29saWQ7XG5cbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4ubGFuZ0hlYWQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5sYW5nSGVhZCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ0hlYWQgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNhcmQge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0dmggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNXZoO1xuICBtYXJnaW46IDF2dyAxdmg7XG59XG5pb24tY2FyZDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udEJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIHdpZHRoOiA5MiU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2tpcFRvdXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNraXBUb3VyIGltZyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnNraXBUb3VyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucmlwcGxlX2VmZmVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDM1LCAxNikgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuLnJpcHBsZV9lZmZlY3Q6YmVmb3JlLFxuLnJpcHBsZV9lZmZlY3Q6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFpbkxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5zaW1wbGVMb2FkZXIge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnRvdXJUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm90dG9tOiAxMjAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTB2dztcbn1cbi50b3VyVGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMTAlO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgI2U0MjMxMDtcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy9tb2RhbCBwb3B1cFxuLmluc3RydWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDE1dmg7XG59XG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gICBEZWZhdWx0IE1vZGFsIFN0eWxlcyAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4vKiAgIFRoaXMgaXMgdGhlIGJhY2tncm91bmQgb3ZlcmxheSAgICovXG4uYmFja2dyb3VuZE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjg1O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODUpO1xuICAtbW96LW9wYWNpdHk6IDAuODU7XG4gIHotaW5kZXg6IDEwMTtcbn1cbi8qICAgVGhpcyBpcyB0aGUgUG9wdXAgV2luZG93ICAgKi9cbi5kZWxheWVkUG9wdXBXaW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIHotaW5kZXg6IDEwMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cbi5pbWdfYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDc3cHg7XG4gIGhlaWdodDogNzdweDtcbiAgcGFkZGluZzogMTNweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnJhdGVCdXR0b25zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBoNSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNlNDEyMTI7XG59XG4uZGVsYXllZFBvcHVwV2luZG93IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG59XG4uZGVsYXllZFBvcHVwV2luZG93IC5yYXRpbmdCYWNrIHtcbiAgaGVpZ2h0OiAyNDhweDtcbiAgcmlnaHQ6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4jcmF0ZUJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNlNDEyMTI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJhdGVCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHBhZGRpbmc6IDAgMTdweDtcbn1cbmJ1dHRvbiNyZW1pbmRMYXRlcixcbmJ1dHRvbiNub1RoYW5rcyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0MTIxMjtcbiAgY29sb3I6ICNlNDEyMTI7XG59XG5idXR0b24jbm9UaGFua3Mge1xuICBib3JkZXI6IG5vbmU7XG59XG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy9jdXN0b20gY2hlY2tib3ggc3RhcnRzXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjYTBhMGEwO1xufVxuXG4jc29tZUlEIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoZWNrYm94LTEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5jaGVja2JveC0xOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQxMjEyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5jaGVja2JveC0xOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIuKclFwiO1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTQxMjEyO1xuICBsZWZ0OiAzcHg7XG4gIHRvcDogN3B4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbiNzb21lSUQ6Y2hlY2tlZCArIC5jaGVja2JveC0xOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi8vY3VzdG9tIGNoZWNrYm94IGVuZHNcbnNwYW4ucmVkTGluayB7XG4gIGNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbn0iXX0= */"

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
                this.loading = true;
                this.language = localStorage.getItem('language');
                if (navigator.onLine) {
                    this._newsService.getAllNews().subscribe(function (res) {
                        _this.firstTimeLoad = true;
                        _this.newsArray = res;
                        _this.latestPost = res[0];
                        console.log('this.latestPost', _this.latestPost);
                        _this.newsArray.splice(0, 1);
                        if (!localStorage.getItem('skip')) {
                        }
                        _this.loading = false;
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
                this.getAllPost();
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