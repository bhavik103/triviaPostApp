import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomePage } from './home/home.page';
import { SettingsComponent } from './settings/settings.component';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Observable } from 'rxjs/Observable';
import { ToastController, } from '@ionic/angular';

import 'rxjs/add/observable/fromEvent';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  hide: boolean = true;
  toast: any;
  constructor(
    private _userService: UserService,
    public toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    protected deeplinks: Deeplinks,
    ) {
    // // Check Internet conectivity
    var offline = Observable.fromEvent(document, "offline");
    var online = Observable.fromEvent(document, "online");

    offline.subscribe(() => {
      this.hide = false;
      this.toast = this.toastController.create({
        message: 'No internet connection',
        animated: true,
        showCloseButton: true,
        duration: 2000,
        closeButtonText: "OK",
        cssClass: "my-toast",
        position: "bottom",
        color: "danger"
      }).then((obj) => {
        obj.present();
      });
    });

    online.subscribe(() => {
      this.toastController.dismiss();
      this.hide = true;
    });

    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', "English");
    }

    if (!localStorage.getItem('notification')) {
      localStorage.setItem('notification', "true");
    }
    this.initializeApp();
  }

  initializeApp() {
    const handleBranch = () => {
      this.platform.ready().then(() => {
        this.splashScreen.hide();
        this.statusBar.backgroundColorByHexString('#000000');

        // console.log("in fcmtoken function");
        // this.fcm.getToken().then(token => {
        //     console.log("inside get fcmtoken", token);
        //     localStorage.setItem('deviceToken', token);
        //     if (!localStorage.getItem('annonymous')){
        //         this._userService.firstTimeUser().subscribe((res: any) => {
        //             console.log("ANNONYMOUS USER SUCCESS", res);
        //             localStorage.setItem('annonymous', 'true');
        //             localStorage.setItem('annonymousNotify', 'true');
        //         },
        //             (err) => {
        //             });
        //     }
        // });
        // this.fcm.onTokenRefresh().subscribe(token => {
        //     localStorage.setItem('deviceToken', token);
        // });
        // this.fcm.onNotification().subscribe(data => {
        //     this.router.navigate(['home/single-news/' + data.newsId]);
        //     if (data.wasTapped) {
        //         //console.log('Received in background');
        //     } else {
        //         //console.log('Received in foreground');
        //     }
        // });
      });
    }
  }
}