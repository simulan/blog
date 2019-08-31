import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StaticDataService } from '../static-data.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'home', component: ArticleOverviewComponent, children: [
    ]
  },

];

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleFeedComponent,
    ArticleCreationComponent,
    ArticleOverviewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ArticleModule {


}


