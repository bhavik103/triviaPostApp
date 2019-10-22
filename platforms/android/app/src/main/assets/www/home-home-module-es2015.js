(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n\t<ion-toolbar *ngIf=\"!bookMark && !catTitle && !searchKey\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/allcategory\"></ion-icon>\n\t\t<ion-title style=\"text-align: center;margin-right: 15px;\">Trivia Post</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar *ngIf=\"bookMark\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/bookmarks\"></ion-icon>\n\t\t<ion-title>\n\t\t\tBookmarked News\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar *ngIf=\"catTitle\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/allcategory\"></ion-icon>\n\t\t<ion-title>\n\t\t\t{{catTitle}}\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<ion-toolbar *ngIf=\"searchKey\">\n\t\t<ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/searchBar\"></ion-icon>\n\t\tResults for \"{{searchKey}}\"\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content id=\"homepage-ion-content\" *ngIf=\"!loading && !isTextVisible\">\n\t<div class=\"swiper-container swiper-container-v \">\n\t\t<div class=\"swiper-wrapper \">\n\t\t\t<div class=\"swiper-slide background\" *ngFor=\"let news of newsArray; let i = index; last as isLast\"\n\t\t\t\tid={{news.newsId}} style=\"padding:15px\" (swipeup)=\"swipeevent($event,i)\">\n\t\t\t\t<div class=\"swiper-container swiper-container-h \" id=\"swiper-h-{{news.newsId}}\" >\n\t\t\t\t\t<div class=\"swiper-wrapper\" id=\"swiper-wrapper{{i}}\" >\n\t\t\t\t\t\t<div class=\"page_slider swiper-slide newsId-{{news.newsId}} \"\n\t\t\t\t\t\t\tstyle=\"background-color: transparent\" id=\"page_slider{{i}}\">\n\t\t\t\t\t\t\t<div class='content' style=\"position: relative\">\n\t\t\t\t\t\t\t\t<div id=\"sliderContent{{i}}\">\n\t\t\t\t\t\t\t\t\t<!-- Title & Logo -->\n\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"language == 'English'\" class=\"news-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{news.newsTitleEnglish | slice:0:70}}<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"news.newsTitleEnglish.length >= 56\">...</span></p>\n\t\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"language == 'Hindi'\" class=\"news-title\" style=\"font-size: 27px\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{news.newsTitleHindi | slice:0:70}}<span\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"news.newsTitleHindi.length >= 56\">...</span></p>\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../assets/images/Logo.png\" style=\"height: 75px\" />\n\t\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t</ion-row>\n\n\t\t\t\t\t\t\t\t\t<!-- Post Image -->\n\t\t\t\t\t\t\t\t\t<div class=\"post_img\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{mediaPath}}{{news.newsImage}}\" />\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- Content -->\n\t\t\t\t\t\t\t\t\t<div class=\"contentPost\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsEnglish\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"hindi-news\" *ngIf=\"language == 'Hindi'\"\n\t\t\t\t\t\t\t\t\t\t\t[innerHTML]=\"news.newsHindi\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Bookmark -->\n\t\t\t\t\t<div style=\"position: absolute; bottom: 0px;z-index: 28;\">\n\t\t\t\t\t\t<img src=\"assets/images/Bookmarks1.png\" class=\"bookmark\" *ngIf=\"!news.bookmarkKey\"\n\t\t\t\t\t\t\t(click)=\"bookmark(i)\" />\n\t\t\t\t\t\t<img src=\"assets/images/Bookmark.png\" class=\"bookmark\" *ngIf=\"news.bookmarkKey\"\n\t\t\t\t\t\t\t(click)=\"bookmark(i)\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Share button -->\n\t\t\t\t\t<div class=\"share-button\" *ngIf=\"language == 'English'\"\n\t\t\t\t\t\t(click)=\"sharePost(news.newsId, news.newsTitleEnglish)\">\n\t\t\t\t\t\t<img src=\"../../assets/images/Share.png\" class=\"icon\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"share-button\" *ngIf=\"language == 'Hindi'\"\n\t\t\t\t\t\t(click)=\"sharePost(news.newsId, news.newsTitleHindi)\">\n\t\t\t\t\t\t<img src=\"../../assets/images/Share.png\" class=\"icon\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"swiper-pagination swiper-pagination-h\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"swiper-pagination swiper-pagination-v\"></div> -->\n\t</div>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n\t<div id=\"loader-wrapper\">\n\t\t<div id=\"loader\">\n\t\t\t<span class=\"logo_container\">\n\t\t\t\t<img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n\t\t\t</span>\n\t\t\t<div class=\"ml-loader\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t\t<p class=\"text-center\">Loding Data...</p>\n\t\t</div>\n\t</div>\n</ion-content>\n<ion-content *ngIf=\"isTextVisible\">\n\t<div class=\"no-news-text\">\n\t\t<span>{{text}}</span>\n\t</div>\n</ion-content>"

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

module.exports = ".homeBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-card {\n  border: 1px solid blue;\n  box-shadow: 0 2px 3px -4px blue;\n}\n\n.post_img img {\n  height: 130px;\n  width: 100%;\n}\n\n.post_img {\n  width: 100%;\n  padding-top: 35%;\n  overflow: hidden;\n  position: relative;\n}\n\n.post_img img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.share-button {\n  width: 40px;\n  height: 40px;\n  background-color: #c21c00;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 1px;\n  right: 10px;\n  z-index: 9999;\n}\n\nimg.icon {\n  height: 20px;\n  width: 20px;\n  margin-top: 10px;\n  margin-left: -3px;\n}\n\nimg.bookmark {\n  height: 30px;\n  width: 20px;\n  margin-left: 10px;\n  z-index: 1111111;\n}\n\n.news-title {\n  margin: auto;\n  font-size: 14pt;\n  color: black;\n  text-align: left;\n}\n\n.no-news-text {\n  height: 100%;\n  width: 100%;\n  background: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.contentPost {\n  text-align: left;\n}\n\n.no-news-text span {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbmV3L3RyaXZpYXBvc3Qvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRGFBO0VBQ0Usc0JBQUE7RUFHQSwrQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNWRjs7QURZQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNURjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDUkY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQRjs7QURTQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05GOztBRGNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURhQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1ZGOztBRFlBO0VBQ0UsZ0JBQUE7QUNURjs7QURXQTtFQUNFLGVBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbWcuaWNvbntcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICB3aWR0aDogMTdweDtcbi8vICAgbWFyZ2luOiAwIDEycHhcbi8vIH1cblxuLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4vLyBpb24tY29udGVudHtcbi8vICAgLS1jb2xvcjogYmxhY2s7XG4vLyAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL0Jyb3duLUJhY2tncm91bmQucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWRcbi8vIH1cblxuaW9uLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDNweCAtM3B4IGJsdWU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggM3B4IC00cHggYmx1ZTtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IC00cHggYmx1ZTtcbn1cblxuLnBvc3RfaW1nIGltZ3tcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDM1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9zdF9pbWcgaW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWMwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cbmltZy5pY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG59XG5pbWcuYm9va21hcmsge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgei1pbmRleDogMTExMTExMTtcbn1cbi8vIC5iYWNrZ3JvdW5ke1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0Jyb3duLUJhY2tncm91bmQucG5nXCIpIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgcGFkZGluZzogMCAxMnB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4ubmV3cy10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxNHB0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubm8tbmV3cy10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnRQb3N0e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufSIsIi5ob21lQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDNweCAtM3B4IGJsdWU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggM3B4IC00cHggYmx1ZTtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IC00cHggYmx1ZTtcbn1cblxuLnBvc3RfaW1nIGltZyB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdF9pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDM1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9zdF9pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc2hhcmUtYnV0dG9uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMWMwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaW1nLmljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuaW1nLmJvb2ttYXJrIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDExMTExMTE7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRQb3N0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5vLW5ld3MtdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufSJdfQ== */"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
















let HomePage = class HomePage {
    constructor(network, route, screenOrientation, platform, socialSharing, toastController, deeplinks, fcm, _newsService, _categoryService, router, keyboard) {
        this.network = network;
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
        this.horizontalSwipers = [];
        this.error = '';
        this.isVisible = false;
        this.loading = false;
        this.isTextVisible = false;
        this.isCalled = false;
        this.bookMark = false;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
    }
    // Event Listeners
    ngOnInit() {
        console.warn("ngOnInit");
        this.loading = true;
        this.viewInitFunctions();
        this.backButtonFunction();
        this.checkForCurrentSlideFromLocalStorage();
        this.language = localStorage.language;
        this.route.params.subscribe((param) => {
            this.pageContent(this.router.url, param);
        });
    }
    ngOnExit() {
        console.warn("ngOnExit");
    }
    ionViewDidLeave() {
        console.warn("ionViewDidLeave");
        $("#homepage-ion-content").html("");
        delete this.newsArray;
        console.warn("Removing homepage-ion-content", $("#homepage-ion-content").html());
        this.removeSwiperJs();
    }
    viewInitFunctions() {
        this.removeSwiperJs();
        this.notifyflag = localStorage.getItem('notification');
        this.language = localStorage.language;
        // Notification
        this.fcmToken();
        this.checkForCurrentSlideFromLocalStorage();
        if (!this.notifyflag) {
            localStorage.setItem('notification', 'true');
        }
        this.notificationTapped();
        // Screen Orientation Lock
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        //  Deeplinks
        this.deeplinks.route({
            '/': {},
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            this.router.navigate(['home/single-news/' + match.$args.id]);
        }, (nomatch) => {
            // alert("UnMatched" + nomatch);
        });
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
    }
    ionViewWillEnter() {
        this.loading = true;
        setTimeout(() => {
            $('#snackbar').show();
        }, 3000);
        this.checkforInternet();
    }
    //check for internet
    checkforInternet() {
        // // Check Internet conectivity
        var offline = rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"].fromEvent(document, "offline");
        var online = rxjs__WEBPACK_IMPORTED_MODULE_13__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this.toast = this.toastController.create({
                message: 'No internet connection',
                animated: true,
                duration: 2000,
                showCloseButton: true,
                closeButtonText: "OK",
                cssClass: "my-toast",
                position: "bottom",
                color: "danger"
            }).then((obj) => {
                obj.present();
            });
        });
        online.subscribe(() => {
            this.toastController.dismiss();
            this.hide = true;
        });
    }
    // ion-content RESET 
    doRefill() {
        console.log("Reseting ion-html");
        $(document).ready(() => {
            $("#homepage-ion-content").html("");
            console.log("ion-content before loading html ", $("#homepage-ion-content").html());
            $("#homepage-ion-content").html(this.refillIonContent());
            console.log("ion-content After loading html ", $("#homepage-ion-content").html());
        });
    }
    refillIonContent() {
        return `<div class="swiper-container swiper-container-v ">
        <div class="swiper-wrapper ">
        <div class="swiper-slide background" *ngFor="let news of newsArray; let i = index" id={{news.newsId}}
        style="padding:15px">
        <div class="swiper-container swiper-container-h " id="swiper-h-{{news.newsId}}">
        <div class="swiper-wrapper" id="swiper-wrapper{{i}}">
        <div class="page_slider swiper-slide newsId-{{news.newsId}} "
        style="background-color: transparent" id="page_slider{{i}}">
        <div class='content' style="position: relative">
        <div id="sliderContent{{i}}">
        <!-- Title & Logo -->
        <ion-row>
        <ion-col size="8">
        <p *ngIf="language == 'English'" class="news-title">
        {{news.newsTitleEnglish | slice:0:55}}...</p>
        <p *ngIf="language == 'Hindi'" class="news-title" style="font-size: 27px">
        {{news.newsTitleHindi | slice:0:55}}...</p>
        </ion-col>
        <ion-col size="4">
        <img src="../../assets/images/Logo.png" style="height: 110px" />
        </ion-col>
        </ion-row>
        <!-- Post Image -->
        <div class="post_img">
        <img src="{{mediaPath}}{{news.newsImage}}" style="height:350px !important;" />
        </div>
        <!-- Content -->
        <div class="contentPost">
        <div *ngIf="language == 'English'" [innerHTML]="news.newsEnglish">
        </div>
        <div class="hindi-news" *ngIf="language == 'Hindi'"
        [innerHTML]="news.newsHindi">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <!-- Bookmark -->
        <div style="position: absolute; bottom: 0px;z-index: 28;">
        <img src="assets/images/Bookmarks.png" class="bookmark" *ngIf="!news.bookmarkKey"
        (click)="bookmark(i)" />
        <img src="assets/images/Bookmark.png" class="bookmark" *ngIf="news.bookmarkKey"
        (click)="bookmark(i)" />
        </div>
        <!-- Share button -->
        <div class="share-button" *ngIf="language == 'English'"
        (click)="sharePost(news.newsId, news.newsTitleEnglish)">
        <img src="../../assets/images/Share.png" class="icon" />
        </div>
        <div class="share-button" *ngIf="language == 'Hindi'"
        (click)="sharePost(news.newsId, news.newsTitleHindi)">
        <img src="../../assets/images/Share.png" class="icon" />
        </div>
        <div class="swiper-pagination swiper-pagination-h"></div>
        </div>
        </div>
        </div>
        <!-- <div class="swiper-pagination swiper-pagination-v"></div> -->
        </div>
        <ion-content *ngIf="loading">
	    <div id="loader-wrapper">
		<div id="loader">
		<span class="logo_container">
		<img src="../../assets/images/Logo.png" alt="logo">
	    </span>
		<div class="ml-loader">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		</div>
		<p class="text-center">Loding Data...</p>
		</div>
	    </div>
        </ion-content>
        </ion-content>
        `;
    }
    // RENDEREING FLOW
    // Load Content according to url -- called from each GET api.
    pageContent(url, param) {
        this.doRefill();
        console.log("Redirected From : ", url, param);
        // this.loading = true;
        setTimeout(() => {
            if (url.includes('bookmark')) {
                this.loading = false;
                this.bookMark = true;
                this.bookmarkedNews();
            }
            else if (url.includes('category')) {
                this.loading = false;
                this.catTitle = param.catTitle;
                this.catNews(param.id);
            }
            else if (url.includes('single-news')) {
                this.loading = false;
                console.log("In single news");
                this.getSingleNews(param.id);
            }
            else if (url.includes('search-news')) {
                this.loading = false;
                this.searchKey = param.key;
                this.searchNews(param.key);
            }
            else {
                this.loading = false;
                console.log("Calling for All news in Feeds");
                this.getNews();
            }
        }, 1000);
    }
    //  Load news to newsArray for all scenarios.
    loadNewsToPage(res, userId, checkForBookmark = false) {
        console.info("loadToNewsPage Called ", "res = ", res, "userId", userId, "checkForBookmark", checkForBookmark);
        this.newsArray = [];
        this.loading = false;
        this.resLength = res.length;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.newsArray = res;
        if (this.tokenLocalStorage && !checkForBookmark) {
            lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.newsArray, (save) => {
                lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](save.bookMark, (Id) => {
                    if (Id == userId) {
                        save['bookmarkKey'] = true;
                    }
                });
            });
        }
        this.delay(500).then(any => {
            this.buildForSwiper().then(() => {
                this.addSwiperJs();
            });
        });
    }
    // Back Button actions
    backButtonFunction() {
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
    }
    // API CALLS
    // View Count increment
    newPostView(postId) {
        postId = postId.split("-")[1];
        this.data = {
            postId: postId,
            postType: localStorage.language
        };
        this._newsService.newsCount(this.data).subscribe();
    }
    /**
     * get Single news --- PENDING TO DEVELOP
     */
    getSingleNews(id) {
        //console.log("this.id", id)
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        //console.log(userId);
        this._newsService.getSingleNews(id).subscribe((res) => {
            //console.log("this.single", res);
            // this.newsArray = res;
            this.loadNewsToPage(res, userId);
            //console.log("for-----------------", this.newsArray);
            //console.log(this.newsArray);
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
    //  Bookmarked News
    bookmarkedNews() {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this.checkForToken();
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.loading = false;
            var userId = this.loggedInUser;
            this.loadNewsToPage(res.post, userId, true);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    catNews(id) {
        console.log(this.loading);
        this.language = localStorage.getItem('language');
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.allCatNews(id).subscribe((res) => {
            console.log("CATNEWS UPDATED!!!");
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //get all news - HOME PAGE ( FEEDS )
    getNews() {
        this.loading = true;
        this.language = localStorage.language;
        this.checkForToken();
        var userId = this.loggedInUser;
        this._newsService.getAllNews().subscribe((res) => {
            console.log("all news==========>", res);
            this.loadNewsToPage(res, userId);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    //  On Clicking Notification
    appendSinleNews(res, userId) {
        this.loading = false;
        if (!res.length) {
            this.isTextVisible = true;
            this.text = "There are no news yet...";
        }
        this.appendedNews = res;
        lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](this.appendedNews, (news, index) => {
            if (news.newsId == this.appendedNews.newsId) {
                this.appendedNews.splice(index, 1);
            }
        });
        this.newsArray = this.appendedNews;
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
    // last slide toast
    // lastSlideToast() {
    //     console.log("Last post %%%%%%%%%%%%%%5")
    //     this.toast = this.toastController.create({
    //         message: 'No more post',
    //         animated: true,
    //         duration: 2000,
    //         showCloseButton: true,
    //         closeButtonText: "OK",
    //         cssClass: "my-toast",
    //         position: "bottom",
    //         color: "primary"
    //     }).then((obj) => {
    //         obj.present();
    //     });
    // }
    // BUTTON ACTIONS
    //  Do Bookmark
    bookmark(index) {
        if (this.network.type == 'none') {
            this.toast = this.toastController.create({
                message: "No internet connection",
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        }
        else {
            this._newsService.bookmarkPost(this.newsArray[index].newsId).subscribe((res) => {
                this.newsArray[index].bookmarkKey = !this.newsArray[index].bookmarkKey;
                this.toast = this.toastController.create({
                    message: res.message,
                    duration: 2000,
                    color: 'success'
                }).then((toastData) => {
                    toastData.present();
                });
            }, err => {
                this.toast = this.toastController.create({
                    message: err.error.message,
                    duration: 2000,
                    color: 'danger'
                }).then((toastData) => {
                    toastData.present();
                });
            });
        }
    }
    //  Do Share Post 
    sharePost(id, newsTitle) {
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then((entries) => {
            //console.log('success ' + JSON.stringify(entries));
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    // SWIPER 
    delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("delay fired"));
        });
    }
    buildForSwiper() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let i = 0; i < this.newsArray.length; i++) {
                $(function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        var window_height = $(document).height() * 0.66;
                        var content_height = window_height;
                        function buildNewsletter() {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                if ($('#sliderContent' + i).contents().length > 0) {
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
                                }
                            });
                        }
                        yield buildNewsletter();
                    });
                });
            }
        });
    }
    removeSwiperJs() {
        $('#scriptid').remove();
    }
    addSwiperJs() {
        var script = document.createElement('script');
        script.setAttribute('id', 'scriptid');
        script.src = "assets/js/swiper.js";
        document.body.appendChild(script);
    }
    // END SWIPER
    // Notification and utility
    notificationTapped() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['home/single-news/' + data.newsId]);
        });
    }
    fcmToken() {
        console.log("in fcmtoken function");
        this.fcm.getToken().then(token => {
            console.log("inside get fcmtoken", token);
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            localStorage.setItem('deviceToken', token);
        });
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['settings']);
            alert(JSON.stringify(data));
            if (data.wasTapped) {
                //console.log('Received in background');
            }
            else {
                //console.log('Received in foreground');
            }
        });
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
    swipeevent(e, l) {
        if (l + 1 == this.resLength) {
            this.toast = this.toastController.create({
                message: "No more posts",
                duration: 500,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        }
    }
    checkForCurrentSlideFromLocalStorage() {
        var that = this;
        setInterval(function () {
            if (that.currentPostId != localStorage.currentPostId) {
                that.currentPostId = localStorage.currentPostId;
                console.log("postid", this.currentPostId);
                that.newPostView(localStorage.currentPostId);
            }
        }, 500);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__["Network"] },
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_14__["Network"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_11__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map