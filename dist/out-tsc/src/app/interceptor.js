import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Router } from '@angular/router';
let MyInterceptor = class MyInterceptor {
    constructor(route) {
        this.route = route;
        this.accessToken = localStorage.getItem('accessToken');
    }
    //function which will be called for all http calls
    intercept(request, next) {
        this.accessToken = localStorage.getItem('accessToken');
        //how to update the request Parameters
        if (this.accessToken) {
            const cloned = request.clone({
                headers: request.headers.set("authorization", this.accessToken)
            });
            //logging the updated Parameters to browser's console
            return next.handle(cloned).pipe(map((event) => {
                return event;
            }), catchError((error) => {
                const errorMessage = error.error;
                if (error.status === 401) {
                    localStorage.removeItem('curruntUserToken');
                    this.route.navigate(['/login']);
                }
                return throwError(error);
            }));
        }
        else {
            return next.handle(request).pipe(map((event) => {
                return event;
            }), catchError((error) => {
                const errorMessage = error.error;
                if (error.status === 401) {
                    this.route.navigate(['/login']);
                }
                return throwError(error);
            }));
        }
    }
};
MyInterceptor = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Router])
], MyInterceptor);
export { MyInterceptor };
//# sourceMappingURL=interceptor.js.map