import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { ToastService } from "../services/toast.service";
@Component({
	selector: 'app-feedback',
	templateUrl: './feedback.component.html',
	styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
	loading: any;
	constructor(public platform: Platform, public _toastService: ToastService, public _userService: UserService, private router: Router) { }

	ngOnInit() {
		this.platform.backButton.subscribe(async () => {
			if (this.router.url.includes('feedback')) {
				this.router.navigate(['settings']);
			}
		});
	}

	feedbackForm = new FormGroup({
		email: new FormControl('', Validators.required),
		name: new FormControl('', Validators.required),
		mobile: new FormControl('', Validators.required),
		message: new FormControl('', Validators.required),
	});

	feedback = {
		email: "",
		name: "",
		mobile: "",
		message: ""
	}

	userFeedback(feedback) {
		this.loading = true;
		this._userService.userFeedbackFrom(feedback).subscribe((res: any) => {
			this.loading = false;
			this._toastService.toastFunction(res.message, 'success')
			this.router.navigate(['settings']);
		}, err => {
			this.loading = false;
			this._toastService.toastFunction(err.error.message, 'danger');
		})
	}
}