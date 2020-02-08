(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~large-post-large-post-module~single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/large-post/large-post.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/large-post/large-post.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\n  <ion-col size=\"12\" class=\"latestPost\" (click)=\"singleNews(news.newsId)\">\n    <img\n      class=\"latestpostimg blink\"\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"100%\"\n      *ngIf=\"!firstLargePostClick\"\n      width=\"100%\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <img\n      class=\"latestpostimg\"\n      src=\"{{mediaPath}}{{news.newsImage}}\"\n      height=\"100%\"\n      width=\"100%\"\n      *ngIf=\"firstLargePostClick === '1'\"\n      (click)=\"singleNews(news.newsId)\"\n    />\n    <div class=\"textBlock\">\n      <span\n        class=\"latestNews\"\n        *ngIf=\"!firstLargePostClick && language != 'as'\"\n        [innerHTML]=\"news[language].title\"\n      ></span>\n      <span\n        class=\"latestNews assameseFont\"\n        *ngIf=\"!firstLargePostClick && language == 'as'\"\n        [innerHTML]=\"news[language].title\"\n      ></span>\n      <span\n        class=\"latestNews\"\n        *ngIf=\"firstLargePostClick === '1' && language != 'as'\"\n        [innerHTML]=\"news[language].title\"\n      ></span>\n      <span\n        class=\"latestNews assameseFont\"\n        *ngIf=\"firstLargePostClick === '1' && language == 'as'\"\n        [innerHTML]=\"news[language].title\"\n      ></span>\n      <span\n        *ngIf=\"news[language].title.length >= 40 && language == 'en'\"\n        class=\"latestNews\"\n        >...</span\n      >\n    </div>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n      class=\"categoryButton blinkCat\"\n      *ngIf=\"language != 'as' && !firstLargePostClick\"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n      class=\"categoryButton assameseFont blinkCat\"\n      *ngIf=\"language == 'as' && !firstLargePostClick\"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n      class=\"categoryButton\"\n      *ngIf=\"language != 'as' && firstLargePostClick === '1' \"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n    <button\n      (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n      class=\"categoryButton assameseFont\"\n      *ngIf=\"language == 'as' && firstLargePostClick === '1'\"\n    >\n      {{news.newsCategory[language]}}\n    </button>\n  </ion-col>\n</ion-row>\n"

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

module.exports = ".newsImg {\n  padding: 6px;\n  height: 88px;\n}\n\n.latestPost {\n  padding: 0;\n  height: 195px;\n  background: url('spinner.gif');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 50%;\n  background-position: center;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n  height: 195px;\n}\n\n.latestpostimg {\n  height: 195px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  bottom: 35%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.contentFeeds {\n  height: 110px;\n}\n\n.categoryButton {\n  font-size: 13px;\n  display: block;\n  margin-top: -15%;\n  background-color: var(--main-app-color);\n  color: #fff;\n  padding: 5px;\n  border-radius: 8px;\n  z-index: 1;\n  position: absolute;\n  margin-left: 5%;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  position: absolute;\n  font-weight: 600;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 22px;\n  font-weight: 800;\n}\n\n.feeds {\n  margin-bottom: 10px;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.blink {\n  border: 5px red solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.blinkCat {\n  border: 5px #181717 solid;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNXRjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNZRjs7QURWQTtFQUNFLDRCQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNjRjs7QURaQTtFQUNFLG1CQUFBO0FDZUY7O0FEYkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxxQkFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDZ0JGOztBRGRBO0VBQ0UseUJBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ2dCRjs7QURkQTtFQUNFO0lBQ0Usa0JBQUE7RUNpQkY7QUFDRjs7QURwQkE7RUFDRTtJQUNFLGtCQUFBO0VDaUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXJnZS1wb3N0L2xhcmdlLXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3NJbWcge1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogODhweDtcbn1cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiYXNzZXRzL2ltYWdlcy9zcGlubmVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5sYXRlc3RQb3N0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxOTVweDtcbn1cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGVudEZlZWRzIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubmV3c0ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uZmVlZHMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnRpbWVBZ28ge1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYmxpbmsge1xuICBib3JkZXI6IDVweCByZWQgc29saWQ7XG5cbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4uYmxpbmtDYXQge1xuICBib3JkZXI6IDVweCByZ2IoMjQsIDIzLCAyMykgc29saWQ7XG5cbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gIH1cbn1cbiIsIi5uZXdzSW1nIHtcbiAgcGFkZGluZzogNnB4O1xuICBoZWlnaHQ6IDg4cHg7XG59XG5cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxOTVweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiYXNzZXRzL2ltYWdlcy9zcGlubmVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xuICBoZWlnaHQ6IDE5NXB4O1xufVxuXG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMTk1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250ZW50RmVlZHMge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5mZWVkcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYmxpbmsge1xuICBib3JkZXI6IDVweCByZWQgc29saWQ7XG4gIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uYmxpbmtDYXQge1xuICBib3JkZXI6IDVweCAjMTgxNzE3IHNvbGlkO1xuICBhbmltYXRpb246IGJsaW5rIDFzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB9XG59Il19 */"

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




var LargePostPage = /** @class */ (function () {
    function LargePostPage(router) {
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_2__["config"].mediaApiUrl;
    }
    LargePostPage.prototype.ngOnInit = function () {
        console.log("news[language].title", this.news[this.language].title);
        console.log('this.news', this.news);
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
    };
    LargePostPage.prototype.ionViewWillEnter = function () {
        if (!localStorage.getItem('firstLargePostClick')) {
            console.log("firstLargePostClick");
        }
        this.language = localStorage.getItem('language');
        console.log('this.language', this.language);
    };
    LargePostPage.prototype.categoryClick = function (catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    LargePostPage.prototype.singleNews = function (postid) {
        console.log('postid', postid);
        localStorage.setItem('firstLargePostClick', '1');
        this.firstLargePostClick = '1';
        this.router.navigateByUrl('/single-post/' + postid);
    };
    LargePostPage.ctorParameters = function () { return [
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
    LargePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-large-post',
            template: __webpack_require__(/*! raw-loader!./large-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/large-post/large-post.page.html"),
            styles: [__webpack_require__(/*! ./large-post.page.scss */ "./src/app/large-post/large-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LargePostPage);
    return LargePostPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~large-post-large-post-module~single-category-single-category-module-es5.js.map