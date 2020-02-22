(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~post-tiles-post-tiles-module~single-category-single-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-tiles/post-tiles.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-tiles/post-tiles.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list lines=\"none\" [ngClass]=\"{'firstTimeBlur': firstTimeBlur}\">\n  <ion-item-sliding class=\"feeds\">\n    <ion-item>\n      <ion-col size=\"3\" class=\"newsImg\" padding>\n        <img\n          src=\"{{mediaPath}}{{news.newsImage}}\"\n          data-src=\"../../assets/images/placeholder.png'\"\n          onerror=\"this.src='../../assets/images/placeholder.png'\"\n          height=\"73px\"\n          width=\"100%\"\n          (click)=\"singleNews(news.newsId)\"\n          class=\"loading\"\n        />\n      </ion-col>\n      <ion-col size=\"9\" class=\"postDescription\" (click)=\"singleNews(news.newsId)\">\n        <div>\n          <span\n            class=\"optionsList\"\n            *ngIf=\"language != 'as'\"\n            [innerHTML]=\"news[language].title | slice:0:50\"\n            (click)=\"singleNews(news.newsId)\"\n          ></span\n          >\n          <span\n            class=\"optionsList assameseFont\"\n            *ngIf=\"language == 'as'\"\n            [innerHTML]=\"news[language].title | slice:0:50\"\n            (click)=\"singleNews(news.newsId)\"\n          ></span\n          >\n          <span\n            (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language]);wrongStatus = true\"\n            class=\"categoryButton\" *ngIf=\"language != 'as' && (firstLargePostClick || skip)\"\n            >{{news.newsCategory[language]}}</span\n          >\n          <span\n            (click)=\"categoryClick(news.newsCategoryId, news.newsCategory[language])\"\n            class=\"categoryButton assameseFont\" *ngIf=\"language == 'as' && (firstLargePostClick || skip)\"\n            >{{news.newsCategory[language]}}</span\n          >\n          <span\n            (click)=\"singleNews(news.newsId)\"\n            class=\"categoryButton assameseFont\" *ngIf=\"language == 'as' && !firstLargePostClick && !skip\"\n            >{{news.newsCategory[language]}}</span\n          >\n          <span\n            (click)=\"singleNews(news.newsId)\"\n            class=\"categoryButton\" *ngIf=\"language != 'as' && !firstLargePostClick && !skip\"\n            >{{news.newsCategory[language]}}</span\n          >\n        </div>\n      </ion-col>\n    </ion-item>\n  </ion-item-sliding>\n</ion-list>"

/***/ }),

/***/ "./src/app/post-tiles/post-tiles.module.ts":
/*!*************************************************!*\
  !*** ./src/app/post-tiles/post-tiles.module.ts ***!
  \*************************************************/
/*! exports provided: PostTilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTilesPageModule", function() { return PostTilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _post_tiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-tiles.page */ "./src/app/post-tiles/post-tiles.page.ts");







let PostTilesPageModule = class PostTilesPageModule {
};
PostTilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        declarations: [_post_tiles_page__WEBPACK_IMPORTED_MODULE_6__["PostTilesPage"]],
        entryComponents: [
            _post_tiles_page__WEBPACK_IMPORTED_MODULE_6__["PostTilesPage"],
        ],
        exports: [
            _post_tiles_page__WEBPACK_IMPORTED_MODULE_6__["PostTilesPage"],
        ],
    })
], PostTilesPageModule);



/***/ }),

/***/ "./src/app/post-tiles/post-tiles.page.scss":
/*!*************************************************!*\
  !*** ./src/app/post-tiles/post-tiles.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  /* margin: 4px; */\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  padding: 0;\n  height: 57px;\n  min-width: 98px;\n  background: url('placeholder.png');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: 50%;\n  background-position: center;\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.categoryButton {\n  font-size: 13px;\n  margin-top: 2%;\n  color: var(--main-app-color);\n  padding: 10px 16px;\n  border-radius: 8px;\n  z-index: 3333;\n  display: inline-block;\n}\n\n.postDescription {\n  padding-top: 0;\n  padding-left: 13px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 12px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n  display: block;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n  border-radius: 6px;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.noBookmark {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.noBookmark img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.firstTimeBlur {\n  border: 1px solid #f7f7f7;\n  -webkit-filter: blur(7px) grayscale(1);\n          filter: blur(7px) grayscale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9wb3N0LXRpbGVzL3Bvc3QtdGlsZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0LXRpbGVzL3Bvc3QtdGlsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNPRjs7QURMQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ1FGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNRRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QUROQTtFQUNFLDRCQUFBO0FDU0Y7O0FETkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNXRjs7QURUQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ1lGOztBRFZBO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXRpbGVzL3Bvc3QtdGlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24uaG9tZUJhY2subWQuaHlkcmF0ZWQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW46IDRweDsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uZXdzSW1nIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBtaW4td2lkdGg6IDk4cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xufVxuLmxhdGVzdHBvc3RpbWcge1xuICBoZWlnaHQ6IDMyNnB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAzMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucG9zdERlc2NyaXB0aW9ue1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuLy8gaW9uLWxpc3R7XG4vLyAgIG1pbi1oZWlnaHQ6IDExN3B4O1xuLy8gICBtYXgtaGVpZ2h0OiAxMTdweDtcbi8vIH1cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5pbWcubGlrZUltYWdlIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5uZXdzQ2F0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ubm9Cb29rbWFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ub0Jvb2ttYXJrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG4udGltZUFnbyB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5maXJzdFRpbWVCbHVye1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBmaWx0ZXI6IGJsdXIoN3B4KSBncmF5c2NhbGUoMSk7XG59XG4iLCJpb24taWNvbi5ob21lQmFjay5tZC5oeWRyYXRlZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC8qIG1hcmdpbjogNHB4OyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmV3c0ltZyB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNTdweDtcbiAgbWluLXdpZHRoOiA5OHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGF0ZXN0UG9zdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5sYXRlc3Rwb3N0aW1nIHtcbiAgaGVpZ2h0OiAzMjZweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhdGVnb3J5QnV0dG9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDMzMzM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3REZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm5vQm9va21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub0Jvb2ttYXJrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZmlyc3RUaW1lQmx1ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIGZpbHRlcjogYmx1cig3cHgpIGdyYXlzY2FsZSgxKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/post-tiles/post-tiles.page.ts":
/*!***********************************************!*\
  !*** ./src/app/post-tiles/post-tiles.page.ts ***!
  \***********************************************/
/*! exports provided: PostTilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTilesPage", function() { return PostTilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");





let PostTilesPage = class PostTilesPage {
    constructor(_toastService, router) {
        this._toastService = _toastService;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_2__["config"].mediaApiUrl;
        this.wrongStatus = false;
        this.firstTimeBlur = false;
    }
    ionViewWillEnter() {
        const alertOnlineStatus = () => {
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
        if (!localStorage.getItem('firstLargePostClick')) {
            console.log("firstLargePostClick");
        }
        console.log('this.language', this.language);
    }
    ngOnInit() {
        const alertOnlineStatus = () => {
        };
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        this.skip = localStorage.getItem('skip');
        if (!this.firstLargePostClick && !this.skip) {
            this.firstTimeBlur = true;
        }
        this.language = localStorage.getItem('language');
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    }
    categoryClick(catId, catName) {
        if (localStorage.getItem('skip')) {
            this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
        }
    }
    singleNews(postid) {
        if (localStorage.getItem('skip')) {
            if (navigator.onLine) {
                if (this.wrongStatus) {
                    this.wrongStatus = false;
                }
                else {
                    localStorage.setItem('firstLargePostClick', '1');
                    // localStorage.setItem('skip', '1')
                    console.log('postid', postid);
                    this.router.navigateByUrl('/single-post/' + postid);
                }
            }
            else {
                this._toastService.toastFunction('No internet connnection', 'danger');
            }
        }
    }
};
PostTilesPage.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('singleCat'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PostTilesPage.prototype, "singleCat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('news'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PostTilesPage.prototype, "news", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('language'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PostTilesPage.prototype, "language", void 0);
PostTilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-tiles',
        template: __webpack_require__(/*! raw-loader!./post-tiles.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-tiles/post-tiles.page.html"),
        styles: [__webpack_require__(/*! ./post-tiles.page.scss */ "./src/app/post-tiles/post-tiles.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PostTilesPage);



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~post-tiles-post-tiles-module~single-category-single-category-module-es2015.js.map