import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Network } from '@ionic-native/network/ngx';
import { ToastService } from "../services/toast.service";
import { nextButton, tourCategory, sharePostModalContent, sharePostModal, modalBookmarkText, modalBookmarkTitle, modalNotificationText, modalNotificationTitle, proceedTour } from 'app/changeLang';
import { IonSlides } from '@ionic/angular';
import * as introJs from 'intro.js/intro.js';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-category-tiles',
  templateUrl: './category-tiles.page.html',
  styleUrls: ['./category-tiles.page.scss'],
})
export class CategoryTilesPage implements OnInit {
  @Input('category') category: string;
  @Input('language') language: string;
  @Input('firstTime') firstTime: any;
  @Input('index') index: any;
  @Output() onSubscribe: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(IonSlides, { static: false }) protected slider: IonSlides;
  tourCategory = tourCategory;
  modalBookmarkTitle = modalBookmarkTitle
  modalBookmarkText = modalBookmarkText
  modalNotificationTitle = modalNotificationTitle
  modalNotificationText = modalNotificationText
  proceedTour = proceedTour
  nextButton = nextButton
  sharePostModalContent = sharePostModalContent
  sharePostModal = sharePostModal;
  skip: any
  mediaPath = config.mediaApiUrl;
  modal: boolean;
  sliderIndex: number;
  ifTourCompleted: any;
  introJS = introJs();
  modalSkip: boolean;
  constructor(private translate: TranslateService,private _toastService: ToastService, private network: Network, private _categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    console.log("INDEX", this.index)
    if (!localStorage.getItem('catModal')) {
      console.log("Hello")
      this.modal = true;
    }
    if (localStorage.getItem('catSelect') == '0') {
      this.ifTourCompleted = 1;
      console.log('this.ifTourCompleted', this.ifTourCompleted)
    }
    this.skip = localStorage.getItem('skip');
    const alertOnlineStatus = () => {
    }

    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
    console.log("this.categories in child", this.category)
    console.log("this.categories in child", this.language)
  }
  goToAllPosts() {
    this.router.navigateByUrl('/home/all-post')
  }

  singleCategory(catId, catname) {
    this.router.navigateByUrl('single-category/' + catId + '/' + catname);
  }

  addNotify(catId, isNotify) {
    if (!localStorage.getItem('catModalShow') && !localStorage.getItem('skip')) {
      this.modal = true;
      localStorage.setItem('catModalShow', '1');
    } else if (localStorage.getItem('skip') && !localStorage.getItem('catModalShow')) {
      this.modalSkip = true;
    } else {
      if (this.network.type == 'none') {
        const message = "No internet connection";
        const color = "danger";
        this.translate.get(message).subscribe((res: any)=>{
          this._toastService.toastFunction(res, color);
        })
      } else {
        this._categoryService.notifyUser(catId).subscribe((res: any) => {
        this.translate.get(res.message).subscribe((mes: any)=>{
          this._toastService.toastFunction(mes, 'success');
        })
          var emitObject = { catId: catId, statusCode: res.statusCode }
          console.log("EMIT OBJECT", emitObject)
          this.onSubscribe.emit(emitObject);
        }, err => {
        })
      }
    }
  }

  closeModal() {
    localStorage.setItem('catModal', '1')
    this.modal = false;
  }

  redirectToSignup() {
    localStorage.setItem('catModal', '1')
    this.router.navigateByUrl('/login')
  }

  protected async slideDidChange(): Promise<void> {
    this.sliderIndex = await this.slider.getActiveIndex();
    console.log("ACTIVE INDEX", this.sliderIndex)
  }
  async next() {
    if (this.sliderIndex == 2) {
      localStorage.setItem('catModalShow', '1')
      localStorage.setItem('catModal', '1')
      this.router.navigateByUrl('/login')
    } else {
      this.slider.slideNext();
    }
  }
  nextSkip() {
    if (this.sliderIndex == 2) {
      localStorage.setItem('catModalShow', '1')
      localStorage.setItem('catModal', '1')
      this.modalSkip = false;
    } else {
      this.slider.slideNext();
    }
  }
}