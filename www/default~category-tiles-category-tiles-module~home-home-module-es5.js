(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-tiles-category-tiles-module~home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/category-tiles/category-tiles.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category-tiles/category-tiles.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"language == 'English'\"\n  (click)=\"singleCategory(category.categoryId,category.categoryTitle)\">\n  <img src=\"{{mediaPath}}{{category.categoryImage}}\" onerror=\"this.src='assets/images/spinner.gif'\" alt=\"Category Image\" style=\"width:100%;\">\n</div>\n<div class=\"container\" *ngIf=\"language == 'Hindi'\" (click)=\"singleCategory(category.categoryId,category.categoryTitleHn)\">\n  <img src=\"{{mediaPath}}{{category.categoryImage}}\" alt=\"Category Image\" style=\"width:100%;\">\n</div>\n<div class=\"text-block\">\n  <div class=\"\">\n    <div class=\"category_title\">\n      <p *ngIf=\"language == 'English'\" (click)=\"singleCategory(category.categoryId,category.categoryTitle)\">\n        {{category.categoryTitle | slice:0:30}}</p>\n      <p *ngIf=\"language == 'Hindi'\" (click)=\"singleCategory(category.categoryId,category.categoryTitleHn)\">\n        {{category.categoryTitleHn | slice:0:30}}</p>\n    </div>\n    <p class=\"postCount\">{{category.countPost}} Posts</p>\n    <button *ngIf=\"!category.isNotify\" class=\"notSubscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify)\">\n      <ion-icon name=\"notifications-outline\"></ion-icon> Subscribe\n    </button>\n    <button *ngIf=\"category.isNotify\" class=\"subscribed\"\n      (click)=\"addNotify(category.categoryId, category.isNotify)\">Subscribed</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/category-tiles/category-tiles.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoryTilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTilesPageModule", function() { return CategoryTilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-tiles.page */ "./src/app/category-tiles/category-tiles.page.ts");







var CategoryTilesPageModule = /** @class */ (function () {
    function CategoryTilesPageModule() {
    }
    CategoryTilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_category_tiles_page__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPage"]],
            entryComponents: [
                _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPage"],
            ],
            exports: [
                _category_tiles_page__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPage"],
            ],
        })
    ], CategoryTilesPageModule);
    return CategoryTilesPageModule;
}());



/***/ }),

/***/ "./src/app/category-tiles/category-tiles.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 12px;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  position: relative;\n}\n\n.category_title {\n  display: inline-block;\n  width: 100%;\n}\n\n.text-block {\n  position: absolute;\n  bottom: 13%;\n  color: white;\n  padding: 0 5%;\n  z-index: 9999;\n  font-weight: 700;\n  font-size: 17px;\n  left: 12px;\n  right: 12px;\n}\n\n.container:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 0;\n  height: 160px;\n}\n\n.container img {\n  height: 160px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.postCount {\n  font-size: 11px;\n  float: left;\n  background: #000;\n  margin-top: 7%;\n  padding: 2%;\n  opacity: 0.7;\n  border-radius: 3px;\n}\n\n.notSubscribed,\n.subscribed {\n  margin-top: 7%;\n  margin-left: 7%;\n  background-color: #fff;\n  opacity: 0.9;\n  border: 1px solid var(--main-app-color);\n  color: var(--main-app-color);\n  padding: 4px;\n  border-radius: 3px;\n  font-size: 10px;\n  float: left;\n}\n\n.notSubscribed ion-icon {\n  float: left;\n}\n\n.notSubscribed {\n  background-color: #fff;\n  border: 1px solid var(--main-app-color);\n  color: var(--main-app-color);\n  border-radius: 5px;\n}\n\n.subscribed {\n  color: #fff;\n  background-color: var(--main-app-color);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvY2F0ZWdvcnktdGlsZXMvY2F0ZWdvcnktdGlsZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS10aWxlcy9jYXRlZ29yeS10aWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7O0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7QUNVRjs7QURQQTtFQUNFLHNCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnktdGlsZXMvY2F0ZWdvcnktdGlsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXRlZ29yeV90aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1JTtcbiAgei1pbmRleDogOTk5OTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsZWZ0OiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cbi5jb250YWluZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAwO1xuICBoZWlnaHQ6IDE2MHB4O1xufVxuLmNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5wb3N0Q291bnQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgcGFkZGluZzogMiU7XG4gIG9wYWNpdHk6IDAuNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLm5vdFN1YnNjcmliZWQsXG4uc3Vic2NyaWJlZCB7XG4gIG1hcmdpbi10b3A6IDclO1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5ub3RTdWJzY3JpYmVkIGlvbi1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5ub3RTdWJzY3JpYmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3Vic2NyaWJlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiIsImlvbi1jb2wge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2F0ZWdvcnlfdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMyU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1JTtcbiAgei1pbmRleDogOTk5OTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsZWZ0OiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cblxuLmNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMTYwcHg7XG59XG5cbi5jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5wb3N0Q291bnQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgcGFkZGluZzogMiU7XG4gIG9wYWNpdHk6IDAuNztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubm90U3Vic2NyaWJlZCxcbi5zdWJzY3JpYmVkIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubm90U3Vic2NyaWJlZCBpb24taWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubm90U3Vic2NyaWJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3Vic2NyaWJlZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/category-tiles/category-tiles.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/category-tiles/category-tiles.page.ts ***!
  \*******************************************************/
/*! exports provided: CategoryTilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTilesPage", function() { return CategoryTilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");








// import {NavParams} from '@ionic/angular';
var CategoryTilesPage = /** @class */ (function () {
    function CategoryTilesPage(_toastService, network, _categoryService, router) {
        this._toastService = _toastService;
        this.network = network;
        this._categoryService = _categoryService;
        this.router = router;
        this.onSubscribe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mediaPath = _config__WEBPACK_IMPORTED_MODULE_5__["config"].mediaApiUrl;
        // console.log('this.navParams.data',navParams.data);
    }
    CategoryTilesPage.prototype.ngOnInit = function () {
        console.log("this.categories in child", this.category);
    };
    CategoryTilesPage.prototype.goToAllPosts = function () {
        this.router.navigateByUrl('/home/all-post');
    };
    CategoryTilesPage.prototype.singleCategory = function (catId, catname) {
        this.router.navigateByUrl('single-category/' + catId + '/' + catname);
    };
    CategoryTilesPage.prototype.addNotify = function (catId, isNotify) {
        var _this = this;
        if (this.network.type == 'none') {
            var message = "No internet connection";
            var color = "danger";
            this._toastService.toastFunction(message, color);
        }
        else {
            this._categoryService.notifyUser(catId).subscribe(function (res) {
                _this._toastService.toastFunction(res.message, 'success');
                var emitObject = { catId: catId, isNotify: isNotify };
                _this.onSubscribe.emit(emitObject);
            }, function (err) {
                _this._toastService.toastFunction(err.error.message, 'danger');
            });
        }
    };
    CategoryTilesPage.ctorParameters = function () { return [
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('category'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryTilesPage.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('language'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CategoryTilesPage.prototype, "language", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CategoryTilesPage.prototype, "onSubscribe", void 0);
    CategoryTilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-tiles',
            template: __webpack_require__(/*! raw-loader!./category-tiles.page.html */ "./node_modules/raw-loader/index.js!./src/app/category-tiles/category-tiles.page.html"),
            styles: [__webpack_require__(/*! ./category-tiles.page.scss */ "./src/app/category-tiles/category-tiles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"], _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoryTilesPage);
    return CategoryTilesPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







var CategoryService = /** @class */ (function () {
    function CategoryService(network, http) {
        this.network = network;
        this.http = http;
    }
    CategoryService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Error! something went wrong.');
    };
    //get all cateogries
    CategoryService.prototype.getAll = function () {
        var _this = this;
        var tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
            var base64Url = tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
            console.log("Decoded", this.loggedInUser);
        }
        if (this.network.type == 'none') {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                console.log(JSON.parse(localStorage.getItem("categoryArray")));
                _this.categories = JSON.parse(localStorage.getItem("categoryArray"));
                setTimeout(function () {
                    observer.next(_this.categories);
                    observer.complete();
                }, 1);
            });
        }
        else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
                _this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category").subscribe(function (result) {
                    _this.categories = result['data'];
                    console.log('this.categories', _this.categories);
                    localStorage.setItem('categoryArray', JSON.stringify(_this.categories));
                    observer.next(_this.categories);
                    observer.complete();
                }, function (error) {
                    observer.error(error);
                });
            });
        }
    };
    CategoryService.prototype.notifyChange = function () {
        var _this = this;
        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.categories, function (user) {
            lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, function (Id) {
                if (Id == _this.loggedInUser) {
                    user['isNotify'] = true;
                }
                else {
                    user['isNotify'] = false;
                }
            });
        });
    };
    CategoryService.prototype.notifyUser = function (catId) {
        console.log(catId);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "category-notify", { categoryId: catId });
    };
    CategoryService.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ })

}]);
//# sourceMappingURL=default~category-tiles-category-tiles-module~home-home-module-es5.js.map