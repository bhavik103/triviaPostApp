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

module.exports = ".loginDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n#backButton {\n  width: 21px;\n  margin: 25px;\n}\n\n.header {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--main-app-color);\n}\n\nion-content.background {\n  --background: none;\n  background-image: url('login.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\nion-icon {\n  color: var(--main-app-color);\n}\n\n.loginHead {\n  font-size: 20px;\n  margin: 30px 10px;\n  text-align: center;\n}\n\n#closeIcon {\n  float: right;\n}\n\n.buttonInside {\n  position: relative;\n  margin-bottom: 35px;\n}\n\ninput {\n  height: 35px;\n  width: 100%;\n  padding-left: 10px;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid;\n}\n\n.submitLogin {\n  width: 100%;\n  padding: 13px;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 10px;\n  background-color: var(--main-app-color);\n}\n\n#forgotPassword {\n  float: right;\n  margin-top: 12px;\n}\n\n#eye {\n  position: absolute;\n  right: 9px;\n  top: 46%;\n  border: none;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  outline: none;\n  text-align: center;\n  font-weight: bold;\n  padding: 2px;\n  background: none;\n  font-size: 19px;\n}\n\n.fdiv {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n@media (max-width: 640px) {\n  .fdiv {\n    position: relative;\n    width: 100%;\n  }\n}\n\n.fdiv .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.fdiv .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 50%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  padding: 30px;\n  position: absolute;\n}\n\n@media (max-width: 640px) {\n  .fdiv .modal__inner {\n    width: 100%;\n  }\n}\n\n.fdiv label {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.fdiv label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n\n.fdiv .checkBox {\n  display: none;\n}\n\n.fdiv input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n\n.fdiv input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.fdiv input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n  line-height: 125%;\n}\n\n.fdiv input:checked + .modal label {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  height: 24px;\n  width: 24px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.forgotModalClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.resetPass {\n  margin-top: 10px;\n}\n\n.signup_input {\n  color: #000;\n  font-size: 16px;\n}\n\n.signup_input input {\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDSUY7O0FERkE7RUFDRSw0QkFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FDVUY7O0FEUkE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNXRjs7QURUQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1lGOztBRFZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNhRjs7QURaRTtFQVZGO0lBV0ksa0JBQUE7SUFDQSxXQUFBO0VDZUY7QUFDRjs7QURkRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2Q0FBQTtFQUFBLHFDQUFBO0FDZ0JKOztBRGZJO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDaUJOOztBRGhCTTtFQVRGO0lBVUksV0FBQTtFQ21CTjtBQUNGOztBRGhCRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ2tCSjs7QURqQkk7RUFDRSwyQ0FBQTtFQUFBLG1DQUFBO0FDbUJOOztBRGhCRTtFQUNFLGFBQUE7QUNrQko7O0FEZE07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNnQlI7O0FEZlE7RUFDRSxpREFBQTtVQUFBLHlDQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ2lCVjs7QURoQlU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDa0JaOztBRGZRO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ2lCVjs7QURYQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDY0Y7O0FEWkE7RUFDRSxnQkFBQTtBQ2VGOztBRGJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNnQkY7O0FEZEE7RUFDRSxrQkFBQTtBQ2lCRiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jYmFja0J1dHRvbiB7XG4gIHdpZHRoOiAyMXB4O1xuICBtYXJnaW46IDI1cHg7XG59XG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5pb24tY29udGVudC5iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2xvZ2luLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5pb24taWNvbntcbiAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cbi5sb2dpbkhlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY2xvc2VJY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJ1dHRvbkluc2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbmlucHV0IHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cbi5zdWJtaXRMb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKSw7XG59XG4jZm9yZ290UGFzc3dvcmQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4jZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOXB4O1xuICB0b3A6IDQ2JTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5mZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1vZGFsIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgICZfX2lubmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpO1xuICAgICAgdG9wOiA1MCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmLm9wZW4ge1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICB9XG4gIC5jaGVja0JveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dCB7XG4gICAgJjpjaGVja2VkIHtcbiAgICAgICsgLm1vZGFsIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgLm1vZGFsX19pbm5lciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZvcmdvdE1vZGFsQ2xvc2Uge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnJlc2V0UGFzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc2lnbnVwX2lucHV0IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zaWdudXBfaW5wdXQgaW5wdXR7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn0iLCIubG9naW5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2JhY2tCdXR0b24ge1xuICB3aWR0aDogMjFweDtcbiAgbWFyZ2luOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvbG9naW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xufVxuXG4ubG9naW5IZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDMwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2xvc2VJY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYnV0dG9uSW5zaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG5pbnB1dCB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59XG5cbi5zdWJtaXRMb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcbn1cblxuI2ZvcmdvdFBhc3N3b3JkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4jZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOXB4O1xuICB0b3A6IDQ2JTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmZkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogNTAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmZkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZkaXYgLm1vZGFsIHtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmZkaXYgLm1vZGFsX19pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuNzUpO1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmZkaXYgLm1vZGFsX19pbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mZGl2IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmRpdiBsYWJlbC5vcGVuIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiAuY2hlY2tCb3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCAubW9kYWxfX2lubmVyIHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xufVxuLmZkaXYgaW5wdXQ6Y2hlY2tlZCArIC5tb2RhbCBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3Jnb3RNb2RhbENsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJlc2V0UGFzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaWdudXBfaW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2lnbnVwX2lucHV0IGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufSJdfQ== */"

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
            _this.router.navigate(['home']);
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