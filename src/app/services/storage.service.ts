import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { config } from '../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage,private http: HttpClient) { }

  public setNewsOffline() {
    return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED').pipe(
      map((res: any) => {
        let offlineArray = JSON.parse(JSON.stringify(res.data));
        this.storage.remove('news')
        this.storage.set('news', JSON.stringify(offlineArray));
      })
    );
    // return this.storage.set(`one`, 3);
  }
  public async getNewsOffline() {
    return await this.storage.get(`news`);
  }

}
