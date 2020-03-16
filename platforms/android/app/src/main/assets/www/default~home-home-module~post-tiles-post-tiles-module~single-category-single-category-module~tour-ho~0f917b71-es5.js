(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~post-tiles-post-tiles-module~single-category-single-category-module~tour-ho~0f917b71"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/post-tiles/post-tiles.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-tiles/post-tiles.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list\n  lines=\"none\"\n  [ngClass]=\"{'firstTimeBlur': firstTimeBlur, 'isVisited':isPresent}\"\n>\n  <ion-item-sliding class=\"feeds\">\n    <ion-item [ngClass]=\"{'isVisited':isPresent}\">\n      <ion-col size=\"3\" class=\"newsImg\">\n        <div class=\"imageBg\">\n        <img\n          src=\"{{mediaPath}}{{news.newsImage}}\"\n          data-src=\"../../assets/images/placeholder.png'\"\n          onerror=\"this.src='../../assets/images/placeholder.png'\"\n          width=\"100%\"\n          (click)=\"singleNews(news.newsId)\"\n          class=\"loading\"\n        />\n      </div>\n      </ion-col>\n      <ion-col\n        size=\"9\"\n        class=\"postDescription\"\n        (click)=\"singleNews(news.newsId)\"\n      >\n        <div>\n          <span\n            class=\"optionsList\"\n            *ngIf=\"news[language].title\"\n            [ngClass]=\"{'assameseFont': language == 'as'}\"\n            [innerHTML]=\"news[language].title\"\n          ></span>\n          <span\n            class=\"optionsList\"\n            *ngIf=\"!news[language].title\"\n            [innerHTML]=\"news.en.title\"\n          ></span>\n          <span\n            class=\"categoryButton assameseFont\"\n            *ngIf=\"news.newsCategory[language]\"\n            [ngClass]=\"{'assameseFont': language == 'as'}\"\n            (click)=\"categoryClick(news.newsCategoryId,news.newsCategory[language]);wrongStatus = true\"\n            >{{news.newsCategory[language]}}</span\n          >\n          <span\n            class=\"categoryButton\"\n            *ngIf=\"!news.newsCategory[language]\"\n            (click)=\"categoryClick(news.newsCategoryId,news.newsCategory.en);wrongStatus = true\"\n            >{{news.newsCategory.en}}</span\n          >\n        </div>\n      </ion-col>\n    </ion-item>\n  </ion-item-sliding>\n</ion-list>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _post_tiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-tiles.page */ "./src/app/post-tiles/post-tiles.page.ts");







var PostTilesPageModule = /** @class */ (function () {
    function PostTilesPageModule() {
    }
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
    return PostTilesPageModule;
}());



/***/ }),

/***/ "./src/app/post-tiles/post-tiles.page.scss":
/*!*************************************************!*\
  !*** ./src/app/post-tiles/post-tiles.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon.homeBack.md.hydrated {\n  float: left !important;\n  /* margin: 4px; */\n  font-size: 24px;\n  margin-left: 10px;\n}\n\n.newsImg {\n  padding: 0;\n  height: 55px;\n  background: none;\n  background: url('placeholder.png');\n  background-repeat: no-repeat;\n  width: \"100%!important\";\n}\n\n.latestPost {\n  padding: 0;\n}\n\n.latestPost:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n}\n\n.latestpostimg {\n  height: 326px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.textBlock {\n  position: absolute;\n  top: 30%;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n  z-index: 1;\n}\n\n.categoryButton {\n  font-size: 13px;\n  padding-top: 2%;\n  color: var(--main-app-color);\n  border-radius: 8px;\n  z-index: 3333;\n  display: inline-block;\n}\n\n.postDescription {\n  padding-top: 0;\n  padding-left: 13px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  margin-top: 5px;\n  font-weight: 600;\n  font-size: 12px;\n}\n\nimg.likeImage {\n  height: 13px;\n}\n\n.otherInfoSecond span {\n  font-size: 12px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n  font-weight: 700;\n  font-size: 15.5px;\n  display: block;\n}\n\n.newsCat {\n  color: var(--main-app-color);\n}\n\n.latestNews {\n  font-size: 30px;\n  font-weight: 800;\n}\n\n.noBookmark {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.noBookmark img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.timeAgo {\n  opacity: 0.8;\n  font-weight: normal;\n}\n\n.firstTimeBlur {\n  border: 1px solid #f7f7f7;\n  -webkit-filter: blur(7px) grayscale(1);\n          filter: blur(7px) grayscale(1);\n}\n\nion-list {\n  border-bottom: 1px solid #cacaca;\n}\n\n.isVisited {\n  --background: none;\n  background: #ddd;\n}\n\nspan.categoryButton.assameseFont {\n  font-size: 15px !important;\n}\n\nion-col.newsImg.md.hydrated {\n  min-width: 23vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9wb3N0LXRpbGVzL3Bvc3QtdGlsZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wb3N0LXRpbGVzL3Bvc3QtdGlsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDT0Y7O0FETEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUUY7O0FER0E7RUFDRSw0QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0NBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLDBCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXRpbGVzL3Bvc3QtdGlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24uaG9tZUJhY2subWQuaHlkcmF0ZWQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAvKiBtYXJnaW46IDRweDsgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5uZXdzSW1nIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOlwiMTAwJSFpbXBvcnRhbnRcIlxufVxuLmxhdGVzdFBvc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xufVxuLmxhdGVzdHBvc3RpbWcge1xuICBoZWlnaHQ6IDMyNnB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi50ZXh0QmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDMzMzM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wb3N0RGVzY3JpcHRpb257XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG4vLyBpb24tbGlzdHtcbi8vICAgbWluLWhlaWdodDogMTE3cHg7XG4vLyAgIG1heC1oZWlnaHQ6IDExN3B4O1xuLy8gfVxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDEzcHg7XG59XG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNS41cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyAubmV3c0ltZyBpbWcge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA2M3B4O1xuLy8gICBvYmplY3QtZml0OiBjb3Zlcjtcbi8vICAgbWFyZ2luOiBhdXRvO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gfVxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbi5ub0Jvb2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5vQm9va21hcmsgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZpcnN0VGltZUJsdXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIGZpbHRlcjogYmx1cig3cHgpIGdyYXlzY2FsZSgxKTtcbn1cbmlvbi1saXN0e1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhY2FjYTtcbn1cbi5pc1Zpc2l0ZWR7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cbnNwYW4uY2F0ZWdvcnlCdXR0b24uYXNzYW1lc2VGb250IHtcbiAgZm9udC1zaXplOiAxNXB4IWltcG9ydGFudDtcbn1cbmlvbi1jb2wubmV3c0ltZy5tZC5oeWRyYXRlZCB7XG4gIG1pbi13aWR0aDogMjN2dztcbn0iLCJpb24taWNvbi5ob21lQmFjay5tZC5oeWRyYXRlZCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIC8qIG1hcmdpbjogNHB4OyAqL1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubmV3c0ltZyB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNTVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiBcIjEwMCUhaW1wb3J0YW50XCI7XG59XG5cbi5sYXRlc3RQb3N0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxhdGVzdFBvc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xufVxuXG4ubGF0ZXN0cG9zdGltZyB7XG4gIGhlaWdodDogMzI2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGV4dEJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jYXRlZ29yeUJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDMzMzM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3REZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbi5vdGhlckluZm8ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5vdGhlckluZm9TZWNvbmQge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmltZy5saWtlSW1hZ2Uge1xuICBoZWlnaHQ6IDEzcHg7XG59XG5cbi5vdGhlckluZm9TZWNvbmQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5ld3NDYXQge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm5vQm9va21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub0Jvb2ttYXJrIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aW1lQWdvIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZmlyc3RUaW1lQmx1ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y3Zjc7XG4gIGZpbHRlcjogYmx1cig3cHgpIGdyYXlzY2FsZSgxKTtcbn1cblxuaW9uLWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NhY2FjYTtcbn1cblxuLmlzVmlzaXRlZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuc3Bhbi5jYXRlZ29yeUJ1dHRvbi5hc3NhbWVzZUZvbnQge1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbC5uZXdzSW1nLm1kLmh5ZHJhdGVkIHtcbiAgbWluLXdpZHRoOiAyM3Z3O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var PostTilesPage = /** @class */ (function () {
    function PostTilesPage(domSanitizer, _toastService, router) {
        this.domSanitizer = domSanitizer;
        this._toastService = _toastService;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_2__["config"].mediaApiUrl;
        this.wrongStatus = false;
        this.firstTimeBlur = false;
    }
    PostTilesPage.prototype.ionViewWillEnter = function () {
        var alertOnlineStatus = function () {
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
        if (!localStorage.getItem('firstLargePostClick')) {
            console.log("firstLargePostClick");
        }
        console.log('this.language', this.language);
    };
    PostTilesPage.prototype.ngOnInit = function () {
        if (!localStorage.getItem('accessToken') && localStorage.getItem('visitedArray')) {
            this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
            this.isPresent = this.visitedArray.includes(this.news.newsId);
        }
        else {
            this.tokenLocalStorage = localStorage.getItem('accessToken');
            if (this.tokenLocalStorage) {
                var base64Url = this.tokenLocalStorage.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                var decodedToken = JSON.parse(window.atob(base64));
                if (this.news[this.language].userViewed) {
                    if (this.news[this.language].userViewed.includes(decodedToken.user._id)) {
                        this.isPresent = true;
                    }
                }
            }
        }
        // console.log("NEWS IN TILES",this.news.newsId)
        var alertOnlineStatus = function () {
        };
        this.firstLargePostClick = localStorage.getItem('firstLargePostClick');
        this.skip = localStorage.getItem('skip');
        if (!this.firstLargePostClick && !this.skip) {
            this.firstTimeBlur = true;
        }
        this.language = localStorage.getItem('language');
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    };
    PostTilesPage.prototype.categoryClick = function (catId, catName) {
        if (localStorage.getItem('skip') || localStorage.getItem('catModalShow')) {
            this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
        }
    };
    PostTilesPage.prototype.singleNews = function (postid) {
        if (localStorage.getItem('skip') || localStorage.getItem('catModalShow')) {
            if (navigator.onLine) {
                if (this.wrongStatus) {
                    this.wrongStatus = false;
                }
                else {
                    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
                    this.visitedArray.push(postid);
                    localStorage.setItem('isVisited', JSON.stringify(this.visitedArray));
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
    };
    PostTilesPage.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('singleCat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostTilesPage.prototype, "singleCat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('news'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostTilesPage.prototype, "news", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostTilesPage.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('language'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostTilesPage.prototype, "language", void 0);
    PostTilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-tiles',
            template: __webpack_require__(/*! raw-loader!./post-tiles.page.html */ "./node_modules/raw-loader/index.js!./src/app/post-tiles/post-tiles.page.html"),
            styles: [__webpack_require__(/*! ./post-tiles.page.scss */ "./src/app/post-tiles/post-tiles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostTilesPage);
    return PostTilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~post-tiles-post-tiles-module~single-category-single-category-module~tour-ho~0f917b71-es5.js.map