(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidebar-sidebar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"content\" overflow-scroll=\"true\">\n    <ion-list style=\"overflow-y: scroll;\" *ngIf=\"menuPages\">\n        <ion-item *ngFor=\"let page of menuPages\">\n            <ion-label routerLink=\"/single-category/{{page.categoryId}}/{{page.category[language]}}\" (click)=\"closeMenu()\">{{page.category[language]}}</ion-label>\n            <ion-icon name=\"notifications\" style=\"color: #e41212;\" *ngIf=\"page.isNotify == true\" (click)=\"notify(page.categoryId)\"></ion-icon>\n            <ion-icon name=\"notifications-outline\" *ngIf=\"!page.isNotify\" (click)=\"notify(page.categoryId)\"></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-menu>\n<ion-router-outlet main id=\"content\"></ion-router-outlet>"

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
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm2015/ionic-super-tabs-angular.js");
/* harmony import */ var _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../category-tiles/category-tiles.module */ "./src/app/category-tiles/category-tiles.module.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");











let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _category_tiles_category_tiles_module__WEBPACK_IMPORTED_MODULE_8__["CategoryTilesPageModule"],
            _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_9__["LargePostPageModule"],
            _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_10__["PostTilesPageModule"],
            _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                },
            ]),
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sidebar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar.page */ "./src/app/sidebar/sidebar.page.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _tour_home_tour_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tour-home/tour-home.module */ "./src/app/tour-home/tour-home.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");











const routes = [
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
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'tour-home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../tour-home/tour-home.module */ "./src/app/tour-home/tour-home.module.ts")).then(m => m.TourHomePageModule)
                    }
                ]
            }
        ]
    }
];
let SidebarPageModule = class SidebarPageModule {
};
SidebarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_8__["LargePostPageModule"],
            _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_1__["PostTilesPageModule"],
            _tour_home_tour_home_module__WEBPACK_IMPORTED_MODULE_9__["TourHomePageModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomePageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_sidebar_page__WEBPACK_IMPORTED_MODULE_7__["SidebarPage"]]
    })
], SidebarPageModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










let SidebarPage = class SidebarPage {
    constructor(homePage, menu, platform, _storageService, _toastService, _categoryService, route) {
        this.homePage = homePage;
        this.menu = menu;
        this.platform = platform;
        this._storageService = _storageService;
        this._toastService = _toastService;
        this._categoryService = _categoryService;
        this.route = route;
    }
    ionViewWillEnter() {
        this.language = localStorage.getItem('language');
        console.log("CurrentUrl", this.route.url);
        this.getMenuItems();
        this.subscription = this.platform.backButton.subscribe(() => {
            navigator['app'].exitApp();
        });
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    getMenuItems() {
        if (navigator.onLine) {
            this._categoryService.getAll().toPromise().then((res) => {
                console.log("edfsfsfdsfd", res);
                this.menuPages = res;
                const tokenLocalStorage = localStorage.getItem('accessToken');
                if (tokenLocalStorage) {
                    var base64Url = tokenLocalStorage.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    var decodedToken = JSON.parse(window.atob(base64));
                    var loggedInUser = decodedToken.user._id;
                    console.log("Decoded", loggedInUser);
                }
                lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.menuPages, (user) => {
                    lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, (Id) => {
                        if (Id == loggedInUser) {
                            console.log("NOTIFIED CATEGORY", Id);
                            user['isNotify'] = true;
                        }
                    });
                });
                console.log("OFFLINE", this.menuPages);
            });
        }
        else {
            this._storageService.getCatForOffline().then((res) => {
                console.log("edfsfsfdsfd", res);
                this.menuPages = JSON.parse(res);
                const tokenLocalStorage = localStorage.getItem('accessToken');
                if (tokenLocalStorage) {
                    var base64Url = tokenLocalStorage.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    var decodedToken = JSON.parse(window.atob(base64));
                    var loggedInUser = decodedToken.user._id;
                    console.log("Decoded", loggedInUser);
                }
                lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](this.menuPages, (user) => {
                    lodash__WEBPACK_IMPORTED_MODULE_6__["forEach"](user.notify, (Id) => {
                        if (Id == loggedInUser) {
                            console.log("NOTIFIED CATEGORY", Id);
                            user['isNotify'] = true;
                        }
                    });
                });
                console.log("OFFLINE", this.menuPages);
            });
        }
    }
    closeMenu() {
        this.menu.close();
    }
    notify(catId) {
        if (!navigator.onLine) {
            const message = "No internet connection";
            const color = "danger";
            this._toastService.toastFunction(message, color);
        }
        else if (!localStorage.getItem('accessToken')) {
            const message = "You need to login first";
            const color = "danger";
            this._toastService.toastFunction(message, color);
        }
        else {
            this._categoryService.notifyUser(catId).subscribe((res) => {
                this.getMenuItems();
                this._toastService.toastFunction(res.message, 'success');
            }, err => {
                this._toastService.toastFunction(err.error.message, 'danger');
            });
        }
    }
};
SidebarPage.ctorParameters = () => [
    { type: _home_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
SidebarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.page.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.page.html"),
        styles: [__webpack_require__(/*! ./sidebar.page.scss */ "./src/app/sidebar/sidebar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_home_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
        _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], SidebarPage);



/***/ }),

/***/ "./src/app/tour-home/tour-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tour-home/tour-home.module.ts ***!
  \***********************************************/
/*! exports provided: TourHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourHomePageModule", function() { return TourHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-home.page */ "./src/app/tour-home/tour-home.page.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");









const routes = [
    {
        path: '',
        component: _tour_home_page__WEBPACK_IMPORTED_MODULE_6__["TourHomePage"]
    }
];
let TourHomePageModule = class TourHomePageModule {
};
TourHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_7__["LargePostPageModule"],
            _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_8__["PostTilesPageModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tour_home_page__WEBPACK_IMPORTED_MODULE_6__["TourHomePage"]]
    })
], TourHomePageModule);



/***/ })

}]);
//# sourceMappingURL=sidebar-sidebar-module-es2015.js.map