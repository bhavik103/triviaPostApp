(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\t<ion-toolbar *ngIf=\"!bookMark && !catTitle && !searchKey\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/allcategory\" (click)=\"removeJs()\"></ion-icon>\n\t\t\t<ion-title style=\"text-align: center;margin-right: 15px;\">Trivia Post</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar *ngIf=\"bookMark\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/bookmarks\" (click)=\"removeJs()\"></ion-icon>\n\t\t<ion-title>\n\t\t\tBookmarked News\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar *ngIf=\"catTitle\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/allcategory\" (click)=\"removeJs()\"></ion-icon>\n\t\t<ion-title>\n\t\t\t{{catTitle}}\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar *ngIf=\"searchKey\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/searchBar\" (click)=\"removeJs()\"></ion-icon>\n\t\t\tResults for {{searchKey}}\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!loading && !isTextVisible\">\n\t<div class=\"swiper-container swiper-container-v \">\n\t\t<div class=\"swiper-wrapper \">\n\t\t\t<div class=\"swiper-slide background\" *ngFor=\"let news of newsArray; let i = index\" id={{news.newsId}}\n\t\t\t\tstyle=\"padding:15px\">\n\t\t\t\t<div class=\"swiper-container swiper-container-h \" id=\"swiper-h-{{news.newsId}}\">\n\t\t\t\t\t<div class=\"swiper-wrapper\" id=\"swiper-wrapper{{i}}\">\n\t\t\t\t\t\t<div class=\"page_slider swiper-slide newsId-{{news.newsId}} \"\n\t\t\t\t\t\t\tstyle=\"background-color: transparent\" id=\"page_slider{{i}}\">\n\t\t\t\t\t\t\t<div class='content' style=\"position: relative\">\n\t\t\t\t\t\t\t\t<div id=\"sliderContent{{i}}\">\n\t\t\t\t\t\t\t\t\t<!-- Title & Logo -->\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"language == 'English'\" class=\"news-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{news.newsTitleEnglish}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"language == 'Hindi'\" class=\"news-title\" style=\"font-size: 27px\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{news.newsTitleHindi}}</p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/Logo.png\" style=\"height: 110px\" />\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t\t<!-- Post Image -->\n\t\t\t\t\t\t\t\t\t<div class=\"post_img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{mediaPath}}{{news.newsImage}}\" style=\"height:350px !important;\" />\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t\t\t<div class=\"contentPost\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsEnglish\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"hindi-news\" *ngIf=\"language == 'Hindi'\"\n\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"news.newsHindi\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Bookmark -->\n\t\t\t\t\t<div style=\"position: absolute; bottom: 0px;z-index: 28;\">\n\t\t\t\t\t\t<img src=\"assets/images/Bookmarks.png\" class=\"bookmark\" *ngIf=\"!news.bookmarkKey\"\n\t\t\t\t\t\t\t(click)=\"bookmark(i)\" />\n\t\t\t\t\t\t<img src=\"assets/images/Bookmark.png\" class=\"bookmark\" *ngIf=\"news.bookmarkKey\"\n\t\t\t\t\t\t\t(click)=\"bookmark(i)\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Share button -->\n\t\t\t\t\t<div class=\"share-button\" *ngIf=\"language == 'English'\"\n\t\t\t\t\t\t(click)=\"sharePost(news.newsId, news.newsTitleEnglish)\">\n\t\t\t\t\t\t<img src=\"../../assets/images/Share.png\" class=\"icon\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"share-button\" *ngIf=\"language == 'Hindi'\"\n\t\t\t\t\t\t(click)=\"sharePost(news.newsId, news.newsTitleHindi)\">\n\t\t\t\t\t\t<img src=\"../../assets/images/Share.png\" class=\"icon\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"swiper-pagination swiper-pagination-h\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"swiper-pagination swiper-pagination-v\"></div> -->\n\t</div>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n\t<div class=\"loader\">Loading...</div>\n</ion-content>\n<ion-content *ngIf=\"isTextVisible\">\n\t<div class=\"no-news-text\">\n\t\t<span>{{text}}</span>\n\t</div>\n</ion-content>"

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







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
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

module.exports = ".homeBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-card {\n  border: 1px solid blue;\n  box-shadow: 0 2px 3px -4px blue;\n}\n\n.post_img {\n  width: 100%;\n  height: 200px !important;\n  padding: 0 20px;\n  overflow: hidden;\n  margin: auto;\n}\n\n.post_img img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: #c21c00;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 1;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.background {\n  background-image: url('Brown-Background.png') !important;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0 12px !important;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 25px;\n  color: black;\n  text-align: left;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n\nion-header ion-toolbar:first-child {\n  --background: #E7DBC6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvdHJpdmlhcG9zdC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEY0E7RUFDRSxzQkFBQTtFQUdBLCtCQUFBO0FDWEY7O0FEYUU7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVko7O0FEWUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURXRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDUko7O0FEVUM7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQRjs7QURTQztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05IOztBRFFBO0VBQ0Usd0RBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNMRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSkY7O0FETUE7RUFDRSxZQUFBO0VBQ0QsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNIRDs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxnQ0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltZy5pY29ue1xuLy8gICBoZWlnaHQ6IDIwcHg7XG4vLyAgIHdpZHRoOiAxN3B4O1xuLy8gICBtYXJnaW46IDAgMTJweFxuLy8gfVxuXG4uaG9tZUJhY2t7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgIC0tY29sb3I6IGJsYWNrO1xuLy8gICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9Ccm93bi1CYWNrZ3JvdW5kLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkXG4vLyB9XG5cblxuaW9uLWNhcmR7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IC0zcHggYmx1ZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xuICB9XG4gIC5wb3N0X2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MCAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5wb3N0X2ltZyBpbWd7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnNoYXJlLWJ1dHRvbntcbiAgICB3aWR0aDo0MHB4O1xuICAgIGhlaWdodDo0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjFjMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFweDtcbiAgICByaWdodDoxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiBpbWcuaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuIH1cbiBpbWcuYm9va21hcmt7XG4gICBoZWlnaHQ6IDMwcHg7XG4gICB3aWR0aDogMjBweDtcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgei1pbmRleDogMTExMTExMTtcbiB9XG4uYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Ccm93bi1CYWNrZ3JvdW5kLnBuZ1wiKSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDAgMTJweCAhaW1wb3J0YW50O1xufVxuLm5ld3MtdGl0bGV7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjpibGFjaztcbiAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuLm5vLW5ld3MtdGV4dHtcbiAgaGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnRQb3N0e1xuICB0ZXh0LWFsaWduOmxlZnQ7XG59XG4ubm8tbmV3cy10ZXh0IHNwYW57XG4gIGZvbnQtc2l6ZTozNXB4O1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRTdEQkM2ICFpbXBvcnRhbnQ7XG59IiwiLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IC0zcHggYmx1ZTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggLTRweCBibHVlO1xufVxuXG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWMwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cblxuaW1nLmljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuaW1nLmJvb2ttYXJrIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9Ccm93bi1CYWNrZ3JvdW5kLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAwIDEycHggIWltcG9ydGFudDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudFBvc3Qge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubm8tbmV3cy10ZXh0IHNwYW4ge1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6ICNFN0RCQzYgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");













let HomePage = class HomePage {
    constructor(route, screenOrientation, platform, socialSharing, toastController, deeplinks, fcm, _newsService, _categoryService, router, keyboard) {
        this.route = route;
        this.screenOrientation = screenOrientation;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.toastController = toastController;
        this.deeplinks = deeplinks;
        this.fcm = fcm;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.keyboard = keyboard;
        this.newsArray = [];
        this.error = '';
        this.isVisible = false;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
        this.loading = false;
        this.horizontalSwipers = [];
        this.isTextVisible = false;
        this.isCalled = false;
        this.bookMark = false;
    }
    ngAfterViewInit() {
    }
    ionViewWillEnter() {
        setTimeout(function () {
            $('p').each(function () {
                var $this = $(this);
                if ($this.html().replace(/\s|&nbsp;/g, '').length == 0) {
                    $this.remove();
                }
            });
        }, 2000);
        setTimeout(function () {
            $('.news-title').each(function () {
                var $text = $(this).text();
                if ($text.length > 70) {
                    $text = $text.substring(0, 70);
                    $(this).text($text + '...');
                }
            });
        }, 2000);
        setTimeout(function () {
            console.log("ReInitializing swiper");
            $('#scriptid').remove();
            var script = document.createElement('script');
            script.setAttribute('id', 'scriptid');
            script.src = "assets/js/swiper.js";
            document.body.appendChild(script);
        }, 2000);
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        this.fcmToken();
        this.startCurrentPolling();
        console.log("this.language---------->", this.language);
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
            if (data.wasTapped) {
                console.log(data);
            }
            else {
            }
        });
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        //  Deeplinks
        this.deeplinks.route({
            '/': {},
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            this.router.navigate(['home/single-news/' + match.$args.id]);
        }, (nomatch) => {
            alert("UnMatched" + nomatch);
        });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ngOnInit() {
        this.loading = true;
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.route.params.subscribe(param => {
                if (this.router.url.includes('bookmark')) {
                    this.router.navigate(['bookmarks']);
                }
                else if (this.router.url.includes('category')) {
                    this.router.navigate(['allcategory']);
                }
                else if (this.router.url.includes('single-news')) {
                    this.router.navigate(['allcategory']);
                }
                else if (this.router.url.includes('search-news')) {
                }
                else {
                    navigator['app'].exitApp();
                }
            });
        }));
        console.log("in ngonoinit=============");
        this.startCurrentPolling();
        this.language = localStorage.language;
        this.height = this.platform.height();
        this.width = this.platform.width();
        this.route.params.subscribe(param => {
            if (this.router.url.includes('bookmark')) {
                this.bookMark = true;
                this.bookmarkedNews();
            }
            else if (this.router.url.includes('category')) {
                this.catTitle = param.catTitle;
                this.catNews(param.id);
            }
            else if (this.router.url.includes('single-news')) {
                this.getSingleNews(param.id);
            }
            else if (this.router.url.includes('search-news')) {
                this.searchNews(param.key);
            }
            else {
                this.getNews();
            }
        });
        console.log("Language = " + this.language);
        console.log("plateform======>", this.platform.platforms());
        console.log('Width=========: ' + this.platform.width());
        console.log('Height==: ' + this.platform.height(), this.language);
        console.log("newsArray==>", this.newsArray);
    }
    removeJs() {
        console.log("remove js calll============>");
        $('#scriptid').remove();
    }
    /**
     * get Single news
     */
    getSingleNews(id) {
        console.log("this.id", id);
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        console.log(userId);
        this._newsService.getSingleNews(id).subscribe((res) => {
            console.log("this.single", res);
            this.newsArray = res;
            this.getNews();
            console.log("for-----------------", this.newsArray);
            console.log(this.newsArray);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    /**
     * Searched result
     */
    searchNews(key) {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.searchedNews(key).subscribe((res) => {
            this.keyboard.hide();
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    bookmarkedNews() {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.newsArray = [];
            this.loading = false;
            if (!res.post.length) {
                console.log("res in if=======>", res);
                this.isTextVisible = true;
                this.text = "There are no news yet...";
            }
            this.newsArray = res.post;
            if (this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.newsArray, (save) => {
                    save['bookmarkKey'] = true;
                });
            }
            console.log(this.newsArray);
            this.buildForSwiper();
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    catNews(id) {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.allCatNews(id).subscribe((res) => {
            console.log("res of cat news", res);
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //get all news
    getNews() {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe((res) => {
            this.route.params.subscribe(param => {
                if (!this.router.url.includes('single-news')) {
                    this.loadNewsToPage(res, userId);
                }
                else {
                    this.appendSinleNews(res, userId);
                }
            });
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    appendSinleNews(res, userId) {
        this.loading = false;
        if (!res.length) {
            console.log("res in if=======>", res);
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.appendedNews = res;
        console.log("this.app", this.appendedNews, this.newsArray);
        lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.appendedNews, (news, index) => {
            console.log("id in foreach=========>", news.newsId);
            if (news.newsId == this.appendedNews.newsId) {
                this.appendedNews.splice(index, 1);
            }
        });
        this.newsArray = this.appendedNews;
        if (this.tokenLocalStorage) {
            lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.newsArray, (save) => {
                console.log("in foreach======>", save);
                lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](save.bookMark, (Id) => {
                    if (Id == userId) {
                        console.log("in loadNewsArray bookmark===========>", this.newsArray);
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.buildForSwiper();
    }
    checkForToken() {
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    loadNewsToPage(res, userId) {
        this.newsArray = [];
        this.loading = false;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.newsArray = res;
        if (this.tokenLocalStorage) {
            lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.newsArray, (save) => {
                lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.buildForSwiper();
    }
    buildForSwiper() {
        console.log("in buildfunction========================");
        for (let i = 0; i < this.newsArray.length; i++) {
            console.log("Slider", "New news for building news letter ", i);
            $(function () {
                var window_height = $(document).height() * 0.66;
                var content_height = window_height;
                function buildNewsletter() {
                    if ($('#sliderContent' + i).contents().length > 0) {
                        console.log("Slider", "ENTERED INTO IF STATEMENT");
                        let page = $("#page_slider" + i).clone().addClass("swiper-slide").css("display", "block");
                        $(".swiper-container-h > #swiper-wrapper" + i).append(page);
                        $(".swiper-container-h > #swiper-wrapper" + i + "> .page_slider:first-child").css("display", "none");
                        $('#sliderContent' + i).columnize({
                            columns: 1,
                            target: "#swiper-wrapper" + i + " .swiper-slide:last .content",
                            overflow: {
                                height: content_height,
                                id: "#sliderContent" + i,
                                doneFunc: function () {
                                    buildNewsletter();
                                }
                            },
                        });
                    }
                    else {
                        console.log("in else condition================>");
                    }
                }
                setTimeout(buildNewsletter, 400);
            });
        }
    }
    bookmark(index) {
        console.log("in book mark=========>", index, this.newsArray[index]);
        this._newsService.bookmarkPost(this.newsArray[index].newsId).subscribe((res) => {
            console.log("res of bookmark================>", res);
            this.newsArray[index].bookmarkKey = !this.newsArray[index].bookmarkKey;
            console.log("bookmarkkey value", index, this.newsArray[index].bookmarkKey);
            this.toast = this.toastController.create({
                message: res.message,
                duration: 2000,
                color: 'success'
            }).then((toastData) => {
                toastData.present();
            });
        }, err => {
            console.log('err===========>', err.error.message);
            this.toast = this.toastController.create({
                message: err.error.message,
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        });
    }
    sharePost(id, newsTitle) {
        console.log("in sharepost=========>", id, newsTitle);
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
            console.log('success ' + JSON.stringify(entries));
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    startCurrentPolling() {
        var that = this;
        setInterval(function () {
            if (that.currentPostId != localStorage.currentPostId) {
                that.currentPostId = localStorage.currentPostId;
                that.newPostView(that.currentPostId);
            }
        }, 500);
    }
    newPostView(postId) {
        console.log("Post Change Detected in home.page.ts", this.currentPostId);
        postId = this.currentPostId.split("-")[1];
        console.log("postId======>", postId);
        this.data = {
            postId: postId,
            postType: localStorage.language
        };
        console.log("data======>", this.data);
        this.newsCount(this.data);
    }
    newsCount(detail) {
        this._newsService.newsCount(detail).subscribe((res) => {
            console.log("res of viewcount", res);
        }, err => {
            console.log(err);
        });
    }
    fcmToken() {
        this.fcm.getToken().then(token => {
            console.log("Device", token);
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            console.log("Device", token);
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['settings']);
            alert(JSON.stringify(data));
            if (data.wasTapped) {
                console.log('Received in background');
            }
            else {
                console.log('Received in foreground');
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map