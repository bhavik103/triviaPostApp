(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div no-border class=\"triviaHeader\" *ngIf=\"language && newsArray && latestPost\">\n    <div class=\"settingsToolbar\">\n        <button float-left>\n            <ion-menu-button></ion-menu-button>\n        </button>\n        <span id=\"settingTitle\">\n            Trivia Post\n        </span>\n        <button float-right>\n            <ion-icon name=\"search\" class=\"searchIcon\" (click)=\"search()\"></ion-icon>\n        </button>\n        <button float-left>\n            <ion-icon name=\"settings\" class=\"homeBack\" (click)=\"settings()\"></ion-icon>\n        </button>\n    </div>\n</div>\n<div no-border *ngIf=\"!language && !loading\">\n    <div class=\"settingsToolbar\">\n        <span id=\"settingTitle\" style=\"margin:0;width: 100%;\" *ngIf=\"!loading && !selected\">\n            Language\n        </span>\n        <span id=\"settingTitle\" style=\"margin:0;width: 100%;\" *ngIf=\"!loading && selected\">\n            {{languageStatic[selected]}}\n        </span>\n    </div>\n</div>\n\n<ion-content *ngIf=\"!language && !loading && startTour\">\n    <div class=\"languageSelect\"\n        style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\">\n        <div class=\"langHead\">\n            <img src=\"assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n            <p *ngIf=\"!selected\">Choose your preferred language to continue!</p>\n            <p *ngIf=\"selected\">{{languagePageHead[selected]}}</p>\n        </div>\n        <ion-row style=\"margin-top: 27%;\">\n            <ion-col size=\"6\" *ngFor=\"let lang of languageList;let i = index\" class=\"langCol\">\n                <div class=\"ripple_effect\" *ngIf=\"i == 0 && !selected\" style=\"margin-top: 10px;\"></div>\n                <ion-card tabindex=\"{{i}}\" [style.background]=\"selected==lang.slug?'red':'white'\"\n                    [style.color]=\"selected==lang.slug?'white':'black'\" class=\"divs\"\n                    (click)=\"selected=lang.slug;selectLangDiv()\">\n                    {{lang.lang}}\n                </ion-card>\n                <div class=\"tourText tourTextModal\" *ngIf=\"i == 0 && !selected\" style=\"bottom: 96%;\">\n                    Choose any language of your preference!\n                </div>\n            </ion-col>\n            <div class=\"container\">\n                <input type=\"checkbox\" id=\"someID\" (change)=\"isChecked($event)\" />\n                <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"!selected\">\n                    By continuing, you accept the\n                    <span class=\"redLink\"> \"Terms & Condition\"</span> and\n                    <span class=\"redLink\"> \"Privacy Policy\" </span>\n                </label>\n                <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"selected\">\n                    {{acceptTermsPolicy[selected]}}\n                    <span class=\"redLink\"> \"{{termsTitle[selected]}}\"</span>\n                    {{andText[selected]}}\n                    <span class=\"redLink\"> \"{{privacyTitle[selected]}}\" </span>\n                </label>\n            </div>\n        </ion-row>\n        <button class=\"contButton\" (click)=\"selectLang()\">Continue</button>\n    </div>\n</ion-content>\n<ion-content class=\"skipLanguage\" *ngIf=\"!language\">\n    <div class=\"languageSelect\"\n        style=\"height: calc(100vh - 54px);background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\">\n        <div class=\"langHead\">\n            <img src=\"assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n            <p *ngIf=\"!selected\">Choose your preferred language to continue!</p>\n            <p *ngIf=\"selected\">{{languagePageHead[selected]}}</p>\n        </div>\n        <ion-row style=\"margin-top: 27%;\">\n            <ion-col size=\"6\" *ngFor=\"let lang of languageList;let i = index\" class=\"langCol\">\n                <ion-card tabindex=\"{{i}}\" [style.background]=\"selected==lang.slug?'red':'white'\"\n                    [style.color]=\"selected==lang.slug?'white':'black'\" class=\"divs\"\n                    (click)=\"selected=lang.slug;selectLangDiv()\">\n                    {{lang.lang}}\n                </ion-card>\n                <div class=\"tourText tourTextModal\" *ngIf=\"i == 0 && !selected\" style=\"bottom: 96%;\">\n                    Choose any language of your preference!\n                </div>\n            </ion-col>\n            <div class=\"container\">\n                <input type=\"checkbox\" id=\"someID\" (change)=\"isChecked($event)\" />\n                <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"!selected\">\n                    By continuing, you accept the\n                    <span class=\"redLink\"> \"Terms & Condition\"</span> and\n                    <span class=\"redLink\"> \"Privacy Policy\" </span>\n                </label>\n                <label for=\"someID\" class=\"checkbox-1\" *ngIf=\"selected\">\n                    {{acceptTermsPolicy[selected]}}\n                    <span class=\"redLink\"> \"{{termsTitle[selected]}}\"</span>\n                    {{andText[selected]}}\n                    <span class=\"redLink\"> \"{{privacyTitle[selected]}}\" </span>\n                </label>\n            </div>\n        </ion-row>\n        <button class=\"contButton\" (click)=\"selectLangSkip()\">Continue</button>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"language\" class=\"\">\n    <ion-row class=\"\" style=\"min-width: 100%;\" *ngIf=\"latestPost && newsArray.length\">\n        <app-large-post [news]=\"latestPost\" [language]=\"language\" [skip]=\"skip\">\n        </app-large-post>\n        <span *ngFor=\"let news of newsArray;let i = index\" class=\"newsTiles\">\n            <app-post-tiles [news]=\"news\" [language]=\"language\" [index]=\"i\"></app-post-tiles>\n        </span>\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n            <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more posts...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ion-row>\n    <span class=\"loadingContent\" *ngIf=\"smallLoading\">\n        <img src=\"assets/images/simpleLoader.gif\" alt=\"\" class=\"smallLoading\" />\n    </span>\n</ion-content>\n<!-- <ion-content class=\"loadingContent\" *ngIf=\"smallLoading\">\n    <img src=\"assets/images/simpleLoader.gif\" alt=\"\" class=\"smallLoading\" />\n</ion-content> -->\n<div class=\"no-news-text\" *ngIf=\"isTextVisible\">\n    <span>{{text}}</span>\n</div>\n<ion-content class=\"loadingContent tourModal\" *ngIf=\"!skip\" [ngClass]=\"{'showDifferentLoader': showTourConfirm}\">\n    <div id=\"bkgOverlay\" class=\"backgroundOverlay\"></div>\n\n    <div id=\"delayedPopup\" class=\"delayedPopupWindow confirmTourPopup\">\n        <div class=\"img_border\">\n            <img src=\"assets/images/book.png\" alt=\"\" />\n        </div>\n        <h5>Welcome</h5>\n        <p class=\"tourConfirmText\">\n            Would you like to start the tour?\n        </p>\n        <div class=\"rateButton\">\n            <ion-row>\n                <ion-col size=\"12\" (click)=\"startTourFunction()\">\n                    <button id=\"rateButton\" class=\"tourButton\">Start</button>\n                </ion-col>\n                <ion-col size=\"12\" (click)=\"skipTourFunction()\">\n                    <button id=\"remindLater\" class=\"tourButton\">Skip</button>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class=\"otherButton\"></div>\n        <img src=\"assets/images/ratingBackground.png\" alt=\"\" class=\"ratingBack\" />\n    </div>\n</ion-content>"

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

module.exports = "@charset \"UTF-8\";\nion-label {\n  font-size: 18.5px;\n}\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.contentPost {\n  text-align: left;\n}\n.no-news-text span {\n  font-size: 35px;\n}\n#loader-wrapper {\n  background: #fff !important;\n}\n.welcomeTo {\n  font-weight: 500;\n  font-size: 30px;\n}\n.appDesc {\n  font-size: 25px;\n}\n.ion-color-primary {\n  --ion-color-contrast: var(--main-app-color) !important;\n  --ion-color-base: #fff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast-rgb: var( --ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: #fff !important;\n  --ion-color-tint: #fff !important;\n}\n.active ion-label {\n  color: var(--main-app-color) !important;\n}\nion-label {\n  text-transform: none !important;\n}\n.categoryTiles {\n  padding-bottom: 0px;\n}\nselect {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.langSubmit {\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.langSubmit {\n  padding: 10px;\n  background-color: red;\n  color: #fff;\n  border-radius: 6px;\n}\n.languageSelect select {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n.langHead {\n  padding: 10px 20px;\n}\n.langHead img {\n  margin-right: 17px;\n  float: left;\n}\n.langHead p {\n  font-size: 16px;\n  margin: 0;\n  margin-top: 10px;\n}\nion-card {\n  pointer-events: all;\n  border-radius: 10px;\n  padding: 4vh 0;\n  text-align: center;\n  line-height: 5vh;\n  margin: 1vw 1vh;\n}\nion-card:focus {\n  background-color: #e41212 !important;\n  color: #fff;\n}\n.contButton {\n  display: none;\n  padding: 14px;\n  margin-left: 17px;\n  margin-right: 17px;\n  width: 92%;\n  border-radius: 10px;\n  color: #e41212 !important;\n  font-weight: bolder;\n}\n.active {\n  background-color: red;\n}\n.skipTour {\n  position: fixed;\n  bottom: 10px;\n  left: 15px;\n  z-index: 1;\n  background-color: #fff;\n  border-radius: 50%;\n}\n.skipTour img {\n  float: left;\n}\n.skipTour button {\n  padding: 10px;\n  background-color: #e41212 !important;\n  color: #fff;\n}\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n.loadingContent {\n  --background: none;\n  background: url('simpleLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n.simpleLoader {\n  --background: none;\n  background: url('simpleLoader.gif') no-repeat left center;\n  background-size: cover;\n  background-position: center;\n  z-index: 1111111;\n}\n.tourText {\n  position: absolute;\n  z-index: 9999;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  bottom: 120%;\n  font-size: 17px;\n  color: #fff;\n  width: 50vw;\n}\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 10%;\n  border-top: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n.disableScroll {\n  --overflow: hidden;\n}\n.instructions {\n  text-align: center;\n  font-size: 20px;\n  margin: 15vh;\n}\n/* //////////////////////////////////////////////////////////////////////////////////////////////\n\t//   Default Modal Styles   //\n////////////////////////////////////////////////////////////////////////////////////////////// */\n/*   This is the background overlay   */\n.backgroundOverlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #000000;\n  opacity: 0.3;\n  -moz-opacity: 0.3;\n  z-index: 101;\n}\n/*   This is the Popup Window   */\n.delayedPopupWindow {\n  position: fixed;\n  width: 80%;\n  background-color: #efefef;\n  border: 2px solid #333;\n  z-index: 102;\n  padding: 10px 20px;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 11px;\n}\n.img_border {\n  position: absolute;\n  border: 1px solid #fff;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: auto;\n  width: 77px;\n  height: 77px;\n  padding: 13px;\n  top: -10%;\n  left: 0;\n  right: 0;\n  box-shadow: 2px 2px 3px 0 #ddd;\n  padding-top: 5px;\n}\n.img_border img {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.rateButtons {\n  float: right;\n}\n.delayedPopupWindow h5 {\n  margin-top: 50px;\n  text-align: center;\n  font-weight: 900;\n  color: #e41212;\n  font-size: 22px;\n}\n.delayedPopupWindow p {\n  text-align: center;\n  font-size: 16px;\n  margin-bottom: 20px;\n  padding: 0px 28px;\n}\n.delayedPopupWindow .ratingBack {\n  height: 248px;\n  right: 0;\n  float: right;\n  position: absolute;\n  bottom: 0;\n}\nbutton#rateButton {\n  font-size: 16px;\n}\nbutton#remindLater {\n  font-size: 15px !important;\n}\n.rateButton {\n  text-align: center;\n  position: relative;\n  z-index: 11;\n  padding: 0 27px;\n}\nbutton#remindLater,\nbutton#noThanks {\n  background: none;\n  padding: 7px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  font-size: 10px;\n  border: 1px solid #e41212;\n  color: #e41212;\n}\nbutton#noThanks {\n  border: none;\n}\n.disableScroll {\n  --overflow: hidden;\n}\n.container {\n  margin: 15px;\n  background-color: #fff;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  width: 100%;\n  border-radius: 10px;\n  color: #a0a0a0;\n}\n#someID {\n  display: none;\n}\n.checkbox-1 {\n  cursor: pointer;\n  font-size: 14px;\n  position: relative;\n  padding-left: 40px;\n  padding-top: 5px;\n}\n.checkbox-1:before {\n  position: absolute;\n  content: \"\";\n  width: 21px;\n  height: 21px;\n  border-radius: 4px;\n  background: #fff;\n  text-align: center;\n  left: 0;\n  top: 2px;\n  border: 1px solid #e41212;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.checkbox-1:after {\n  position: absolute;\n  content: \"✔\";\n  font-family: \"Dosis\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 14px;\n  text-align: center;\n  color: #e41212;\n  left: 3px;\n  top: 7px;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#someID:checked + .checkbox-1:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\nspan.redLink {\n  color: #e41212 !important;\n  border-bottom: 2px solid;\n}\nbutton.tourButton {\n  min-height: 20px !important;\n}\np.tourConfirmText {\n  margin-bottom: 24px;\n}\n.showDifferentLoader {\n  --background: none;\n  background: url('alertBag.png') !important;\n}\n.smallLoading[_ngcontent-pnv-c1] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.nextSpan {\n  position: absolute;\n  bottom: 5px;\n  right: -15px;\n  color: #fff;\n  z-index: 111;\n  border-radius: 50%;\n  background-color: #fff;\n  height: 50px;\n  width: 50px;\n  line-height: 50px;\n  text-align: center;\n  box-shadow: 0px 0px 10px -2px #e42310;\n}\n.nextSpan img {\n  height: 24px;\n  width: 24px;\n  margin-left: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\np.nextButton {\n  margin: 0;\n  text-align: center;\n  font-size: 20px;\n  vertical-align: middle;\n}\nimg.smallLoading {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.skipLanguage,\n.tourModal,\n.startLanguage,\n.showLoader {\n  display: none;\n}\n.settingsToolbar button {\n  width: 45px;\n}\nmenuIcon {\n  float: left;\n}\n.settingsToolbar #settingTitle {\n  width: calc(100% - 162px);\n}\nion-menu.my-custom-menu {\n  --width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGlCQUFBO0FERUo7QUNDQTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FERUo7QUNDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBREVKO0FDQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FERUo7QUNDQTtFQUNJLGdCQUFBO0FERUo7QUNDQTtFQUNJLGVBQUE7QURFSjtBQ0VBO0VBQ0ksMkJBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7QURDSjtBQ0VBO0VBQ0ksc0RBQUE7RUFDQSxpQ0FBQTtFQUNBLDJFQUFBO0VBQ0EsMEZBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0FEQ0o7QUNFQTtFQUNJLHVDQUFBO0FEQ0o7QUNFQTtFQUNJLCtCQUFBO0FEQ0o7QUNFQTtFQUNJLG1CQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QURDSjtBQ0VBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBRENKO0FDRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURDSjtBQ0VBO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGtCQUFBO0VEQ047QUFDRjtBQ0pBO0VBQ0k7SUFDSSxrQkFBQTtFRENOO0FBQ0Y7QUNFQTtFQUNJLGtCQUFBO0FEQUo7QUNHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBREFKO0FDR0E7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FEQUo7QUNHQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURBSjtBQ0dBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0FEQUo7QUNHQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QURBSjtBQ0dBO0VBQ0kscUJBQUE7QURBSjtBQ0dBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0dBO0VBQ0ksV0FBQTtBREFKO0FDR0E7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FEQUo7QUNHQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QURBSjtBQ0dBOztFQUVJLGtCQUFBO0FEQUo7QUNHQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FEQUo7QUNHQTtFQUNJLGtCQUFBO0VBQ0EseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QURBSjtBQ0lBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRERKO0FDSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtBRERKO0FDSUE7RUFDSSxrQkFBQTtBRERKO0FDS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FERko7QUNNQTs7Z0dBQUE7QUFLQSx1Q0FBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsaUJBQUE7RUFDQSxZQUFBO0FEUEo7QUNXQSxpQ0FBQTtBQUVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsbUJBQUE7QURUSjtBQ1lBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBRFRKO0FDWUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQ1lBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURUSjtBQ1lBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRFRKO0FDWUE7RUFDSSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QURUSjtBQ1lBO0VBQ0ksZUFBQTtBRFRKO0FDWUE7RUFDSSwwQkFBQTtBRFRKO0FDWUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURUSjtBQ1lBOztFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUNZQTtFQUNJLGtCQUFBO0FEVEo7QUNhQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLCtHQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURWSjtBQ2FBO0VBQ0ksYUFBQTtBRFZKO0FDYUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRFZKO0FDYUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FEVko7QUNhQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FEVko7QUNhQTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QURWSjtBQ2NBO0VBQ0kseUJBQUE7RUFDQSx3QkFBQTtBRFhKO0FDY0E7RUFDSSwyQkFBQTtBRFhKO0FDY0E7RUFDSSxtQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtFQUNBLDBDQUFBO0FEWEo7QUNjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBRFhKO0FDY0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QURYSjtBQ2NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBRFhKO0FDY0E7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURYSjtBQ2NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FEWEo7QUNjQTs7OztFQUlJLGFBQUE7QURYSjtBQ2NBO0VBQ0ksV0FBQTtBRFhKO0FDY0E7RUFDSSxXQUFBO0FEWEo7QUNjQTtFQUNJLHlCQUFBO0FEWEo7QUNjQTtFQUNJLGNBQUE7QURYSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE4LjVweDtcbn1cblxuLnBvc3RfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5pbWcuaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG5pbWcuYm9va21hcmsge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgei1pbmRleDogMTExMTExMTtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm5vLW5ld3MtdGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRQb3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4jbG9hZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lVG8ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5hcHBEZXNjIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhciggLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeVRpbGVzIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuc2VsZWN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxhbmdTdWJtaXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZ1N1Ym1pdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxhbmd1YWdlU2VsZWN0IHNlbGVjdCB7XG4gIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLmxhbmdIZWFkIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubGFuZ0hlYWQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxhbmdIZWFkIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0dmggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNXZoO1xuICBtYXJnaW46IDF2dyAxdmg7XG59XG5cbmlvbi1jYXJkOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRCdXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICB3aWR0aDogOTIlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uc2tpcFRvdXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTVweDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2tpcFRvdXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5za2lwVG91ciBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmlwcGxlX2VmZmVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDIzMTAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4ucmlwcGxlX2VmZmVjdDpiZWZvcmUsXG4ucmlwcGxlX2VmZmVjdDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLmxvYWRpbmdDb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3NpbXBsZUxvYWRlci5naWZcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNpbXBsZUxvYWRlciB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3R0b206IDEyMCU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDE1dmg7XG59XG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gICBEZWZhdWx0IE1vZGFsIFN0eWxlcyAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4vKiAgIFRoaXMgaXMgdGhlIGJhY2tncm91bmQgb3ZlcmxheSAgICovXG4uYmFja2dyb3VuZE92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjM7XG4gIC1tb3otb3BhY2l0eTogMC4zO1xuICB6LWluZGV4OiAxMDE7XG59XG5cbi8qICAgVGhpcyBpcyB0aGUgUG9wdXAgV2luZG93ICAgKi9cbi5kZWxheWVkUG9wdXBXaW5kb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIHotaW5kZXg6IDEwMjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbn1cblxuLmltZ19ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzdweDtcbiAgaGVpZ2h0OiA3N3B4O1xuICBwYWRkaW5nOiAxM3B4O1xuICB0b3A6IC0xMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAwICNkZGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pbWdfYm9yZGVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yYXRlQnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBoNSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNlNDEyMTI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAyOHB4O1xufVxuXG4uZGVsYXllZFBvcHVwV2luZG93IC5yYXRpbmdCYWNrIHtcbiAgaGVpZ2h0OiAyNDhweDtcbiAgcmlnaHQ6IDA7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbmJ1dHRvbiNyYXRlQnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5idXR0b24jcmVtaW5kTGF0ZXIge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnJhdGVCdXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHBhZGRpbmc6IDAgMjdweDtcbn1cblxuYnV0dG9uI3JlbWluZExhdGVyLFxuYnV0dG9uI25vVGhhbmtzIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTQxMjEyO1xuICBjb2xvcjogI2U0MTIxMjtcbn1cblxuYnV0dG9uI25vVGhhbmtzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGlzYWJsZVNjcm9sbCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNhMGEwYTA7XG59XG5cbiNzb21lSUQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2hlY2tib3gtMSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNoZWNrYm94LTE6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgdG9wOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNDEyMTI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNoZWNrYm94LTE6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlNDEyMTI7XG4gIGxlZnQ6IDNweDtcbiAgdG9wOiA3cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuI3NvbWVJRDpjaGVja2VkICsgLmNoZWNrYm94LTE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5zcGFuLnJlZExpbmsge1xuICBjb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG5cbmJ1dHRvbi50b3VyQnV0dG9uIHtcbiAgbWluLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG5wLnRvdXJDb25maXJtVGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5zaG93RGlmZmVyZW50TG9hZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2FsZXJ0QmFnLnBuZ1wiKSAhaW1wb3J0YW50O1xufVxuXG4uc21hbGxMb2FkaW5nW19uZ2NvbnRlbnQtcG52LWMxXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubmV4dFNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogLTE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxMTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IC0ycHggI2U0MjMxMDtcbn1cblxuLm5leHRTcGFuIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5wLm5leHRCdXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbWcuc21hbGxMb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5za2lwTGFuZ3VhZ2UsXG4udG91ck1vZGFsLFxuLnN0YXJ0TGFuZ3VhZ2UsXG4uc2hvd0xvYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgYnV0dG9uIHtcbiAgd2lkdGg6IDQ1cHg7XG59XG5cbm1lbnVJY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgI3NldHRpbmdUaXRsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjJweCk7XG59XG5cbmlvbi1tZW51Lm15LWN1c3RvbS1tZW51IHtcbiAgLS13aWR0aDogNTAwcHg7XG59IiwiaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE4LjVweDtcbn1cblxuLnBvc3RfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogOSAvIDE2KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0X2ltZyBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFweDtcbiAgICByaWdodDogMTBweDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG5pbWcuaWNvbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiAxNHB0O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbi5uby1uZXdzLXRleHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50UG9zdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi8vIGxvYWRlclxuI2xvYWRlci13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lVG8ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYXBwRGVzYyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKCAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnlUaWxlcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZ1N1Ym1pdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxhbmdTdWJtaXQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxhbmd1YWdlU2VsZWN0IHNlbGVjdCB7XG4gICAgYm9yZGVyOiA1cHggcmVkIHNvbGlkO1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIDUwJSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5sYW5nSGVhZCB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubGFuZ0hlYWQgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sYW5nSGVhZCBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNHZoIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA1dmg7XG4gICAgbWFyZ2luOiAxdncgMXZoO1xufVxuXG5pb24tY2FyZDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udEJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTdweDtcbiAgICB3aWR0aDogOTIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5za2lwVG91ciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5za2lwVG91ciBpbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2tpcFRvdXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnJpcHBsZV9lZmZlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDM1LCAxNikgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5yaXBwbGVfZWZmZWN0OmJlZm9yZSxcbi5yaXBwbGVfZWZmZWN0OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5sb2FkaW5nQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLnNpbXBsZUxvYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTExMTExMTtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b3VyVGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3R0b206IDEyMCU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiA1MHZ3O1xufVxuXG4udG91clRleHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMTAlO1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjZTQyMzEwO1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNhYmxlU2Nyb2xsIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vbW9kYWwgcG9wdXBcbi5pbnN0cnVjdGlvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxNXZoO1xufVxuXG5cbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gICBEZWZhdWx0IE1vZGFsIFN0eWxlcyAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG5cblxuLyogICBUaGlzIGlzIHRoZSBiYWNrZ3JvdW5kIG92ZXJsYXkgICAqL1xuXG4uYmFja2dyb3VuZE92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIC8vIGZpbHRlcjogYWxwaGEob3BhY2l0eT04NSk7XG4gICAgLW1vei1vcGFjaXR5OiAwLjM7XG4gICAgei1pbmRleDogMTAxO1xufVxuXG5cbi8qICAgVGhpcyBpcyB0aGUgUG9wdXAgV2luZG93ICAgKi9cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgIHotaW5kZXg6IDEwMjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG59XG5cbi5pbWdfYm9yZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDc3cHg7XG4gICAgaGVpZ2h0OiA3N3B4O1xuICAgIHBhZGRpbmc6IDEzcHg7XG4gICAgdG9wOiAtMTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggMCAjZGRkO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pbWdfYm9yZGVyIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5yYXRlQnV0dG9ucyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZGVsYXllZFBvcHVwV2luZG93IGg1IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjZTQxMjEyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRlbGF5ZWRQb3B1cFdpbmRvdyBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDI4cHg7XG59XG5cbi5kZWxheWVkUG9wdXBXaW5kb3cgLnJhdGluZ0JhY2sge1xuICAgIGhlaWdodDogMjQ4cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG59XG5cbmJ1dHRvbiNyYXRlQnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJ1dHRvbiNyZW1pbmRMYXRlciB7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yYXRlQnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDExO1xuICAgIHBhZGRpbmc6IDAgMjdweDtcbn1cblxuYnV0dG9uI3JlbWluZExhdGVyLFxuYnV0dG9uI25vVGhhbmtzIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNDEyMTI7XG4gICAgY29sb3I6ICNlNDEyMTI7XG59XG5cbmJ1dHRvbiNub1RoYW5rcyB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZGlzYWJsZVNjcm9sbCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vL2N1c3RvbSBjaGVja2JveCBzdGFydHNcbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICNhMGEwYTA7XG59XG5cbiNzb21lSUQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveC0xIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmNoZWNrYm94LTE6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0MTIxMjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmNoZWNrYm94LTE6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIuKclFwiO1xuICAgIGZvbnQtZmFtaWx5OiBcIkRvc2lzXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZTQxMjEyO1xuICAgIGxlZnQ6IDNweDtcbiAgICB0b3A6IDdweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4jc29tZUlEOmNoZWNrZWQrLmNoZWNrYm94LTE6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi8vY3VzdG9tIGNoZWNrYm94IGVuZHNcbnNwYW4ucmVkTGluayB7XG4gICAgY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG59XG5cbmJ1dHRvbi50b3VyQnV0dG9uIHtcbiAgICBtaW4taGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnAudG91ckNvbmZpcm1UZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc2hvd0RpZmZlcmVudExvYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYWxlcnRCYWcucG5nXCIpICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFsbExvYWRpbmdbX25nY29udGVudC1wbnYtYzFdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5uZXh0U3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAxMTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggLTJweCAjZTQyMzEwO1xufVxuXG4ubmV4dFNwYW4gaW1nIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbnAubmV4dEJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW1nLnNtYWxsTG9hZGluZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2tpcExhbmd1YWdlLFxuLnRvdXJNb2RhbCxcbi5zdGFydExhbmd1YWdlLFxuLnNob3dMb2FkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgYnV0dG9uIHtcbiAgICB3aWR0aDogNDVweFxufVxuXG5tZW51SWNvbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgI3NldHRpbmdUaXRsZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2MnB4KVxufVxuXG5pb24tbWVudS5teS1jdXN0b20tbWVudSB7XG4gICAgLS13aWR0aDogNTAwcHg7XG59Il19 */"

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
/* harmony import */ var _sidebar_sidebar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../sidebar/sidebar.page */ "./src/app/sidebar/sidebar.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/admobfree.service */ "./src/app/services/admobfree.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

























let HomePage = class HomePage {
    constructor(navctrl, sidebar, translate, menu, network, _admobService, market, alertController, _generalService, nav, firebaseDynamicLinks, _toastService, _userService, screenOrientation, platform, fcm, _newsService, router, keyboard, _storageService) {
        this.navctrl = navctrl;
        this.sidebar = sidebar;
        this.translate = translate;
        this.menu = menu;
        this.network = network;
        this._admobService = _admobService;
        this.market = market;
        this.alertController = alertController;
        this._generalService = _generalService;
        this.nav = nav;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this._toastService = _toastService;
        this._userService = _userService;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.fcm = fcm;
        this._newsService = _newsService;
        this.router = router;
        this.keyboard = keyboard;
        this._storageService = _storageService;
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
        this.andText = _changeLang__WEBPACK_IMPORTED_MODULE_16__["andText"];
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
        this.page_number = 1;
        this.page_limit = 20;
        console.log('INSIDE CONSTRUCTER');
    }
    // Event Listeners
    ngOnInit() {
        console.log('HELLO 33');
        this.platform.ready().then(() => {
            this.firebaseLinkRoute();
        });
        this.language = localStorage.language;
        this.viewInitFunctions();
    }
    ionViewDidEnter() {
        this.notificationTapped();
        this.platform.ready().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!localStorage.getItem('deviceToken')) {
                this.fcm.getToken().then(token => {
                    localStorage.setItem('deviceToken', token);
                    setTimeout(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        console.log('this.selected', localStorage.getItem('language'));
                        if (!localStorage.getItem('accessToken')) {
                            this._userService.firstTimeUser(yield localStorage.getItem('language')).subscribe((res) => {
                                this._userService.serviceFunction();
                                if (!localStorage.getItem('annonymousNotify')) {
                                    localStorage.setItem('annonymousNotify', 'true');
                                }
                            }, (err) => {
                            });
                        }
                        else {
                            const accessToken = yield localStorage.getItem('accessToken');
                            const deviceToken = yield localStorage.getItem('deviceToken');
                            this._userService.loggedInUserDeviceToken(accessToken, deviceToken).subscribe((res) => {
                                console.log('RES FROM UPDATING DEVICE TOKEN', res);
                            });
                        }
                    }), 1000);
                });
                this.fcm.onTokenRefresh().subscribe(token => {
                    localStorage.setItem('deviceToken', token);
                });
            }
            else {
                // setTimeout(async () => {
                console.log('this.selected', localStorage.getItem('language'));
                if (!localStorage.getItem('accessToken')) {
                    this._userService.firstTimeUser(yield localStorage.getItem('language')).subscribe((res) => {
                        this._userService.serviceFunction();
                        if (!localStorage.getItem('annonymousNotify')) {
                            localStorage.setItem('annonymousNotify', 'true');
                        }
                    }, (err) => {
                    });
                }
                else {
                    const accessToken = yield localStorage.getItem('accessToken');
                    const deviceToken = yield localStorage.getItem('deviceToken');
                    this._userService.loggedInUserDeviceToken(accessToken, deviceToken).subscribe((res) => {
                        console.log('RES FROM UPDATING DEVICE TOKEN', res);
                    });
                }
                // }, 1000);
            }
        }));
        if (!localStorage.getItem('firstLargePostClick') && localStorage.getItem('language')) {
            this.navctrl.navigateRoot('sidebar/tour-home');
        }
        if (this.platform.is('cordova')) {
            this._admobService.interstitalAdOnFivePageChange();
        }
        this.catModalShow = localStorage.getItem('catModalShow');
        if (!localStorage.getItem('language')) {
            this.askForTour('none');
        }
        console.log('this.firstTimeLoad', this.firstTimeLoad);
        this.skip = localStorage.getItem('skip');
        this.catSelect = localStorage.getItem('catSelect');
        this.language = localStorage.getItem('language');
    }
    ionViewWillLeave() {
        console.log('Leaving Home page');
        this.page_number = 1;
        this.newsArray = [];
        this.latestPost = {};
        this.subscription.unsubscribe();
    }
    ionViewWillUnload() {
        console.log('Unloading Home page');
    }
    viewInitFunctions() {
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        // Screen Orientation Lock
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
            });
        }
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            const base64Url = this.tokenLocalStorage.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        console.log('HELLO, BYE');
        if (!localStorage.getItem('language')) {
            $('.tourModal').show();
            this.showTourConfirm = true;
        }
        if (localStorage.getItem('language')) {
            this.smallLoading = true;
            if (this.platform.is('cordova')) {
                this._admobService.BannerAd();
            }
            this.getAllPost(false, '');
        }
        this.catModalShow = localStorage.getItem('catModal');
        // this.loading = false
        if (localStorage.getItem('skip')) {
            this.skip = '1';
        }
        this.navExtras = this._generalService.getExtras();
        if (localStorage.getItem('language') && localStorage.getItem('catSelect') == '1') {
            this.language = localStorage.getItem('language');
            this.catSelect = localStorage.getItem('catSelect');
        }
        this.platform.ready().then(() => {
            this.fcmToken();
        });
        this.checkforInternet();
    }
    askForTour(promptReply) {
        this.loading = true;
    }
    // get all news - HOME PAGE ( FEEDS )
    getAllPost(isFirstLoad, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('HELLOOOOOO');
            if (this.page_number == 1) {
                this.smallLoading = true;
                this.newsArray = [];
                this.latestPost = {};
            }
            // this.latestPost = {};
            localStorage.setItem('firstTimeLoaded', 'true');
            if (this.network.type != 'none') {
                this._newsService.getAllNews(this.page_number, this.page_limit).subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (this.page_number == 1) {
                        // this.smallLoading = true;
                        this.newsArray = [];
                        // this.latestPost = {};
                    }
                    if (this.page_number == 1) {
                        this.latestPost = res.shift();
                    }
                    console.log('this.latestPost', this.latestPost);
                    yield this.newsArray.push(...res);
                    // this.newsArray = res;
                    if (isFirstLoad) {
                        event.target.complete();
                    }
                    this.page_number++;
                    // this.latestPost = this.newsArray.shift();
                    console.log('this.allnews =======', this.newsArray);
                    console.log('this.allnews =======', this.latestPost);
                    // this.checkForRating();
                    // setTimeout(() => {
                    this.smallLoading = false;
                    // }, 5000);
                }), (err) => {
                    this.smallLoading = false;
                    this.newsArray = JSON.parse(localStorage.newsArray);
                    this.latestPost = this.newsArray.shift();
                });
            }
            else {
                const newsArrayOffline = yield this._storageService.getNewsForOffline();
                this.newsArray = JSON.parse(newsArrayOffline);
                this.latestPost = this.newsArray.shift();
                this.smallLoading = false;
            }
        });
    }
    doInfinite(event) {
        if (this.network.type == 'none') {
            this.translate.get('No internet connection').subscribe((mes) => {
                this._toastService.toastFunction(mes, 'danger');
            });
            event.target.complete();
        }
        else {
            this.getAllPost(true, event);
        }
        console.log(event);
    }
    checkForRating() {
        if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
            this.showRateModal = true;
        }
        else {
            this.showRateModal = false;
        }
    }
    // go to specific post when link click
    firebaseLinkRoute() {
        if (!_config__WEBPACK_IMPORTED_MODULE_3__["config"].isvisited && !_config__WEBPACK_IMPORTED_MODULE_3__["config"].counter) {
            this.firebaseDynamicLinks.onDynamicLink().subscribe((res) => {
                const postId = res.deepLink.split('?')[1].split('=')[1];
                this.router.navigate(['single-post/' + postId]);
            }, (error) => {
                console.log(error);
            });
        }
    }
    // check for internet
    checkforInternet() {
        const alertOnlineStatus = () => {
            if (navigator.onLine) {
                this.hide = false;
            }
            else {
                this.hide = true;
                this.translate.get('No internet connection').subscribe((mes) => {
                    this._toastService.toastFunction(mes, 'danger');
                });
            }
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    }
    // navigate to searchbar
    search() {
        if (localStorage.getItem('skip')) {
            this.nav.navigateRoot('/searchBar');
        }
    }
    settings() {
        if (localStorage.getItem('skip')) {
            // this.router.navigateByUrl('/settings');
            this.nav.navigateRoot('/settings');
        }
    }
    // Notification and utility
    notificationTapped() {
        console.log('TAPPED');
        this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
                console.log('TAPPED', data);
                this.router.navigate(['/single-post/' + data.newsId]);
                console.log('Received in background', data.wasTapped);
            }
            else {
                console.log('Received in foreground');
            }
        });
    }
    // check event for terms and cond.
    isChecked(e) {
        if (e.target.checked) {
            if (!this.selected) {
                $('#someID').attr('checked', false);
                this._toastService.toastFunction('Please Select any Language to continue', '');
            }
            else {
                setTimeout(() => {
                    this.selectLang();
                }, 1000);
            }
        }
    }
    // selectLangDiv
    selectLangDiv() {
        $('#someID').attr('checked', true);
        setTimeout(() => {
            this.selectLang();
        }, 500);
    }
    // select lang on first time app opens
    selectLang() {
        if (localStorage.getItem('skip')) {
            this.router.navigateByUrl('/login');
        }
        else {
            // this.getAllPost();
        }
        const lang = this.selected;
        localStorage.setItem('language', lang);
        this.translate.use(localStorage.getItem('language'));
        console.log('Date in home', new Date().getSeconds());
        this.sidebar.getMenuItems();
        this.navctrl.navigateRoot('sidebar/tour-home');
    }
    // set fcm token
    fcmToken() {
        this.platform.ready().then(() => {
            this.fcm.onNotification().subscribe(data => {
                this.router.navigate(['home/single-news/' + data.newsId]);
                if (data.wasTapped) {
                }
                else {
                }
            });
        });
    }
    // rate dialog
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
    startTourFunction() {
        $('.tourModal').hide();
        $('.loadingContent').removeClass('showDifferentLoader');
        setTimeout(() => {
            this.showTourConfirm = false;
        }, 1000);
        this.loading = false;
        this.startTour = true;
    }
    skipTourFunction() {
        $('.tourModal').hide();
        this.loading = false;
        $('.loadingContent').removeClass('showDifferentLoader');
        this.skipTheTour = true;
        this.skip = '1';
        localStorage.setItem('bookmarkFlag', '1');
        localStorage.setItem('shareFlag', '1');
        localStorage.setItem('skip', '1');
        localStorage.setItem('firstLargePostClick', '1');
        localStorage.setItem('catModal', '1');
        this.catModalShow = '1';
        $('.skipLanguage').show();
    }
    openMenu() {
        console.log('HELLO');
        this.menu.open('mainContent');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _sidebar_sidebar_page__WEBPACK_IMPORTED_MODULE_1__["SidebarPage"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"] },
    { type: _services_admobfree_service__WEBPACK_IMPORTED_MODULE_18__["AdmobfreeService"] },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__["Market"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_15__["GeneralService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseDynamicLinks"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_14__["SuperTabs"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_14__["SuperTabs"])
], HomePage.prototype, "superTabs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"])
], HomePage.prototype, "content", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _sidebar_sidebar_page__WEBPACK_IMPORTED_MODULE_1__["SidebarPage"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_19__["Network"], _services_admobfree_service__WEBPACK_IMPORTED_MODULE_18__["AdmobfreeService"], _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_17__["Market"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_general_service__WEBPACK_IMPORTED_MODULE_15__["GeneralService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseDynamicLinks"], _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"], _services_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map