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
import { Events } from '@ionic/angular';
import 'rxjs/add/observable/fromEvent';
import { UserService } from './services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from "./services/toast.service";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { GeneralService } from './services/general.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  hide: boolean = true;
  toast: any;
  skip: any;
  hidden: boolean;
  loginModalFlag = false;
  signupForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  user = {
    userName: "",
    email: "",
    mobile: "",
    password: "",
  }
  loading: boolean;
  lang: string;

  constructor(
    private _generalService: GeneralService,
    private keyboard: Keyboard,
    private _toastService: ToastService,
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private _userService: UserService,
    public toastController: ToastController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    protected deeplinks: Deeplinks,
    public events: Events
  ) {
    if(localStorage.getItem('catSelect')){
      localStorage.setItem('skip','1')
    }
    if(!localStorage.getItem('isVisited')){
      let isVisited = [];
      localStorage.setItem('isVisited',JSON.stringify(isVisited))
    }
    localStorage.removeItem('firstTimeLoaded');
    this._userService.currentData.subscribe(value => {
      if (this.loginModalFlag != true) {
        //generates random time for opennig modal between 25 and 40 seconds
        let randomNum = Math.floor(Math.random() * (30 - 14 + 1)) + 14;
        setTimeout(() => {
          $('#fadeDiv').addClass('opened');
          this.hidden = true;
          this.loginModalFlag = true;
        }, randomNum * 1000);
      }
    });
    this.deeplinks.route({
      '/': {},
      '/nr5y': { "post:": true },
      '/post/:id': { "post:": true }
    }).subscribe((match) => {
      console.log("match link", match.$args.id);
      this.router.navigate(['single-post/' + match.$args.id]);
    },
      (nomatch) => {
      });
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

    if (!localStorage.getItem('notification')) {
      localStorage.setItem('notification', "true");
    }
    this.initializeApp();
  }

  initializeApp() {
    const handleBranch = () => {
      this.platform.ready().then(() => {
        this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
          var postId = res.deepLink.split('?')[1].split('=')[1];
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
