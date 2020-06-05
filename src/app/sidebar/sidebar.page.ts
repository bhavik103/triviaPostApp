import { CategoryService } from './../services/category.service';
import { ToastService } from './../services/toast.service';
import { StorageService } from './../services/storage.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as _ from 'lodash';
import {HomePage} from '../home/home.page'
import { Router } from '@angular/router';
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
    private homePage: HomePage,
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
    console.log("CurrentUrl", this.route.url);
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
    if (navigator.onLine) {
    this._categoryService.getAll().toPromise().then((res: any) => {
        console.log("edfsfsfdsfd",res)
        this.menuPages = res;
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
          var base64Url = tokenLocalStorage.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');
          var decodedToken = JSON.parse(window.atob(base64));
          var loggedInUser = decodedToken.user._id;
          console.log("Decoded", loggedInUser);
        }
        _.forEach(this.menuPages, (user) => {
          _.forEach(user.notify, (Id) => {
            if (Id == loggedInUser) {
              console.log("NOTIFIED CATEGORY", Id)
              user['isNotify'] = true;
            }
          })
        })
        console.log("OFFLINE", this.menuPages)
      })
    }else{
      this._storageService.getCatForOffline().then((res: any) => {
        console.log("edfsfsfdsfd",res)
        this.menuPages = JSON.parse(res);
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
          var base64Url = tokenLocalStorage.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');
          var decodedToken = JSON.parse(window.atob(base64));
          var loggedInUser = decodedToken.user._id;
          console.log("Decoded", loggedInUser);
        }
        _.forEach(this.menuPages, (user) => {
          _.forEach(user.notify, (Id) => {
            if (Id == loggedInUser) {
              console.log("NOTIFIED CATEGORY", Id)
              user['isNotify'] = true;
            }
          })
        })
        console.log("OFFLINE", this.menuPages)
      })
    }
  }
  closeMenu() {
    this.menu.close()
  }

  notify(catId){
    if (!navigator.onLine) {
      const message = "No internet connection";
      const color = "danger";
      this._toastService.toastFunction(message, color);
    }else if(!localStorage.getItem('accessToken')){
      const message = "You need to login first";
      const color = "danger";
      this._toastService.toastFunction(message, color);
    } else {
      this._categoryService.notifyUser(catId).subscribe((res: any) => {
        this.getMenuItems();
        this._toastService.toastFunction(res.message, 'success');
      }, err => {
        this._toastService.toastFunction(err.error.message, 'danger');
      })
    }
  }
}