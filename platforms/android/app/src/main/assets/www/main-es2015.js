(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../all-post/all-post.module": [
		"./src/app/all-post/all-post.module.ts"
	],
	"../categories/categories.module": [
		"./src/app/categories/categories.module.ts"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./signin/signin.module": [
		"./src/app/signin/signin.module.ts",
		"signin-signin-module"
	],
	"./single-category/single-category.module": [
		"./src/app/single-category/single-category.module.ts",
		"single-category-single-category-module"
	],
	"./single-post/single-post.module": [
		"./src/app/single-post/single-post.module.ts",
		"single-post-single-post-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		"common",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		"common",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		"common",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		"common",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/all-post/all-post.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-post/all-post.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content (swiperight)=\"goToCategories()\" ion-padding>\n    <ion-row class=\"feeds\" *ngFor=\"let news of newsArray; let i = index; last as isLast\">\n        <ion-col *ngIf=\"i == 0\" size=\"12\">\n            <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"100%\" width=\"100%\" (click)=\"singleNews(news.newsId)\">\n        </ion-col>\n        <ion-col *ngIf=\"i == 0\" size=\"12\">\n            <span class=\"latestNews\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish\"\n                (click)=\"singleNews(news.newsId)\"></span>\n            <span class=\"latestNews\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"news.newsTitleHindi\"></span>\n            <p class=\"latestNewsInfo\"><img src=\"assets/images/like.png\" alt=\"\" class=\"likeImage\"> {{news.likesCount}} likes | {{news.createdAt | timeAgo}} | <span class=\"newsCat\"\n                    (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory | slice:0:20}}</span>\n            </p>\n        </ion-col>\n        <ion-col size=\"5\" class=\"newsImg\" padding *ngIf=\"i != 0\">\n            <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"73px\" width=\"100%\" (click)=\"singleNews(news.newsId)\">\n        </ion-col>\n        <ion-col size=\"7\" *ngIf=\"i != 0\">\n            <div>\n                <span class=\"optionsList\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish | slice:0:40\"\n                    (click)=\"singleNews(news.newsId)\"></span><span *ngIf=\"language == 'English'\">...</span>\n                <span class=\"optionsList\" *ngIf=\"language == 'Hindi'\"\n                    [innerHTML]=\"news.newsTitleHindi | slice:0:40\"></span><span *ngIf=\"language == 'Hindi'\"\n                    (click)=\"singleNews(news.newsId)\">...</span>\n                <p class=\"otherInfo\">{{news.createdAt | timeAgo}} | <span class=\"newsCat\"\n                        (click)=\"categoryClick(news.newsCategoryId, news.newsCategory)\">{{news.newsCategory | slice:0:20}}</span>\n                </p>\n                <p class=\"otherInfoSecond\"><img src=\"assets/images/like.png\" alt=\"\" class=\"likeImage\"> {{news.likesCount}} likes</p>\n            </div>\n        </ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bookmarks/bookmarks.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bookmarks/bookmarks.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-icon name=\"arrow-round-back\" class=\"bookmarkBack\" routerLink=\"/settings\"></ion-icon>\n        <ion-title>\n            Bookmarks\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <h2 id=\"bookmarkHead\">My Bookmarks</h2>\n    <ion-row class=\"searchResults\" *ngFor=\"let news of newsArray\">\n        <ion-col size=\"3\" class=\"bookmarkImgCol\" padding (click)=\"getSingleBookmark(news.newsId)\">\n            <div class=\"bookmark-img\">\n                <img src=\"{{mediaPath}}{{news.newsImage}}\">\n            </div>\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"getSingleBookmark(news.newsId)\">\n            <div padding>\n                <p class=\"bookmarkCat\" *ngIf=\"language == 'English'\">{{news.newsCategory}}</p>\n                <p class=\"bookmarkCat\" *ngIf=\"language == 'Hindi'\">{{news.newsCategoryHn}}</p>\n                <span class=\"optionsList\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"news.newsTitleHindi\"></span>\n                <span class=\"optionsList\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish\"></span>\n            </div>\n        </ion-col>\n        <ion-col class=\"bookmarkActButton\"\n            (click)=\"bookmarkAction(news.newsImage,news.fcmLink,news.newsId, news.newsTitleEnglish)\">\n            <img src=\"assets/images/menu.png\">\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"bookmarkLength == 0\">\n        <ion-col size=\"12\">\n            <h1>You have no bookmarks!</h1>\n        </ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <span class=\"welcomeTo\">Welcome to</span>\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"welcomeTo appDesc\">Interesting and</div>\n            <div class=\"welcomeTo appDesc\">Informative reads</div>\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content (swipeleft)=\"goToAllPosts()\">\n    <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let category of categories$ | async\">\n            <ion-card>\n                <ion-card-header (click)=\"singeCategory(category.categoryId,category.categoryTitle)\">\n                    <img src=\"{{mediaPath}}{{category.categoryImage}}\" height=\"91px \" alt=\"\">\n                </ion-card-header>\n\n                <ion-card-content (click)=\"singeCategory(category.categoryId,category.categoryTitle)\">\n                    <span *ngIf=\"language == 'English'\">{{category.categoryTitle | slice:0:30}}</span> \n                    <span *ngIf=\"language == 'Hindi'\">{{category.categoryTitleHn | slice:0:30}}</span>\n                </ion-card-content>\n                <ion-row class=\"cardfooter\">\n                    <ion-col size=\"9\">\n                        <p>{{category.countPost}} posts</p>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <img src=\"assets/images/Category-notification.png\" *ngIf=\"!category.isNotify\" id=\"blackBell\"\n                            (click)=\"addNotify(category.categoryId)\">\n                        <img src=\"assets/images/Category-notification-2.png\" *ngIf=\"category.isNotify\" id=\"redBell\"\n                            (click)=\"addNotify(category.categoryId)\">\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/feedback/feedback.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/feedback/feedback.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-icon name=\"arrow-round-back\" class=\"backButFeed\" routerLink=\"/settings\"></ion-icon>\n\t\t\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\tFeedback\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<div id=\"feedbackForm\">\n\t\t<form [formGroup]=\"feedbackForm\">\n\t\t\t<div>\n\t\t\t\t<input placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"feedback.name\"><br><br>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"feedback.email\"><br><br>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input placeholder=\"Mobile Number\" formControlName=\"mobile\" [(ngModel)]=\"feedback.mobile\"><br><br>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<textarea placeholder=\"Message\" rows=\"6\" formControlName=\"message\" [(ngModel)]=\"feedback.message\"></textarea><br><br>\n\t\t\t</div>\n\t\t\t<button (click)=\"userFeedback(feedback)\">Send</button>\n\t\t</form>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\" (swiperight)=\"goBack()\">\n    <!-- <div class=\"languageDiv\">\n        <div class=\"language\">\n            <span id=\"langTitle\">Language : </span> English <ion-icon name=\"globe\" id=\"globeIcon\"></ion-icon>\n        </div>\n    </div> -->\n    <div class=\"componentMainDiv\">\n        <div class=\"header\">\n            <img src=\"assets/images/Logo.png\" height=\"auto\" width=\"30%\">\n            <div>Interesting and</div>\n            <div>Informative reads</div>\n        </div>\n        <form [formGroup]=\"loginForm\" padding class=\"loginForm\">\n            <button class=\"googleLogin\" (click)=\"doGoogleLogin()\">\n                <span class=\"socialIcon\">\n                    <img src=\"assets/images/google.png\" alt=\"\" height=\"26px\">\n                </span>\n                <span class=\"socialCenter\">Google</span>\n            </button>\n            <button class=\"facebookLogin\" (click)=\"doFbLogin()\">\n                <span class=\"socialIcon\">\n                        <img src=\"assets/images/facebook.png\" alt=\"\" height=\"26px\">\n                </span>\n                <span class=\"socialCenter\">Facebook</span>\n            </button>\n            <button class=\"signupModalButton\">\n                <span class=\"socialIcon\">\n                    <ion-icon name=\"person\"></ion-icon>\n                </span>\n                <span class=\"socialCenter\"><label for=\"signupModal\" class=\"open\">Signup</label></span>\n            </button>\n            <h2 class=\"otherLoginBreak\"><span> OR </span></h2>\n        </form>\n        <div class=\"pop\">\n            <input type=\"checkbox\" id=\"signupModal\" class=\"checkBox\" />\n            <div class=\"modal signUp\">\n                <div class=\"modal__inner\">\n                    <p style=\"text-align: center;\"><i id=\"signupHead\">Sign Up</i></p>\n                    <form [formGroup]=\"signupForm\">\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"person\"></ion-icon>\n                            <input type=\"text\" name=\"\" placeholder=\"Username\" formControlName=\"userName\"\n                                [(ngModel)]=\"user.userName\">\n                        </div>\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"mail\"></ion-icon>\n                            <input type=\"text\" name=\"\" placeholder=\"Email Address\" formControlName=\"email\"\n                                [(ngModel)]=\"user.email\">\n                        </div>\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"call\"></ion-icon>\n                            <input type=\"text\" name=\"\" placeholder=\"Phone Number\" formControlName=\"mobile\"\n                                [(ngModel)]=\"user.mobile\">\n                        </div>\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"lock\"></ion-icon>\n                            <input type=\"password\" name=\"\" placeholder=\"Password\" formControlName=\"password\"\n                                [(ngModel)]=\"user.password\">\n                        </div>\n                        <div class=\"signupButton\">\n                            <button (click)=\"signup(user)\">Signup</button>\n                        </div>\n                    </form>\n                    <label for=\"signupModal\">\n                        <ion-icon name=\"close\" class=\"signupClose\" (click)=\"signUpClose()\"></ion-icon>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class=\"buttonInside\">\n            <input placeholder=\"Email\" id=\"emailInput\" [(ngModel)]=\"email\">\n            <button id=\"linkSignIn\" (click)=\"signInRoute()\">Sign In <span id=\"loginArrow\">></span></button>\n            <p id=\"agreement\">By Sign in you agree to <span routerLink=\"/terms\">\"Terms of Use\"</span> and <span routerLink=\"/privacy\">\"Privacy Policy\"</span></p>\n        </div>\n    </div>\n</ion-content>\n<ion-content *ngIf=\"loading\">\n    <div id=\"loader-wrapper\">\n        <div id=\"loader\">\n            <span class=\"welcomeTo\">Welcome to</span>\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"welcomeTo appDesc\">Interesting and</div>\n            <div class=\"welcomeTo appDesc\">Informative reads</div>\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacy/privacy.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-icon name=\"arrow-round-back\" class=\"privacyBack\" routerLink=\"/settings\"></ion-icon>\n\t\t\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\tPrivacy Policy\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\t<div *ngFor=\"let policy of privacyPolicy\">\n\t\t<div [innerHTML]=\"policy.policy\"></div>\t\n\t</div>\n\t<div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <span class=\"welcomeTo\">Welcome to</span>\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"welcomeTo appDesc\">Interesting and</div>\n            <div class=\"welcomeTo appDesc\">Informative reads</div>\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searchbar/searchbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"2\" class=\"searchBack\">\n\t\t\t\t<ion-icon name=\"arrow-round-back\" routerLink=\"/home/categories\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<ion-input set-focuser #searchInput type=\"text\" placeholder=\"Search here..\"\n\t\t\t\t\t(input)=\"searchNews($event.target.value)\"></ion-input>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<ion-row class=\"searchResults\" *ngFor=\"let searchNews of newsArray\">\n\t\t<ion-col size=\"3\" class=\"newsImg\" padding (click)=\"getSingleSearch(searchNews.newsId)\">\n\t\t\t<img src=\"{{mediaPath}}{{searchNews.newsImage}}\" height=\"73px\" width=\"100%\">\n\t\t</ion-col>\n\t\t<ion-col size=\"9\" (click)=\"getSingleSearch(searchNews.newsId)\">\n\t\t\t<div padding>\n\t\t\t\t<p class=\"newsCat\" *ngIf=\"language == 'English'\">{{searchNews.newsCategory}}</p>\n\t\t\t\t<p class=\"newsCat\" *ngIf=\"language == 'Hindi'\">{{searchNews.newsCategoryHn}}</p>\n\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\"\n\t\t\t\t\t[innerHTML]=\"searchNews.newsTitleEnglish | slice:0:70\"></span>\n\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"searchNews.newsTitleHindi\"></span>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<div class=\"spinner\" *ngIf=\"loading\">\n\t\t<div class=\"bounce1\"></div>\n\t\t<div class=\"bounce2\"></div>\n\t\t<div class=\"bounce3\"></div>\n\t</div>\n\t<div *ngIf=\"box\" id=\"box\">\n\t\t<img src=\"assets/images/seo.png\" alt=\"\">\n\t</div>\n\t<div *ngIf=\"searchLength == 0\" id=\"box\">\n\t\t<img src=\"assets/images/noresult.png\" alt=\"\">\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar class=\"settingsToolbar\">\n\t\t<ion-icon name=\"arrow-round-back\" routerLink=\"/home/categories\"></ion-icon>\n\t\t<span id=\"settingTitle\"> Options</span>\n\t\t<span id=\"profile\" *ngIf=\"tokenLocalStorage && firstCharUser\" (click)=\"logout()\">{{firstCharUser}}</span>\n\t\t<span id=\"personIcon\" *ngIf=\"tokenLocalStorage && !firstCharUser\" (click)=\"logout()\">\n\t\t\t<ion-icon name=\"person\"></ion-icon>\n\t\t</span>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"settings loginDiv\" padding *ngIf=\"!tokenLocalStorage\">\n\t\t<h1 class=\"savePref\" *ngIf=\"language == 'English'\">Save your preferences</h1>\n\t\t<h1 class=\"savePref\" *ngIf=\"language == 'Hindi'\">सेव योर परेफरेंस</h1>\n\t\t<h4 class=\"signInBook\" *ngIf=\"language == 'English'\">Sign In to save your Bookmarks.</h4>\n\t\t<h4 class=\"signInBook\" *ngIf=\"language == 'Hindi'\">अपने बुकमार्क को सेव करने के लिए साइन इन करें।</h4>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"5\" class=\"signInCol\">\n\t\t\t\t<button id=\"signInButton\" routerLink=\"/login\">Sign In</button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"7\">\n\t\t\t\t<span id=\"loginOption\">or using</span>\n\t\t\t\t<button id=\"googleplus\" routerLink=\"/login\"><img src=\"assets/images/GooglePlus.png\"\n\t\t\t\t\t\theight=\"16px;\"></button>\n\t\t\t\t<button id=\"facebookLogin\" routerLink=\"/login\"><img src=\"assets/images/Facebook.png\"\n\t\t\t\t\t\theight=\"19px;\"></button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n\t<div class=\"optionsDiv\">\n\t\t<ion-row>\n\t\t\t<ion-col size=\"2\" class=\"langColTwo\" >\n\t\t\t\t<span>Aa</span>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div >\n\t\t\t\t\t<ion-col size=\"5\" class=\"languageDiv\">\n\t\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Language</span>\n\t\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">भाषा</span>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t<span *ngIf=\"language == 'Hindi'\" class=\"langColor\" (click)=\"removeCancelButton()\">\n\t\t\t\t\t\t\t<ion-select (ionChange)=\"languageChange($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Hindi\" selected=\"true\">Hindi</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"English\">English</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"language == 'English'\" class=\"langColor\" (click)=\"removeCancelButton()\">\n\t\t\t\t\t\t\t<ion-select (ionChange)=\"languageChange($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"English\" selected=\"true\">English</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Hindi\">Hindi</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"!language\" class=\"langColor\" (click)=\"removeCancelButton()\">\n\t\t\t\t\t\t\t<ion-select (ionChange)=\"languageChange($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"English\" selected=\"true\">English</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Hindi\">Hindi</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" class=\"settingIconCol\" >\n\t\t\t\t<ion-icon name=\"bookmark\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div  routerLink=\"/bookmarks\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Bookmarks</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">बुकमार्क</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" class=\"settingIconCol\" >\n\t\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div >\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Notification</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">नोटफ़केशन</span>\n\t\t\t\t\t<!-- <span *ngIf=\"annonymous === 'true'\">Hello</span> -->\n\t\t\t\t\t<label class=\"switch\" *ngIf=\"notifyFlag === 'true' || annonymousNotify === 'true'\">\n\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"notificationSwitch($event)\" checked=\"checked\">\n\t\t\t\t\t\t<div></div>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"switch\" *ngIf=\"notifyFlag === 'false' || annonymousNotify === 'false'\">\n\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"notificationSwitch($event)\">\n\t\t\t\t\t\t<div></div>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" >\n\t\t\t\t<ion-icon name=\"chatboxes\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div  routerLink=\"/feedback\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Feedback</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">फ़ीड्बैक्</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" >\n\t\t\t\t<ion-icon name=\"lock\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div  routerLink=\"/privacy\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Privacy Policy</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">प्राइवेसी पालिसी</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" >\n\t\t\t\t<ion-icon name=\"paper\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div  routerLink=\"/terms\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Terms & condition</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">टर्म्स एंड कंडीशन</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" class=\"settingIconCol\" >\n\t\t\t\t<ion-icon name=\"share\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div  (click)=\"sendShare()\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Share this app</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">शेयर थिस अप्प</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row id=\"ratingRow\">\n\t\t\t<img src=\"assets/images/settingBackground.png\" alt=\"\">\n\t\t\t<div class=\"logo\">\n\t\t\t\t<img src=\"assets/images/Logo.png\" height=\"50px\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div id=\"ratingHead\" *ngIf=\"!rating\">How was the experience with us?</div>\n\t\t\t<div id=\"ratingHead\" *ngIf=\"rating\">Excellent !</div>\n\t\t\t<div id=\"rating\">\n\t\t\t\t<ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ce2837\"\n\t\t\t\t\tdefaultColor=\"#ddd\" readonly=\"false\" fontSize=\"32px\"\n\t\t\t\t\t(ratingChanged)=\"logRatingChange($event)\" rating=\"0\" *ngIf=\"!rating\">\n\t\t\t\t</ionic4-star-rating>\n\t\t\t\t\n\t\t\t\t<ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#F18D16\" defaultColor=\"#ddd\" readonly=\"true\" rating=\"{{userRating}}\" fontSize=\"32px\" *ngIf=\"rating\">\n\t\t\t\t</ionic4-star-rating>\n\t\t\t\t<div id=\"ratingHead\" class=\"greetings\" *ngIf=\"rating\">Thank you for loving us !</div>\n\t\t\t</div>\n\t\t</ion-row>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/terms-and-cond/terms-and-cond.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terms-and-cond/terms-and-cond.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-icon name=\"arrow-round-back\" class=\"termsBack\" routerLink=\"/settings\"></ion-icon>\n\t\t\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\tTerms & Condition\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\t<div *ngFor=\"let policy of privacyPolicy\">\n\t\t<div [innerHTML]=\"policy.terms\"></div>\t\n\t</div>\n\t<div class=\"container\" *ngIf=\"loading\">\n\t\t<div class=\"loader\">\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--text\"></div>\n\t\t</div>\n\t</div>\n\t<div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <span class=\"welcomeTo\">Welcome to</span>\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"welcomeTo appDesc\">Interesting and</div>\n            <div class=\"welcomeTo appDesc\">Informative reads</div>\n            <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n            <p class=\"text-center\">Loding...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/all-post/all-post.module.ts":
/*!*********************************************!*\
  !*** ./src/app/all-post/all-post.module.ts ***!
  \*********************************************/
/*! exports provided: AllPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostPageModule", function() { return AllPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-post.page */ "./src/app/all-post/all-post.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _all_post_page__WEBPACK_IMPORTED_MODULE_6__["AllPostPage"]
    }
];
let AllPostPageModule = class AllPostPageModule {
};
AllPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_all_post_page__WEBPACK_IMPORTED_MODULE_6__["AllPostPage"]]
    })
], AllPostPageModule);



/***/ }),

/***/ "./src/app/all-post/all-post.page.scss":
/*!*********************************************!*\
  !*** ./src/app/all-post/all-post.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsImg {\n  margin: auto 0 !important;\n  padding: 6px;\n  height: 100px;\n}\n\n.otherInfo {\n  margin: 0px auto;\n  color: gray;\n  bottom: 0;\n  position: absolute;\n}\n\n.otherInfoSecond {\n  margin: 0px auto;\n  color: gray;\n  bottom: 20px;\n  position: absolute;\n}\n\nimg.likeImage {\n  height: 11px;\n}\n\n.otherInfoSecond span {\n  font-size: 14px;\n  padding-left: 4px;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n\n.feeds {\n  border-bottom: 1px solid #ddd;\n}\n\n.newsImg img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: block;\n}\n\n.newsCat {\n  color: #ed2424;\n}\n\n.latestNews {\n  font-size: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYWxsLXBvc3QvYWxsLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9hbGwtcG9zdC9hbGwtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsNkJBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2FsbC1wb3N0L2FsbC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzSW1nIHtcbiAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ub3RoZXJJbmZvIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ub3RoZXJJbmZvU2Vjb25kIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG4gIGJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbiAgLy8gbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4ub3RoZXJJbmZvU2Vjb25kIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5mZWVkcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuLm5ld3NJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmV3c0NhdCB7XG4gIGNvbG9yOiAjZWQyNDI0O1xufVxuLmxhdGVzdE5ld3Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iLCIubmV3c0ltZyB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm90aGVySW5mbyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm90aGVySW5mb1NlY29uZCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xuICBib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW1nLmxpa2VJbWFnZSB7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLm90aGVySW5mb1NlY29uZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLm9wdGlvbnNMaXN0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmZlZWRzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG59XG5cbi5uZXdzSW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmV3c0NhdCB7XG4gIGNvbG9yOiAjZWQyNDI0O1xufVxuXG4ubGF0ZXN0TmV3cyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/all-post/all-post.page.ts":
/*!*******************************************!*\
  !*** ./src/app/all-post/all-post.page.ts ***!
  \*******************************************/
/*! exports provided: AllPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPostPage", function() { return AllPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");









let AllPostPage = class AllPostPage {
    constructor(firebaseDynamicLinks, fcm, deeplinks, router, _newsService) {
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this.fcm = fcm;
        this.deeplinks = deeplinks;
        this.router = router;
        this._newsService = _newsService;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_5__["config"].mediaApiUrl;
    }
    ngOnInit() {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited && !_config__WEBPACK_IMPORTED_MODULE_5__["config"].counter) {
            this.firebaseDynamicLinks.onDynamicLink().subscribe((res) => {
                var postId = res.deepLink.split('?')[1].split('=')[1];
                console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1]);
                console.log('Is Visited:------------- 1', _config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited);
                if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited && !_config__WEBPACK_IMPORTED_MODULE_5__["config"].counter) {
                    _config__WEBPACK_IMPORTED_MODULE_5__["config"].counter++;
                    _config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited = true;
                    console.log('Is Visited:------------- 2', _config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited);
                }
                else {
                    _config__WEBPACK_IMPORTED_MODULE_5__["config"].counter++;
                    _config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited = false;
                    console.log('Is Visited:------------- 3', _config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited);
                }
                console.log('Is visited:', _config__WEBPACK_IMPORTED_MODULE_5__["config"].isvisited);
                // if (!config.isvisited) {
                //   this.router.navigate(['single-post/' + postId]);
                //   config.isvisited = true;
                // }
                this.router.navigate(['single-post/' + postId]);
            }, (error) => {
                console.log(error);
            });
        }
    }
    ionViewWillEnter() {
        this.fcm.onNotification().subscribe(data => {
            this.router.navigate(['/single-post/' + data.newsId]);
            if (data.wasTapped) {
                console.log('Received in background', data.wasTapped);
            }
            else {
                console.log('Received in foreground');
            }
        });
        this.getAllPost();
    }
    goToCategories() {
        this.router.navigateByUrl('/home/categories');
    }
    //get all news - HOME PAGE ( FEEDS )
    getAllPost() {
        this.loading = true;
        this.language = localStorage.getItem('language');
        this._newsService.getAllNews().subscribe((res) => {
            this.loading = false;
            console.log("all news==========>", res);
            this.newsArray = res;
        }, (err) => {
            this.newsArray = localStorage.newsArray;
        });
    }
    singleNews(postid) {
        console.log('postid', postid);
        this.router.navigateByUrl('/single-post/' + postid);
    }
    categoryClick(catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    }
};
AllPostPage.ctorParameters = () => [
    { type: _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseDynamicLinks"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_6__["Deeplinks"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"] }
];
AllPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-post',
        template: __webpack_require__(/*! raw-loader!./all-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/all-post/all-post.page.html"),
        styles: [__webpack_require__(/*! ./all-post.page.scss */ "./src/app/all-post/all-post.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_8__["FirebaseDynamicLinks"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_6__["Deeplinks"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]])
], AllPostPage);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _terms_and_cond_terms_and_cond_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms-and-cond/terms-and-cond.component */ "./src/app/terms-and-cond/terms-and-cond.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");











const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]]
    },
    {
        path: 'feedback',
        component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"]
    },
    {
        path: 'privacy',
        component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponent"]
    },
    {
        path: 'searchBar',
        component: _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_7__["SearchbarComponent"]
    },
    {
        path: 'terms',
        component: _terms_and_cond_terms_and_cond_component__WEBPACK_IMPORTED_MODULE_8__["TermsAndCondComponent"]
    },
    {
        path: 'bookmarks',
        component: _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_9__["BookmarksComponent"]
    },
    {
        path: 'single-post/:id',
        loadChildren: './single-post/single-post.module#SinglePostPageModule'
    },
    {
        path: 'single-post/:id/:bookmark',
        loadChildren: () => __webpack_require__.e(/*! import() | single-post-single-post-module */ "single-post-single-post-module").then(__webpack_require__.bind(null, /*! ./single-post/single-post.module */ "./src/app/single-post/single-post.module.ts")).then(m => m.SinglePostPageModule)
    },
    {
        path: 'single-post/:id/:search',
        loadChildren: () => __webpack_require__.e(/*! import() | single-post-single-post-module */ "single-post-single-post-module").then(__webpack_require__.bind(null, /*! ./single-post/single-post.module */ "./src/app/single-post/single-post.module.ts")).then(m => m.SinglePostPageModule)
    },
    {
        path: 'single-post/:id/:category',
        loadChildren: () => __webpack_require__.e(/*! import() | single-post-single-post-module */ "single-post-single-post-module").then(__webpack_require__.bind(null, /*! ./single-post/single-post.module */ "./src/app/single-post/single-post.module.ts")).then(m => m.SinglePostPageModule)
    },
    {
        path: 'single-category/:id/:cat',
        loadChildren: './single-category/single-category.module#SingleCategoryPageModule'
    },
    {
        path: 'signin',
        loadChildren: './signin/signin.module#SigninPageModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-container {\n  background: yellow;\n}\n\n.toast-md .toast-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0LWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOnllbGxvdztcbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdle1xuICAgIGNvbG9yOiByZWQ7XG59IiwiLnRvYXN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs-compat/_esm2015/add/observable/fromEvent.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");














let AppComponent = class AppComponent {
    constructor(firebaseDynamicLinks, _userService, toastController, platform, splashScreen, statusBar, fcm, router, deeplinks) {
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this._userService = _userService;
        this.toastController = toastController;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.fcm = fcm;
        this.router = router;
        this.deeplinks = deeplinks;
        this.hide = true;
        this.deeplinks.route({
            '/': {},
            '/nr5y': { "post:": true },
            '/post/:id': { "post:": true }
        }).subscribe((match) => {
            console.log("match link", match.$args.id);
            this.router.navigate(['single-post/' + match.$args.id]);
        }, (nomatch) => {
            // alert("UnMatched" + nomatch);
        });
        // // Check Internet conectivity
        var offline = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "offline");
        var online = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this.toast = this.toastController.create({
                message: 'No internet connection',
                animated: true,
                showCloseButton: true,
                duration: 2000,
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
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', "English");
        }
        if (!localStorage.getItem('notification')) {
            localStorage.setItem('notification', "true");
        }
        this.router.navigateByUrl('/home/all-post');
        this.initializeApp();
    }
    initializeApp() {
        const handleBranch = () => {
            this.platform.ready().then(() => {
                this.firebaseDynamicLinks.onDynamicLink().subscribe((res) => {
                    var postId = res.deepLink.split('?')[1].split('=')[1];
                    console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1]);
                    console.log('Is Visited In App Component:-------------', _config__WEBPACK_IMPORTED_MODULE_10__["config"].isvisited);
                    // if (!config.isvisited) {
                    //   this.router.navigate(['single-post/' + postId]);
                    //   config.isvisited = true;
                    //   console.log('Is Visited Inside If:-------------', config.isvisited);
                    // }
                    this.router.navigate(['single-post/' + postId]);
                    _config__WEBPACK_IMPORTED_MODULE_10__["config"].isvisited = true;
                }, (error) => {
                    console.log(error);
                });
                this.splashScreen.hide();
                this.statusBar.backgroundColorByHexString('#000000');
            });
        };
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseDynamicLinks"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_9__["FirebaseDynamicLinks"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_5__["FCM"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_7__["Deeplinks"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerConfig", function() { return HammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptor */ "./src/app/interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _terms_and_cond_terms_and_cond_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./terms-and-cond/terms-and-cond.component */ "./src/app/terms-and-cond/terms-and-cond.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/deeplinks/ngx */ "./node_modules/@ionic-native/deeplinks/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _all_post_all_post_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./all-post/all-post.module */ "./src/app/all-post/all-post.module.ts");
/* harmony import */ var _categories_categories_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./categories/categories.module */ "./src/app/categories/categories.module.ts");
/* harmony import */ var ionic4_star_rating__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ionic4-star-rating */ "./node_modules/ionic4-star-rating/dist/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ionic-native/firebase-analytics/ngx */ "./node_modules/@ionic-native/firebase-analytics/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");







































class HammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_29__["DIRECTION_ALL"] }
        };
    }
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_17__["FeedbackComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyComponent"],
            _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_19__["SearchbarComponent"], _terms_and_cond_terms_and_cond_component__WEBPACK_IMPORTED_MODULE_20__["TermsAndCondComponent"], _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_21__["BookmarksComponent"]],
        entryComponents: [],
        imports: [ionic4_star_rating__WEBPACK_IMPORTED_MODULE_32__["StarRatingModule"], _categories_categories_module__WEBPACK_IMPORTED_MODULE_31__["CategoriesPageModule"], _all_post_all_post_module__WEBPACK_IMPORTED_MODULE_30__["AllPostPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_37__["NativePageTransitions"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_36__["InAppBrowser"],
            _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_35__["FirebaseDynamicLinks"],
            _ionic_native_firebase_analytics_ngx__WEBPACK_IMPORTED_MODULE_34__["FirebaseAnalytics"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_33__["LocalNotifications"],
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
                useClass: HammerConfig
            },
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_28__["Network"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_23__["SocialSharing"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_14__["GooglePlus"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_15__["Facebook"],
            _guards_user_guard__WEBPACK_IMPORTED_MODULE_8__["LoginGuard"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_22__["Keyboard"],
            _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_26__["Deeplinks"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_27__["ScreenOrientation"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_25__["FCM"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor__WEBPACK_IMPORTED_MODULE_9__["MyInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings {\n  border-bottom: 1px solid lightgrey;\n  cursor: pointer;\n}\n\n.bookmark-img {\n  height: 68px;\n  width: 80px;\n  border-radius: 22px;\n}\n\n.bookmark-img img {\n  max-height: 100%;\n  min-height: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n  height: 84px;\n  width: 100%;\n}\n\n.bookmarkActButton {\n  margin: auto;\n}\n\n.bookmarkActButton img {\n  height: 7px;\n  width: 25px;\n}\n\n.bookmarkBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-title {\n  font-size: 18px !important;\n}\n\n#bookmarkHead {\n  font-size: 31px;\n}\n\n.bookmarkImgCol {\n  margin: auto 0 !important;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.bookmarkCat {\n  margin: 0px auto;\n  color: gray;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtDQUFBO0VBQ0EsZUFBQTtBQ0NEOztBRENBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0VEOztBREFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHRDs7QURBQTtFQUNDLFlBQUE7QUNHRDs7QURBQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDR0Q7O0FEQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0Q7O0FEQUE7RUFDQywwQkFBQTtBQ0dEOztBREFBO0VBQ0MsZUFBQTtBQ0dEOztBREFBO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHRDs7QURBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQ0dEOztBREFBO0VBQ0MsZ0JBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3N7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cdGN1cnNvcjpwb2ludGVyO1xufVxuLmJvb2ttYXJrLWltZ3tcblx0aGVpZ2h0OjY4cHg7XG5cdHdpZHRoOjgwcHg7XG5cdGJvcmRlci1yYWRpdXM6MjJweDtcbn1cbi5ib29rbWFyay1pbWcgaW1ne1xuXHRtYXgtaGVpZ2h0OjEwMCU7XG5cdG1pbi1oZWlnaHQ6MTAwJTtcblx0bWF4LXdpZHRoOjEwMCU7XG5cdG1pbi13aWR0aDoxMDAlO1xuXHRvYmplY3QtZml0OmNvdmVyO1xuXHRib3JkZXItcmFkaXVzOjVweDtcblx0aGVpZ2h0Ojg0cHg7XG5cdHdpZHRoOjEwMCU7XG59XG5cbi5ib29rbWFya0FjdEJ1dHRvbntcblx0bWFyZ2luOiBhdXRvO1xufVxuXG4uYm9va21hcmtBY3RCdXR0b24gaW1ne1xuXHRoZWlnaHQ6N3B4O1xuXHR3aWR0aDoyNXB4O1xufVxuXG4uYm9va21hcmtCYWNre1xuXHRmbG9hdDogbGVmdDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi10aXRsZXtcblx0Zm9udC1zaXplOiAxOHB4IWltcG9ydGFudDtcbn1cblxuI2Jvb2ttYXJrSGVhZHtcblx0Zm9udC1zaXplOiAzMXB4XG59XG5cbi5ib29rbWFya0ltZ0NvbHtcblx0bWFyZ2luOiBhdXRvIDAhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5ib29rbWFya0NhdHtcblx0bWFyZ2luOiAwcHggYXV0bztcblx0Y29sb3I6IGdyYXk7XG59XG5cbi5vcHRpb25zTGlzdHtcblx0bWFyZ2luOiAwcHggYXV0bztcbn0iLCIuc2V0dGluZ3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib29rbWFyay1pbWcge1xuICBoZWlnaHQ6IDY4cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xufVxuXG4uYm9va21hcmstaW1nIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDg0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9va21hcmtBY3RCdXR0b24ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ib29rbWFya0FjdEJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDdweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5ib29rbWFya0JhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4jYm9va21hcmtIZWFkIHtcbiAgZm9udC1zaXplOiAzMXB4O1xufVxuXG4uYm9va21hcmtJbWdDb2wge1xuICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5ib29rbWFya0NhdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");










let BookmarksComponent = class BookmarksComponent {
    constructor(_toastService, platform, socialSharing, actionSheetController, _newsService, _categoryService, router) {
        this._toastService = _toastService;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.error = '';
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_3__["config"].mediaApiUrl;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('bookmarks')) {
                this.router.navigate(['settings']);
            }
        }));
        this.bookmarkedNews();
        this.language = localStorage.getItem('language');
    }
    ionViewWillEnter() {
        // // Check Internet conectivity
        var offline = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "offline");
        var online = rxjs_Observable__WEBPACK_IMPORTED_MODULE_8__["Observable"].fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            const message = 'No internet connection';
            const color = 'danger';
            this._toastService.toastFunction(message, color);
        });
    }
    bookmarkedNews() {
        this.loading = true;
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.loading = false;
            this.newsObj = res;
            this.newsArray = this.newsObj;
            this.bookmarkLength = this.newsArray.length;
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    bookmarkAction(newsImage, link, id, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(id);
            const actionSheet = yield this.actionSheetController.create({
                buttons: [{
                        text: 'Remove',
                        role: 'destructive',
                        handler: () => {
                            this._newsService.bookmarkPost(id).subscribe((res) => {
                                console.log("res", res);
                                this._toastService.toastFunction(res.message, 'success');
                                this.bookmarkedNews();
                            }, err => {
                                this._toastService.toastFunction(err.error.message, 'danger');
                                this.bookmarkedNews();
                            });
                        }
                    }, {
                        text: 'Share',
                        handler: () => {
                            var message = "Check out this amazing news " + '"' + title + '" ';
                            var subject = "Trivia Post";
                            var url = link;
                            var file = this.mediaPath + newsImage;
                            this.socialSharing.share(message, subject, file, url)
                                .then((entries) => {
                                console.log('success ' + JSON.stringify(entries));
                            })
                                .catch((error) => {
                            });
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getSingleBookmark(id) {
        this.router.navigate(['single-post/' + id + '/bookmark']);
    }
};
BookmarksComponent.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BookmarksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bookmarks',
        template: __webpack_require__(/*! raw-loader!./bookmarks.component.html */ "./node_modules/raw-loader/index.js!./src/app/bookmarks/bookmarks.component.html"),
        styles: [__webpack_require__(/*! ./bookmarks.component.scss */ "./src/app/bookmarks/bookmarks.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _services_news_service__WEBPACK_IMPORTED_MODULE_5__["NewsService"], _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BookmarksComponent);



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  padding: 0;\n  padding-top: 55%;\n  position: relative;\n}\n\nion-card-header img {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-card-content {\n  padding: 5px 10px 10px 10px;\n  min-height: 47px;\n  max-height: 56px;\n  overflow: hidden;\n  padding-bottom: 0;\n}\n\nion-card {\n  border: 2px solid #961300 !important;\n}\n\nion-card,\nion-col {\n  padding: 0;\n  border-radius: 0;\n}\n\nion-button {\n  --background-focused: #961300;\n}\n\n.cardfooter {\n  padding: 0px 0px 0px 10px;\n}\n\n#blackBell,\n#redBell {\n  margin: auto;\n  margin-top: 24%;\n}\n\n#blackBell {\n  width: 11px !important;\n  height: 14px;\n}\n\n#redBell {\n  width: 16px !important;\n  height: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0VGOztBREFBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0Usb0NBQUE7QUNJRjs7QURGQTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURGQTtFQUNFLDZCQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtBQ01GOztBREpBOztFQUVFLFlBQUE7RUFDQSxlQUFBO0FDT0Y7O0FETEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNRRjs7QURMQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jYXJkLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ3cHg7XG4gIG1heC1oZWlnaHQ6IDU2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuaW9uLWNhcmR7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NjEzMDAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQsXG5pb24tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjOTYxMzAwO1xufVxuLmNhcmRmb290ZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xufVxuI2JsYWNrQmVsbCxcbiNyZWRCZWxsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNCU7XG59XG4jYmxhY2tCZWxsIHtcbiAgd2lkdGg6IDExcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4jcmVkQmVsbCB7XG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTdweDtcbn0iLCJpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogNTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1jYXJkLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbiAgbWluLWhlaWdodDogNDdweDtcbiAgbWF4LWhlaWdodDogNTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzk2MTMwMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCxcbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM5NjEzMDA7XG59XG5cbi5jYXJkZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcbn1cblxuI2JsYWNrQmVsbCxcbiNyZWRCZWxsIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNCU7XG59XG5cbiNibGFja0JlbGwge1xuICB3aWR0aDogMTFweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbiNyZWRCZWxsIHtcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");








let CategoriesPage = class CategoriesPage {
    constructor(_toastService, network, _categoryService, router) {
        this._toastService = _toastService;
        this.network = network;
        this._categoryService = _categoryService;
        this.router = router;
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_5__["config"].mediaApiUrl;
        this.getCategories();
        this.categories$;
    }
    ngOnInit() {
    }
    goToAllPosts() {
        this.router.navigateByUrl('/home/all-post');
    }
    getCategories() {
        this.language = localStorage.getItem('language');
        this.categories$ = this._categoryService.getAll().pipe();
        console.log("after", this.categories$);
    }
    singeCategory(catId, catname) {
        console.log('catId compoennt', catId);
        this.router.navigateByUrl('single-category/' + catId + '/' + catname);
    }
    addNotify(catId) {
        if (this.network.type == 'none') {
            const message = "No internet connection";
            const color = "danger";
            this._toastService.toastFunction(message, color);
        }
        else {
            this._categoryService.notifyUser(catId).subscribe((res) => {
                this._toastService.toastFunction(res.message, 'success');
                this.getCategories();
            }, err => {
                this.getCategories();
                this._toastService.toastFunction(err.error.message, 'danger');
            });
        }
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html"),
        styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], CategoriesPage);



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const baseUrl = "https://admin.triviapost.in:5000/api/";
const mediaUrl = "https://admin.triviapost.in/server/";
// const baseUrl = "http://192.168.1.83:7010/api/"; 
// const mediaUrl = "http://192.168.1.83/TriviaPost/Trivia-BackEnd/";
const config = {
    baseApiUrl: baseUrl,
    mediaApiUrl: mediaUrl,
    isvisited: false,
    counter: 0
};
// Commands for signed APK
// 1) keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
// 2) jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name
// 3) zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk triviapost.apk
//Google analytics error soln
// ionic cordova plugin add cordova-android-play-services-gradle-release


/***/ }),

/***/ "./src/app/feedback/feedback.component.scss":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#feedbackForm button {\n  padding: 10px;\n  color: #fff;\n  background: red;\n  width: 100%;\n  height: 38px;\n  font-size: 23px;\n  border-radius: 30px;\n}\n\n#feedbackForm input, #feedbackForm textarea {\n  width: 100%;\n  height: 38px;\n  border-radius: 31px;\n  border: 1px solid #a09d9d;\n  padding: 9px 10px;\n  outline: none;\n}\n\n#feedbackForm textarea {\n  resize: none;\n}\n\n.backButFeed {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmVlZGJhY2tGb3JtIGJ1dHRvbntcblx0cGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4jZmVlZGJhY2tGb3JtIGlucHV0LCAjZmVlZGJhY2tGb3JtIHRleHRhcmVhe1xuXHR3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTA5ZDlkO1xuICAgIHBhZGRpbmc6IDlweCAxMHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbiNmZWVkYmFja0Zvcm0gdGV4dGFyZWF7XG5cdHJlc2l6ZTpub25lXG59XG5cbi5iYWNrQnV0RmVlZHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuIiwiI2ZlZWRiYWNrRm9ybSBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbiNmZWVkYmFja0Zvcm0gaW5wdXQsICNmZWVkYmFja0Zvcm0gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTA5ZDlkO1xuICBwYWRkaW5nOiA5cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2ZlZWRiYWNrRm9ybSB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmJhY2tCdXRGZWVkIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");







let FeedbackComponent = class FeedbackComponent {
    constructor(platform, _toastService, _userService, router) {
        this.platform = platform;
        this._toastService = _toastService;
        this._userService = _userService;
        this.router = router;
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.feedback = {
            email: "",
            name: "",
            mobile: "",
            message: ""
        };
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('feedback')) {
                this.router.navigate(['settings']);
            }
        }));
    }
    userFeedback(feedback) {
        this.loading = true;
        this._userService.userFeedbackFrom(feedback).subscribe((res) => {
            this.loading = false;
            this._toastService.toastFunction(res.message, 'success');
            this.router.navigate(['settings']);
        }, err => {
            this.loading = false;
            this._toastService.toastFunction(err.error.message, 'danger');
        });
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: __webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/index.js!./src/app/feedback/feedback.component.html"),
        styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], FeedbackComponent);



/***/ }),

/***/ "./src/app/guards/user.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/user.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard, LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, _userService) {
        this.router = router;
        this._userService = _userService;
    }
    canActivate(route, state) {
        // throw new Error("Method not implemented.");
        const currentUser = this._userService.currentUserValue;
        console.log("curruntUser in auth guard===========>", currentUser);
        if (currentUser) {
            // authorised so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['login']);
            return false;
            // throw new Error("Method not implemented.");
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], AuthGuard);

class LoginGuard {
    constructor(router, _userService) {
        this.router = router;
        this._userService = _userService;
    }
    canActivate(route, state) {
        // throw new Error("Method not implemented.");
        const currentUser = this._userService.currentUserValue;
        console.log("curruntUser in auth guard===========>", currentUser);
        if (currentUser) {
            // authorised so return true
            return false;
        }
        else {
            // not logged in so redirect to login page with the return url
            // this.router.navigate(['login']);
            return true;
            // throw new Error("Method not implemented.");
        }
    }
}
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];


/***/ }),

/***/ "./src/app/interceptor.ts":
/*!********************************!*\
  !*** ./src/app/interceptor.ts ***!
  \********************************/
/*! exports provided: MyInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterceptor", function() { return MyInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let MyInterceptor = class MyInterceptor {
    constructor(route) {
        this.route = route;
        this.accessToken = localStorage.getItem('accessToken');
    }
    //function which will be called for all http calls
    intercept(request, next) {
        this.accessToken = localStorage.getItem('accessToken');
        //how to update the request Parameters
        if (this.accessToken) {
            const cloned = request.clone({
                headers: request.headers.set("authorization", this.accessToken)
            });
            //logging the updated Parameters to browser's console
            return next.handle(cloned).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
                const errorMessage = error.error;
                if (error.status === 401) {
                    localStorage.removeItem('curruntUserToken');
                    this.route.navigate(['/login']);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
        else {
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
                const errorMessage = error.error;
                if (error.status === 401) {
                    this.route.navigate(['/login']);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }
    }
};
MyInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MyInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], MyInterceptor);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Fjalla+One);\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 24px;\n  margin: 0;\n  background: #333333;\n  color: white;\n}\ninput {\n  font-size: 16px;\n}\ninput::-webkit-input-placeholder {\n  font-size: 16px;\n}\np {\n  line-height: 175%;\n}\nb {\n  color: paleturquoise;\n}\n.language {\n  float: right;\n  margin-right: 10px;\n  margin-top: 30px;\n}\n#langTitle {\n  font-weight: 600;\n}\n#globeIcon {\n  font-size: 17px;\n  margin: -3px;\n}\n.pop {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n@media (max-width: 640px) {\n  .pop {\n    position: relative;\n    width: 100%;\n  }\n}\n.pop .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n.pop .modal__inner {\n  height: 100%;\n  padding: 37% 16px;\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 52%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  position: absolute;\n}\n@media (max-width: 640px) {\n  .pop .modal__inner {\n    width: 100%;\n  }\n}\n.pop label {\n  display: inline-block;\n  cursor: pointer;\n}\n.pop label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.pop .checkBox {\n  display: none;\n}\n.pop input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n.pop input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.pop input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n}\n.pop input:checked + .modal label {\n  position: absolute;\n  top: 15%;\n  right: 10px;\n  height: 25px;\n  width: 25px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.fdiv {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n@media (max-width: 640px) {\n  .fdiv {\n    position: relative;\n    width: 100%;\n  }\n}\n.fdiv .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n.fdiv .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 50%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  padding: 30px;\n  position: absolute;\n}\n@media (max-width: 640px) {\n  .fdiv .modal__inner {\n    width: 100%;\n  }\n}\n.fdiv label {\n  display: inline-block;\n  cursor: pointer;\n}\n.fdiv label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.fdiv .checkBox {\n  display: none;\n}\n.fdiv input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n.fdiv input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.fdiv input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n  line-height: 125%;\n}\n.fdiv input:checked + .modal label {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  height: 24px;\n  width: 24px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n#signupHead {\n  font-family: \"FREESCPT\";\n  text-align: center;\n  font-size: 31px;\n  margin: 0;\n}\n.signupInput input {\n  color: #000;\n  border-radius: 50px;\n  width: 100%;\n  font-size: 21px;\n  padding-left: 20%;\n  height: 35px;\n}\n.signupButton button {\n  border-radius: 9px;\n  padding: 10px;\n  font-size: 17px;\n  margin-top: 10px;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  background: #2a6974;\n}\n.signupButton {\n  margin-top: 10px;\n}\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  font-size: 20px;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 20px;\n}\n:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 20px;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 20px;\n}\n.signupInput ion-icon {\n  color: grey;\n  margin-bottom: -12%;\n  margin-left: 2%;\n  padding-left: 2%;\n}\n.header {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 700;\n}\n.loginForm {\n  padding: 8px 20px;\n}\n#rememberMe {\n  margin-left: 5px;\n  font-size: 17px;\n}\n#forgotPassword {\n  float: right;\n  color: #ed2424;\n  font-size: 15px;\n}\n.otherLoginBreak {\n  margin: 0 5px;\n  font-size: 21px;\n  text-align: center;\n  color: #ddd;\n}\n#otherLoginTitle {\n  text-align: center;\n  margin: 0;\n  font-size: 16px;\n}\n#signupLink {\n  color: red;\n  font-size: 16px;\n}\n#signupLine {\n  text-align: center;\n  font-size: 17px;\n  margin: 5px 0px;\n}\n.signupClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n.forgotModalClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n#signup {\n  font-family: \"FREESCPT\";\n  text-align: center;\n  font-size: 30px;\n  margin: 0px 0px 10px;\n}\n.loginClick {\n  width: 100%;\n  padding: 12px;\n  border-radius: 10px;\n  background-color: #d02535;\n  color: #fff;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n#forgotModal {\n  margin-top: 5px;\n}\n#welcomeHead {\n  font-family: \"FREESCPT\";\n  margin: 0;\n  font-style: italic;\n  font-size: 31px;\n  letter-spacing: -1px;\n  line-height: 30px;\n}\n.componentMainDiv {\n  margin-top: 100px;\n}\n.header p {\n  margin: 0;\n}\n.loginBack {\n  float: left;\n  zoom: 1;\n  margin-left: 9px;\n}\n.signUp input {\n  color: black;\n}\ninput#remember {\n  display: none;\n}\ninput#remember + label {\n  position: relative;\n  padding-left: 30px;\n}\ninput#remember + label:before {\n  position: absolute;\n  content: \"\";\n  background-image: url('check box.png');\n  height: 20px;\n  width: 20px;\n  background-position: 0px 0px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: #fff;\n}\ninput#remember:checked + label:before {\n  background-position: 20px 0px;\n}\n.googleLogin,\n.facebookLogin,\n.signupModalButton {\n  width: 100%;\n  padding: 12px;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n.googleLogin {\n  background-color: #5b85f1;\n}\n.facebookLogin {\n  background-color: #425dad;\n}\n.signupModalButton {\n  background-color: #2a6974;\n}\n.socialCenter {\n  line-height: 1.5;\n}\n.socialIcon {\n  float: left;\n  font-size: 26px;\n  margin-top: 3px;\n}\n.signup_input {\n  position: relative;\n  margin-bottom: 15px;\n  color: #000;\n}\n.signup_input ion-icon {\n  position: absolute;\n  color: grey;\n  left: 10px;\n  font-size: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.signup_input input {\n  padding-left: 35px;\n  border-radius: 10px;\n  margin-bottom: 0;\n  height: 45px;\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.buttonInside {\n  position: relative;\n  margin: 0 22px;\n}\n#emailInput {\n  height: 48px;\n  width: 100%;\n  padding-left: 10px;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid;\n}\n#linkSignIn {\n  position: absolute;\n  right: 9px;\n  border: none;\n  height: 20px;\n  border-radius: 100%;\n  outline: none;\n  text-align: center;\n  font-weight: bold;\n  background: none;\n  line-height: 2.5;\n  color: #2a6974;\n  font-size: 17px;\n}\n#agreement {\n  color: #a4a4a4;\n  font-size: 13px;\n}\n#agreement span {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtEQUFBO0FBQ1I7RUFDRSxzQkFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7QUNDRjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7QUNDRjtBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBREFBO0VBQ0UsZ0JBQUE7QUNHRjtBRERBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNJRjtBREZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNLRjtBREpFO0VBVkY7SUFXSSxrQkFBQTtJQUNBLFdBQUE7RUNPRjtBQUNGO0FETkU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQ1FKO0FEUEk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ1NOO0FEUk07RUFWRjtJQVdJLFdBQUE7RUNXTjtBQUNGO0FEUkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNVSjtBRFRJO0VBQ0UsMkNBQUE7RUFBQSxtQ0FBQTtBQ1dOO0FEUkU7RUFDRSxhQUFBO0FDVUo7QUROTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ1FSO0FEUFE7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ1NWO0FEUlU7RUFDRSxrQkFBQTtBQ1VaO0FEUFE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDU1Y7QURBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRUY7QURERTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxXQUFBO0VDSUY7QUFDRjtBREhFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0VBQUEscUNBQUE7QUNLSjtBREpJO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTU47QURMTTtFQVRGO0lBVUksV0FBQTtFQ1FOO0FBQ0Y7QURMRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ09KO0FETkk7RUFDRSwyQ0FBQTtFQUFBLG1DQUFBO0FDUU47QURMRTtFQUNFLGFBQUE7QUNPSjtBREhNO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDS1I7QURKUTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDTVY7QURMVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNPWjtBREpRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ01WO0FER0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDREY7QURJQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDREY7QURJQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtBQ0FGO0FER0E7RUFDRSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLGlCQUFBO0FDQUY7QURHQTtFQUNFLFNBQUE7QUNBRjtBREdBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxZQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBRjtBREdBO0VBQ0UsNkJBQUE7QUNBRjtBREdBOzs7RUFHRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUE7RUFDRSx5QkFBQTtBQ0NGO0FEQ0E7RUFDRSx5QkFBQTtBQ0VGO0FEQUE7RUFDRSx5QkFBQTtBQ0dGO0FEREE7RUFDRSxnQkFBQTtBQ0lGO0FERkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNLRjtBREhBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNNRjtBRExFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNPSjtBRExFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ09KO0FESkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNPRjtBRExBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDUUY7QUROQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1NGO0FEUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1VGO0FEUkE7RUFDRSx3QkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmphbGxhK09uZSk7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKGJsYWNrLCAyMCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxNzUlO1xufVxuXG5iIHtcbiAgY29sb3I6IHBhbGV0dXJxdW9pc2U7XG59XG4ubGFuZ3VhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiNsYW5nVGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2dsb2JlSWNvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luOiAtM3B4O1xufVxuLnBvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tb2RhbCB7XG4gICAgei1pbmRleDogMjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAmX19pbm5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAzNyUgMTZweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYub3BlbiB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cbiAgLmNoZWNrQm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0IHtcbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyAubW9kYWwge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAubW9kYWxfX2lubmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWwge1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgJl9faW5uZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYub3BlbiB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cbiAgLmNoZWNrQm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0IHtcbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyAubW9kYWwge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAubW9kYWxfX2lubmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4jc2lnbnVwSGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZSRUVTQ1BUXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWdudXBJbnB1dCBpbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uc2lnbnVwQnV0dG9uIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzJhNjk3NDtcbn1cblxuLnNpZ251cEJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJRSAxMCsgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNpZ251cElucHV0IGlvbi1pY29uIHtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1ib3R0b206IC0xMiU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmxvZ2luRm9ybSB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xufVxuXG4jcmVtZW1iZXJNZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI2ZvcmdvdFBhc3N3b3JkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2VkMjQyNDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ub3RoZXJMb2dpbkJyZWFrIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGRkO1xufVxuXG4jb3RoZXJMb2dpblRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI3NpZ251cExpbmsge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNzaWdudXBMaW5lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnNpZ251cENsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvcmdvdE1vZGFsQ2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jc2lnbnVwIHtcbiAgZm9udC1mYW1pbHk6IFwiRlJFRVNDUFRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG4ubG9naW5DbGljayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDAyNTM1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jZm9yZ290TW9kYWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbiN3ZWxjb21lSGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZSRUVTQ1BUXCI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDMxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNvbXBvbmVudE1haW5EaXYge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubG9naW5CYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHpvb206IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5zaWduVXAgaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlucHV0I3JlbWVtYmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQjcmVtZW1iZXIgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG5pbnB1dCNyZW1lbWJlciArIGxhYmVsOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9jaGVjayBib3gucG5nXCIpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dCNyZW1lbWJlcjpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjBweCAwcHg7XG59XG5cbi5nb29nbGVMb2dpbixcbi5mYWNlYm9va0xvZ2luLFxuLnNpZ251cE1vZGFsQnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5nb29nbGVMb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yjg1ZjE7XG59XG4uZmFjZWJvb2tMb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjVkYWQ7XG59XG4uc2lnbnVwTW9kYWxCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2OTc0O1xufVxuLnNvY2lhbENlbnRlciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uc29jaWFsSWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5zaWdudXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uYnV0dG9uSW5zaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMjJweDtcbn1cbiNlbWFpbElucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuI2xpbmtTaWduSW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBsaW5lLWhlaWdodDogMi41O1xuICBjb2xvcjogIzJhNjk3NDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuI2FncmVlbWVudHtcbiAgY29sb3I6ICNhNGE0YTQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiNhZ3JlZW1lbnQgc3BhbntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GamFsbGErT25lKTtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDE3NSU7XG59XG5cbmIge1xuICBjb2xvcjogcGFsZXR1cnF1b2lzZTtcbn1cblxuLmxhbmd1YWdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbiNsYW5nVGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jZ2xvYmVJY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IC0zcHg7XG59XG5cbi5wb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnBvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucG9wIC5tb2RhbCB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cbi5wb3AgLm1vZGFsX19pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzclIDE2cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpO1xuICB0b3A6IDUyJTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnBvcCAubW9kYWxfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnBvcCBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvcCBsYWJlbC5vcGVuIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wIC5jaGVja0JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucG9wIGlucHV0OmNoZWNrZWQgKyAubW9kYWwge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnBvcCBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnBvcCBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5wb3AgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIHJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZmRpdiAubW9kYWwge1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiAubW9kYWxfX2lubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmRpdiAubW9kYWxfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZkaXYgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mZGl2IGxhYmVsLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5mZGl2IC5jaGVja0JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5mZGl2IGlucHV0OmNoZWNrZWQgKyAubW9kYWwgLm1vZGFsX19pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbiNzaWdudXBIZWFkIHtcbiAgZm9udC1mYW1pbHk6IFwiRlJFRVNDUFRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMxcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNpZ251cElucHV0IGlucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIxcHg7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5zaWdudXBCdXR0b24gYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMmE2OTc0O1xufVxuXG4uc2lnbnVwQnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIElFIDEwKyAqL1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc2lnbnVwSW5wdXQgaW9uLWljb24ge1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogLTEyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5sb2dpbkZvcm0ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbn1cblxuI3JlbWVtYmVyTWUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNmb3Jnb3RQYXNzd29yZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNlZDI0MjQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm90aGVyTG9naW5CcmVhayB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2RkZDtcbn1cblxuI290aGVyTG9naW5UaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNzaWdudXBMaW5rIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jc2lnbnVwTGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5zaWdudXBDbG9zZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb3Jnb3RNb2RhbENsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI3NpZ251cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZSRUVTQ1BUXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDBweCAwcHggMTBweDtcbn1cblxuLmxvZ2luQ2xpY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwMjUzNTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2ZvcmdvdE1vZGFsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4jd2VsY29tZUhlYWQge1xuICBmb250LWZhbWlseTogXCJGUkVFU0NQVFwiO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAzMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5jb21wb25lbnRNYWluRGl2IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5oZWFkZXIgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvZ2luQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICB6b29tOiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uc2lnblVwIGlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dCNyZW1lbWJlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0I3JlbWVtYmVyICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuaW5wdXQjcmVtZW1iZXIgKyBsYWJlbDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvY2hlY2sgYm94LnBuZ1wiKTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQjcmVtZW1iZXI6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDIwcHggMHB4O1xufVxuXG4uZ29vZ2xlTG9naW4sXG4uZmFjZWJvb2tMb2dpbixcbi5zaWdudXBNb2RhbEJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5nb29nbGVMb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Yjg1ZjE7XG59XG5cbi5mYWNlYm9va0xvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNWRhZDtcbn1cblxuLnNpZ251cE1vZGFsQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhNjk3NDtcbn1cblxuLnNvY2lhbENlbnRlciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5zb2NpYWxJY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uc2lnbnVwX2lucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5zaWdudXBfaW5wdXQgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiBncmV5O1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG4uc2lnbnVwX2lucHV0IGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uYnV0dG9uSW5zaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMjJweDtcbn1cblxuI2VtYWlsSW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbiNsaW5rU2lnbkluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgY29sb3I6ICMyYTY5NzQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI2FncmVlbWVudCB7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbiNhZ3JlZW1lbnQgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);











let LoginComponent = class LoginComponent {
    constructor(_toastService, platform, googlePlus, _userService, router, fb) {
        this._toastService = _toastService;
        this.platform = platform;
        this.googlePlus = googlePlus;
        this._userService = _userService;
        this.router = router;
        this.fb = fb;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
        this.forgotPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email])
        });
        this.user = {
            userName: "",
            email: "",
            mobile: "",
            password: "",
        };
        this.forgot = {
            email: "",
        };
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('login')) {
                this.router.navigate(['settings']);
            }
        }));
        this.rememberMe();
    }
    ionViewWillEnter() {
        this.email = localStorage.getItem('email');
    }
    rememberMe() {
        if (localStorage.getItem("remembered")) {
            var login = JSON.parse(localStorage.getItem("remembered"));
            console.log(login);
            this.login = {
                userName: login.userName,
                password: login.password
            };
        }
        else {
            this.login = {
                userName: "",
                password: ""
            };
        }
    }
    goBack() {
        this.router.navigateByUrl('/settings');
    }
    doGoogleLogin() {
        console.log("in google login============");
        this.googlePlus.login({})
            .then((res) => {
            this.loading = true;
            console.log('res==of google==============>', res);
            this._userService.googleLogin(res.accessToken).subscribe((res) => {
                this.loading = false;
                this.router.navigate(['home/categories']);
            }, err => {
                this.loading = false;
                console.log('err==========>', err);
            });
        })
            .catch(err => console.error('err==============>', err));
    }
    doFbLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("in facebook login============");
            let permissions = new Array();
            //the permissions your facebook app needs from the user
            permissions = ["public_profile", "email"];
            this.fb.login(permissions)
                .then((response) => {
                this.loading = true;
                console.log('response=============>', response);
                let accessToken = response.authResponse.accessToken;
                console.log('accessToken=============,accessToken', accessToken);
                this._userService.fbLogin(accessToken).subscribe((res) => {
                    this.loading = false;
                    this.router.navigate(['home/categories']);
                }, err => {
                    this.loading = false;
                    console.log('err===========>', err);
                });
            });
        });
    }
    signup(user) {
        this.loading = true;
        this._userService.signup(user).subscribe((res) => {
            this.loading = false;
            this._toastService.toastFunction(res.message, 'success');
            this.signupForm.reset();
            this.router.navigate(['settings']);
            this.router.navigate(['login']);
        }, err => {
            this.loading = false;
            this._toastService.toastFunction(err.error.message, 'danger');
        });
    }
    userLogin(login) {
        this.loading = true;
        const element = document.getElementById('remember');
        if (element.checked) {
            localStorage.setItem("remembered", JSON.stringify(login));
        }
        else {
            localStorage.removeItem('remembered');
        }
        console.log(login);
        this._userService.customLogin(login).subscribe((res) => {
            this.loading = false;
            this._toastService.toastFunction(res.message, 'success');
            this.router.navigate(['home/categories']);
        }, err => {
            this.loading = false;
            this._toastService.toastFunction(err.error.message, 'success');
        });
    }
    resetPassword(user) {
        this.loading = true;
        this._userService.passwordReset(user).subscribe((res) => {
            this.loading = false;
            this._toastService.toastFunction(res.message, 'success');
            this.router.navigate(['settings']);
        }, err => {
            this.loading = false;
            this._toastService.toastFunction(err.error.message, 'success');
        });
    }
    signUpClose() {
        this.signupForm.reset();
    }
    signInRoute() {
        this.emailLogin = jquery__WEBPACK_IMPORTED_MODULE_10__('#emailInput').val();
        localStorage.setItem('email', this.emailLogin);
        this.router.navigateByUrl('/signin');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/privacy/privacy.component.scss":
/*!************************************************!*\
  !*** ./src/app/privacy/privacy.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".privacyBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpdmFjeUJhY2t7XG5cdGZsb2F0OiBsZWZ0O1xuXHRmb250LXNpemU6IDIwcHg7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcbn0iLCIucHJpdmFjeUJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PrivacyComponent = class PrivacyComponent {
    constructor(platform, _generalService, router) {
        this.platform = platform;
        this._generalService = _generalService;
        this.router = router;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('privacy')) {
                this.router.navigate(['settings']);
            }
        }));
        this.getPrivacyPolicy();
    }
    getPrivacyPolicy() {
        this.loading = true;
        this._generalService.getPolicy().subscribe((res) => {
            this.loading = false;
            this.privacyPolicy = res;
            console.log(this.privacyPolicy);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
};
PrivacyComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html"),
        styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/app/privacy/privacy.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PrivacyComponent);



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings {\n  border-bottom: 1px solid lightgrey;\n  cursor: pointer;\n}\n\n.searchBack {\n  margin: auto 0 !important;\n  text-align: center;\n}\n\n.searchBack ion-icon {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.newsImg {\n  margin: auto 0 !important;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.newsImg img {\n  border-radius: 5px;\n}\n\n.newsCat {\n  margin: 0px auto;\n  color: gray;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n\n#box {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n#box img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n#noResults {\n  left: 0;\n  line-height: 200px;\n  margin-top: -100px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0NBOztBREVBO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxrQkFBQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDQyxPQUFBO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5nc3tcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG5jdXJzb3I6cG9pbnRlcjtcbn1cblxuLnNlYXJjaEJhY2t7XG5cdG1hcmdpbjogYXV0byAwIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5zZWFyY2hCYWNrIGlvbi1pY29ue1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmV3c0ltZ3tcblx0bWFyZ2luOiBhdXRvIDAhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5uZXdzSW1nIGltZ3tcblx0Ym9yZGVyLXJhZGl1czo1cHg7XG59XG5cbi5uZXdzQ2F0e1xuXHRtYXJnaW46IDBweCBhdXRvO1xuXHRjb2xvcjogZ3JheVxufVxuXG4ub3B0aW9uc0xpc3R7XG5cdG1hcmdpbjogMHB4IGF1dG87XG59XG4jYm94e1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbn1cbiNib3ggaW1ne1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIGJvdHRvbTowO1xuICAgIG1hcmdpbjphdXRvO1xufVxuI25vUmVzdWx0c3tcblx0bGVmdDogMDtcbiAgICBsaW5lLWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLnNldHRpbmdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoQmFjayB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlYXJjaEJhY2sgaW9uLWljb24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmV3c0ltZyB7XG4gIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLm5ld3NJbWcgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3c0NhdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4jYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYm94IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNub1Jlc3VsdHMge1xuICBsZWZ0OiAwO1xuICBsaW5lLWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let SearchbarComponent = class SearchbarComponent {
    constructor(platform, router, _newsService, renderer, elementRef, keyboard) {
        this.platform = platform;
        this.router = router;
        this._newsService = _newsService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.error = '';
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_5__["config"].mediaApiUrl;
    }
    ngOnInit() {
        this.box = true;
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('searchBar')) {
                this.router.navigate(['allcategory']);
            }
        }));
        const element = this.elementRef.nativeElement.querySelector('ion-input');
        // to delay
        this.language = localStorage.getItem('language');
    }
    ionViewWillEnter() {
        this.searchInput.setFocus();
    }
    searchNews(key) {
        this.loading = true;
        this.keyValue = key;
        if (this.keyValue.length == 0) {
            this.loading = false;
            this.newsArray = [];
            this.searchLength = this.newsArray;
            this.box = true;
        }
        else {
            this._newsService.searchedNews(key).subscribe((res) => {
                this.loading = false;
                this.newsArray = res;
                this.searchLength = this.newsArray.length;
                console.log(this.newsArray);
                this.box = false;
            }, (err) => {
                this.loading = false;
                this.error = err;
            });
        }
    }
    getSingleSearch(postid) {
        //    this.keyboard.hide();
        setTimeout(() => {
            this.router.navigate(['single-post/' + postid + '/search']);
        }, 500);
    }
};
SearchbarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchbarComponent.prototype, "searchInput", void 0);
SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchbar',
        template: __webpack_require__(/*! raw-loader!./searchbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html"),
        styles: [__webpack_require__(/*! ./searchbar.component.scss */ "./src/app/searchbar/searchbar.component.scss")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[set-focuser]' // Attribute selector
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"]])
], SearchbarComponent);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let CategoryService = class CategoryService {
    constructor(network, http) {
        this.network = network;
        this.http = http;
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Error! something went wrong.');
    }
    //get all cateogries
    getAll() {
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
            var base64Url = tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
            console.log("Decoded", this.loggedInUser);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](observer => {
            this.categories = JSON.parse(localStorage.getItem("categories"));
            this.notifyChange();
            observer.next(this.categories);
            if (this.network.type == 'none') {
                console.log(JSON.parse(localStorage.getItem("newsArray")));
                observer.complete();
            }
            else {
                this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category").subscribe((result) => {
                    this.categories = result['data'];
                    localStorage.setItem('categories', JSON.stringify(this.categories));
                    this.notifyChange();
                    observer.next(this.categories);
                }, (error) => {
                    observer.error(error);
                });
                // setInterval(function(){
                // 	var cats = getLocalStorageCategories();
                // 	console.log("Next Service Data = ",cats);
                // 	observer.next(cats);
                // 	function getLocalStorageCategories(){
                // 		return JSON.parse(localStorage.getItem("categories"));
                // 	}
                // },10000);
                // observer.complete();
            }
        });
    }
    notifyChange() {
        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.categories, (user) => {
            lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, (Id) => {
                if (Id == this.loggedInUser) {
                    user['isNotify'] = true;
                }
            });
        });
    }
    notifyUser(catId) {
        console.log(catId);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category-notify", { categoryId: catId });
    }
};
CategoryService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CategoryService);



/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let GeneralService = class GeneralService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Error! something went wrong.');
    }
    //get all cateogries
    getPolicy() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "terms").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            this.privacy = res['data'];
            return this.privacy;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
GeneralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], GeneralService);



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");







let NewsService = class NewsService {
    constructor(network, http) {
        this.network = network;
        this.http = http;
        this.authorization = localStorage.getItem('accessToken');
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Error! something went wrong.');
    }
    //fetch all news
    getAllNews() {
        if (this.network.type == 'none') {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                console.log(JSON.parse(localStorage.getItem("newsArray")));
                this.newsArray = JSON.parse(localStorage.getItem("newsArray"));
                setTimeout(() => {
                    observer.next(this.newsArray);
                    observer.complete();
                }, 1);
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'news?isApproved=APPROVED').subscribe((result) => {
                    this.newsArray = result['data'];
                    localStorage.setItem('newsArray', JSON.stringify(this.newsArray));
                    observer.next(this.newsArray);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
            });
        }
    }
    allCatNews(id) {
        console.log("Inside", id);
        if (this.network.type == 'none') {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                console.log(JSON.parse(localStorage.getItem("newsArray")));
                this.newsArray = JSON.parse(localStorage.getItem("newsArray"));
                var filtersArray = [id];
                var filtered = this.newsArray.filter(function (element) {
                    var cats = element.newsCategoryId.split(' ');
                    return cats.filter(function (cat) {
                        return filtersArray.indexOf(cat) > -1;
                    }).length === filtersArray.length;
                });
                this.newsArray = filtered;
                console.log("filtered", filtered);
                setTimeout(() => {
                    observer.next(this.newsArray);
                    observer.complete();
                }, 1);
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                console.log("in ");
                this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'news?isApproved=APPROVED&categoryId=' + id).subscribe((result) => {
                    this.newsArray = result['data'];
                    console.log("in cat service", this.newsArray);
                    // localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
                    observer.next(this.newsArray);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
            });
        }
    }
    searchedNews(searchKey) {
        if (this.network.type == 'none') {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                console.log("fdfdfd", JSON.parse(localStorage.getItem("newsArray")));
                console.log("regex");
                this.newsArray = JSON.parse(localStorage.getItem("newsArray"));
                const items = this.newsArray.filter(item => item.newsTitleEnglish.indexOf(searchKey) !== -1);
                console.log("after", items);
                this.newsArray = items;
                setTimeout(() => {
                    observer.next(this.newsArray);
                    observer.complete();
                }, 1);
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'news?isApproved=APPROVED&keyword=' + searchKey).subscribe((result) => {
                    this.newsArray = result['data'];
                    console.log("in cat service", this.newsArray);
                    // localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
                    observer.next(this.newsArray);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
            });
        }
        // return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&keyword=' + searchKey).pipe(
        // 	map((res) => {
        // 		this.newsArray = res['data'];
        // 		return this.newsArray;
        // 	}),
        // 	catchError(this.handleError));
    }
    getAllBookmarks() {
        console.log("Hello");
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'bookmark').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => {
            this.newsArray = res['data'];
            this.newsArray = this.newsArray.post;
            this.newsArray.map((e) => {
                e['bookmarkKey'] = true;
            });
            console.log('this.newsArraythis.newsArraythis.newsArray', this.newsArray);
            return this.newsArray;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    bookmarkPost(id) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + "bookmark", { postId: id });
    }
    //get single news
    getSingleNews(id) {
        if (this.network.type == 'none') {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                console.log(JSON.parse(localStorage.getItem("newsArray")));
                this.newsArray = JSON.parse(localStorage.getItem("newsArray"));
                var filtersArray = [id];
                var filtered = this.newsArray.filter(function (element) {
                    var news = element.newsId.split(' ');
                    return news.filter(function (post) {
                        return filtersArray.indexOf(post) > -1;
                    }).length === filtersArray.length;
                });
                this.newsArray = filtered;
                console.log("filtered", filtered);
                setTimeout(() => {
                    observer.next(this.newsArray);
                    observer.complete();
                }, 1);
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
                console.log("in ");
                this.http.get(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'news?isApproved=APPROVED&postId=' + id).subscribe((result) => {
                    this.newsArray = result['data'];
                    console.log("in cat service", this.newsArray);
                    // localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
                    observer.next(this.newsArray);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                });
            });
        }
    }
    newsCount(data) {
        console.log("post data", data);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'post-views', data);
    }
    likepost(id) {
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_5__["config"].baseApiUrl + 'post-like', { postId: id });
    }
};
NewsService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], NewsService);



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    toastFunction(message, color) {
        this.toast = this.toastController.create({
            message: message,
            duration: 2000,
            color: 'danger'
        }).then((toastData) => {
            toastData.present();
        });
        return "Toast Shown";
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




// import * as CryptoJS from 'crypto-js';




let UserService = class UserService {
    constructor(http, storage, plt) {
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](localStorage.getItem('accessToken'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('Error! something went wrong.');
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    //annonymous user
    firstTimeUser() {
        var deviceToken = localStorage.getItem('deviceToken');
        const annonymousUser = {
            deviceToken: deviceToken,
            notification: true
        };
        console.log("annonymous user", annonymousUser);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "register-token", annonymousUser);
    }
    googleLogin(token) {
        var deviceToken = localStorage.getItem('deviceToken');
        const accessToken = {
            accessToken: token,
            deviceToken: deviceToken
        };
        console.log('service google', accessToken);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "googleLogin", accessToken).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            console.log("login user with google=========>", user);
            // login successful if there's a jwt token in the response
            if (user && user.data.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.storage.set('accessToken', user.data.accessToken);
                localStorage.setItem('accessToken', user.data.accessToken);
                console.log("token in service", localStorage.getItem('accessToken'));
                this.storage.get('accessToken').then((val) => {
                    console.log('accessToken', val);
                });
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    fbLogin(token) {
        var deviceToken = localStorage.getItem('deviceToken');
        const accessToken = {
            accessToken: token,
            deviceToken: deviceToken
        };
        console.log('service facebook', accessToken);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "facebookLogin", accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            console.log("login user with fb=========>", user);
            if (user && user.data.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('accessToken', user.data.accessToken);
                localStorage.getItem('accessToken');
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logOut() {
        var deviceToken = localStorage.getItem('deviceToken');
        // localStorage.setItem('notification', 'false');
        // localStorage.setItem('annonymousNotify', 'false');
        this.currentUserSubject.next(null);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + 'user-logout', { deviceToken: deviceToken });
    }
    signup(user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "user", user);
    }
    customLogin(login) {
        login.deviceToken = localStorage.getItem('deviceToken');
        console.log(login);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "user-login", login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((user) => {
            if (user && user.data.accessToken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('accessToken', user.data.accessToken);
                localStorage.getItem('accessToken');
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    userFeedbackFrom(feedback) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "feedback", feedback);
    }
    notifyToggle(notify) {
        var accessToken = localStorage.getItem('accessToken');
        var deviceToken = localStorage.getItem('deviceToken');
        const nologinNotify = {
            deviceToken: deviceToken,
            notification: notify
        };
        if (accessToken) {
            console.log("Log in apii notify");
            return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "allow-notify", { notification: notify });
        }
        else {
            console.log("Not Log in apii notify");
            return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "allow-notify-nologin", nologinNotify);
        }
    }
    getUserDetail() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + 'single-user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            this.singleUser = res['data'];
            return this.singleUser;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    passwordReset(email) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "forgotpassword", email);
    }
    userRating(rating) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + 'ratings', { ratingValue: rating });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
], UserService);



/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: #ce2837;\n  font-size: 20px;\n  margin-left: 10px;\n}\n\n.loginDiv {\n  height: 170px;\n  border-bottom: 1px solid #ddd;\n}\n\n.item-radio.item ion-label {\n  color: #dd6873;\n}\n\n.settingsToolbar ion-icon {\n  float: left;\n  zoom: 1;\n  margin-left: 9px;\n  font-size: 20px;\n  margin-top: 6px;\n  color: #fff;\n}\n\n.settingsToolbar #settingTitle {\n  margin-left: 10px;\n  font-size: 18px;\n  line-height: 37px;\n}\n\n#signInButton {\n  color: #fff;\n  border-radius: 50px;\n  background-color: #ce2837;\n  padding: 10.5px 36.5px;\n  font-size: 17px;\n}\n\n#googleplus {\n  color: #fff;\n  font-weight: 800;\n  font-size: 15px;\n  border-radius: 50%;\n  background-color: #d9534e;\n  padding: 10px 9.5px;\n  margin-right: 4%;\n}\n\n#googleplus img {\n  margin-top: 3px;\n}\n\n#facebookLogin {\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 4px;\n  background-color: #3779b7;\n  padding: 9px 15px;\n  font-weight: 950;\n  font-size: 20px;\n}\n\n.optionsList {\n  font-size: 18px;\n  color: gray;\n}\n\n.switch input {\n  position: absolute;\n  opacity: 0;\n}\n\n/**\n* 1. Adjust this to size\n*/\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  /* 1 */\n  height: 1em;\n  width: 2em;\n  /*background: #CE2837;*/\n  background-color: #c5bdbd;\n  border-radius: 1em;\n  float: right;\n}\n\n.switch div {\n  height: 1em;\n  width: 1em;\n  border-radius: 1em;\n  background: white;\n  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\n.switch input:checked + div {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  background: #ce2837;\n}\n\n#profile {\n  border-radius: 50%;\n  padding: 8px 12px;\n  float: right;\n  background-color: red;\n  color: #fff;\n  margin-right: 5px;\n}\n\n.settingIcon img {\n  width: 17px;\n  height: 19px;\n  margin-top: 6px;\n  margin-left: 13px;\n}\n\n.settingIconCol {\n  margin: auto;\n}\n\n.savePref {\n  font-size: 31px;\n  margin: 10px 0px;\n}\n\n.signInBook {\n  font-size: 15px;\n  margin: 10px 0px;\n  color: #949494;\n}\n\n.signInCol {\n  padding-left: 0;\n}\n\n.langColTwo {\n  margin: auto;\n  font-size: 29px;\n  text-align: center;\n}\n\n.langColTwo span {\n  margin-left: 5px;\n  margin-top: 5px;\n  font-size: 17px;\n}\n\n.languageDiv {\n  float: left;\n  padding-top: 15px;\n}\n\n.langColor {\n  color: #dd6d77;\n}\n\n.langColor ion-select {\n  max-width: 50%;\n  float: right;\n}\n\n#personIcon ion-icon {\n  zoom: 1.1;\n}\n\n#personIcon {\n  border-radius: 50%;\n  padding: 5px 7px;\n  float: right;\n  background-color: red;\n  color: #fff;\n  margin-right: 5px;\n  margin-left: 0px;\n}\n\n#personIcon ion-icon {\n  margin-left: 0px;\n}\n\n.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md button.action-sheet-button.ion-activatable.action-sheet-cancel.sc-ion-action-sheet-md.activated {\n  display: none !important;\n}\n\n#ratingRow {\n  padding: 100px 10px 10px 10px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n#ratingRow > img {\n  position: absolute;\n  bottom: 0;\n  top: -75px;\n  left: 0;\n  right: 0;\n  z-index: 0;\n  min-width: 100%;\n}\n\n.settings.settingIcon {\n  position: relative;\n  z-index: 11;\n  padding: 10px;\n}\n\n.logo {\n  margin: auto;\n}\n\n#ratingRow > div {\n  position: relative;\n  z-index: 11;\n}\n\n#ratingHead {\n  width: 100%;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 500;\n  margin: 10px 0;\n  opacity: 0.7;\n  color: #ce2837;\n}\n\n#rating {\n  margin: auto;\n}\n\n.alert-head .sc-ion-alert-md {\n  display: none !important;\n}\n\nionic4-star-rating {\n  text-align: center;\n}\n\n.greetings {\n  font-size: 11px !important;\n}\n\n.settingsLoggedIn {\n  padding-top: 23px;\n}\n\n#loginOption {\n  line-height: 3;\n  margin-right: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDR0Y7O0FEQUE7O0NBQUE7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFBaUIsTUFBQTtFQUNqQixXQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFFQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0UsMENBQUE7RUFFQSxrQ0FBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0lGOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURKQTtFQUNFLGNBQUE7QUNPRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDT0Y7O0FESkE7RUFDRSxTQUFBO0FDT0Y7O0FESkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURKQTtFQUNFLGdCQUFBO0FDT0Y7O0FESkE7RUFFRSx3QkFBQTtBQ01GOztBREpBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDT0o7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1NGOztBRFBBO0VBQ0UsWUFBQTtBQ1VGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNZRjs7QURWQTtFQUNFLFlBQUE7QUNhRjs7QURYQTtFQUNFLHdCQUFBO0FDY0Y7O0FEWkE7RUFDRSxrQkFBQTtBQ2VGOztBRGJBO0VBQ0UsMEJBQUE7QUNnQkY7O0FEZEE7RUFDRSxpQkFBQTtBQ2lCRjs7QURmQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2tCRiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICBjb2xvcjogI2NlMjgzNztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luRGl2IHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIC8vIGJhY2tncm91bmQ6IHVybChcImFzc2V0cy9pbWFnZXMvYnJvd25iZy5wbmdcIik7XG59XG4uaXRlbS1yYWRpby5pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZGQ2ODczOyAvL3lvdXIgY29sb3IgaGVyZVxufVxuXG4uc2V0dGluZ3NUb29sYmFyIGlvbi1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHpvb206IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNldHRpbmdzVG9vbGJhciAjc2V0dGluZ1RpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG59XG5cbiNzaWduSW5CdXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlMjgzNztcbiAgcGFkZGluZzogMTAuNXB4IDM2LjVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jZ29vZ2xlcGx1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZTtcbiAgcGFkZGluZzogMTBweCA5LjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbn1cbiNnb29nbGVwbHVzIGltZyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbiNmYWNlYm9va0xvZ2luIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzc5Yjc7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICBmb250LXdlaWdodDogOTUwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qKlxuKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXG4qL1xuXG4uc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7IC8qIDEgKi9cbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAyZW07XG4gIC8qYmFja2dyb3VuZDogI0NFMjgzNzsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzViZGJkO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnN3aXRjaCBkaXYge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwLjFlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogI2NlMjgzNztcbn1cblxuI3Byb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnNldHRpbmdJY29uIGltZyB7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi5zZXR0aW5nSWNvbkNvbCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNhdmVQcmVmIHtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uc2lnbkluQm9vayB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgY29sb3I6ICM5NDk0OTQ7XG59XG4uc2lnbkluQ29sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmxhbmdDb2xUd28ge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFuZ0NvbFR3byBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG4ubGFuZ3VhZ2VEaXYge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5sYW5nQ29sb3Ige1xuICBjb2xvcjogI2RkNmQ3Nztcbn1cblxuLmxhbmdDb2xvciBpb24tc2VsZWN0IHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuI3BlcnNvbkljb24gaW9uLWljb24ge1xuICB6b29tOiAxLjE7XG59XG5cbiNwZXJzb25JY29uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4jcGVyc29uSWNvbiBpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5hY3Rpb24tc2hlZXQtZ3JvdXAuYWN0aW9uLXNoZWV0LWdyb3VwLWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kXG4gIGJ1dHRvbi5hY3Rpb24tc2hlZXQtYnV0dG9uLmlvbi1hY3RpdmF0YWJsZS5hY3Rpb24tc2hlZXQtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQuYWN0aXZhdGVkIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuI3JhdGluZ1JvdyB7XG4gICAgcGFkZGluZzogMTAwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiNyYXRpbmdSb3cgPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgdG9wOi03NXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLnNldHRpbmdzLnNldHRpbmdJY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTtcbiAgcGFkZGluZzoxMHB4O1xufVxuLmxvZ297XG4gIG1hcmdpbjogYXV0bztcbn1cbiNyYXRpbmdSb3cgPiBkaXZ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG59XG4jcmF0aW5nSGVhZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG9wYWNpdHk6IDAuNztcbiAgY29sb3I6ICNjZTI4Mzc7XG59XG4jcmF0aW5nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFsZXJ0LWhlYWQgLnNjLWlvbi1hbGVydC1tZHtcbiAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG59XG5pb25pYzQtc3Rhci1yYXRpbmd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ncmVldGluZ3N7XG4gIGZvbnQtc2l6ZToxMXB4IWltcG9ydGFudDtcbn1cbi5zZXR0aW5nc0xvZ2dlZElue1xuICBwYWRkaW5nLXRvcDogMjNweDtcbn1cbiNsb2dpbk9wdGlvbntcbiAgbGluZS1oZWlnaHQ6IDM7XG4gIG1hcmdpbi1yaWdodDogNiU7XG59XG4iLCJpb24taWNvbiB7XG4gIGNvbG9yOiAjY2UyODM3O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubG9naW5EaXYge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbn1cblxuLml0ZW0tcmFkaW8uaXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogI2RkNjg3Mztcbn1cblxuLnNldHRpbmdzVG9vbGJhciBpb24taWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB6b29tOiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgI3NldHRpbmdUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzN3B4O1xufVxuXG4jc2lnbkluQnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTI4Mzc7XG4gIHBhZGRpbmc6IDEwLjVweCAzNi41cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI2dvb2dsZXBsdXMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGU7XG4gIHBhZGRpbmc6IDEwcHggOS41cHg7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbiNnb29nbGVwbHVzIGltZyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI2ZhY2Vib29rTG9naW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NzliNztcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA5NTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm9wdGlvbnNMaXN0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyoqXG4qIDEuIEFkanVzdCB0aGlzIHRvIHNpemVcbiovXG4uc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIC8qIDEgKi9cbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAyZW07XG4gIC8qYmFja2dyb3VuZDogI0NFMjgzNzsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzViZGJkO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnN3aXRjaCBkaXYge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwLjFlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogI2NlMjgzNztcbn1cblxuI3Byb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2V0dGluZ0ljb24gaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTlweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLnNldHRpbmdJY29uQ29sIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2F2ZVByZWYge1xuICBmb250LXNpemU6IDMxcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5zaWduSW5Cb29rIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBjb2xvcjogIzk0OTQ5NDtcbn1cblxuLnNpZ25JbkNvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmxhbmdDb2xUd28ge1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFuZ0NvbFR3byBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5sYW5ndWFnZURpdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmxhbmdDb2xvciB7XG4gIGNvbG9yOiAjZGQ2ZDc3O1xufVxuXG4ubGFuZ0NvbG9yIGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jcGVyc29uSWNvbiBpb24taWNvbiB7XG4gIHpvb206IDEuMTtcbn1cblxuI3BlcnNvbkljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbiNwZXJzb25JY29uIGlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFjdGlvbi1zaGVldC1ncm91cC5hY3Rpb24tc2hlZXQtZ3JvdXAtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQgYnV0dG9uLmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWFjdGl2YXRhYmxlLmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC5hY3RpdmF0ZWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNyYXRpbmdSb3cge1xuICBwYWRkaW5nOiAxMDBweCAxMHB4IDEwcHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcmF0aW5nUm93ID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogLTc1cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncy5zZXR0aW5nSWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jcmF0aW5nUm93ID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMTtcbn1cblxuI3JhdGluZ0hlYWQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMTBweCAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIGNvbG9yOiAjY2UyODM3O1xufVxuXG4jcmF0aW5nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYWxlcnQtaGVhZCAuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb25pYzQtc3Rhci1yYXRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmVldGluZ3Mge1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cblxuLnNldHRpbmdzTG9nZ2VkSW4ge1xuICBwYWRkaW5nLXRvcDogMjNweDtcbn1cblxuI2xvZ2luT3B0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDM7XG4gIG1hcmdpbi1yaWdodDogNiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");










let SettingsComponent = class SettingsComponent {
    constructor(_toastService, cd, _generalService, platform, fcm, storage, socialSharing, actionSheetController, _userService, router) {
        this._toastService = _toastService;
        this.cd = cd;
        this._generalService = _generalService;
        this.platform = platform;
        this.fcm = fcm;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this._userService = _userService;
        this.router = router;
        this.customActionSheetOptions = {
            addCancelButtonWithLabel: false,
        };
    }
    ngOnInit() {
        this.getUserRating();
        this.getUrl();
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.router.navigate(['home/categories']);
        }));
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        this.notifyFlag = localStorage.getItem('notification');
        this.annonymousNotify = localStorage.getItem('annonymousNotify');
        console.log(this.annonymousNotify);
        if (this.tokenLocalStorage) {
            console.log("token");
            $('.settings').css('padding-top', '23px');
        }
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            if (decodedToken.user.email) {
                this.firstCharUser = decodedToken.user.email.charAt(0).toUpperCase();
            }
        }
        this.language = localStorage.getItem('language');
        if (this.tokenLocalStorage) {
            this.getUserDetail();
        }
    }
    removeCancelButton() {
        document.querySelector('.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md').style.display = 'none';
    }
    getUrl() {
        this._generalService.getPolicy().subscribe((res) => {
            this.privacyPolicy = res;
        }, (err) => {
            this.error = err;
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                buttons: [{
                        text: 'Logout',
                        role: 'destructive',
                        handler: () => {
                            this._userService.logOut().subscribe();
                            localStorage.removeItem('accessToken');
                            this.fcm.getToken().then(token => {
                                localStorage.setItem('deviceToken', token);
                            });
                            this.fcm.onTokenRefresh().subscribe(token => {
                                localStorage.setItem('deviceToken', token);
                            });
                            this.router.navigate(['/home/categories']);
                            this._toastService.toastFunction('You have been logged out!', 'primary');
                        }
                    }, {
                        text: 'Cancel',
                        handler: () => {
                        }
                    }]
            });
            localStorage.setItem('language', 'English');
            yield actionSheet.present();
        });
    }
    sendShare() {
        var message = "An awesome news app that is only you need!";
        var subject = "Install Trivia Post";
        console.log("Share", this.privacyPolicy);
        var url = this.privacyPolicy[0].applink;
        this.socialSharing.share("Check out Trivia Post App. I found it best for reading news", "Trivia Post App", null, url)
            .then((entries) => {
            console.log('success ' + JSON.stringify(entries));
        })
            .catch((error) => {
            alert('error ' + JSON.stringify(error));
        });
    }
    languageChange($event) {
        var language = $event.target.value;
        localStorage.setItem('language', language);
        this.changeLanOnClick();
    }
    changeLanOnClick() {
        this.language = localStorage.getItem('language');
    }
    notificationSwitch(e) {
        localStorage.setItem('notification', e.target.checked);
        localStorage.setItem('annonymousNotify', e.target.checked);
        var accessToken = localStorage.getItem('accessToken');
        this._userService.notifyToggle(e.target.checked).subscribe((res) => {
            if (accessToken) {
                this.getUserDetail();
            }
            this._toastService.toastFunction(res.message, 'success');
        }, err => {
            this._toastService.toastFunction(err.error.message, 'danger');
        });
    }
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            this.userData = res.notification;
        }, (err) => {
            this.error = err;
        });
    }
    logRatingChange(rating) {
        localStorage.setItem('rating', rating);
        this._userService.userRating(rating).subscribe();
        this.rating = true;
        this.userRating = localStorage.getItem('rating');
    }
    getUserRating() {
        if (localStorage.getItem('rating')) {
            this.rating = true;
            this.userRating = localStorage.getItem('rating');
        }
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_8__["GeneralService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_general_service__WEBPACK_IMPORTED_MODULE_8__["GeneralService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/terms-and-cond/terms-and-cond.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/terms-and-cond/terms-and-cond.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".termsBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvdGVybXMtYW5kLWNvbmQvdGVybXMtYW5kLWNvbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rlcm1zLWFuZC1jb25kL3Rlcm1zLWFuZC1jb25kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvdGVybXMtYW5kLWNvbmQvdGVybXMtYW5kLWNvbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXNCYWNre1xuXHRmbG9hdDogbGVmdDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG59IiwiLnRlcm1zQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/terms-and-cond/terms-and-cond.component.ts":
/*!************************************************************!*\
  !*** ./src/app/terms-and-cond/terms-and-cond.component.ts ***!
  \************************************************************/
/*! exports provided: TermsAndCondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndCondComponent", function() { return TermsAndCondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let TermsAndCondComponent = class TermsAndCondComponent {
    constructor(platform, _generalService, router) {
        this.platform = platform;
        this._generalService = _generalService;
        this.router = router;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('terms')) {
                this.router.navigate(['settings']);
            }
        }));
        this.getPrivacyPolicy();
    }
    getPrivacyPolicy() {
        this.loading = true;
        this._generalService.getPolicy().subscribe((res) => {
            this.loading = false;
            this.privacyPolicy = res;
            console.log(this.privacyPolicy);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
};
TermsAndCondComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
TermsAndCondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-and-cond',
        template: __webpack_require__(/*! raw-loader!./terms-and-cond.component.html */ "./node_modules/raw-loader/index.js!./src/app/terms-and-cond/terms-and-cond.component.html"),
        styles: [__webpack_require__(/*! ./terms-and-cond.component.scss */ "./src/app/terms-and-cond/terms-and-cond.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], TermsAndCondComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/Bhavik/Projects/trivia_post/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map