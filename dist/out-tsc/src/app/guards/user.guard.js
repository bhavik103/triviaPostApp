import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
let AuthGuard = class AuthGuard {
    constructor(router, _userService) {
        this.router = router;
        this._userService = _userService;
    }
    canActivate(route, state) {
        // throw new Error("Method not implemented.");
        const currentUser = this._userService.currentUserValue;
        console.log("curruntUser in auth guard===========>", currentUser);
        if (currentUser) {
            // authorised so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['login']);
            return false;
            // throw new Error("Method not implemented.");
        }
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router, UserService])
], AuthGuard);
export { AuthGuard };
export class LoginGuard {
    constructor(router, _userService) {
        this.router = router;
        this._userService = _userService;
    }
    canActivate(route, state) {
        // throw new Error("Method not implemented.");
        const currentUser = this._userService.currentUserValue;
        console.log("curruntUser in auth guard===========>", currentUser);
        if (currentUser) {
            // authorised so return true
            return false;
        }
        else {
            // not logged in so redirect to login page with the return url
            // this.router.navigate(['login']);
            return true;
            // throw new Error("Method not implemented.");
        }
    }
}
//# sourceMappingURL=user.guard.js.map