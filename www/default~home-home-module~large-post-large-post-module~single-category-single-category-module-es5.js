(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~large-post-large-post-module~single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/large-post/large-post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/large-post/large-post.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\n  <ion-col size=\"12\" class=\"latestPost\" (click)=\"singleNews(news.newsId)\">\n    <img\n      class=\"latestpostimg firstTimeBlur\"\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"100%\"\n      data-src=\"../../assets/images/placeholder.png'\"\n      onerror=\"this.src='../../assets/images/placeholder.png'\"\n      *ngIf=\"!firstLargePostClick && !skip == 1\"\n      width=\"100%\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <img\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"100%\"\n      data-src=\"../../assets/images/placeholder.png'\"\n      onerror=\"this.src='../../assets/images/placeholder.png'\"\n      width=\"100%\"\n      *ngIf=\"firstLargePostClick === '1' || skip == 1\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <img\n      data-src=\"../../assets/images/placeholder.png'\"\n      onerror=\"this.src='../../assets/images/placeholder.png'\"\n      height=\"100%\"\n      width=\"100%\"\n      *ngIf=\"(firstLargePostClick === '1' || skip == 1) && noConnection\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <div\n      *ngIf=\"!firstLargePostClick && !skip == '1'\"\n      class=\"tourText tourTextTitle\"\n    >\n      Click here to read this post!\n    </div>\n    <div class=\"textBlock\">\n      <span\n        class=\"latestNews\"\n        *ngIf=\"!firstLargePostClick && language != 'as' && !skip == '1'\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n        {{news[language].title}}\n        <div class=\"ripple_effect\"></div>\n      </span>\n      <span\n        class=\"latestNews assameseFont\"\n        *ngIf=\"!firstLargePostClick && language == 'as' && !skip == '1'\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n        news[language].title\n        <div class=\"ripple_effect\"></div>\n      </span>\n      <span\n        class=\"latestNews\"\n        *ngIf=\"(skip == '1' || firstLargePostClick === '1') && language != 'as'\"\n        [innerHTML]=\"news[language].title\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n      </span>\n      <span\n        class=\"latestNews assameseFont\"\n        *ngIf=\"(skip == '1' || firstLargePostClick === '1') && language == 'as'\"\n        [innerHTML]=\"news[language].title\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n      </span>\n      <span\n        *ngIf=\"news[language].title.length >= 40 && language == 'en'\"\n        class=\"latestNews\"\n        >...</span\n      >\n    </div>\n    <button\n      (click)=\"singleNews(news.newsId)\"\n      class=\"categoryButton blinkCat\"\n      *ngIf=\"language != 'as' && !firstLargePostClick && !skip == '1'\"\n    >\n      <div class=\"ripple_effect\"></div>\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"singleNews(news.newsId)\"\n      class=\"categoryButton assameseFont blinkCat\"\n      *ngIf=\"language == 'as' && !firstLargePostClick && !skip == '1'\"\n    >\n      <div class=\"ripple_effect\"></div>\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language]);wrongStatus = true\"\n      class=\"categoryButton\"\n      *ngIf=\"language != 'as' && firstLargePostClick === '1' || skip == '1'\"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language]);wrongStatus = true\"\n      class=\"categoryButton assameseFont\"\n      *ngIf=\"language == 'as' && (firstLargePostClick === '1' || skip == '1')\"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n    <div *ngIf=\"!firstLargePostClick && !skip == '1'\" class=\"tourText\">\n      Click here to read posts of this category!\n    </div>\n  </ion-col>\n</ion-row>\n"

/***/ }),

/***/ "./src/app/large-post/large-post.module.ts":
/*!*************************************************!*\
  !*** ./src/app/large-post/large-post.module.ts ***!
  \*************************************************/
/*! exports provided: LargePostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargePostPageModule", function() { return LargePostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _large_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./large-post.page */ "./src/app/large-post/large-post.page.ts");







var LargePostPageModule = /** @class */ (function () {
    function LargePostPageModule() {
    }
    LargePostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_large_post_page__WEBPACK_IMPORTED_MODULE_6__["LargePostPage"]],
            entryComponents: [
                _large_post_page__WEBPACK_IMPORTED_MODULE_6__["LargePostPage"],
            ],
            exports: [
                _large_post_page__WEBPACK_IMPORTED_MODULE_6__["LargePostPage"],
            ],
        })
    ], LargePostPageModule);
    return LargePostPageModule;
}());



/***/ }),

/***/ "./src/app/large-post/large-post.page.scss":
/*!*************************************************!*\
  !*** ./src/app/large-post/large-post.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsImg {\n  padding: 6px;\n  height: 88px;\n}\n\n.latestPost {\n  padding: 0;\n  height: 195px;\n  background: url('placeholder.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 50%;\n  background-position: center;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n  height: 195px;\n}\n\n.latestpostimg {\n  height: 195px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  bottom: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  font-size: 12px;\n  display: block;\n  margin-top: -12%;\n  background-color: #e41212 !important;\n  color: #fff;\n  padding: 9px 9px;\n  border-radius: 8px;\n  z-index: 1;\n  position: absolute;\n  margin-left: 5%;\n  font-weight: 700;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 22px;\n  font-weight: 800;\n  position: relative;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.blink {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.blinkCat {\n  position: relative;\n}\n\n.ripple_effect {\n  background-color: #fff !important;\n}\n\n.firstTimeBlur {\n  -webkit-filter: blur(5px) grayscale(1);\n          filter: blur(5px) grayscale(1);\n}\n\n.tourText {\n  position: absolute;\n  z-index: 9;\n  text-align: center;\n  background-color: #e41212 !important;\n  font-weight: 900;\n  padding: 10px;\n  border-radius: 10px;\n  top: 100%;\n  font-size: 12px;\n  width: 50vw;\n  color: #fff;\n  left: 10vw;\n}\n\n.tourText:before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 10%;\n  border-bottom: 7px solid #e42310;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n}\n\n.tourText.tourTextTitle {\n  left: 5px;\n  font-size: 12px;\n  top: 10px;\n}\n\n.tourText.tourTextTitle:before {\n  top: 100%;\n  border-top: 7px solid #e42310;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNZRjs7QURWQTtFQUNFLDRCQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2NGOztBRFpBO0VBQ0UsbUJBQUE7QUNlRjs7QURiQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURkQTtFQUNFLHFCQUFBO0VBRUEsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNnQkY7O0FEZEE7RUFDRSxrQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGlDQUFBO0FDa0JGOztBRGhCQTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7QUNtQkY7O0FEakJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7QUNxQkY7O0FEbkJBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDc0JGOztBRHBCQTtFQUNFLFNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDdUJGIiwiZmlsZSI6InNyYy9hcHAvbGFyZ2UtcG9zdC9sYXJnZS1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzSW1nIHtcbiAgcGFkZGluZzogNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG4ubGF0ZXN0UG9zdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTk1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xuICBoZWlnaHQ6IDE5NXB4O1xufVxuLmxhdGVzdHBvc3RpbWcge1xuICBoZWlnaHQ6IDE5NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogLTEyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogOXB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5ibGluayB7XG4gIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcblxuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbi5ibGlua0NhdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yaXBwbGVfZWZmZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmZpcnN0VGltZUJsdXIge1xuICBmaWx0ZXI6IGJsdXIoNXB4KSBncmF5c2NhbGUoMSk7XG59XG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0b3A6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDUwdnc7XG4gIGNvbG9yOiAjZmZmO1xuICBsZWZ0OiAxMHZ3O1xufVxuLnRvdXJUZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjZTQyMzEwO1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi50b3VyVGV4dC50b3VyVGV4dFRpdGxlIHtcbiAgbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogMTBweDtcbn1cbi50b3VyVGV4dC50b3VyVGV4dFRpdGxlOmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4iLCIubmV3c0ltZyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiA4OHB4O1xufVxuXG4ubGF0ZXN0UG9zdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTk1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMTk1cHg7XG59XG5cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRlbnRGZWVkcyB7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNDEyMTIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDlweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZlZWRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVBZ28ge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ibGluayB7XG4gIGJvcmRlcjogNXB4IHJlZCBzb2xpZDtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5ibGlua0NhdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJpcHBsZV9lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maXJzdFRpbWVCbHVyIHtcbiAgZmlsdGVyOiBibHVyKDVweCkgZ3JheXNjYWxlKDEpO1xufVxuXG4udG91clRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MTIxMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0b3A6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDUwdnc7XG4gIGNvbG9yOiAjZmZmO1xuICBsZWZ0OiAxMHZ3O1xufVxuXG4udG91clRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDEwJTtcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG91clRleHQudG91clRleHRUaXRsZSB7XG4gIGxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi50b3VyVGV4dC50b3VyVGV4dFRpdGxlOmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNlNDIzMTA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/large-post/large-post.page.ts":
/*!***********************************************!*\
  !*** ./src/app/large-post/large-post.page.ts ***!
  \***********************************************/
/*! exports provided: LargePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LargePostPage", function() { return LargePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");





var LargePostPage = /** @class */ (function () {
    function LargePostPage(_toastService, router) {
        this._toastService = _toastService;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_2__["config"].mediaApiUrl;
        this.wrongStatus = false;
    }
    LargePostPage.prototype.ngOnInit = function () {
        console.log("news[language].title", this.news[this.language].title);
        console.log('this.news', this.news);
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        console.log("CATSELECT", this.skip);
    };
    LargePostPage.prototype.ionViewWillEnter = function () {
        var alertOnlineStatus = function () {
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
        if (!localStorage.getItem('firstLargePostClick')) {
            console.log("firstLargePostClick");
        }
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        this.skip = localStorage.getItem('skip');
        this.language = localStorage.getItem('language');
        console.log('this.language', this.language);
    };
    LargePostPage.prototype.categoryClick = function (catId, catName) {
        localStorage.setItem('firstLargePostClick', '1');
        this.firstLargePostClick = '1';
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    LargePostPage.prototype.singleNews = function (postid) {
        if (navigator.onLine) {
            if (this.wrongStatus) {
                this.wrongStatus = false;
            }
            else {
                localStorage.setItem('firstLargePostClick', '1');
                this.firstLargePostClick = '1';
                this.router.navigateByUrl('/single-post/' + postid);
            }
        }
        else {
            this._toastService.toastFunction('No internet connnection', 'danger');
        }
    };
    LargePostPage.ctorParameters = function () { return [
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('news'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LargePostPage.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('singleCat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LargePostPage.prototype, "singleCat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('language'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LargePostPage.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('skip'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LargePostPage.prototype, "skip", void 0);
    LargePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-large-post',
            template: __webpack_require__(/*! raw-loader!./large-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/large-post/large-post.page.html"),
            styles: [__webpack_require__(/*! ./large-post.page.scss */ "./src/app/large-post/large-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LargePostPage);
    return LargePostPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~large-post-large-post-module~single-category-single-category-module-es5.js.map