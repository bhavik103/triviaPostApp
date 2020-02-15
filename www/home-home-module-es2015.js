(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div no-border>\n  <div\n    class=\"settingsToolbar\"\n    *ngIf=\"(language && catSelect == '1') || (language && skip == '1')\"\n  >\n    <button float-left>\n      <ion-icon\n        name=\"settings\"\n        class=\"homeBack\"\n        routerLink=\"/settings\"\n        (click)=\"setFlagTrue()\"\n      ></ion-icon>\n    </button>\n    <span id=\"settingTitle\">\n      Trivia Post\n    </span>\n    <button float-right>\n      <ion-icon\n        name=\"search\"\n        class=\"searchIcon\"\n        (click)=\"search()\"\n      ></ion-icon>\n    </button>\n  </div>\n</div>\n<div no-border>\n  <div *ngIf=\"!language\" class=\"settingsToolbar\">\n    <span id=\"settingTitle\" style=\"margin:0;width: 100%;\">\n      Language\n    </span>\n  </div>\n</div>\n<div no-border>\n  <div\n    *ngIf=\"language && catSelect == 0 && skip != '1'\"\n    class=\"settingsToolbar\"\n  >\n    <span id=\"settingTitle\" style=\"margin:0;width: 100%;\">\n      Categories\n    </span>\n  </div>\n</div>\n\n<ion-content *ngIf=\"!language\" style=\"position: absolute;z-index: 3;top: 56px;\">\n  <div\n    class=\"languageSelect\"\n    style=\"height: 100%;background-image: url('../../assets/images/langBackground.png');background-repeat: no-repeat;background-size: cover;\"\n  >\n    <div class=\"langHead\">\n      <img src=\"../../assets/images/subject.png\" height=\"30px\" width=\"30px\" />\n      <p>Choose your preferred language</p>\n    </div>\n    <ion-row>\n      <ion-col\n        size=\"4\"\n        *ngFor=\"let lang of languageList;let i = index\"\n        class=\"langCol\"\n      >\n        <ion-card\n          tabindex=\"{{i}}\"\n          [style.background]=\"selected==lang.slug?'red':'white'\"\n          [style.color]=\"selected==lang.slug?'white':'black'\"\n          class=\"divs\"\n          (click)=\"selected=lang.slug\"\n        >\n          {{lang.lang}}\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <button class=\"contButton\" (click)=\"selectLang()\">Continue</button>\n  </div>\n</ion-content>\n<ion-content\n  *ngIf=\"language && catSelect == '0' && skip != '1'\"\n  style=\"position: absolute;z-index: 11;top: 56px;\"\n>\n  <ion-row *ngIf=\"categories\">\n    <ion-col\n      size=\"6\"\n      *ngFor=\"let category of categories; let i = index\"\n      class=\"categoryTiles\"\n    >\n      <app-category-tiles\n        [category]=\"category\"\n        (onSubscribe)=\"subscribedCategory($event, isNotify)\"\n        [language]=\"language\"\n        [firstTime]=\"true\"\n        [index]=\"i\"\n      ></app-category-tiles>\n    </ion-col>\n  </ion-row>\n  <div class=\"skipTour\" *ngIf=\"!skip\" (click)=\"skipTour()\">\n    <div class=\"ripple_effect\"></div>\n    <span>Skip Tour > ></span>\n  </div>\n</ion-content>\n<ion-content\n  *ngIf=\"[(latestPost && language && catSelect == 1) || (language && latestPost && skip == '1') || skip == '1'] && !loading\"\n>\n  <div class=\"skipTour\" *ngIf=\"!skip\" (click)=\"skipTour()\">\n    <div class=\"ripple_effect\"></div>\n    <span>Skip Tour > ></span>\n  </div>\n  <ion-row class=\"feeds\" *ngIf=\"latestPost && !loading\">\n    <app-large-post\n      [news]=\"latestPost\"\n      *ngIf=\"latestPost && !loading\"\n      [language]=\"language\"\n      [skip]=\"skip\"\n    ></app-large-post>\n    <span *ngFor=\"let news of newsArray\" class=\"newsTiles\">\n      <app-post-tiles\n        [news]=\"news\"\n        [language]=\"language\"\n        *ngIf=\"newsArray && !loading\"\n      ></app-post-tiles>\n    </span>\n  </ion-row>\n</ion-content>\n<div class=\"no-news-text\" *ngIf=\"isTextVisible\">\n  <span>{{text}}</span>\n</div>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>"

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

module.exports = "ion-label {\n  font-size: 18.5px;\n}\n\n.tab-selected {\n  border-bottom: 3px solid;\n  color: var(--main-app-color);\n}\n\nion-tab-button {\n  --ripple-color: var(--main-app-color);\n}\n\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n\n#loader-wrapper {\n  background: #fff !important;\n}\n\n.welcomeTo {\n  font-weight: 500;\n  font-size: 30px;\n}\n\n.appDesc {\n  font-size: 25px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 30px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: var(--main-app-color);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.ion-color-primary {\n  --ion-color-contrast: var(--main-app-color) !important;\n  --ion-color-base: #fff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast-rgb: var(\n    --ion-color-primary-contrast-rgb,\n    255,\n    255,\n    255\n  ) !important;\n  --ion-color-shade: #fff !important;\n  --ion-color-tint: #fff !important;\n}\n\n.active ion-label {\n  color: var(--main-app-color) !important;\n}\n\nion-label {\n  text-transform: none !important;\n}\n\n.categoryTiles {\n  padding-bottom: 0px;\n}\n\nselect {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.langSubmit {\n  position: fixed;\n  top: 55%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.langSubmit {\n  padding: 10px;\n  background-color: red;\n  color: #fff;\n  border-radius: 6px;\n}\n\n.languageSelect select {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n.langHead {\n  margin: 10px;\n}\n\n.langHead img {\n  margin-right: 17px;\n  float: left;\n}\n\n.langHead p {\n  line-height: 33px;\n  font-size: 16px;\n}\n\nion-card {\n  pointer-events: all;\n  border-radius: 10px;\n  padding: 36px 0;\n  text-align: center;\n}\n\nion-card:focus {\n  background-color: #e41212 !important;\n  color: #fff;\n}\n\n.contButton {\n  padding: 14px;\n  margin-left: 17px;\n  margin-right: 17px;\n  width: 92%;\n  border-radius: 10px;\n  color: #e41212 !important;\n}\n\n.active {\n  background-color: red;\n}\n\n.skipTour {\n  background-color: #e42310;\n  color: #fff;\n  padding: 8px 25px;\n  border-radius: 5px;\n  position: fixed;\n  bottom: 10px;\n  z-index: 1;\n  font-weight: 700;\n  left: 10px;\n}\n\n.skipTour button {\n  padding: 10px;\n  background-color: #e41212 !important;\n  color: #fff;\n}\n\n.ripple_effect {\n  background-color: #e42310 !important;\n  border-color: #fff;\n}\n\n.ripple_effect:before,\n.ripple_effect:after {\n  border-color: #fff;\n}\n\n.loadingContent {\n  --background: none;\n  background: url('newLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsaUJBQUE7QUNGRjs7QURLQTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURJQTtFQUNFLHFDQUFBO0FDREY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURLQTtFQUNFLDJCQUFBO0FDRkY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNERjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURFQSxrRUFBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0VBQ0Esd0RBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFO0lBR0UsMkJBQUE7RUNGRjtFRElBO0lBQ0UsMkJBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0U7SUFHRSwyQkFBQTtJQUNBLG1CQUFBO0VDTEY7RURPQTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUNMRjtBQUNGOztBRE9BO0VBQ0Usc0RBQUE7RUFDQSxpQ0FBQTtFQUNBLDJFQUFBO0VBQ0E7Ozs7O2NBQUE7RUFNQSxrQ0FBQTtFQUNBLGlDQUFBO0FDTEY7O0FET0E7RUFDRSx1Q0FBQTtBQ0pGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNBRjs7QURHQTtFQUNFO0lBQ0Usa0JBQUE7RUNBRjtBQUNGOztBREhBO0VBQ0U7SUFDRSxrQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBOztFQUVFLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN1cGVyLXRhYnMtdG9vbGJhciB7XG4gICR0YWJzLW1kLXRhYi1pY29uLWNvbG9yLWFjdGl2ZTogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOC41cHg7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDkgLyAxNik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5zaGFyZS1idXR0b24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmltZy5pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5cbmltZy5ib29rbWFyayB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAxMTExMTExO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi8vIGxvYWRlclxuXG4jbG9hZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ud2VsY29tZVRvIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmFwcERlc2Mge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyID4gZGl2IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLFxuICA4MCUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLW1haW4tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsXG4gICAgMjU1LFxuICAgIDI1NSxcbiAgICAyNTVcbiAgKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbn1cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnlUaWxlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5zZWxlY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxhbmdTdWJtaXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxhbmdTdWJtaXQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sYW5ndWFnZVNlbGVjdCBzZWxlY3Qge1xuICBib3JkZXI6IDVweCByZWQgc29saWQ7XG5cbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4ubGFuZ0hlYWQge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5sYW5nSGVhZCBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE3cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ0hlYWQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDM2cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNhcmQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQxMjEyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRCdXR0b24ge1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICB3aWR0aDogOTIlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xufVxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNraXBUb3VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjMxMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZWZ0OiAxMHB4O1xufVxuLnNraXBUb3VyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucmlwcGxlX2VmZmVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDM1LCAxNikgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuLnJpcHBsZV9lZmZlY3Q6YmVmb3JlLFxuLnJpcHBsZV9lZmZlY3Q6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG4ubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbmV3TG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuIiwiaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOC41cHg7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgLS1yaXBwbGUtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLnBvc3RfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiA5IC8gMTYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG5pbWcuaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG5pbWcuYm9va21hcmsge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgei1pbmRleDogMTExMTExMTtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLm5vLW5ld3MtdGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRQb3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4jbG9hZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi53ZWxjb21lVG8ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5hcHBEZXNjIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4vKkh1Z2UgdGhhbmtzIHRvIEB0b2JpYXNhaGxpbiBhdCBodHRwOi8vdG9iaWFzYWhsaW4uY29tL3NwaW5raXQvICovXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGlubmVyID4gZGl2IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xufVxuXG4uc3Bpbm5lciAuYm91bmNlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW9uLWNvbG9yLXByaW1hcnkge1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcihcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYixcbiAgICAyNTUsXG4gICAgMjU1LFxuICAgIDI1NVxuICApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeVRpbGVzIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuc2VsZWN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxhbmdTdWJtaXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubGFuZ1N1Ym1pdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxhbmd1YWdlU2VsZWN0IHNlbGVjdCB7XG4gIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgfVxufVxuLmxhbmdIZWFkIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubGFuZ0hlYWQgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxhbmdIZWFkIHAge1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDM2cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250QnV0dG9uIHtcbiAgcGFkZGluZzogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMTdweDtcbiAgd2lkdGg6IDkyJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnNraXBUb3VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MjMxMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiAxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uc2tpcFRvdXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJpcHBsZV9lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQyMzEwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLnJpcHBsZV9lZmZlY3Q6YmVmb3JlLFxuLnJpcHBsZV9lZmZlY3Q6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5sb2FkaW5nQ29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXdMb2FkZXIuZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59Il19 */"

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


















let HomePage = class HomePage {
    constructor(alertController, _generalService, firebaseDynamicLinks, _toastService, _userService, screenOrientation, platform, fcm, _newsService, _categoryService, router, keyboard) {
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
        this.getAllPost();
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
            this.loading = true;
            this.language = localStorage.getItem('language');
            if (!localStorage.getItem('skip') && localStorage.getItem('firstLargePostClick')) {
                const alert = yield this.alertController.create({
                    header: 'Confirm!',
                    message: 'Are you sure you want to skip the <strong>tour</strong>?',
                    cssClass: 'alertCustomCss',
                    buttons: [
                        {
                            text: 'Continue',
                            role: 'cancel',
                            handler: (blah) => {
                                this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
                            }
                        }, {
                            text: 'Skip',
                            handler: () => {
                                localStorage.setItem('skip', '1');
                                localStorage.setItem('shareBlink', '1');
                                localStorage.setItem('catSelect', '1');
                                localStorage.setItem('firstLargePostClick', '1');
                                this.skip = localStorage.getItem('skip');
                                this.router.navigateByUrl('all-categories');
                            }
                        }
                    ]
                });
                yield alert.present();
                this._newsService.getAllNews().subscribe((res) => {
                    this.newsArray = res;
                    this.latestPost = res[0];
                    console.log('this.latestPost', this.latestPost);
                    this.newsArray.splice(0, 1);
                    if (!localStorage.getItem('skip')) {
                    }
                    // this.loading = false;
                }, (err) => {
                    this.newsArray = localStorage.newsArray;
                });
            }
            else {
                if (navigator.onLine) {
                    this._newsService.getAllNews().subscribe((res) => {
                        this.newsArray = res;
                        this.latestPost = res[0];
                        console.log('this.latestPost', this.latestPost);
                        this.newsArray.splice(0, 1);
                        if (!localStorage.getItem('skip')) {
                        }
                        this.loading = false;
                    }, (err) => {
                        this.newsArray = localStorage.newsArray;
                    });
                }
                else {
                    this.newsArray = JSON.parse(localStorage.getItem('newsArray'));
                    this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
                    this.newsArray.splice(0, 1);
                }
            }
        });
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
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._categoryService.getAll().subscribe((res) => {
                this.categories = res;
                console.log("after", this.categories);
            }, (err) => {
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
        localStorage.setItem('firstLargePostClick', '1');
        this.router.navigateByUrl('/searchBar');
    }
    setFlagTrue() {
        localStorage.setItem('firstLargePostClick', '1');
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
                this.getCategories();
                const alert = yield this.alertController.create({
                    header: 'Confirm!',
                    message: 'Would you like to continue with <strong>Trivia Post tour</strong>?',
                    cssClass: 'alertCustomCss',
                    buttons: [
                        {
                            text: 'Skip',
                            role: 'cancel',
                            handler: (blah) => {
                                let language = this.selected;
                                localStorage.setItem('language', language);
                                localStorage.setItem('skip', '1');
                                this.router.navigateByUrl('all-categories');
                            }
                        }, {
                            text: 'Start',
                            handler: () => {
                                this.catSelect = '0';
                                localStorage.setItem('catSelect', '0');
                                let lang = this.selected;
                                localStorage.setItem('language', lang);
                                this._generalService.setExtras(lang);
                                this.language = lang;
                            }
                        }
                    ]
                });
                yield alert.present();
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
};
HomePage.ctorParameters = () => [
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_general_service__WEBPACK_IMPORTED_MODULE_15__["GeneralService"], _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_13__["FirebaseDynamicLinks"], _services_toast_service__WEBPACK_IMPORTED_MODULE_12__["ToastService"], _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map