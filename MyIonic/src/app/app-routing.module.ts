import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'loginpage', loadChildren: () => import('./loginpage/loginpage.module').then(m => m.LoginpagePageModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule) },
  { path: 'article', loadChildren: () => import('./article/article.module').then(m => m.ArticlePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
