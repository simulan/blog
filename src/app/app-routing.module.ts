import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: ArticleFeedComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
