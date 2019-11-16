import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginGuard } from './guards/user.guard';
import { MyInterceptor } from './interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SigninPageModule } from './signin/signin.module';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TermsAndCondComponent } from './terms-and-cond/terms-and-cond.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FCM } from '@ionic-native/fcm/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Network } from '@ionic-native/network/ngx';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AllPostPageModule } from "./all-post/all-post.module";
import { CategoriesPageModule } from "./categories/categories.module";
import { all } from 'q';
import { StarRatingModule } from 'ionic4-star-rating';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [AppComponent, SettingsComponent, LoginComponent, FeedbackComponent, PrivacyComponent,
    SearchbarComponent, TermsAndCondComponent],
  entryComponents: [],
  imports: [StarRatingModule,CategoriesPageModule,AllPostPageModule,FormsModule, BrowserModule, ReactiveFormsModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    NativePageTransitions,
   
    InAppBrowser,
    FirebaseDynamicLinks,
    FirebaseAnalytics,
    LocalNotifications,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    },
    Network,
    SocialSharing,
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    LoginGuard,
    Keyboard,
    Deeplinks,
    ScreenOrientation,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
