(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-categories-all-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/all-categories/all-categories.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-categories/all-categories.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\n  <div class=\"settingsToolbar\">\n    <ion-back-button\n      name=\"arrow-round-back\"\n      class=\"homeBack\"\n      class=\"homeBack\"\n      defaultHref=\"/settings\"\n      float-left\n      (click)=\"backButton()\"\n    >\n    </ion-back-button>\n    <span id=\"settingTitle\"> {{catTitle[language]}}</span>\n    <button float-right routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n  </div>\n</div>\n\n<ion-content *ngIf=\"language && !loading\">\n  <ion-row *ngIf=\"categories\">\n    <ion-col size=\"6\" *ngFor=\"let category of categories;let i = index\" class=\"categoryTiles\">\n      <app-category-tiles\n        [category]=\"category\"\n        (onSubscribe)=\"subscribedCategory($event, isNotify)\"\n        [language]=\"language\"\n        [index] = \"i\"\n      ></app-category-tiles>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-content *ngIf=\"loading\" class=\"loadingContent\"> </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category-tiles/category-tiles.module */ "./src/app/category-tiles/category-tiles.module.ts");
/* harmony import */ var _all_categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-categories.page */ "./src/app/all-categories/all-categories.page.ts");








const routes = [
    {
        path: '',
        component: _all_categories_page__WEBPACK_IMPORTED_MODULE_7__["AllCategoriesPage"]
    }
];
let AllCategoriesPageModule = class AllCategoriesPageModule {
};
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



/***/ }),

/***/ "./src/app/all-categories/all-categories.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/all-categories/all-categories.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loadingContent {\n  --background: none;\n  background: url('simpleLoader.gif');\n  background-size: cover;\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYXBvc3RBcHAvc3JjL2FwcC9hbGwtY2F0ZWdvcmllcy9hbGwtY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FsbC1jYXRlZ29yaWVzL2FsbC1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hbGwtY2F0ZWdvcmllcy9hbGwtY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9zaW1wbGVMb2FkZXIuZ2lmJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iLCIubG9hZGluZ0NvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc2ltcGxlTG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _changeLang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../changeLang */ "./src/app/changeLang.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_admobfree_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/admobfree.service */ "./src/app/services/admobfree.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");











let AllCategoriesPage = class AllCategoriesPage {
    constructor(storage, _storageService, _admobService, router, platform, appcomponent, _userService, _categoryService) {
        this.storage = storage;
        this._storageService = _storageService;
        this._admobService = _admobService;
        this.router = router;
        this.platform = platform;
        this.appcomponent = appcomponent;
        this._userService = _userService;
        this._categoryService = _categoryService;
        this.catTitle = _changeLang__WEBPACK_IMPORTED_MODULE_4__["catTitle"];
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => {
            this.appcomponent.openRatingModal();
        });
        this.language = localStorage.getItem('language');
        const alertOnlineStatus = () => {
        };
        window.addEventListener('online', alertOnlineStatus);
        window.addEventListener('offline', alertOnlineStatus);
    }
    ionViewWillEnter() {
        this._admobService.interstitalAdOnFivePageChange();
        if (localStorage.getItem('skip')) {
            localStorage.setItem('skip', '1');
            localStorage.setItem('shareBlink', '1');
            localStorage.setItem('catSelect', '1');
            localStorage.setItem('firstLargePostClick', '1');
        }
        if (localStorage.getItem('catModal') && !localStorage.getItem('skip')) {
            this.router.navigateByUrl('/login');
        }
        this.loading = false;
        this.getCategories();
    }
    handlingBackButton() {
        this._userService.callComponentMethod('1');
        console.log("this.openRatingModal", this.appcomponent);
    }
    getCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.language = localStorage.getItem('language');
            if (navigator.onLine) {
                this._categoryService.getAll().toPromise().then((res) => {
                    console.log("after", res);
                    this.categories = res;
                    this.loading = false;
                }, (err) => {
                    this.loading = false;
                });
            }
            else {
                console.log("HELLO");
                let catString = yield this.storage.get('cat');
                this.categories = JSON.parse(catString);
                console.log("OFFLINE CATEGORY", this.categories);
                this.loading = false;
            }
        });
    }
    //change on subscription of category
    subscribedCategory(e, isNotify) {
        console.log("Event e", e);
        if (e.cat === 1) {
            localStorage.setItem('catSelect', '1');
            localStorage.setItem('language', this.language);
            this.catSelect = '1';
        }
        else {
            if (e.statusCode == 1) {
                this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
            }
            else if (e.statusCode == 0) {
                this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
            }
        }
    }
    backButton() {
        this.appcomponent.openRatingModal();
    }
};
AllCategoriesPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] },
    { type: _services_admobfree_service__WEBPACK_IMPORTED_MODULE_9__["AdmobfreeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }
];
AllCategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-all-categories',
        template: __webpack_require__(/*! raw-loader!./all-categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/all-categories/all-categories.page.html"),
        styles: [__webpack_require__(/*! ./all-categories.page.scss */ "./src/app/all-categories/all-categories.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _services_admobfree_service__WEBPACK_IMPORTED_MODULE_9__["AdmobfreeService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
], AllCategoriesPage);



/***/ })

}]);
//# sourceMappingURL=all-categories-all-categories-module-es2015.js.map