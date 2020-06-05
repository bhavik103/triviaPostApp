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

  public getNewsForOfflineFromServer(){
    return this.http.get(config.baseApiUrl + 'get-news-for-offline').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public storeNewsForOffline(news){
    return this.storage.set('news',news);
  }

  public getNewsForOffline(){
    return this.storage.get('news');
  }

  public storeCatForOffline(categories){
    return this.storage.set('cat',categories);
  }

  public getCatForOffline(){
    return this.storage.get('cat');
  }

  public async getPostByCatOffline(catId){
    let allNewsString = await this.getNewsForOffline();
    let allNews = JSON.parse(allNewsString);
    let catWisePost = [];
    await allNews.forEach(post => {
      if(post.newsCategoryId == catId){
        catWisePost.push(post)
      }
    });
    return catWisePost;
  }
}
