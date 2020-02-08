(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-categories-all-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/all-categories/all-categories.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-categories/all-categories.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/settings\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\"> Categories</span>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"language\">\n  <ion-row *ngIf=\"categories\">\n    <ion-col size=\"6\" *ngFor=\"let category of categories\" class=\"categoryTiles\">\n      <app-category-tiles\n        [category]=\"category\"\n        (onSubscribe)=\"subscribedCategory($event, isNotify)\"\n        [language]=\"language\"\n      ></app-category-tiles>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<!-- https://youtu.be/Zcj-KwcXDoY -->"

/***/ }),

/***/ "./src/app/all-categories/all-categories.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/all-categories/all-categories.module.ts ***!
  \*********************************************************/
/*! exports provided: AllCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCategoriesPageModule", function() { return AllCategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category-tiles/category-tiles.module */ "./src/app/category-tiles/category-tiles.module.ts");
/* harmony import */ var _all_categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-categories.page */ "./src/app/all-categories/all-categories.page.ts");








var routes = [
    {
        path: '',
        component: _all_categories_page__WEBPACK_IMPORTED_MODULE_7__["AllCategoriesPage"]
    }
];
var AllCategoriesPageModule = /** @class */ (function () {
    function AllCategoriesPageModule() {
    }
    AllCategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_6__["CategoryTilesPageModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_all_categories_page__WEBPACK_IMPORTED_MODULE_7__["AllCategoriesPage"]]
        })
    ], AllCategoriesPageModule);
    return AllCategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/all-categories/all-categories.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/all-categories/all-categories.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settingsToolbar ion-back-button {\n  float: left;\n  zoom: 1;\n  margin-left: 9px;\n  font-size: 20px;\n  margin-top: 6px;\n  color: #fff;\n}\n\n.settingsToolbar #settingTitle {\n  margin-left: 10px;\n  font-size: 18px;\n  line-height: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9hbGwtY2F0ZWdvcmllcy9hbGwtY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FsbC1jYXRlZ29yaWVzL2FsbC1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hbGwtY2F0ZWdvcmllcy9hbGwtY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZ3NUb29sYmFyIGlvbi1iYWNrLWJ1dHRvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB6b29tOiAxO1xuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLnNldHRpbmdzVG9vbGJhciAjc2V0dGluZ1RpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gIH0iLCIuc2V0dGluZ3NUb29sYmFyIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB6b29tOiAxO1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZXR0aW5nc1Rvb2xiYXIgI3NldHRpbmdUaXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/all-categories/all-categories.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/all-categories/all-categories.page.ts ***!
  \*******************************************************/
/*! exports provided: AllCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCategoriesPage", function() { return AllCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");



var AllCategoriesPage = /** @class */ (function () {
    function AllCategoriesPage(_categoryService) {
        this._categoryService = _categoryService;
    }
    AllCategoriesPage.prototype.ngOnInit = function () {
    };
    AllCategoriesPage.prototype.ionViewWillEnter = function () {
        this.getCategories();
    };
    AllCategoriesPage.prototype.getCategories = function () {
        var _this = this;
        this.language = localStorage.getItem('language');
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
            console.log("after", _this.categories);
        }, function (err) {
        });
    };
    AllCategoriesPage.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }
    ]; };
    AllCategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-categories',
            template: __webpack_require__(/*! raw-loader!./all-categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/all-categories/all-categories.page.html"),
            styles: [__webpack_require__(/*! ./all-categories.page.scss */ "./src/app/all-categories/all-categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], AllCategoriesPage);
    return AllCategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=all-categories-all-categories-module-es5.js.map