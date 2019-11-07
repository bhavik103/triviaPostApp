(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-post-single-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-post/single-post.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-round-back\" class=\"homeBack\" routerLink=\"/home/all-post\" float-left></ion-icon>\n    <ion-title>\n      Trivia Post\n    </ion-title>\n    <img src=\"../../assets/images/Share.png\" *ngFor=\"let news of singlepost\" class=\"icon shareImage\"\n      (click)=\"sharePost(news.newsId, news.newsTitleEnglish)\" />\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngFor=\"let news of singlepost\" class=\"singlePost\">\n    <div class=\"postImage\">\n      <img src=\"{{mediaPath}}{{news.newsImage}}\" alt=\"\">\n    </div>\n    <div class=\"postTitle\">\n      <p>{{news.newsTitleEnglish}}</p>\n    </div>\n    <div class=\"subPostTitle\">\n      <p class=\"createdBy\">By {{news.createdBy.firstName | titlecase}}</p>\n      <p>{{news.createdAt | timeAgo}} | <span class=\"catTitle\" (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory}}</span></p>\n    </div>\n    <div class=\"actionButton\">\n      <ion-icon name=\"heart\" class=\"heart_icon liked\" *ngIf=\"news.likeKey\"\n      (click)=\"alreadyLiked()\"></ion-icon>\n      <ion-icon name=\"heart-empty\" class=\"heart_icon\" *ngIf=\"!news.likeKey\" (click)=\"likePost(news.newsId)\"></ion-icon>\n      <span>{{news.likesCount}}</span>\n      <a>\n        <ion-icon name=\"bookmark\" class=\"unbookmark  shareImage\" *ngIf=\"!news.bookmarkKey\"\n          (click)=\"bookmark(news.newsId)\"></ion-icon>\n        <ion-icon name=\"bookmark\" class=\"bookmarked shareImage\" *ngIf=\"news.bookmarkKey\"\n          (click)=\"bookmark(news.newsId)\"></ion-icon>\n      </a>\n    </div>\n    <div class=\"post\">\n      <p [innerHTML]=\"news.newsEnglish\"></p>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/single-post/single-post.module.ts":
/*!***************************************************!*\
  !*** ./src/app/single-post/single-post.module.ts ***!
  \***************************************************/
/*! exports provided: SinglePostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostPageModule", function() { return SinglePostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-post.page */ "./src/app/single-post/single-post.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _single_post_page__WEBPACK_IMPORTED_MODULE_6__["SinglePostPage"]
    }
];
var SinglePostPageModule = /** @class */ (function () {
    function SinglePostPageModule() {
    }
    SinglePostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_post_page__WEBPACK_IMPORTED_MODULE_6__["SinglePostPage"]]
        })
    ], SinglePostPageModule);
    return SinglePostPageModule;
}());



/***/ }),

/***/ "./src/app/single-post/single-post.page.scss":
/*!***************************************************!*\
  !*** ./src/app/single-post/single-post.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 5px;\n}\n\n.homeBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\n.postImage img {\n  min-width: 100%;\n}\n\n.postTitle p {\n  font-size: 30px;\n  font-weight: 500;\n  padding-left: 10px;\n  letter-spacing: 0.5px;\n}\n\n.subPostTitle, .post p {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 10px;\n}\n\n.catTitle {\n  color: #961300;\n  font-weight: 400;\n}\n\n.createdBy {\n  font-weight: 400;\n}\n\n.floatShare {\n  position: fixed;\n  width: 41px;\n  height: 41px;\n  bottom: 40px;\n  left: 40px;\n  background-color: #CE2837;\n  color: #FFF;\n  border-radius: 50px;\n  text-align: center;\n  box-shadow: 2px 2px 3px #999;\n}\n\n.shareImage {\n  height: 21px;\n  float: right;\n  padding-right: 15px;\n}\n\na.float + div.label-container {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s, opacity 0.5s ease;\n  transition: visibility 0s, opacity 0.5s ease;\n}\n\na.float:hover + div.label-container {\n  visibility: visible;\n  opacity: 1;\n}\n\n.floatBookmark {\n  right: 40px;\n}\n\n.unbookmark {\n  color: black;\n  float: right;\n}\n\n.bookmarked {\n  color: #CE2837;\n}\n\n.actionButton {\n  font-size: 22px;\n  padding: 5px 11px;\n  border-bottom: 1px solid #dcdcdc;\n}\n\n.actionButton span {\n  font-size: 17px !important;\n}\n\n.heart_icon {\n  float: left;\n  padding-right: 5px;\n  margin-top: 2px;\n}\n\nion-title {\n  float: left;\n}\n\n.liked {\n  color: #CE2837;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYXBvc3Qvc3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNJRjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ01GOztBREhBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0RBQUE7RUFBQSw0Q0FBQTtBQ01GOztBREhBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDTUY7O0FESEE7RUFDRSxXQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ09GOztBREpBO0VBQ0UsY0FBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNRRjs7QUROQTtFQUNFLDBCQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxjQUFBO0FDWUYiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtcG9zdC9zaW5nbGUtcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnBvc3RJbWFnZSBpbWcge1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4ucG9zdFRpdGxlIHAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3ViUG9zdFRpdGxlLC5wb3N0IHB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNhdFRpdGxle1xuICAgIGNvbG9yOiM5NjEzMDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jcmVhdGVkQnl7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZsb2F0U2hhcmV7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogNDFweDtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0UyODM3O1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAycHggMnB4IDNweCAjOTk5O1xufVxuXG4uc2hhcmVJbWFnZXtcbiAgaGVpZ2h0OiAyMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmEuZmxvYXQgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYS5mbG9hdDpob3ZlciArIGRpdi5sYWJlbC1jb250YWluZXJ7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mbG9hdEJvb2ttYXJre1xuICByaWdodDogNDBweDtcbn1cbi51bmJvb2ttYXJre1xuICBjb2xvcjogYmxhY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmJvb2ttYXJrZWR7XG4gIGNvbG9yOiAjQ0UyODM3O1xufVxuLmFjdGlvbkJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogNXB4IDExcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xufVxuLmFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxN3B4IWltcG9ydGFudDtcbn1cbi5oZWFydF9pY29ue1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5pb24tdGl0bGV7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmxpa2Vke1xuICBjb2xvcjojQ0UyODM3O1xufSIsInAge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmhvbWVCYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4ucG9zdEltYWdlIGltZyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLnBvc3RUaXRsZSBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnN1YlBvc3RUaXRsZSwgLnBvc3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2F0VGl0bGUge1xuICBjb2xvcjogIzk2MTMwMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNyZWF0ZWRCeSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mbG9hdFNoYXJlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNDFweDtcbiAgaGVpZ2h0OiA0MXB4O1xuICBib3R0b206IDQwcHg7XG4gIGxlZnQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRTI4Mzc7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICM5OTk7XG59XG5cbi5zaGFyZUltYWdlIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmEuZmxvYXQgKyBkaXYubGFiZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYS5mbG9hdDpob3ZlciArIGRpdi5sYWJlbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmxvYXRCb29rbWFyayB7XG4gIHJpZ2h0OiA0MHB4O1xufVxuXG4udW5ib29rbWFyayB7XG4gIGNvbG9yOiBibGFjaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYm9va21hcmtlZCB7XG4gIGNvbG9yOiAjQ0UyODM3O1xufVxuXG4uYWN0aW9uQnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nOiA1cHggMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG59XG5cbi5hY3Rpb25CdXR0b24gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhcnRfaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5saWtlZCB7XG4gIGNvbG9yOiAjQ0UyODM3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/single-post/single-post.page.ts":
/*!*************************************************!*\
  !*** ./src/app/single-post/single-post.page.ts ***!
  \*************************************************/
/*! exports provided: SinglePostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostPage", function() { return SinglePostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);









var SinglePostPage = /** @class */ (function () {
    function SinglePostPage(network, _toastService, _newsService, route, socialSharing, router) {
        this.network = network;
        this._toastService = _toastService;
        this._newsService = _newsService;
        this.route = route;
        this.socialSharing = socialSharing;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_4__["config"].mediaApiUrl;
    }
    SinglePostPage.prototype.ngOnInit = function () {
        this.singlePost();
    };
    SinglePostPage.prototype.singlePost = function () {
        var _this = this;
        var postId = this.route.snapshot.params['id'];
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
        }
        this._newsService.getSingleNews(postId).subscribe(function (res) {
            var singlepostArray = [];
            singlepostArray.push(res[0]);
            _this.singlepost = singlepostArray;
            if (_this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](_this.singlepost, function (save) {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.bookMark, function (Id) {
                        if (Id == _this.loggedInUser) {
                            save['bookmarkKey'] = true;
                        }
                    });
                });
            }
            if (_this.tokenLocalStorage) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](_this.singlepost, function (save) {
                    lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](save.like, function (Id) {
                        if (Id == _this.loggedInUser) {
                            save['likeKey'] = true;
                        }
                    });
                });
            }
            console.log("Single newsssssss", _this.singlepost);
        });
    };
    SinglePostPage.prototype.titleCaseWord = function (word) {
        if (!word)
            return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    //  Do Share Post 
    SinglePostPage.prototype.sharePost = function (id, newsTitle) {
        var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
        var subject = "Trivia Post";
        var str = newsTitle;
        var url = 'https://triviapost.com/post/' + id;
        this.socialSharing.share(message, subject, null, url)
            .then(function (entries) {
        })
            .catch(function (error) {
            alert('error ' + JSON.stringify(error));
        });
    };
    //  Do Bookmark
    SinglePostPage.prototype.bookmark = function (newsid) {
        var _this = this;
        if (this.network.type == 'none') {
            this.singlePost();
            this._toastService.toastFunction('No internet connection', 'danger');
        }
        else {
            this._newsService.bookmarkPost(newsid).subscribe(function (res) {
                _this._toastService.toastFunction(res.message, 'success');
                _this.singlePost();
            }, function (err) {
                _this._toastService.toastFunction(err.error.message, 'danger');
            });
        }
    };
    //like post
    SinglePostPage.prototype.likePost = function (postid) {
        var _this = this;
        this._newsService.likepost(postid).subscribe(function (res) {
            _this.singlePost();
            _this._toastService.toastFunction(res.message, 'success');
        }), function (err) {
            _this._toastService.toastFunction(err.error.message, 'danger');
        };
    };
    SinglePostPage.prototype.alreadyLiked = function () {
        this._toastService.toastFunction('You have already liked!', 'danger');
    };
    SinglePostPage.prototype.categoryClick = function (catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    };
    SinglePostPage.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SinglePostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-post',
            template: __webpack_require__(/*! raw-loader!./single-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/single-post/single-post.page.html"),
            styles: [__webpack_require__(/*! ./single-post.page.scss */ "./src/app/single-post/single-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SinglePostPage);
    return SinglePostPage;
}());



/***/ })

}]);
//# sourceMappingURL=single-post-single-post-module-es5.js.map