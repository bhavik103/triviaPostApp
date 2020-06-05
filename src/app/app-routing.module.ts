import { HomePage } from './home/home.page';
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
		redirectTo: 'sidebar',
		pathMatch: 'full'
	},
	{
		path: 'sidebar',
		loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarPageModule)
	},
	{
		path: 'single-post/:id',
		loadChildren: () => import('./single-post/single-post.module').then(m => m.SinglePostPageModule)
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
		loadChildren: () => import('./single-category/single-category.module').then(m => m.SingleCategoryPageModule)
	},
	{
		path: 'signin',
		loadChildren: () => import('./signin/signin.module').then(m => m.SigninPageModule)
	},
	{
		path: 'bookmark',
		loadChildren: () => import('./bookmark/bookmark.module').then(m => m.BookmarkPageModule)
	},
	{
		path: 'post-tiles',
		loadChildren: () => import('./post-tiles/post-tiles.module').then(m => m.PostTilesPageModule)
	},
	{
		path: 'category-tiles',
		loadChildren: () => import('./category-tiles/category-tiles.module').then(m => m.CategoryTilesPageModule)
	},
	{
		path: 'related-post',
		loadChildren: () => import('./related-post/related-post.module').then(m => m.RelatedPostPageModule)
	},
	{
		path: 'large-post',
		loadChildren: () => import('./large-post/large-post.module').then(m => m.LargePostPageModule)
	},
	{
		path: 'all-categories',
		loadChildren: () => import('./all-categories/all-categories.module').then(m => m.AllCategoriesPageModule)
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
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {})
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
