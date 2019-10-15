import { Injectable } from "@angular/core";
import { tap, map, catchError } from "rxjs/operators";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    accessToken;
    constructor(public route: Router) {
        this.accessToken = localStorage.getItem('accessToken');
    
    }
    //function which will be called for all http calls
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.accessToken = localStorage.getItem('accessToken');
    
    
        //how to update the request Parameters
        if (this.accessToken) {
            const cloned = request.clone({
                headers: request.headers.set("authorization",
                    this.accessToken)
            });
            //logging the updated Parameters to browser's console
            return next.handle(cloned).pipe(
                map((event: HttpResponse<any>) => {
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = error.error;
                    if (error.status === 401) {
                        localStorage.removeItem('curruntUserToken');
                        this.route.navigate(['/login']);
                    }
                    return throwError(error);
                })
            );
        } else {
            return next.handle(request).pipe(
                map((event: HttpResponse<any>) => {
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    const errorMessage = error.error;
                    if (error.status === 401) {
                        this.route.navigate(['/login']);
                    }
                    return throwError(error);
                })
            );
        }
    }
}
