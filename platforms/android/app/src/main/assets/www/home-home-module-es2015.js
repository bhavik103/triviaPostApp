(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-icon name=\"settings\" class=\"homeBack\" routerLink=\"/settings\" float-left></ion-icon>\n        <ion-icon name=\"search\" class=\"searchIcon\" float-right (click)=\"search()\"></ion-icon>\n        <ion-title class=\"ion-text-center\">\n            Trivia Post\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<super-tabs activeTabIndex=\"1\" [config]=\"config\">\n    <super-tabs-toolbar slot=\"top\">\n        <super-tab-button>\n            <ion-label>Categories</ion-label>\n        </super-tab-button>\n        <super-tab-button>\n            <ion-label>Feeds</ion-label>\n        </super-tab-button>\n    </super-tabs-toolbar>\n\n    <super-tabs-container>\n        <!-- categories tab-->\n        <super-tab>\n            <ion-content>\n                <ion-row *ngIf=\"categories\">\n                    <ion-col size=\"6\" *ngFor=\"let category of categories\" class=\"categoryTiles\">\n                        <app-category-tiles [category]=\"category\" (onSubscribe)=\"subscribedCategory($event, isNotify)\"\n                            [language]=\"language\"></app-category-tiles>\n                    </ion-col>\n                </ion-row>\n            </ion-content>\n        </super-tab>\n\n        <!-- feeds tab-->\n        <super-tab>\n            <ion-content>\n                <ion-row class=\"feeds\" *ngIf=\"newsArray && newsArray.length && latestPost\">\n                    <app-large-post [news]=\"latestPost\" [language]=\"language\"></app-large-post>\n                    <span *ngFor=\"let news of newsArray\">\n                        <app-post-tiles [news]=\"news\" [language]=\"language\"></app-post-tiles>\n                    </span>\n                </ion-row>\n            </ion-content>\n        </super-tab>\n    </super-tabs-container>\n</super-tabs>\n\n<!-- loader -->\n<div id=\"loader-wrapper\" *ngIf=\"loading\">\n    <div id=\"loader\">\n        <span class=\"welcomeTo\">Welcome to</span>\n        <span class=\"logo_container\">\n            <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n        </span>\n        <div class=\"welcomeTo appDesc\">Interesting and</div>\n        <div class=\"welcomeTo appDesc\">Informative reads</div>\n        <div class=\"spinner\">\n            <div class=\"bounce1\"></div>\n            <div class=\"bounce2\"></div>\n            <div class=\"bounce3\"></div>\n        </div>\n        <p class=\"text-center\">Loding...</p>\n    </div>\n</div>\n<div class=\"no-news-text\" *ngIf=\"isTextVisible\">\n    <span>{{text}}</span>\n</div>"

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

module.exports = ".homeBack,\n.searchIcon {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-label {\n  font-size: 15px;\n}\n\n.searchIcon {\n  padding-right: 15px;\n}\n\n.tab-selected {\n  border-bottom: 3px solid;\n  color: var(--main-app-color);\n}\n\nion-tab-button {\n  --ripple-color: var(--main-app-color);\n}\n\n.post_img {\n  width: 100%;\n  padding-top: calc(100% * 9 / 16);\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n  object-fit: cover;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: var(--main-app-color);\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n  position: absolute;\n  bottom: 10px;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n\n#loader-wrapper {\n  background: #fff !important;\n}\n\n.welcomeTo {\n  font-weight: 500;\n  font-size: 30px;\n}\n\n.appDesc {\n  font-size: 25px;\n}\n\n/*Huge thanks to @tobiasahlin at http://tobiasahlin.com/spinkit/ */\n\n.spinner {\n  margin: 30px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: var(--main-app-color);\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.ion-color-primary {\n  --ion-color-contrast: var(--main-app-color) !important;\n  --ion-color-base: #fff !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: #fff !important;\n  --ion-color-tint: #fff !important;\n}\n\n.active ion-label {\n  color: var(--main-app-color) !important;\n}\n\nion-label {\n  text-transform: none !important;\n}\n\n.categoryTiles {\n  padding-right: 8.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRElBO0VBQ0UsMkJBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENBLGtFQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFFQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0VBQUE7RUFDQSx3REFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFHRSwyQkFBQTtFQ0RGO0VER0E7SUFDRSwyQkFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUdFLDJCQUFBO0lBQ0EsbUJBQUE7RUNKRjtFRE1BO0lBQ0UsMkJBQUE7SUFDQSxtQkFBQTtFQ0pGO0FBQ0Y7O0FETUE7RUFDRSxzREFBQTtFQUNBLGlDQUFBO0VBQ0EsMkVBQUE7RUFDQSx5RkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUNKRjs7QURNQTtFQUNFLHVDQUFBO0FDSEY7O0FES0E7RUFDRSwrQkFBQTtBQ0ZGOztBRElBO0VBQ0Usb0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZUJhY2ssXG4uc2VhcmNoSWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbnN1cGVyLXRhYnMtdG9vbGJhcntcbiAgJHRhYnMtbWQtdGFiLWljb24tY29sb3ItYWN0aXZlOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uc2VhcmNoSWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi50YWItc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5wb3N0X2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogOSAvIDE2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0X2ltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNoYXJlLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW1nLmljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuaW1nLmJvb2ttYXJrIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi5uby1uZXdzLXRleHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50UG9zdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uby1uZXdzLXRleHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLy8gbG9hZGVyXG5cbiNsb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cbi53ZWxjb21lVG8ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uYXBwRGVzYyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi8qSHVnZSB0aGFua3MgdG8gQHRvYmlhc2FobGluIGF0IGh0dHA6Ly90b2JpYXNhaGxpbi5jb20vc3BpbmtpdC8gKi9cbi5zcGlubmVyIHtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwaW5uZXIgPiBkaXYge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG5cbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW9uLWNvbG9yLXByaW1hcnl7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1tYWluLWFwcC1jb2xvcikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogI2ZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uYWN0aXZlIGlvbi1sYWJlbHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVse1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnlUaWxlc3tcbiAgcGFkZGluZy1yaWdodDogOC41cHg7XG59IiwiLmhvbWVCYWNrLFxuLnNlYXJjaEljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNlYXJjaEljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udGFiLXNlbGVjdGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIC0tcmlwcGxlLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5wb3N0X2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogOSAvIDE2KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0X2ltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNoYXJlLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW1nLmljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuaW1nLmJvb2ttYXJrIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi5uby1uZXdzLXRleHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50UG9zdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uby1uZXdzLXRleHQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuI2xvYWRlci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4ud2VsY29tZVRvIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYXBwRGVzYyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLypIdWdlIHRoYW5rcyB0byBAdG9iaWFzYWhsaW4gYXQgaHR0cDovL3RvYmlhc2FobGluLmNvbS9zcGlua2l0LyAqL1xuLnNwaW5uZXIge1xuICBtYXJnaW46IDMwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLnNwaW5uZXIgLmJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLW1haW4tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjZmZmICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yeVRpbGVzIHtcbiAgcGFkZGluZy1yaWdodDogOC41cHg7XG59Il19 */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
















let HomePage = class HomePage {
    constructor(firebaseDynamicLinks, _toastService, _userService, screenOrientation, platform, fcm, _newsService, _categoryService, router, keyboard) {
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
    }
    // Event Listeners
    ngOnInit() {
        this.firebaseLinkRoute();
        this.language = localStorage.language;
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
    }
    ionViewDidEnter() {
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
        this.notificationTapped();
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    viewInitFunctions() {
        console.log('this.firebaseDynamicLinks', this.firebaseDynamicLinks);
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
        this.getCategories();
        this.getAllPost();
        this.fcmToken();
        this.loading = true;
        this.checkforInternet();
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
        var offline = rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"].fromEvent(document, "offline");
        var online = rxjs__WEBPACK_IMPORTED_MODULE_10__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this._toastService.toastFunction('No internet connection', 'danger');
        });
        online.subscribe(() => {
            this.hide = true;
        });
    }
    //get categories
    getCategories() {
        this.language = localStorage.getItem('language');
        this._categoryService.getAll().subscribe((res) => {
            this.categories = res;
            console.log("after", this.categories);
        }, (err) => {
        });
    }
    //change on subscription of category
    subscribedCategory(e) {
        console.log("Event e", e);
        if (e.isNotify == true) {
            this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
        }
        else {
            this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
        }
    }
    //get all news - HOME PAGE ( FEEDS )
    getAllPost() {
        this.language = localStorage.getItem('language');
        this._newsService.getAllNews().subscribe((res) => {
            this.loading = false;
            this.newsArray = res;
            this.latestPost = res[0];
            this.newsArray.splice(0, 1);
        }, (err) => {
            this.newsArray = localStorage.newsArray;
        });
    }
    //navigate to searchbar
    search() {
        this.router.navigateByUrl('/searchBar');
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
    //set fcm token
    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
            setTimeout(() => {
                if (localStorage.getItem('annonymousNotify')) {
                    this._userService.firstTimeUser().subscribe((res) => {
                        localStorage.setItem('annonymousNotify', 'true');
                    }, (err) => {
                    });
                }
            }, 1000);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
                //console.log('Received in background');
            }
            else {
                //console.log('Received in foreground');
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_14__["FirebaseDynamicLinks"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_15__["SuperTabs"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_15__["SuperTabs"])
], HomePage.prototype, "superTabs", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_14__["FirebaseDynamicLinks"], _services_toast_service__WEBPACK_IMPORTED_MODULE_13__["ToastService"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map