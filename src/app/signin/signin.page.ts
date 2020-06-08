import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component'
import { Platform } from '@ionic/angular';
import { AdmobfreeService } from '../services/admobfree.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  show: any;
  emailInput: any;
  loading: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(private translate: TranslateService,private _admobService: AdmobfreeService,private platform: Platform, public appcomponent: AppComponent, private router: Router, private _userService: UserService, private _toastService: ToastService) {
    this.show = false;
  }

  ionViewWillEnter(){
    this._admobService.interstitalAdOnFivePageChange()
  }
  ngOnInit() {
    this.platform.backButton.subscribe(async () => {
      this.appcomponent.openRatingModal();
    });
    this.login.userName = localStorage.getItem('email');
    localStorage.removeItem('email');
  }
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  login = {
    'userName': '',
    'password': ''
  };
  forgotPassword = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  forgot = {
    email: "",
  }

  loginClick(login) {
    this.loading = true;
    console.log(login);
    this._userService.customLogin(login).subscribe((res: any) => {
      this.loading = false;
      this.translate.get('You have successfully Logged In').subscribe((res:any)=>{
        this._toastService.toastFunction(res, 'success');
      })
      this.router.navigate(['home']);
    }, err => {
      this.loading = false;
      console.log("ERRORR",err.error.message)
      this.translate.get(err.error.message).subscribe((res:any)=>{
        this._toastService.toastFunction(res, 'success');
      })
    })
  }

  resetPassword(user) {
    console.log(user)
    this.loading = true;
    this._userService.passwordReset(user).subscribe((res: any) => {
      this.loading = false;
      this._toastService.toastFunction(res.message, 'success');
      this.router.navigate(['settings']);
    }, err => {
      this.loading = false;
      this.translate.get(err.error.message).subscribe((res:any)=>{
        this._toastService.toastFunction(res, 'success');
      })
    })
  }

  signUpClose() {
    this.forgotPassword.reset();
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  goBack() {
    localStorage.removeItem('email')
    this.appcomponent.openRatingModal();
  }
}