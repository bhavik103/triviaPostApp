(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"background\">\n  <img src=\"assets/images/left-arrow.png\" alt=\"\" id=\"backButton\" routerLink=\"/login\" (click)=\"goBack()\">\n  <div class=\"loginDiv\">\n    <div class=\"header\">\n      <img src=\"assets/images/Logo.png\" height=\"auto\" width=\"30%\">\n      <div>Just Read & Share</div>\n    </div>\n    <div class=\"loginBody\">\n      <form [formGroup]=\"loginForm\" padding class=\"loginForm\">\n        <div class=\"buttonInside\">\n          Username:\n          <input [(ngModel)]=\"login.userName\" [ngModelOptions]=\"{standalone: true}\">\n          <button id=\"eye\">\n            <ion-icon name=\"person\"></ion-icon>\n          </button>\n        </div>\n        <div class=\"buttonInside\">\n          Password:\n          <input [type]=\"passwordType\" [(ngModel)]=\"login.password\" [ngModelOptions]=\"{standalone: true}\">\n          <button id=\"eye\">\n            <ion-icon name=\"eye\" [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n          </button>\n        </div>\n        <button class=\"submitLogin\" (click)=\"loginClick(login)\">\n          Sign In\n        </button>\n        <span class=\"fdiv\">\n          <label id=\"forgotPassword\" for=\"forgotPasswordModal\">Forgot Password?</label>\n          <input type=\"checkbox\" id=\"forgotPasswordModal\" class=\"checkBox\" />\n          <div class=\"modal\">\n            <div class=\"modal__inner\">\n              <p style=\"text-align: center;\"><i id=\"signup\">Forgot Password</i></p>\n              <form [formGroup]=\"forgotPassword\">\n                <div class=\"signup_input\">\n                  <input type=\"text\" name=\"\" placeholder=\"Please enter email\" formControlName=\"email\"\n                    [(ngModel)]=\"forgot.email\">\n                </div>\n                <button (click)=\"resetPassword(forgot)\" class=\"submitLogin resetPass\">Reset Password</button>\n              </form>\n              <label for=\"forgotPasswordModal\">\n                <ion-icon class=\"forgotModalClose\" name=\"close\" (click)=\"signUpClose()\"></ion-icon>\n              </label>\n            </div>\n          </div>\n        </span>\n      </form>\n    </div>\n  </div>\n  <div id=\"loader-wrapper\" *ngIf=\"loading\">\n    <div id=\"loader\">\n      <span class=\"welcomeTo\">Welcome to</span>\n      <span class=\"logo_container\">\n        <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n      </span>\n      <div class=\"welcomeTo appDesc\">Interesting and</div>\n      <div class=\"welcomeTo appDesc\">Informative reads</div>\n      <div class=\"spinner\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n      </div>\n      <p class=\"text-center\">Loding...</p>\n    </div>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
let SigninPageModule = class SigninPageModule {
};
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



/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#backButton {\n  width: 21px;\n  margin: 25px;\n}\n\n.header {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--main-app-color);\n}\n\nion-content.background {\n  --background: none;\n  background-image: url('login.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\nion-icon {\n  color: var(--main-app-color);\n}\n\n.loginHead {\n  font-size: 20px;\n  margin: 30px 10px;\n  text-align: center;\n}\n\n#closeIcon {\n  float: right;\n}\n\n.buttonInside {\n  position: relative;\n  margin-bottom: 35px;\n}\n\ninput {\n  height: 35px;\n  width: 100%;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid;\n}\n\n.submitLogin {\n  width: 100%;\n  padding: 13px;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 10px;\n  background-color: var(--main-app-color);\n}\n\n#forgotPassword {\n  float: right;\n  margin-top: 12px;\n}\n\n#eye {\n  position: absolute;\n  right: 9px;\n  top: 46%;\n  border: none;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  outline: none;\n  text-align: center;\n  font-weight: bold;\n  padding: 2px;\n  background: none;\n  font-size: 19px;\n}\n\n.fdiv {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n@media (max-width: 640px) {\n  .fdiv {\n    position: relative;\n    width: 100%;\n  }\n}\n\n.fdiv .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.fdiv .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 50%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  padding: 30px;\n  position: absolute;\n}\n\n@media (max-width: 640px) {\n  .fdiv .modal__inner {\n    width: 100%;\n  }\n}\n\n.fdiv label {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.fdiv label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n\n.fdiv .checkBox {\n  display: none;\n}\n\n.fdiv input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n\n.fdiv input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.fdiv input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n  line-height: 125%;\n}\n\n.fdiv input:checked + .modal label {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  height: 24px;\n  width: 24px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.forgotModalClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.resetPass {\n  margin-top: 10px;\n}\n\n.signup_input {\n  color: #000;\n  font-size: 16px;\n}\n\n.signup_input input {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL3RyaXZpYVBvc3RBcHAvc3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNJRjs7QURGQTtFQUNFLDRCQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUNVRjs7QURSQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1dGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDWUY7O0FEVkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ2FGOztBRFpFO0VBVkY7SUFXSSxrQkFBQTtJQUNBLFdBQUE7RUNlRjtBQUNGOztBRGRFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0VBQUEscUNBQUE7QUNnQko7O0FEZkk7RUFDRSxvREFBQTtVQUFBLDRDQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNpQk47O0FEaEJNO0VBVEY7SUFVSSxXQUFBO0VDbUJOO0FBQ0Y7O0FEaEJFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDa0JKOztBRGpCSTtFQUNFLDJDQUFBO0VBQUEsbUNBQUE7QUNtQk47O0FEaEJFO0VBQ0UsYUFBQTtBQ2tCSjs7QURkTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ2dCUjs7QURmUTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDaUJWOztBRGhCVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNrQlo7O0FEZlE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDaUJWOztBRFhBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNjRjs7QURaQTtFQUNFLGdCQUFBO0FDZUY7O0FEYkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ2dCRjs7QURkQTtFQUNFLGtCQUFBO0FDaUJGIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNiYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIxcHg7XG4gIG1hcmdpbjogMjVweDtcbn1cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvbG9naW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbmlvbi1pY29ue1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuLmxvZ2luSGVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjbG9zZUljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYnV0dG9uSW5zaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuaW5wdXQge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuLnN1Ym1pdExvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpLDtcbn1cbiNmb3Jnb3RQYXNzd29yZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbiNleWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogNDYlO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuLmZkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWwge1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgJl9faW5uZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICYub3BlbiB7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gIH1cbiAgLmNoZWNrQm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0IHtcbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyAubW9kYWwge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAubW9kYWxfX2lubmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZm9yZ290TW9kYWxDbG9zZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmVzZXRQYXNzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zaWdudXBfaW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNpZ251cF9pbnB1dCBpbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufSIsIi5sb2dpbkRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jYmFja0J1dHRvbiB7XG4gIHdpZHRoOiAyMXB4O1xuICBtYXJnaW46IDI1cHg7XG59XG5cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltYWdlcy9sb2dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbi5sb2dpbkhlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjbG9zZUljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idXR0b25JbnNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnN1Ym1pdExvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4jZm9yZ290UGFzc3dvcmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiNleWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogNDYlO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uZmRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZmRpdiAubW9kYWwge1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiAubW9kYWxfX2lubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmRpdiAubW9kYWxfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZkaXYgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mZGl2IGxhYmVsLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5mZGl2IC5jaGVja0JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5mZGl2IGlucHV0OmNoZWNrZWQgKyAubW9kYWwgLm1vZGFsX19pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcmdvdE1vZGFsQ2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucmVzZXRQYXNzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNpZ251cF9pbnB1dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zaWdudXBfaW5wdXQgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








let SigninPage = class SigninPage {
    constructor(platform, appcomponent, router, _userService, _toastService) {
        this.platform = platform;
        this.appcomponent = appcomponent;
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
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appcomponent.openRatingModal();
        }));
        this.login.userName = localStorage.getItem('email');
        localStorage.removeItem('email');
    }
    loginClick(login) {
        this.loading = true;
        console.log(login);
        this._userService.customLogin(login).subscribe((res) => {
            this.loading = false;
            this._toastService.toastFunction(res.message, 'success');
            this.router.navigate(['home']);
        }, err => {
            this.loading = false;
            this._toastService.toastFunction(err.error.message, 'success');
        });
    }
    resetPassword(user) {
        console.log(user);
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
        this.forgotPassword.reset();
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    goBack() {
        localStorage.removeItem('email');
        this.appcomponent.openRatingModal();
    }
};
SigninPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.page.html"),
        styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map