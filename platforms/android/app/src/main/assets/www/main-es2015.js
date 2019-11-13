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

module.exports = "<ion-content (swiperight)=\"goToCategories()\" ion-padding>\n    <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let news of newsArray; let i = index; last as isLast\">\n            <ion-card (click)=\"singleNews(news.newsId)\">\n                <ion-card-header>\n                    <img src=\"{{mediaPath}}{{news.newsImage}}\" height=\"91px\" alt=\"\">\n                </ion-card-header>\n\n                <ion-card-content>\n                    <span *ngIf=\"language == 'English'\">{{news.newsTitleEnglish | slice:0:40}}</span>\n                    <span *ngIf=\"language == 'Hindi'\">{{news.newsTitleHindi | slice:0:40}}</span>\n                    <span *ngIf=\"news.newsTitleEnglish.length >=40\">...</span>\n                </ion-card-content>\n                <ion-row class=\"cardfooter\">\n                    <ion-col size=\"9\">\n                        {{news.createdAt | timeAgo}}\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        {{news.likesCount}} <span *ngIf=\"news.likesCount == 0\">like</span><span *ngIf=\"news.likesCount == 1\">like</span><span\n                            *ngIf=\"news.likesCount > 1\">likes</span>\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>"

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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-icon name=\"arrow-round-back\" class=\"bookmarkBack\" routerLink=\"/settings\"></ion-icon>\n        <ion-title>\n            Bookmarks\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <h2 id=\"bookmarkHead\">My Bookmarks</h2>\n    <ion-row class=\"searchResults\" *ngFor=\"let news of newsArray\">\n        <ion-col size=\"3\" class=\"bookmarkImgCol\" padding (click)=\"getSingleBookmark(news.newsId)\">\n            <div class=\"bookmark-img\">\n                <img src=\"{{mediaPath}}{{news.newsImage}}\">\n            </div>\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"getSingleBookmark(news.newsId)\">\n            <div padding>\n                <p class=\"bookmarkCat\" *ngIf=\"language == 'English'\">{{news.newsCategory}}</p>\n                <p class=\"bookmarkCat\" *ngIf=\"language == 'Hindi'\">{{news.newsCategoryHn}}</p>\n                <span class=\"optionsList\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"news.newsTitleHindi\"></span>\n                <span class=\"optionsList\" *ngIf=\"language == 'English'\" [innerHTML]=\"news.newsTitleEnglish\"></span>\n            </div>\n        </ion-col>\n        <ion-col class=\"bookmarkActButton\" (click)=\"bookmarkAction(news.newsImage,news.fcmLink,news.newsId, news.newsTitleEnglish)\">\n            <img src=\"assets/images/menu.png\">\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"bookmarkLength == 0\">\n        <ion-col size=\"12\">\n            <h1>You have no bookmarks!</h1>\n        </ion-col>\n    </ion-row>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <span class=\"logo_container\">\n                <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n            </span>\n            <div class=\"ml-loader\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n            <p class=\"text-center\">Loding Data...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content (swipeleft)=\"goToAllPosts()\">\n    <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let category of categories$ | async\">\n            <ion-card>\n                <ion-card-header (click)=\"singeCategory(category.categoryId,category.categoryTitle)\">\n                    <img src=\"{{mediaPath}}{{category.categoryImage}}\" height=\"91px \" alt=\"\">\n                </ion-card-header>\n\n                <ion-card-content (click)=\"singeCategory(category.categoryId,category.categoryTitle)\">\n                    <span *ngIf=\"language == 'English'\">{{category.categoryTitle}}</span> \n                    <span *ngIf=\"language == 'Hindi'\">{{category.categoryTitleHn}}</span>\n                </ion-card-content>\n                <ion-row class=\"cardfooter\">\n                    <ion-col size=\"9\">\n                        <p>{{category.countPost}} posts</p>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                        <img src=\"assets/images/Category-notification.png\" *ngIf=\"!category.isNotify\" id=\"blackBell\"\n                            (click)=\"addNotify(category.categoryId)\">\n                        <img src=\"assets/images/Category-notification-2.png\" *ngIf=\"category.isNotify\" id=\"redBell\"\n                            (click)=\"addNotify(category.categoryId)\">\n                    </ion-col>\n                </ion-row>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>"

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

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n        <ion-icon name=\"arrow-round-back\" class=\"loginBack\" routerLink=\"/settings\"></ion-icon>\n        <ion-title style=\"font-size:22px\">\n            Login\n        </ion-title>\n    </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"background\" (swiperight)=\"goBack()\">\n    <div class=\"componentMainDiv\">\n        <div class=\"header\">\n            <p id=\"welcomeHead\">Welcome to</p>\n            <img src=\"assets/images/Logo.png\" height=\"auto\" width=\"30%\">\n        </div>\n        <form [formGroup]=\"loginForm\" padding class=\"loginForm\">\n            <div class=\"signup_input loginInput\">\n                <ion-icon name=\"person\"></ion-icon>\n                <input type=\"text\" name=\"\" placeholder=\"Username\" formControlName=\"userName\" [(ngModel)]=\"login.userName\">\n            </div>\n            <div class=\"signup_input loginInput\">\n                <ion-icon name=\"lock\"></ion-icon>\n                <input type=\"password\" name=\"\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"login.password\">\n            </div>\n            <button (click)=\"userLogin(login)\" class=\"loginClick\">Login</button><br>\n            <div id=\"forgotModal\">\n                <input type=\"checkbox\" name=\"\" id=\"remember\"><label for=\"remember\">Remember me</label>\n                <span class=\"fdiv\">\n\t\t\t\t\t<label id=\"forgotPassword\" for=\"forgotPasswordModal\">Forgot Password?</label>\n\t\t\t\t\t<input type=\"checkbox\" id=\"forgotPasswordModal\" class=\"checkBox\" />\n\t\t\t\t\t<div class=\"modal\">\n\t\t\t\t\t\t<div class=\"modal__inner\">\n\t\t\t\t\t\t\t<p style=\"text-align: center;\"><i id=\"signup\">Forgot Password</i></p>\n\t\t\t\t\t\t\t<form [formGroup]=\"forgotPassword\">\n\t\t\t\t\t\t\t\t<div class=\"signup_input\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"mail\"></ion-icon>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" placeholder=\"Please enter email\" formControlName=\"email\" [(ngModel)]=\"forgot.email\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"signupButton\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"resetPassword(forgot)\">Reset Password</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t<label for=\"forgotPasswordModal\"><ion-icon class=\"forgotModalClose\" name=\"close\"></ion-icon></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</span>\n            </div>\n            <h2 class=\"otherLoginBreak\"><span> or </span></h2>\n            <h3 id=\"otherLoginTitle\">Login with your social media account</h3>\n        </form>\n        <ion-row padding class=\"socialLogin\">\n            <ion-col size=\"6\">\n                <button class=\"facebookLogin\" (click)=\"doFbLogin()\"><img src=\"assets/images/Facebook.png\"> Facebook</button>\n            </ion-col>\n            <ion-col size=\"6\">\n                <button class=\"googleLogin\" (click)=\"doGoogleLogin()\"><img src=\"assets/images/GooglePlus.png\"> Google</button>\n            </ion-col>\n        </ion-row>\n        <h2 class=\"otherLoginBreak\" padding></h2>\n        <div class=\"pop\">\n            <h3 id=\"signupLine\">Don't have an account? <span id=\"signupLink\"><label for=\"signupModal\" class=\"open\">Signup up here!</label></span></h3>\n\n            <input type=\"checkbox\" id=\"signupModal\" class=\"checkBox\" />\n            <div class=\"modal signUp\">\n                <div class=\"modal__inner\">\n                    <p style=\"text-align: center;\"><i id=\"signupHead\">Sign Up</i></p>\n                    <form [formGroup]=\"signupForm\">\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"person\"></ion-icon>\n                            <input type=\"text\" name=\"\" placeholder=\"Username\" formControlName=\"userName\" [(ngModel)]=\"user.userName\">\n                        </div>\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"mail\"></ion-icon>\n                            <input type=\"text\" name=\"\" placeholder=\"Email Address\" formControlName=\"email\" [(ngModel)]=\"user.email\">\n                        </div>\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"call\"></ion-icon>\n                            <input type=\"text\" name=\"\" placeholder=\"Phone Number\" formControlName=\"mobile\" [(ngModel)]=\"user.mobile\">\n                        </div>\n                        <div class=\"signup_input\">\n                            <ion-icon name=\"lock\"></ion-icon>\n                            <input type=\"password\" name=\"\" placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"user.password\">\n                        </div>\n                        <div class=\"signupButton\">\n                            <button (click)=\"signup(user)\">Signup</button>\n                        </div>\n                    </form>\n                    <label for=\"signupModal\"><ion-icon name=\"close\" class=\"signupClose\" (click)=\"signUpClose()\"></ion-icon></label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id=\"loader-wrapper\" *ngIf=\"loading\">\n        <div id=\"loader\">\n            <span class=\"logo_container\">\n\t\t\t\t<img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n\t\t\t</span>\n            <div class=\"ml-loader\">\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n            <p class=\"text-center\">Loding Data...</p>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/privacy/privacy.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-icon name=\"arrow-round-back\" class=\"privacyBack\" routerLink=\"/settings\"></ion-icon>\n\t\t\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\tPrivacy Policy\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\t<div *ngFor=\"let policy of privacyPolicy\">\n\t\t<div [innerHTML]=\"policy.policy\"></div>\t\n\t</div>\n\t<div id=\"loader-wrapper\" *ngIf=\"loading\">\n\t\t<div id=\"loader\">\n\t\t\t<span class=\"logo_container\">\n\t\t\t\t<img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n\t\t\t</span>\n\t\t\t<div class=\"ml-loader\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t\t<p class=\"text-center\">Loding Data...</p>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searchbar/searchbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"2\" class=\"searchBack\">\n\t\t\t\t<ion-icon name=\"arrow-round-back\" routerLink=\"/home/categories\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<ion-input set-focuser type=\"text\" placeholder=\"Search here..\"\n\t\t\t\t\t(input)=\"searchNews($event.target.value)\"></ion-input>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<ion-row class=\"searchResults\" *ngFor=\"let searchNews of newsArray\">\n\t\t<ion-col size=\"3\" class=\"newsImg\" padding (click)=\"getSingleSearch()\">\n\t\t\t<img src=\"{{mediaPath}}{{searchNews.newsImage}}\" height=\"73px\" width=\"100%\">\n\t\t</ion-col>\n\t\t<ion-col size=\"9\" (click)=\"getSingleSearch(searchNews.newsId)\">\n\t\t\t<div padding>\n\t\t\t\t<p class=\"newsCat\" *ngIf=\"language == 'English'\">{{searchNews.newsCategory}}</p>\n\t\t\t\t<p class=\"newsCat\" *ngIf=\"language == 'Hindi'\">{{searchNews.newsCategoryHn}}</p>\n\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\"\n\t\t\t\t\t[innerHTML]=\"searchNews.newsTitleEnglish | slice:0:70\"></span>\n\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\" [innerHTML]=\"searchNews.newsTitleHindi\"></span>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row *ngIf=\"searchLength == 0\">\n\t\t<ion-col size=\"12\">\n\t\t\t<h1>No result found!</h1>\n\t\t</ion-col>\n\t</ion-row>\n\t<div id=\"loader-wrapper\" *ngIf=\"loading\">\n\t\t<div id=\"loader\">\n\t\t\t<span class=\"logo_container\">\n\t\t\t\t<img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n\t\t\t</span>\n\t\t\t<div class=\"ml-loader\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t\t<p class=\"text-center\">Loding Data...</p>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar class=\"settingsToolbar\">\n\t\t<ion-icon name=\"arrow-round-back\" routerLink=\"/home/categories\"></ion-icon>\n\t\t<span id=\"settingTitle\"> Options</span>\n\t\t<span id=\"profile\" *ngIf=\"tokenLocalStorage && firstCharUser\" (click)=\"logout()\">{{firstCharUser}}</span>\n\t\t<span id=\"personIcon\" *ngIf=\"tokenLocalStorage && !firstCharUser\" (click)=\"logout()\">\n\t\t\t<ion-icon name=\"person\"></ion-icon>\n\t\t</span>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"settings loginDiv\" padding *ngIf=\"!tokenLocalStorage\">\n\t\t<h1 class=\"savePref\" *ngIf=\"language == 'English'\"><i>Save your preferences</i></h1>\n\t\t<h1 class=\"savePref\" *ngIf=\"language == 'Hindi'\"><i>सेव योर परेफरेंस</i></h1>\n\t\t<h4 class=\"signInBook\" *ngIf=\"language == 'English'\">Sign In to save your Bookmarks.</h4>\n\t\t<h4 class=\"signInBook\" *ngIf=\"language == 'Hindi'\">अपने बुकमार्क को सेव करने के लिए साइन इन करें।</h4>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"6\" class=\"signInCol\">\n\t\t\t\t<button id=\"signInButton\" routerLink=\"/login\">Sign In</button>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"6\">\n\t\t\t\t<button id=\"googleplus\" routerLink=\"/login\"><img src=\"assets/images/GooglePlus.png\"\n\t\t\t\t\t\theight=\"12px;\"></button>\n\t\t\t\t<button id=\"facebookLogin\" routerLink=\"/login\"><img src=\"assets/images/Facebook.png\"\n\t\t\t\t\t\theight=\"12px;\"></button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n\t<div>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"2\" class=\"langColTwo\" padding>\n\t\t\t\t<span>Aa</span>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding>\n\t\t\t\t\t<ion-col size=\"5\" class=\"languageDiv\">\n\t\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Language</span>\n\t\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">भाषा</span>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t<span *ngIf=\"language == 'Hindi'\" class=\"langColor\" (click)=\"removeCancelButton()\">\n\t\t\t\t\t\t\t<ion-select (ionChange)=\"languageChange($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Hindi\" selected=\"true\">Hindi</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"English\">English</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"language == 'English'\" class=\"langColor\" (click)=\"removeCancelButton()\">\n\t\t\t\t\t\t\t<ion-select (ionChange)=\"languageChange($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"English\" selected=\"true\">English</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Hindi\">Hindi</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"!language\" class=\"langColor\" (click)=\"removeCancelButton()\">\n\t\t\t\t\t\t\t<ion-select (ionChange)=\"languageChange($event)\">\n\t\t\t\t\t\t\t\t<ion-select-option value=\"English\" selected=\"true\">English</ion-select-option>\n\t\t\t\t\t\t\t\t<ion-select-option value=\"Hindi\">Hindi</ion-select-option>\n\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" class=\"settingIconCol\" padding>\n\t\t\t\t<img src=\"assets/images/Bookmarks1.png\">\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding routerLink=\"/bookmarks\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Bookmarks</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">बुकमार्क</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" class=\"settingIconCol\" padding>\n\t\t\t\t<img src=\"assets/images/Notification.png\">\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Notification</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">नोटफ़केशन</span>\n\t\t\t\t\t<!-- <span *ngIf=\"annonymous === 'true'\">Hello</span> -->\n\t\t\t\t\t<label class=\"switch\" *ngIf=\"notifyFlag === 'true' || annonymousNotify === 'true'\">\n\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"notificationSwitch($event)\" checked=\"checked\">\n\t\t\t\t\t\t<div></div>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"switch\" *ngIf=\"notifyFlag === 'false' || annonymousNotify === 'false'\">\n\t\t\t\t\t\t<input type=\"checkbox\" (change)=\"notificationSwitch($event)\">\n\t\t\t\t\t\t<div></div>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" padding>\n\t\t\t\t<img src=\"assets/images/Feedback.png\">\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding routerLink=\"/feedback\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Feedback</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">फ़ीड्बैक्</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" padding>\n\t\t\t\t<img src=\"assets/images/Privacy Policy.png\">\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding routerLink=\"/privacy\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Privacy Policy</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">प्राइवेसी पालिसी</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" padding>\n\t\t\t\t<img src=\"assets/images/terms.png\">\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding routerLink=\"/terms\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Terms & condition</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">टर्म्स एंड कंडीशन</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"settings settingIcon\">\n\t\t\t<ion-col size=\"2\" class=\"settingIconCol\" padding>\n\t\t\t\t<img src=\"assets/images/Share the App.png\" class=\"optionsList\">\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"10\">\n\t\t\t\t<div padding (click)=\"sendShare()\">\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'English'\">Share this app</span>\n\t\t\t\t\t<span class=\"optionsList\" *ngIf=\"language == 'Hindi'\">शेयर थिस अप्प</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row id=\"ratingRow\">\n\t\t\t<div id=\"ratingHead\" *ngIf=\"!rating\">How's your experience?</div>\n\t\t\t<div id=\"ratingHead\" *ngIf=\"rating\">You have rated us</div>\n\t\t\t<div id=\"rating\">\n\t\t\t\t<ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ce2837\"\n\t\t\t\t\tdefaultColor=\"#ddd\" readonly=\"false\" fontSize=\"32px\"\n\t\t\t\t\t(ratingChanged)=\"logRatingChange($event)\" rating=\"0\" *ngIf=\"!rating\">\n\t\t\t\t</ionic4-star-rating>\n\t\t\t\t<ionic4-star-rating #rating activeIcon=\"ios-star\" defaultIcon=\"ios-star-outline\" activeColor=\"#ce2837\" defaultColor=\"#ddd\" readonly=\"true\" rating=\"{{userRating}}\" fontSize=\"32px\" *ngIf=\"rating\">\n\t\t\t\t</ionic4-star-rating>\n\t\t\t</div>\n\t\t</ion-row>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/terms-and-cond/terms-and-cond.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terms-and-cond/terms-and-cond.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-icon name=\"arrow-round-back\" class=\"termsBack\" routerLink=\"/settings\"></ion-icon>\n\t\t\n\t\t<ion-title class=\"ion-text-center\">\n\t\t\tTerms & Condition\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n\t<div *ngFor=\"let policy of privacyPolicy\">\n\t\t<div [innerHTML]=\"policy.terms\"></div>\t\n\t</div>\n\t<div class=\"container\" *ngIf=\"loading\">\n\t\t<div class=\"loader\">\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--dot\"></div>\n\t\t\t<div class=\"loader--text\"></div>\n\t\t</div>\n\t</div>\n\t<div id=\"loader-wrapper\" *ngIf=\"loading\">\n\t\t<div id=\"loader\">\n\t\t\t<span class=\"logo_container\">\n\t\t\t\t<img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n\t\t\t</span>\n\t\t\t<div class=\"ml-loader\">\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t\t<div></div>\n\t\t\t</div>\n\t\t\t<p class=\"text-center\">Loding Data...</p>\n\t\t</div>\n\t</div>\n</ion-content>"

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

module.exports = "ion-card-header {\n  padding: 0;\n  padding-top: 55%;\n  position: relative;\n}\n\nion-card-header img {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-card-content {\n  padding: 5px 10px 10px 10px;\n  min-height: 60px;\n}\n\nion-card,\nion-col {\n  padding: 0;\n  border-radius: 0;\n}\n\nion-button {\n  --background-focused: #961300;\n}\n\n.cardfooter {\n  padding: 0px 0px 10px 10px;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYWxsLXBvc3QvYWxsLXBvc3QucGFnZS5zY3NzIiwic3JjL2FwcC9hbGwtcG9zdC9hbGwtcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNFRjs7QURDQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FsbC1wb3N0L2FsbC1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jYXJkLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuaW9uLWNhcmQsXG5pb24tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiAjOTYxMzAwO1xufVxuXG4uY2FyZGZvb3RlcntcbiAgcGFkZGluZzowcHggMHB4IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufSIsImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHggMTBweCAxMHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG5pb24tY2FyZCxcbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICM5NjEzMDA7XG59XG5cbi5jYXJkZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */"

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
        //  Deeplinks
        // console.log("routes", JSON.stringify(this.deeplinks, null, 2));
        // this.deeplinks.route({
        //   '/': {},
        //   '/nr5y': { "post:": true },
        //   '/post/:id': { "post:": true }
        // }).subscribe((match) => {
        //   console.log("match link", match.$args.id);
        //   this.router.navigate(['single-post/' + match.$args.id]);
        // },
        //   (nomatch) => {
        //     // alert("UnMatched" + nomatch);
        //   });
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
        this.language = localStorage.getItem('language');
        this._newsService.getAllNews().subscribe((res) => {
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

module.exports = ".settings {\n  border-bottom: 1px solid lightgrey;\n  cursor: pointer;\n}\n\n.bookmark-img {\n  height: 68px;\n  width: 80px;\n  border-radius: 22px;\n}\n\n.bookmark-img img {\n  max-height: 100%;\n  min-height: 100%;\n  max-width: 100%;\n  min-width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 5px;\n  height: 84px;\n  width: 100%;\n}\n\n.bookmarkActButton {\n  margin: auto;\n}\n\n.bookmarkActButton img {\n  height: 7px;\n  width: 20px;\n}\n\n.bookmarkBack {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n\nion-title {\n  font-size: 18px !important;\n}\n\n#bookmarkHead {\n  font-size: 31px;\n}\n\n.bookmarkImgCol {\n  margin: auto 0 !important;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.bookmarkCat {\n  margin: 0px auto;\n  color: gray;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9va21hcmtzL2Jvb2ttYXJrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtDQUFBO0VBQ0EsZUFBQTtBQ0NEOztBRENBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0VEOztBREFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHRDs7QURBQTtFQUNDLFlBQUE7QUNHRDs7QURBQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0FDR0Q7O0FEQUE7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDR0Q7O0FEQUE7RUFDQywwQkFBQTtBQ0dEOztBREFBO0VBQ0MsZUFBQTtBQ0dEOztBREFBO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHRDs7QURBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQ0dEOztBREFBO0VBQ0MsZ0JBQUE7QUNHRCIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3N7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cdGN1cnNvcjpwb2ludGVyO1xufVxuLmJvb2ttYXJrLWltZ3tcblx0aGVpZ2h0OjY4cHg7XG5cdHdpZHRoOjgwcHg7XG5cdGJvcmRlci1yYWRpdXM6MjJweDtcbn1cbi5ib29rbWFyay1pbWcgaW1ne1xuXHRtYXgtaGVpZ2h0OjEwMCU7XG5cdG1pbi1oZWlnaHQ6MTAwJTtcblx0bWF4LXdpZHRoOjEwMCU7XG5cdG1pbi13aWR0aDoxMDAlO1xuXHRvYmplY3QtZml0OmNvdmVyO1xuXHRib3JkZXItcmFkaXVzOjVweDtcblx0aGVpZ2h0Ojg0cHg7XG5cdHdpZHRoOjEwMCU7XG59XG5cbi5ib29rbWFya0FjdEJ1dHRvbntcblx0bWFyZ2luOiBhdXRvO1xufVxuXG4uYm9va21hcmtBY3RCdXR0b24gaW1ne1xuXHRoZWlnaHQ6N3B4O1xuXHR3aWR0aDoyMHB4O1xufVxuXG4uYm9va21hcmtCYWNre1xuXHRmbG9hdDogbGVmdDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi10aXRsZXtcblx0Zm9udC1zaXplOiAxOHB4IWltcG9ydGFudDtcbn1cblxuI2Jvb2ttYXJrSGVhZHtcblx0Zm9udC1zaXplOiAzMXB4XG59XG5cbi5ib29rbWFya0ltZ0NvbHtcblx0bWFyZ2luOiBhdXRvIDAhaW1wb3J0YW50O1xuXHRwYWRkaW5nLWxlZnQ6IDA7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5ib29rbWFya0NhdHtcblx0bWFyZ2luOiAwcHggYXV0bztcblx0Y29sb3I6IGdyYXk7XG59XG5cbi5vcHRpb25zTGlzdHtcblx0bWFyZ2luOiAwcHggYXV0bztcbn0iLCIuc2V0dGluZ3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib29rbWFyay1pbWcge1xuICBoZWlnaHQ6IDY4cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xufVxuXG4uYm9va21hcmstaW1nIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDg0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9va21hcmtBY3RCdXR0b24ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ib29rbWFya0FjdEJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDdweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5ib29rbWFya0JhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4jYm9va21hcmtIZWFkIHtcbiAgZm9udC1zaXplOiAzMXB4O1xufVxuXG4uYm9va21hcmtJbWdDb2wge1xuICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5ib29rbWFya0NhdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBtYXJnaW46IDBweCBhdXRvO1xufSJdfQ== */"

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

module.exports = "ion-card-header {\n  padding: 0;\n  padding-top: 55%;\n  position: relative;\n}\n\nion-card-header img {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-card-content {\n  padding: 5px 10px 10px 10px;\n  min-height: 60px;\n  max-height: 66px;\n  overflow: hidden;\n}\n\nion-card,\nion-col {\n  padding: 0;\n  border-radius: 0;\n}\n\nion-button {\n  --background-focused: #961300;\n}\n\n.cardfooter {\n  padding: 0px 0px 0px 10px;\n}\n\n#blackBell,\n#redBell {\n  margin: auto;\n  margin-top: 24%;\n}\n\n#blackBell {\n  width: 11px !important;\n  height: 14px;\n}\n\n#redBell {\n  width: 16px !important;\n  height: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0VGOztBREFBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLDZCQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREZBOztFQUVFLFlBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNNRjs7QURIQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jYXJkLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDY2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jYXJkLFxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzk2MTMwMDtcbn1cbi5jYXJkZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTBweDtcbn1cbiNibGFja0JlbGwsXG4jcmVkQmVsbCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjQlO1xufVxuI2JsYWNrQmVsbCB7XG4gIHdpZHRoOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTRweDtcbn1cblxuI3JlZEJlbGwge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3cHg7XG59IiwiaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDU1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1heC1oZWlnaHQ6IDY2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1jYXJkLFxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzk2MTMwMDtcbn1cblxuLmNhcmRmb290ZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxMHB4O1xufVxuXG4jYmxhY2tCZWxsLFxuI3JlZEJlbGwge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDI0JTtcbn1cblxuI2JsYWNrQmVsbCB7XG4gIHdpZHRoOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTRweDtcbn1cblxuI3JlZEJlbGwge1xuICB3aWR0aDogMTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3cHg7XG59Il19 */"

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

module.exports = "#feedbackForm button {\n  padding: 10px;\n  color: #fff;\n  background: red;\n  width: 100%;\n  height: 38px;\n  font-size: 23px;\n  border-radius: 30px;\n}\n\n#feedbackForm input, #feedbackForm textarea {\n  width: 100%;\n  height: 38px;\n  border-radius: 31px;\n  border: 1px solid #a09d9d;\n  padding: 9px 10px;\n  outline: none;\n}\n\n#feedbackForm textarea {\n  resize: none;\n}\n\n.backButFeed {\n  float: left;\n  font-size: 20px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNDLFdBQUE7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmVlZGJhY2tGb3JtIGJ1dHRvbix7XG5cdHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuI2ZlZWRiYWNrRm9ybSBpbnB1dCwgI2ZlZWRiYWNrRm9ybSB0ZXh0YXJlYXtcblx0d2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwOWQ5ZDtcbiAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jZmVlZGJhY2tGb3JtIHRleHRhcmVhe1xuXHRyZXNpemU6bm9uZVxufVxuXG4uYmFja0J1dEZlZWR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbiIsIiNmZWVkYmFja0Zvcm0gYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzhweDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4jZmVlZGJhY2tGb3JtIGlucHV0LCAjZmVlZGJhY2tGb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwOWQ5ZDtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNmZWVkYmFja0Zvcm0gdGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5iYWNrQnV0RmVlZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn0iXX0= */"

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

module.exports = "@import url(https://fonts.googleapis.com/css?family=Fjalla+One);\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 24px;\n  margin: 0;\n  background: #333333;\n  color: white;\n}\ninput {\n  font-size: 16px;\n}\ninput::-webkit-input-placeholder {\n  font-size: 16px;\n}\np {\n  line-height: 175%;\n}\nb {\n  color: paleturquoise;\n}\n.pop {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n@media (max-width: 640px) {\n  .pop {\n    position: relative;\n    width: 100%;\n  }\n}\n.pop .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n.pop .modal__inner {\n  height: 100%;\n  padding: 37% 16px;\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 52%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  position: absolute;\n}\n@media (max-width: 640px) {\n  .pop .modal__inner {\n    width: 100%;\n  }\n}\n.pop label {\n  display: inline-block;\n  cursor: pointer;\n}\n.pop label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.pop .checkBox {\n  display: none;\n}\n.pop input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n.pop input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.pop input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n}\n.pop input:checked + .modal label {\n  position: absolute;\n  top: 15%;\n  right: 10px;\n  height: 25px;\n  width: 25px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.fdiv {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n@media (max-width: 640px) {\n  .fdiv {\n    position: relative;\n    width: 100%;\n  }\n}\n.fdiv .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n.fdiv .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 50%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  padding: 30px;\n  position: absolute;\n}\n@media (max-width: 640px) {\n  .fdiv .modal__inner {\n    width: 100%;\n  }\n}\n.fdiv label {\n  display: inline-block;\n  cursor: pointer;\n}\n.fdiv label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n.fdiv .checkBox {\n  display: none;\n}\n.fdiv input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n.fdiv input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.fdiv input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n  line-height: 125%;\n}\n.fdiv input:checked + .modal label {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  height: 24px;\n  width: 24px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n#signupHead {\n  font-family: \"FREESCPT\";\n  text-align: center;\n  font-size: 31px;\n  margin: 0;\n}\n.signupInput input {\n  color: #000;\n  border-radius: 50px;\n  width: 100%;\n  font-size: 21px;\n  padding-left: 20%;\n  height: 35px;\n}\n.signupButton button {\n  border-radius: 9px;\n  padding: 10px;\n  font-size: 17px;\n  margin-top: 10px;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  background: #ed2424;\n}\n.signupButton {\n  margin-top: 10px;\n}\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  font-size: 20px;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: 20px;\n}\n:-ms-input-placeholder {\n  /* IE 10+ */\n  font-size: 20px;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: 20px;\n}\n.signupInput ion-icon {\n  color: grey;\n  margin-bottom: -12%;\n  margin-left: 2%;\n  padding-left: 2%;\n}\n.loginInput ion-icon {\n  margin-bottom: -9.6%;\n}\nion-content.background {\n  --background: none;\n  background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.1))), url('Login-Background-.png');\n  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('Login-Background-.png');\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.header {\n  text-align: center;\n}\n.loginForm {\n  padding: 8px 20px;\n}\n#rememberMe {\n  margin-left: 5px;\n  font-size: 17px;\n}\n#forgotPassword {\n  float: right;\n  color: #ed2424;\n  font-size: 15px;\n}\n.otherLoginBreak {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 0;\n  margin: 0;\n  margin-top: 10px;\n}\n.otherLoginBreak:before,\n.otherLoginBreak:after {\n  content: \"\";\n  -webkit-box-flex: 1;\n  flex: 1 1;\n  border-bottom: 1px solid #9b9b9b;\n  margin: auto;\n}\n.otherLoginBreak span {\n  margin: 0 5px;\n  font-size: 21px;\n}\n#otherLoginTitle {\n  text-align: center;\n  margin: 0;\n  font-size: 16px;\n}\n.socialLogin .googleLogin,\n.facebookLogin {\n  width: 100%;\n  padding: 12px;\n  color: #fff;\n  border-radius: 10px;\n  font-size: 16px;\n}\n.socialLogin .googleLogin {\n  background-color: #d9534e;\n}\n.socialLogin .facebookLogin {\n  background-color: #3779b7;\n}\n.socialLogin img {\n  height: auto;\n  width: auto;\n  max-height: 16px;\n  padding-right: 4px;\n}\n.socialLogin {\n  padding: 0px 16px;\n}\n#signupLink {\n  color: red;\n  font-size: 16px;\n}\n#signupLine {\n  text-align: center;\n  font-size: 17px;\n  margin: 5px 0px;\n}\n.signup_input {\n  position: relative;\n  margin-bottom: 15px;\n  color: #000;\n}\n.signup_input ion-icon {\n  position: absolute;\n  color: grey;\n  left: 10px;\n  font-size: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.signup_input input {\n  padding-left: 35px;\n  border-radius: 10px;\n  margin-bottom: 0;\n  height: 45px;\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.signupClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n.forgotModalClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n#signup {\n  font-family: \"FREESCPT\";\n  text-align: center;\n  font-size: 30px;\n  margin: 0px 0px 10px;\n}\n.loginClick {\n  width: 100%;\n  padding: 12px;\n  border-radius: 10px;\n  background-color: #D02535;\n  color: #fff;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n#forgotModal {\n  margin-top: 5px;\n}\n#welcomeHead {\n  font-family: \"FREESCPT\";\n  margin: 0;\n  font-style: italic;\n  font-size: 31px;\n  letter-spacing: -1px;\n  line-height: 30px;\n}\n.componentMainDiv {\n  margin-top: 50px;\n}\n.header p {\n  margin: 0;\n}\n.loginBack {\n  float: left;\n  zoom: 1;\n  margin-left: 9px;\n}\n.signUp input {\n  color: black;\n}\ninput#remember {\n  display: none;\n}\ninput#remember + label {\n  position: relative;\n  padding-left: 30px;\n}\ninput#remember + label:before {\n  position: absolute;\n  content: \"\";\n  background-image: url('check box.png');\n  height: 20px;\n  width: 20px;\n  background-position: 0px 0px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: #fff;\n}\ninput#remember:checked + label:before {\n  background-position: 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtEQUFBO0FBQ1I7RUFDRSxzQkFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0FDQ0Y7QURFQTtFQUNJLGVBQUE7QUNDSjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjtBREFFO0VBVkY7SUFXSSxrQkFBQTtJQUNBLFdBQUE7RUNHRjtBQUNGO0FERkU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQ0lKO0FESEk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0tOO0FESk07RUFWRjtJQVdJLFdBQUE7RUNPTjtBQUNGO0FESkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNNSjtBRExJO0VBQ0UsMkNBQUE7RUFBQSxtQ0FBQTtBQ09OO0FESkU7RUFDRSxhQUFBO0FDTUo7QURGTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0lSO0FESFE7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ0tWO0FESlU7RUFDRSxrQkFBQTtBQ01aO0FESFE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDS1Y7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRkY7QURHRTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxXQUFBO0VDQUY7QUFDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0VBQUEscUNBQUE7QUNDSjtBREFJO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRU47QURETTtFQVRGO0lBVUksV0FBQTtFQ0lOO0FBQ0Y7QURERTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FERkk7RUFDRSwyQ0FBQTtFQUFBLG1DQUFBO0FDSU47QURERTtFQUNFLGFBQUE7QUNHSjtBRENNO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURBUTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDRVY7QUREVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNHWjtBREFRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ0VWO0FET0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTEY7QURRQTtFQUNFLGdCQUFBO0FDTEY7QURRQTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxvQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLDZKQUFBO0VBQUEseUhBQUE7RUFFQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7QUNORjtBRFNBO0VBQ0UsaUJBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTkY7QURTQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDTkY7QURTQTs7RUFFRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDTkY7QURTQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNORjtBRFNBOztFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSx5QkFBQTtBQ05GO0FEU0E7RUFDRSx5QkFBQTtBQ05GO0FEU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNORjtBRFNBO0VBQ0UsaUJBQUE7QUNORjtBRFNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ05GO0FEU0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ05GO0FET0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0xKO0FET0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDTEo7QURTQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTkY7QURTQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNORjtBRFNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ05GO0FEU0E7RUFDRSxlQUFBO0FDTkY7QURTQTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7QUNORjtBRFNBO0VBQ0UsU0FBQTtBQ05GO0FEU0E7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDTkY7QURTQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsYUFBQTtBQ05GO0FEU0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ05GO0FEU0E7RUFDRSw2QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmphbGxhK09uZSk7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKGJsYWNrLCAyMCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6MTZweDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxNzUlO1xufVxuXG5iIHtcbiAgY29sb3I6IHBhbGV0dXJxdW9pc2U7XG59XG5cbi5wb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWx7XG4gICAgei1pbmRleDogMjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAmX19pbm5lciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAzNyUgMTZweDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYub3BlbiB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cbiAgLmNoZWNrQm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0e1xuICAgICY6Y2hlY2tlZCB7XG4gICAgICArIC5tb2RhbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIC5tb2RhbF9faW5uZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZmRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tb2RhbCB7XG4gICAgei1pbmRleDogMjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAmX19pbm5lciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjc1KTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5vcGVuIHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxuICAuY2hlY2tCb3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXQge1xuICAgICY6Y2hlY2tlZCB7XG4gICAgICArIC5tb2RhbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIC5tb2RhbF9faW5uZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNzaWdudXBIZWFkIHtcbiAgZm9udC1mYW1pbHk6ICdGUkVFU0NQVCc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWdudXBJbnB1dCBpbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uc2lnbnVwQnV0dG9uIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VkMjQyNDtcbn1cblxuLnNpZ251cEJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJRSAxMCsgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNpZ251cElucHV0IGlvbi1pY29uIHtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbi1ib3R0b206IC0xMiU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLmxvZ2luSW5wdXQgaW9uLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAtOS42JTtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKSxcbiAgICB1cmwoXCJhc3NldHMvaW1hZ2VzL0xvZ2luLUJhY2tncm91bmQtLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luRm9ybSB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xufVxuXG4jcmVtZW1iZXJNZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuI2ZvcmdvdFBhc3N3b3JkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2VkMjQyNDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ub3RoZXJMb2dpbkJyZWFrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ub3RoZXJMb2dpbkJyZWFrOmJlZm9yZSxcbi5vdGhlckxvZ2luQnJlYWs6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4OiAxIDE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWI5YjliO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5vdGhlckxvZ2luQnJlYWsgc3BhbiB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuI290aGVyTG9naW5UaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zb2NpYWxMb2dpbiAuZ29vZ2xlTG9naW4sXG4uZmFjZWJvb2tMb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc29jaWFsTG9naW4gLmdvb2dsZUxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZTtcbn1cblxuLnNvY2lhbExvZ2luIC5mYWNlYm9va0xvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NzliNztcbn1cblxuLnNvY2lhbExvZ2luIGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLnNvY2lhbExvZ2luIHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbiNzaWdudXBMaW5rIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jc2lnbnVwTGluZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5zaWdudXBfaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG5cbi5zaWdudXBDbG9zZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb3Jnb3RNb2RhbENsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI3NpZ251cCB7XG4gIGZvbnQtZmFtaWx5OiAnRlJFRVNDUFQnO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG59XG5cbi5sb2dpbkNsaWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMDI1MzU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNmb3Jnb3RNb2RhbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuI3dlbGNvbWVIZWFkIHtcbiAgZm9udC1mYW1pbHk6ICdGUkVFU0NQVCc7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDMxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNvbXBvbmVudE1haW5EaXYge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaGVhZGVyIHB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvZ2luQmFjayB7XG4gIGZsb2F0OiBsZWZ0O1xuICB6b29tOiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4uc2lnblVwIGlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbnB1dCNyZW1lbWJlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0I3JlbWVtYmVyICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuaW5wdXQjcmVtZW1iZXIgKyBsYWJlbDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvY2hlY2sgYm94LnBuZ1wiKTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQjcmVtZW1iZXI6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDIwcHggMHB4O1xufSIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GamFsbGErT25lKTtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDE3NSU7XG59XG5cbmIge1xuICBjb2xvcjogcGFsZXR1cnF1b2lzZTtcbn1cblxuLnBvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucG9wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5wb3AgLm1vZGFsIHtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnBvcCAubW9kYWxfX2lubmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzNyUgMTZweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gIHRvcDogNTIlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAucG9wIC5tb2RhbF9faW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucG9wIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucG9wIGxhYmVsLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5wb3AgLmNoZWNrQm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wb3AgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucG9wIGlucHV0OmNoZWNrZWQgKyAubW9kYWwgLm1vZGFsX19pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ucG9wIGlucHV0OmNoZWNrZWQgKyAubW9kYWwgLm1vZGFsX19pbm5lciBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuLnBvcCBpbnB1dDpjaGVja2VkICsgLm1vZGFsIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5mZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5mZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mZGl2IC5tb2RhbCB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbn1cbi5mZGl2IC5tb2RhbF9faW5uZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjc1KTtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5mZGl2IC5tb2RhbF9faW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZmRpdiBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZkaXYgbGFiZWwub3BlbiB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmZkaXYgLmNoZWNrQm94IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mZGl2IGlucHV0OmNoZWNrZWQgKyAubW9kYWwge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCAubW9kYWxfX2lubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5mZGl2IGlucHV0OmNoZWNrZWQgKyAubW9kYWwgLm1vZGFsX19pbm5lciBwIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbn1cbi5mZGl2IGlucHV0OmNoZWNrZWQgKyAubW9kYWwgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMjVweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuI3NpZ251cEhlYWQge1xuICBmb250LWZhbWlseTogXCJGUkVFU0NQVFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lnbnVwSW5wdXQgaW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLnNpZ251cEJ1dHRvbiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlZDI0MjQ7XG59XG5cbi5zaWdudXBCdXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSUUgMTArICovXG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zaWdudXBJbnB1dCBpb24taWNvbiB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW4tYm90dG9tOiAtMTIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5sb2dpbklucHV0IGlvbi1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogLTkuNiU7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSksIHVybChcImFzc2V0cy9pbWFnZXMvTG9naW4tQmFja2dyb3VuZC0ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5Gb3JtIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG59XG5cbiNyZW1lbWJlck1lIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jZm9yZ290UGFzc3dvcmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZWQyNDI0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5vdGhlckxvZ2luQnJlYWsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5vdGhlckxvZ2luQnJlYWs6YmVmb3JlLFxuLm90aGVyTG9naW5CcmVhazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIGZsZXg6IDEgMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5YjliOWI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm90aGVyTG9naW5CcmVhayBzcGFuIHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4jb3RoZXJMb2dpblRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNvY2lhbExvZ2luIC5nb29nbGVMb2dpbixcbi5mYWNlYm9va0xvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zb2NpYWxMb2dpbiAuZ29vZ2xlTG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRlO1xufVxuXG4uc29jaWFsTG9naW4gLmZhY2Vib29rTG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc3OWI3O1xufVxuXG4uc29jaWFsTG9naW4gaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LWhlaWdodDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4uc29jaWFsTG9naW4ge1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cblxuI3NpZ251cExpbmsge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNzaWdudXBMaW5lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnNpZ251cF9pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2lnbnVwX2lucHV0IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogZ3JleTtcbiAgbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNpZ251cF9pbnB1dCBpbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnNpZ251cENsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvcmdvdE1vZGFsQ2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jc2lnbnVwIHtcbiAgZm9udC1mYW1pbHk6IFwiRlJFRVNDUFRcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG4ubG9naW5DbGljayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDAyNTM1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jZm9yZ290TW9kYWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbiN3ZWxjb21lSGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZSRUVTQ1BUXCI7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDMxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNvbXBvbmVudE1haW5EaXYge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaGVhZGVyIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5sb2dpbkJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgem9vbTogMTtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbn1cblxuLnNpZ25VcCBpbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW5wdXQjcmVtZW1iZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dCNyZW1lbWJlciArIGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbmlucHV0I3JlbWVtYmVyICsgbGFiZWw6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2NoZWNrIGJveC5wbmdcIik7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmlucHV0I3JlbWVtYmVyOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHB4IDBweDtcbn0iXX0= */"

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

module.exports = ".settings {\n  border-bottom: 1px solid lightgrey;\n  cursor: pointer;\n}\n\n.searchBack {\n  margin: auto 0 !important;\n  text-align: center;\n}\n\n.searchBack ion-icon {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.newsImg {\n  margin: auto 0 !important;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.newsImg img {\n  border-radius: 5px;\n}\n\n.newsCat {\n  margin: 0px auto;\n  color: gray;\n}\n\n.optionsList {\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0NBOztBREVBO0VBQ0MseUJBQUE7RUFDQSxrQkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7VUFBQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdze1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbmN1cnNvcjpwb2ludGVyO1xufVxuXG4uc2VhcmNoQmFja3tcblx0bWFyZ2luOiBhdXRvIDAhaW1wb3J0YW50O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNlYXJjaEJhY2sgaW9uLWljb257XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXdzSW1ne1xuXHRtYXJnaW46IGF1dG8gMCFpbXBvcnRhbnQ7XG5cdHBhZGRpbmctbGVmdDogMDtcblx0cGFkZGluZy1yaWdodDogMDtcbn1cblxuLm5ld3NJbWcgaW1ne1xuXHRib3JkZXItcmFkaXVzOjVweDtcbn1cblxuLm5ld3NDYXR7XG5cdG1hcmdpbjogMHB4IGF1dG87XG5cdGNvbG9yOiBncmF5XG59XG5cbi5vcHRpb25zTGlzdHtcblx0bWFyZ2luOiAwcHggYXV0bztcbn0iLCIuc2V0dGluZ3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hCYWNrIHtcbiAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoQmFjayBpb24taWNvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXdzSW1nIHtcbiAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubmV3c0ltZyBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uZXdzQ2F0IHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59Il19 */"

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
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.router.url.includes('searchBar')) {
                this.router.navigate(['allcategory']);
            }
        }));
        const element = this.elementRef.nativeElement.querySelector('ion-input');
        // to delay
        setTimeout(() => {
            this.renderer.invokeElementMethod(element, 'focus', []);
            this.keyboard.show();
        }, 500);
        this.language = localStorage.getItem('language');
    }
    searchNews(key) {
        this.keyValue = key;
        if (this.keyValue.length == 0) {
            this.newsArray = [];
            this.searchLength = this.newsArray;
        }
        else {
            this._newsService.searchedNews(key).subscribe((res) => {
                this.newsArray = res;
                this.searchLength = this.newsArray.length;
                console.log(this.newsArray);
            }, (err) => {
                this.error = err;
            });
        }
    }
    getSingleSearch(postid) {
        this.keyboard.hide();
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

module.exports = ".settings {\n  border-bottom: 1px solid lightgrey;\n  cursor: pointer;\n}\n\n.loginDiv {\n  height: 170px;\n  background: url('brownbg.png');\n}\n\n.item-radio.item ion-label {\n  color: #dd6873;\n}\n\n.settingsToolbar ion-icon {\n  float: left;\n  zoom: 1;\n  margin-left: 9px;\n  font-size: 20px;\n}\n\n.settingsToolbar #settingTitle {\n  margin-left: 10px;\n  font-size: 18px;\n}\n\n#signInButton {\n  color: #fff;\n  border-radius: 50px;\n  background-color: #ce2837;\n  padding: 10.5px 36.5px;\n  font-size: 17px;\n}\n\n#googleplus {\n  color: #fff;\n  font-weight: 800;\n  font-size: 15px;\n  border-radius: 50%;\n  background-color: #d9534e;\n  padding: 10px 9.5px;\n  float: right;\n}\n\n#googleplus img {\n  margin-top: 3px;\n}\n\n#facebookLogin {\n  color: #fff;\n  border-radius: 50%;\n  margin-right: 4px;\n  background-color: #3779b7;\n  padding: 9px 15px;\n  font-weight: 950;\n  font-size: 20px;\n  float: right;\n}\n\n.optionsList {\n  font-size: 18px;\n  color: gray;\n}\n\n.switch input {\n  position: absolute;\n  opacity: 0;\n}\n\n/**\n* 1. Adjust this to size\n*/\n\n.switch {\n  display: inline-block;\n  font-size: 20px;\n  /* 1 */\n  height: 1em;\n  width: 2em;\n  /*background: #CE2837;*/\n  background-color: #c5bdbd;\n  border-radius: 1em;\n  float: right;\n}\n\n.switch div {\n  height: 1em;\n  width: 1em;\n  border-radius: 1em;\n  background: white;\n  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\n.switch input:checked + div {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  background: #ce2837;\n}\n\n#profile {\n  border-radius: 50%;\n  padding: 8px 12px;\n  float: right;\n  background-color: red;\n  color: #fff;\n  margin-right: 5px;\n}\n\n.settingIcon img {\n  width: 17px;\n  height: 19px;\n  margin-top: 6px;\n  margin-left: 13px;\n}\n\n.settingIconCol {\n  margin: auto;\n}\n\n.savePref {\n  font-size: 31px;\n  margin: 10px 0px;\n}\n\n.signInBook {\n  font-size: 19px;\n  margin: 10px 0px;\n}\n\n.signInCol {\n  padding-left: 0;\n}\n\n.langColTwo {\n  margin: auto;\n  font-size: 29px;\n  text-align: center;\n}\n\n.langColTwo span {\n  margin-left: 5px;\n  margin-top: 5px;\n  font-size: 17px;\n}\n\n.languageDiv {\n  float: left;\n}\n\n.langColor {\n  color: #dd6d77;\n}\n\n.langColor ion-select {\n  max-width: 50%;\n  float: right;\n}\n\n#personIcon ion-icon {\n  zoom: 1.1;\n}\n\n#personIcon {\n  border-radius: 50%;\n  padding: 5px 7px;\n  float: right;\n  background-color: red;\n  color: #fff;\n  margin-right: 5px;\n  margin-left: 0px;\n}\n\n#personIcon ion-icon {\n  margin-left: 0px;\n}\n\n.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md button.action-sheet-button.ion-activatable.action-sheet-cancel.sc-ion-action-sheet-md.activated {\n  display: none !important;\n}\n\n#ratingRow {\n  margin: 20px;\n}\n\n#ratingHead {\n  width: 100%;\n  font-size: 20px;\n  text-align: center;\n}\n\n#rating {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREFBOztDQUFBOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQWlCLE1BQUE7RUFDakIsV0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZCQUFBO0VBRUEscUJBQUE7QUNHRjs7QURBQTtFQUNFLDBDQUFBO0VBRUEsa0NBQUE7RUFDQSxtQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESEE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0FDT0Y7O0FESkE7RUFDRSxjQUFBO0FDT0Y7O0FESkE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ09GOztBREpBO0VBQ0UsU0FBQTtBQ09GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBREpBO0VBRUUsd0JBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5EaXYge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2Jyb3duYmcucG5nXCIpO1xufVxuXG4uaXRlbS1yYWRpby5pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZGQ2ODczOyAvL3lvdXIgY29sb3IgaGVyZVxufVxuXG4uc2V0dGluZ3NUb29sYmFyIGlvbi1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHpvb206IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNldHRpbmdzVG9vbGJhciAjc2V0dGluZ1RpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3NpZ25JbkJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODM3O1xuICBwYWRkaW5nOiAxMC41cHggMzYuNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNnb29nbGVwbHVzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRlO1xuICBwYWRkaW5nOiAxMHB4IDkuNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4jZ29vZ2xlcGx1cyBpbWcge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4jZmFjZWJvb2tMb2dpbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc3OWI3O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgZm9udC13ZWlnaHQ6IDk1MDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5vcHRpb25zTGlzdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi8qKlxuKiAxLiBBZGp1c3QgdGhpcyB0byBzaXplXG4qL1xuXG4uc3dpdGNoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7IC8qIDEgKi9cbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAyZW07XG4gIC8qYmFja2dyb3VuZDogI0NFMjgzNzsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzViZGJkO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnN3aXRjaCBkaXYge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwLjFlbSAwLjNlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG4uc3dpdGNoIGlucHV0OmNoZWNrZWQgKyBkaXYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgYmFja2dyb3VuZDogI2NlMjgzNztcbn1cblxuI3Byb2ZpbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnNldHRpbmdJY29uIGltZyB7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi5zZXR0aW5nSWNvbkNvbCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNhdmVQcmVmIHtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uc2lnbkluQm9vayB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi5zaWduSW5Db2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ubGFuZ0NvbFR3byB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAyOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYW5nQ29sVHdvIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5sYW5ndWFnZURpdiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFuZ0NvbG9yIHtcbiAgY29sb3I6ICNkZDZkNzc7XG59XG5cbi5sYW5nQ29sb3IgaW9uLXNlbGVjdCB7XG4gIG1heC13aWR0aDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNwZXJzb25JY29uIGlvbi1pY29uIHtcbiAgem9vbTogMS4xO1xufVxuXG4jcGVyc29uSWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4IDdweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuI3BlcnNvbkljb24gaW9uLWljb24ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uYWN0aW9uLXNoZWV0LWdyb3VwLmFjdGlvbi1zaGVldC1ncm91cC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1tZFxuICBidXR0b24uYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tYWN0aXZhdGFibGUuYWN0aW9uLXNoZWV0LWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLmFjdGl2YXRlZCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiNyYXRpbmdSb3d7XG4gIG1hcmdpbjogMjBweDtcbn1cbiNyYXRpbmdIZWFke1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcmF0aW5nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIiwiLnNldHRpbmdzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW5EaXYge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2Jyb3duYmcucG5nXCIpO1xufVxuXG4uaXRlbS1yYWRpby5pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZGQ2ODczO1xufVxuXG4uc2V0dGluZ3NUb29sYmFyIGlvbi1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHpvb206IDE7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNldHRpbmdzVG9vbGJhciAjc2V0dGluZ1RpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3NpZ25JbkJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UyODM3O1xuICBwYWRkaW5nOiAxMC41cHggMzYuNXB4O1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbiNnb29nbGVwbHVzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRlO1xuICBwYWRkaW5nOiAxMHB4IDkuNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNnb29nbGVwbHVzIGltZyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuI2ZhY2Vib29rTG9naW4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NzliNztcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA5NTA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3B0aW9uc0xpc3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKipcbiogMS4gQWRqdXN0IHRoaXMgdG8gc2l6ZVxuKi9cbi5zd2l0Y2gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgLyogMSAqL1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDJlbTtcbiAgLypiYWNrZ3JvdW5kOiAjQ0UyODM3OyovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3dpdGNoIGRpdiB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAuMWVtIDAuM2VtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIGRpdiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICBiYWNrZ3JvdW5kOiAjY2UyODM3O1xufVxuXG4jcHJvZmlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zZXR0aW5nSWNvbiBpbWcge1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuXG4uc2V0dGluZ0ljb25Db2wge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zYXZlUHJlZiB7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnNpZ25JbkJvb2sge1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5zaWduSW5Db2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5sYW5nQ29sVHdvIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDI5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhbmdDb2xUd28gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubGFuZ3VhZ2VEaXYge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxhbmdDb2xvciB7XG4gIGNvbG9yOiAjZGQ2ZDc3O1xufVxuXG4ubGFuZ0NvbG9yIGlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jcGVyc29uSWNvbiBpb24taWNvbiB7XG4gIHpvb206IDEuMTtcbn1cblxuI3BlcnNvbkljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbiNwZXJzb25JY29uIGlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmFjdGlvbi1zaGVldC1ncm91cC5hY3Rpb24tc2hlZXQtZ3JvdXAtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQgYnV0dG9uLmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWFjdGl2YXRhYmxlLmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC5hY3RpdmF0ZWQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNyYXRpbmdSb3cge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbiNyYXRpbmdIZWFkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmF0aW5nIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"

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