(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\" overflow-scroll=\"true\">\n    <ion-header>\n        <ion-toolbar style=\"background-color: #e41212 !important;\">\n            <ion-title>Categories</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list *ngIf=\"menuPages\">\n            <ion-item *ngFor=\"let page of menuPages\">\n                <ion-label routerLink=\"/single-category/{{page.categoryId}}/{{page.category[language]}}\" (click)=\"closeMenu()\">{{page.category[language]}}</ion-label>\n                <ion-icon name=\"notifications\" style=\"color: #e41212;\" *ngIf=\"page.isNotify\" (click)=\"notify(page.categoryId)\"></ion-icon>\n                <ion-icon name=\"notifications-outline\" *ngIf=\"!page.isNotify\" (click)=\"notify(page.categoryId)\">\n                </ion-icon>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-router-outlet id=\"content1\" main></ion-router-outlet>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPageModule", function() { return SidebarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar.page */ "./src/app/sidebar/sidebar.page.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");









var routes = [
    {
        path: '',
        component: _sidebar_page__WEBPACK_IMPORTED_MODULE_7__["SidebarPage"],
        children: [
            // {
            //   path: '',
            //   redirectTo: 'home',
            //   pathMatch: 'full'
            // },
            {
                path: 'home',
                loadChildren: function () { return Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~all-categories-all-categories-module~category-tiles-category-tiles-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
            },
            {
                path: 'tour-home',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tour-home-tour-home-module */ "tour-home-tour-home-module").then(__webpack_require__.bind(null, /*! ../tour-home/tour-home.module */ "./src/app/tour-home/tour-home.module.ts")).then(function (m) { return m.TourHomePageModule; }); }
            }
        ]
    }
];
var SidebarPageModule = /** @class */ (function () {
    function SidebarPageModule() {
    }
    SidebarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_8__["LargePostPageModule"],
                _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_1__["PostTilesPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_sidebar_page__WEBPACK_IMPORTED_MODULE_7__["SidebarPage"]]
        })
    ], SidebarPageModule);
    return SidebarPageModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sidebar/sidebar.page.ts ***!
  \*****************************************/
/*! exports provided: SidebarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarPage", function() { return SidebarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










var SidebarPage = /** @class */ (function () {
    function SidebarPage(translate, menu, platform, _storageService, _toastService, _categoryService, route) {
        this.translate = translate;
        this.menu = menu;
        this.platform = platform;
        this._storageService = _storageService;
        this._toastService = _toastService;
        this._categoryService = _categoryService;
        this.route = route;
    }
    SidebarPage.prototype.ionViewWillEnter = function () {
        this.language = localStorage.getItem('language');
        console.log('CurrentUrl', this.route.url);
        this.getMenuItems();
        this.subscription = this.platform.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    SidebarPage.prototype.ngOnInit = function () {
    };
    SidebarPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    SidebarPage.prototype.getMenuItems = function () {
        var _this = this;
        this.language = localStorage.getItem('language');
        if (navigator.onLine) {
            this._categoryService.getAll().toPromise().then(function (res) {
                console.log('edfsfsfdsfd', res);
                _this.menuPages = res;
                var tokenLocalStorage = localStorage.getItem('accessToken');
                if (tokenLocalStorage) {
                    var base64Url = tokenLocalStorage.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    var decodedToken = JSON.parse(window.atob(base64));
                    var loggedInUser_1 = decodedToken.user._id;
                    console.log('Decoded', loggedInUser_1);
                    lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](_this.menuPages, function (user) {
                        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, function (Id) {
                            if (Id == loggedInUser_1) {
                                console.log('NOTIFIED CATEGORY', Id);
                                user.isNotify = true;
                            }
                        });
                    });
                }
                _this.menuPages = [].concat(_this.menuPages).reverse();
                console.log("THIS.MEWNU", _this.menuPages);
                console.log('ONLINE', _this.menuPages);
            });
        }
        else {
            this._storageService.getCatForOffline().then(function (res) {
                console.log('edfsfsfdsfd', res);
                _this.menuPages = JSON.parse(res);
                var tokenLocalStorage = localStorage.getItem('accessToken');
                if (tokenLocalStorage) {
                    var base64Url = tokenLocalStorage.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    var decodedToken = JSON.parse(window.atob(base64));
                    var loggedInUser_2 = decodedToken.user._id;
                    console.log('Decoded', loggedInUser_2);
                    lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](_this.menuPages, function (user) {
                        lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, function (Id) {
                            if (Id == loggedInUser_2) {
                                console.log('NOTIFIED CATEGORY', Id);
                                user.isNotify = true;
                            }
                        });
                    });
                    _this.menuPages = [].concat(_this.menuPages).reverse();
                    console.log("THIS.MEWNU", _this.menuPages);
                    console.log('OFFLINE', _this.menuPages);
                }
            });
        }
    };
    SidebarPage.prototype.closeMenu = function () {
        this.menu.close();
    };
    SidebarPage.prototype.notify = function (catId) {
        var _this = this;
        if (!navigator.onLine) {
            this.translate.get('No internet connection').subscribe(function (res) {
                _this._toastService.toastFunction(res, '');
            });
        }
        else if (!localStorage.getItem('accessToken')) {
            this.translate.get('Please Login').subscribe(function (res) {
                _this._toastService.toastFunction(res, '');
            });
        }
        else {
            this._categoryService.notifyUser(catId).subscribe(function (res) {
                _this.getMenuItems();
                _this.translate.get(res.message).subscribe(function (res) {
                    _this._toastService.toastFunction(res, 'success');
                });
            }, function (err) {
            });
        }
    };
    SidebarPage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    SidebarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.page.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.page.html"),
            styles: [__webpack_require__(/*! ./sidebar.page.scss */ "./src/app/sidebar/sidebar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SidebarPage);
    return SidebarPage;
}());



/***/ })

}]);
//# sourceMappingURL=sidebar-sidebar-module-es5.js.map