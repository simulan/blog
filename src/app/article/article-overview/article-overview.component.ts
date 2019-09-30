import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleCreationComponent } from '../article-creation/article-creation.component';
import { Article } from 'src/app/models/article';
import { StaticDataService } from 'src/app/static-data.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityState } from 'src/app/store/reducers';
import { ArticleSelectors } from 'src/app/store/services/article.selectors';
import { GetArticlesAction, CreateArticleAction } from 'src/app/store/actions/article.actions';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.scss']
})
export class ArticleOverviewComponent implements OnInit {
  public showCreationComponent = false;
  public showFabComponent = true;
  public articles$: Observable<Article[]>;
  public loading$: Observable<boolean>;
  constructor(
    private articleService: ArticleService,
    ) {
  }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.articles$ = this.articleService.getAll();
  }

  public onCancel() {
    this.showFabComponent = true;
    this.showCreationComponent = false;
  }

  public onCreateArticle(article: Article) {
    this.showFabComponent = true;
    this.showCreationComponent = false;
    this.articleService.upsert(article);
  }

  public onClickAdd() {
    if (!this.showCreationComponent) {
      this.showFabComponent = false;
      this.showCreationComponent = true;
    }
  }
}
