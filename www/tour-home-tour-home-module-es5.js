(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-home-tour-home-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tour_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tour-home.page */ "./src/app/tour-home/tour-home.page.ts");
/* harmony import */ var _large_post_large_post_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../large-post/large-post.module */ "./src/app/large-post/large-post.module.ts");
/* harmony import */ var _post_tiles_post_tiles_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-tiles/post-tiles.module */ "./src/app/post-tiles/post-tiles.module.ts");









var routes = [
    {
        path: '',
        component: _tour_home_page__WEBPACK_IMPORTED_MODULE_6__["TourHomePage"]
    }
];
var TourHomePageModule = /** @class */ (function () {
    function TourHomePageModule() {
    }
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
    return TourHomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=tour-home-tour-home-module-es5.js.map