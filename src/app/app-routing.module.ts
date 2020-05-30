import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TermsAndCondComponent } from './terms-and-cond/terms-and-cond.component';
import { AuthGuard, LoginGuard } from './guards/user.guard';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
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
	},
	{
		path: 'signin',
		loadChildren: './signin/signin.module#SigninPageModule'
	},
	{
		path: 'bookmark',
		loadChildren: './bookmark/bookmark.module#BookmarkPageModule'
	},
	{
		path: 'post-tiles',
		loadChildren: './post-tiles/post-tiles.module#PostTilesPageModule'
	},
	{
		path: 'category-tiles',
		loadChildren: './category-tiles/category-tiles.module#CategoryTilesPageModule'
	},
	{
		path: 'related-post',
		loadChildren: './related-post/related-post.module#RelatedPostPageModule'
	},
	{
		path: 'large-post',
		loadChildren: './large-post/large-post.module#LargePostPageModule'
	},
	{
		path: 'all-categories',
		loadChildren: './all-categories/all-categories.module#AllCategoriesPageModule'
	},
	{
		path: 'tour-home',
		loadChildren: './tour-home/tour-home.module#TourHomePageModule'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
