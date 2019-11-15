(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"loginDiv\">\n    <div class=\"loginHead\">\n      <span id=\"signIn\">Sign In</span>\n      <span id=\"closeIcon\">\n        <ion-icon name=\"close\" routerLink=\"/login\" (click)=\"goBack()\"></ion-icon>\n      </span>\n    </div>\n    <div class=\"loginBody\">\n      <form [formGroup]=\"loginForm\" padding class=\"loginForm\">\n        <div class=\"buttonInside\">\n          <input placeholder=\"Email\" [(ngModel)]=\"login.userName\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"buttonInside\">\n          <input placeholder=\"Password\" [type]=\"passwordType\" [(ngModel)]=\"login.password\"\n            [ngModelOptions]=\"{standalone: true}\">\n\n          <button id=\"eye\">\n            <ion-icon name=\"eye\" [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n          </button>\n        </div>\n        <button class=\"submitLogin\" (click)=\"loginClick(login)\">\n          Sign In\n        </button>\n        <span class=\"fdiv\">\n          <label id=\"forgotPassword\" for=\"forgotPasswordModal\">Forgot Password?</label>\n          <input type=\"checkbox\" id=\"forgotPasswordModal\" class=\"checkBox\" />\n          <div class=\"modal\">\n            <div class=\"modal__inner\">\n              <p style=\"text-align: center;\"><i id=\"signup\">Forgot Password</i></p>\n              <form [formGroup]=\"forgotPassword\">\n                <div class=\"signup_input\">\n                  <input type=\"text\" name=\"\" placeholder=\"Please enter email\" formControlName=\"email\"\n                    [(ngModel)]=\"forgot.email\">\n                </div>\n                <button (click)=\"resetPassword(forgot)\" class=\"submitLogin resetPass\">Reset Password</button>\n              </form>\n              <label for=\"forgotPasswordModal\">\n                <ion-icon class=\"forgotModalClose\" name=\"close\" (click)=\"signUpClose()\"></ion-icon>\n              </label>\n            </div>\n          </div>\n        </span>\n      </form>\n    </div>\n  </div>\n  <div id=\"loader-wrapper\" *ngIf=\"loading\">\n    <div id=\"loader\">\n        <span class=\"welcomeTo\">Welcome to</span>\n        <span class=\"logo_container\">\n            <img src=\"../../assets/images/Logo.png\" alt=\"logo\">\n        </span>\n        <div class=\"welcomeTo appDesc\">Interesting and</div>\n        <div class=\"welcomeTo appDesc\">Informative reads</div>\n        <div class=\"spinner\">\n            <div class=\"bounce1\"></div>\n            <div class=\"bounce2\"></div>\n            <div class=\"bounce3\"></div>\n        </div>\n        <p class=\"text-center\">Loding...</p>\n    </div>\n</div>\n</ion-content>"

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

module.exports = ".loginDiv {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100vh;\n}\n\n.loginHead {\n  font-size: 20px;\n  margin: 30px 10px;\n  text-align: center;\n}\n\n#closeIcon {\n  float: right;\n}\n\n.buttonInside {\n  position: relative;\n  margin-bottom: 10px;\n}\n\ninput {\n  height: 48px;\n  width: 100%;\n  padding-left: 10px;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid;\n}\n\n.submitLogin {\n  width: 100%;\n  padding: 12px;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 10px;\n  background-color: #2a6974;\n}\n\n#forgotPassword {\n  float: right;\n}\n\n#eye {\n  position: absolute;\n  right: 9px;\n  top: 30%;\n  border: none;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  outline: none;\n  text-align: center;\n  font-weight: bold;\n  padding: 2px;\n  background: none;\n  font-size: 19px;\n}\n\n.fdiv {\n  position: absolute;\n  width: 50%;\n  margin: auto;\n  padding-bottom: 20px;\n  height: 50%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n@media (max-width: 640px) {\n  .fdiv {\n    position: relative;\n    width: 100%;\n  }\n}\n\n.fdiv .modal {\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: opacity 500ms ease-in-out;\n  transition: opacity 500ms ease-in-out;\n}\n\n.fdiv .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(0.75);\n          transform: translate(-50%, -50%) scale(0.75);\n  top: 50%;\n  color: #fff;\n  font-size: 24px;\n  left: 50%;\n  width: 50%;\n  padding: 30px;\n  position: absolute;\n}\n\n@media (max-width: 640px) {\n  .fdiv .modal__inner {\n    width: 100%;\n  }\n}\n\n.fdiv label {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.fdiv label.open {\n  -webkit-transition: color 200ms ease-in-out;\n  transition: color 200ms ease-in-out;\n}\n\n.fdiv .checkBox {\n  display: none;\n}\n\n.fdiv input:checked + .modal {\n  opacity: 1;\n  visibility: visible;\n}\n\n.fdiv input:checked + .modal .modal__inner {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.fdiv input:checked + .modal .modal__inner p {\n  font-size: 1.25rem;\n  line-height: 125%;\n}\n\n.fdiv input:checked + .modal label {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n  height: 24px;\n  width: 24px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n\n.forgotModalClose {\n  color: #000;\n  background: #fff;\n  border-radius: 50%;\n}\n\n.resetPass {\n  margin-top: 10px;\n  background: #2a6974;\n}\n\n.signup_input {\n  color: #000;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvQmhhdmlrL1Byb2plY3RzL3RyaXZpYV9wb3N0L3NyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNRRjs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDU0Y7O0FEUkU7RUFWRjtJQVdJLGtCQUFBO0lBQ0EsV0FBQTtFQ1dGO0FBQ0Y7O0FEVkU7RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkNBQUE7RUFBQSxxQ0FBQTtBQ1lKOztBRFhJO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDYU47O0FEWk07RUFURjtJQVVJLFdBQUE7RUNlTjtBQUNGOztBRFpFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEYkk7RUFDRSwyQ0FBQTtFQUFBLG1DQUFBO0FDZU47O0FEWkU7RUFDRSxhQUFBO0FDY0o7O0FEVk07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNZUjs7QURYUTtFQUNFLGlEQUFBO1VBQUEseUNBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDYVY7O0FEWlU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDY1o7O0FEWFE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUFBLGlDQUFBO0FDYVY7O0FETEE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmxvZ2luSGVhZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjbG9zZUljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYnV0dG9uSW5zaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uc3VibWl0TG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2OTc0O1xufVxuI2ZvcmdvdFBhc3N3b3JkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuI2V5ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDlweDtcbiAgdG9wOiAzMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDE5cHg7XG59XG4uZmRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tb2RhbCB7XG4gICAgei1pbmRleDogMjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAmX19pbm5lciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjc1KTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJi5vcGVuIHtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxuICAuY2hlY2tCb3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXQge1xuICAgICY6Y2hlY2tlZCB7XG4gICAgICArIC5tb2RhbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIC5tb2RhbF9faW5uZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uZm9yZ290TW9kYWxDbG9zZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmVzZXRQYXNzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzJhNjk3NDtcbn1cbi5zaWdudXBfaW5wdXR7XG4gIGNvbG9yOiMwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iLCIubG9naW5EaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dpbkhlYWQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjbG9zZUljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idXR0b25JbnNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uc3VibWl0TG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE2OTc0O1xufVxuXG4jZm9yZ290UGFzc3dvcmQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNleWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogMzAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uZmRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZmRpdiAubW9kYWwge1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiAubW9kYWxfX2lubmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC43NSk7XG4gIHRvcDogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuZmRpdiAubW9kYWxfX2lubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZkaXYgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mZGl2IGxhYmVsLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5mZGl2IC5jaGVja0JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5mZGl2IGlucHV0OmNoZWNrZWQgKyAubW9kYWwgLm1vZGFsX19pbm5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIC5tb2RhbF9faW5uZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG59XG4uZmRpdiBpbnB1dDpjaGVja2VkICsgLm1vZGFsIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5mb3Jnb3RNb2RhbENsb3NlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnJlc2V0UGFzcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyYTY5NzQ7XG59XG5cbi5zaWdudXBfaW5wdXQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

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






let SigninPage = class SigninPage {
    constructor(router, _userService, _toastService) {
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
        this.login.userName = localStorage.getItem('email');
    }
    loginClick(login) {
        this.loading = true;
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
    }
};
SigninPage.ctorParameters = () => [
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map