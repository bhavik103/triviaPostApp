import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
let GeneralService = class GeneralService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        return throwError('Error! something went wrong.');
    }
    //get all cateogries
    getPolicy() {
        return this.http.get(config.baseApiUrl + "terms").pipe(map((res) => {
            this.privacy = res['data'];
            return this.privacy;
        }), catchError(this.handleError));
    }
};
GeneralService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], GeneralService);
export { GeneralService };
//# sourceMappingURL=general.service.js.map