import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TermsAndCondComponent } from './terms-and-cond/terms-and-cond.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AuthGuard, LoginGuard } from './guards/user.guard';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './home/home.module#HomePageModule'
	},
	{
		path: 'settings',
		component: SettingsComponent
	},
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [LoginGuard]
	},
	{
		path: 'feedback',
		component: FeedbackComponent
	},
	{
		path: 'privacy',
		component: PrivacyComponent
	},
	{
		path: 'searchBar',
		component: SearchbarComponent
	},
	{
		path: 'terms',
		component: TermsAndCondComponent
	},
	{
		path: 'bookmarks',
		component: BookmarksComponent
	},
	{
		path: 'single-post/:id',
		loadChildren: './single-post/single-post.module#SinglePostPageModule'
	},
	{
		path: 'single-post/:id/:bookmark',
		loadChildren: () => import('./single-post/single-post.module').then(m => m.SinglePostPageModule)
	},
	{
		path: 'single-post/:id/:search',
		loadChildren: () => import('./single-post/single-post.module').then(m => m.SinglePostPageModule)
	},
	{
		path: 'single-post/:id/:category',
		loadChildren: () => import('./single-post/single-post.module').then(m => m.SinglePostPageModule)
	},
	{
		path: 'single-category/:id/:cat',
		loadChildren: './single-category/single-category.module#SingleCategoryPageModule'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
