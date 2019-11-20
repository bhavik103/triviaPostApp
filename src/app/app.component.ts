import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { SettingsComponent } from './settings/settings.component';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Observable } from 'rxjs/Observable';
import { ToastController, } from '@ionic/angular';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { config } from './config';


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
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private _userService: UserService,
    public toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    protected deeplinks: Deeplinks,
  ) {
    this.deeplinks.route({
      '/': {},
      '/nr5y': { "post:": true },
      '/post/:id': { "post:": true }
    }).subscribe((match) => {
      console.log("match link", match.$args.id);
      this.router.navigate(['single-post/' + match.$args.id]);
    },
      (nomatch) => {
        // alert("UnMatched" + nomatch);
      });
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
    // this.router.navigateByUrl('/home/all-post');
    this.initializeApp();
  }

  initializeApp() {
    const handleBranch = () => {
      this.platform.ready().then(() => {
        this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
          var postId = res.deepLink.split('?')[1].split('=')[1];
          console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1])

          console.log('Is Visited In App Component:-------------', config.isvisited);


          // if (!config.isvisited) {
          //   this.router.navigate(['single-post/' + postId]);
          //   config.isvisited = true;
          //   console.log('Is Visited Inside If:-------------', config.isvisited);
          // }

          this.router.navigate(['single-post/' + postId]);
          config.isvisited = true;


        }, (error: any) => {
          console.log(error)
        });
        this.splashScreen.hide();
        this.statusBar.backgroundColorByHexString('#000000');
      });
    }
  }
}