(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\">\n  <img src=\"assets/images/left-arrow.png\" alt=\"\" id=\"backButton\" routerLink=\"/login\" (click)=\"goBack()\">\n  <div class=\"loginDiv\">\n    <div class=\"header\">\n      <img src=\"assets/images/Logo.png\" height=\"auto\" width=\"30%\">\n      <div>Read & Share</div>\n    </div>\n    <div class=\"loginBody\">\n      <form [formGroup]=\"loginForm\" padding class=\"loginForm\">\n        <div class=\"buttonInside\">\n          Username:\n          <input [(ngModel)]=\"login.userName\" [ngModelOptions]=\"{standalone: true}\">\n          <button id=\"eye\">\n            <ion-icon name=\"person\"></ion-icon>\n          </button>\n        </div>\n        <div class=\"buttonInside\">\n          Password:\n          <input [type]=\"passwordType\" [(ngModel)]=\"login.password\" [ngModelOptions]=\"{standalone: true}\">\n          <button id=\"eye\">\n            <ion-icon name=\"eye\" [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n          </button>\n        </div>\n        <button class=\"submitLogin\" (click)=\"loginClick(login)\">\n          Sign In\n        </button>\n        <span class=\"fdiv\">\n          <label id=\"forgotPassword\" for=\"forgotPasswordModal\">Forgot Password?</label>\n          <input type=\"checkbox\" id=\"forgotPasswordModal\" class=\"checkBox\" />\n          <div class=\"modal\">\n            <div class=\"modal__inner\">\n              <p style=\"text-align: center;\"><i id=\"signup\">Forgot Password</i></p>\n              <form [formGroup]=\"forgotPassword\">\n                <div class=\"signup_input\">\n                  <input type=\"text\" name=\"\" placeholder=\"Please enter email\" formControlName=\"email\"\n                    [(ngModel)]=\"forgot.email\">\n                </div>\n                <button (click)=\"resetPassword(forgot)\" class=\"submitLogin resetPass\">Reset Password</button>\n              </form>\n              <label for=\"forgotPasswordModal\">\n                <ion-icon class=\"forgotModalClose\" name=\"close\" (click)=\"signUpClose()\"></ion-icon>\n              </label>\n            </div>\n          </div>\n        </span>\n      </form>\n    </div>\n  </div>\n  <div id=\"loader-wrapper\" *ngIf=\"loading\">\n    <div id=\"loader\">\n      <span class=\"welcomeTo\">Welcome to</span>\n      <span class=\"logo_container\">\n        <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n      </span>\n      <div class=\"welcomeTo appDesc\">Interesting and</div>\n      <div class=\"welcomeTo appDesc\">Informative reads</div>\n      <div class=\"spinner\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n      </div>\n      <p class=\"text-center\">Loding...</p>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#backButton {\n  width: 21px;\n  margin: 25px;\n}\n\n.header {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: #d02535;\n}\n\nion-content.background {\n  --background: none;\n  background-image: url('login.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\nion-icon {\n  color: #d02535;\n}\n\n.loginHead {\n  font-size: 20px;\n  margin: 30px 10px;\n  text-align: center;\n}\n\n#closeIcon {\n  float: right;\n}\n\n.buttonInside {\n  position: relative;\n  margin-bottom: 35px;\n}\n\ninput {\n  height: 48px;\n  width: 100%;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid;\n}\n\n.submitLogin {\n  width: 100%;\n  padding: 13px;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 10px;\n  background-color: #d02535;\n}\n\n#forgotPassword {\n  float: right;\n  margin-top: 12px;\n}\n\n#eye {\n  position: absolute;\n  right: 9px;\n  top: 30%;\n  border: none;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  outline: none;\n  text-align: center;\n  font-weight: bold;\n  padding: 2px;\n  background: none;\n  font-size: 19px;\n}\n\n.fdiv {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n@media (max-width: 640px) {\n  .fdiv {\n    position: relative;\n    width: 100%;\n  }\n}\n\n.fdiv .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.fdiv .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 50%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  padding: 30px;\n  position: absolute;\n}\n\n@media (max-width: 640px) {\n  .fdiv .modal__inner {\n    width: 100%;\n  }\n}\n\n.fdiv label {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.fdiv label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n\n.fdiv .checkBox {\n  display: none;\n}\n\n.fdiv input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n\n.fdiv input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.fdiv input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n  line-height: 125%;\n}\n\n.fdiv input:checked + .modal label {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  height: 24px;\n  width: 24px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.forgotModalClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.resetPass {\n  margin-top: 10px;\n}\n\n.signup_input {\n  color: #000;\n  font-size: 16px;\n}\n\n.signup_input input {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ1NGOztBRFBBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1VGOztBRFJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDV0Y7O0FEVEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNZRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDYUY7O0FEWkU7RUFWRjtJQVdJLGtCQUFBO0lBQ0EsV0FBQTtFQ2VGO0FBQ0Y7O0FEZEU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQ2dCSjs7QURmSTtFQUNFLG9EQUFBO1VBQUEsNENBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2lCTjs7QURoQk07RUFURjtJQVVJLFdBQUE7RUNtQk47QUFDRjs7QURoQkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNrQko7O0FEakJJO0VBQ0UsMkNBQUE7RUFBQSxtQ0FBQTtBQ21CTjs7QURoQkU7RUFDRSxhQUFBO0FDa0JKOztBRGRNO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDZ0JSOztBRGZRO0VBQ0UsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNpQlY7O0FEaEJVO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2tCWjs7QURmUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNpQlY7O0FEVEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1dGOztBRFRBO0VBQ0UsZ0JBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDYUY7O0FEWEE7RUFDRSxrQkFBQTtBQ2NGIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNiYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIxcHg7XG4gIG1hcmdpbjogMjVweDtcbn1cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNkMDI1MzU7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2xvZ2luLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5pb24taWNvbntcbiAgY29sb3I6ICNkMDI1MzU7XG59XG4ubG9naW5IZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDMwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Nsb3NlSWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5idXR0b25JbnNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5pbnB1dCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG4uc3VibWl0TG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDAyNTM1LDtcbn1cbiNmb3Jnb3RQYXNzd29yZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbiNleWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogMzAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLmZkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWwge1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgJl9faW5uZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYub3BlbiB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cbiAgLmNoZWNrQm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0IHtcbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyAubW9kYWwge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAubW9kYWxfX2lubmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZvcmdvdE1vZGFsQ2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJlc2V0UGFzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2lnbnVwX2lucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zaWdudXBfaW5wdXQgaW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn0iLCIubG9naW5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2JhY2tCdXR0b24ge1xuICB3aWR0aDogMjFweDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjZDAyNTM1O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2xvZ2luLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICNkMDI1MzU7XG59XG5cbi5sb2dpbkhlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjbG9zZUljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idXR0b25JbnNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnN1Ym1pdExvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwMjUzNTtcbn1cblxuI2ZvcmdvdFBhc3N3b3JkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOXB4O1xuICB0b3A6IDMwJTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmZkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmZkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZkaXYgLm1vZGFsIHtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmZkaXYgLm1vZGFsX19pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpO1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmZkaXYgLm1vZGFsX19pbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mZGl2IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmRpdiBsYWJlbC5vcGVuIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiAuY2hlY2tCb3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCAubW9kYWxfX2lubmVyIHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZm9yZ290TW9kYWxDbG9zZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5yZXNldFBhc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lnbnVwX2lucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNpZ251cF9pbnB1dCBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SigninPage = /** @class */ (function () {
    function SigninPage(router, _userService, _toastService) {
        this.router = router;
        this._userService = _userService;
        this._toastService = _toastService;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.login = {
            'userName': '',
            'password': ''
        };
        this.forgotPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
        this.forgot = {
            email: "",
        };
        this.show = false;
    }
    SigninPage.prototype.ngOnInit = function () {
        this.login.userName = localStorage.getItem('email');
        localStorage.removeItem('email');
    };
    SigninPage.prototype.loginClick = function (login) {
        var _this = this;
        this.loading = true;
        console.log(login);
        this._userService.customLogin(login).subscribe(function (res) {
            _this.loading = false;
            _this._toastService.toastFunction(res.message, 'success');
            _this.router.navigate(['home/categories']);
        }, function (err) {
            _this.loading = false;
            _this._toastService.toastFunction(err.error.message, 'success');
        });
    };
    SigninPage.prototype.resetPassword = function (user) {
        var _this = this;
        console.log(user);
        this.loading = true;
        this._userService.passwordReset(user).subscribe(function (res) {
            _this.loading = false;
            _this._toastService.toastFunction(res.message, 'success');
            _this.router.navigate(['settings']);
        }, function (err) {
            _this.loading = false;
            _this._toastService.toastFunction(err.error.message, 'success');
        });
    };
    SigninPage.prototype.signUpClose = function () {
        this.forgotPassword.reset();
    };
    SigninPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SigninPage.prototype.goBack = function () {
        localStorage.removeItem('email');
    };
    SigninPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
    ]; };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es5.js.map