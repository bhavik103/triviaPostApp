import { shareMessage } from './../changeLang';
import { CategoryService } from './../services/category.service';
import { ToastService } from './../services/toast.service';
import { StorageService } from './../services/storage.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {
  menuPages: any;
  subscription: any;
  language: any;
  constructor(
    private translate: TranslateService,
    private menu: MenuController,
    private platform: Platform,
    private _storageService: StorageService,
    private _toastService: ToastService,
    private _categoryService: CategoryService,
    private route: Router
  ) {
  }

  ionViewWillEnter() {
    this.language = localStorage.getItem('language');
    console.log('CurrentUrl', this.route.url);
    this.getMenuItems();
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  getMenuItems() {
    this.language = localStorage.getItem('language');
    if (navigator.onLine) {
      this._categoryService.getAll().toPromise().then((res: any) => {
        console.log('edfsfsfdsfd', res);
        this.menuPages = res;
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
          const base64Url = tokenLocalStorage.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const decodedToken = JSON.parse(window.atob(base64));
          const loggedInUser = decodedToken.user._id;
          console.log('Decoded', loggedInUser);
          _.forEach(this.menuPages, (user) => {
            _.forEach(user.notify, (Id) => {
              if (Id == loggedInUser) {
                console.log('NOTIFIED CATEGORY', Id);
                user.isNotify = true;
              }
            });
          });
        }
        this.menuPages =  [].concat(this.menuPages).reverse();
        console.log("THIS.MEWNU",this.menuPages)
        console.log('ONLINE', this.menuPages);
      });
    } else {
      this._storageService.getCatForOffline().then((res: any) => {
        console.log('edfsfsfdsfd', res);
        this.menuPages = JSON.parse(res);
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
          const base64Url = tokenLocalStorage.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const decodedToken = JSON.parse(window.atob(base64));
          const loggedInUser = decodedToken.user._id;
          console.log('Decoded', loggedInUser);
          _.forEach(this.menuPages, (user) => {
            _.forEach(user.notify, (Id) => {
              if (Id == loggedInUser) {
                console.log('NOTIFIED CATEGORY', Id);
                user.isNotify = true;
              }
            });
          });
          this.menuPages =  [].concat(this.menuPages).reverse();
          console.log("THIS.MEWNU",this.menuPages)
          console.log('OFFLINE', this.menuPages);
        }
      });
    }
  }
  closeMenu() {
    this.menu.close();
  }

  notify(catId) {
    if (!navigator.onLine) {
      this.translate.get('No internet connection').subscribe((res: any) => {
        this._toastService.toastFunction(res, '');
      })
    } else if (!localStorage.getItem('accessToken')) {
      this.translate.get('Please Login').subscribe((res: any) => {
        this._toastService.toastFunction(res, '');
      })
    } else {
      this._categoryService.notifyUser(catId).subscribe((res: any) => {
        this.getMenuItems();
        this.translate.get(res.message).subscribe((res: any) => {
          this._toastService.toastFunction(res, 'success');
        })
      }, err => {
      });
    }
  }
}
