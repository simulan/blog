import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleCreationComponent } from '../article-creation/article-creation.component';
import { Article } from 'src/app/models/article';
import { StaticDataService } from 'src/app/static-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-overview',
  templateUrl: './article-overview.component.html',
  styleUrls: ['./article-overview.component.scss']
})
export class ArticleOverviewComponent implements OnInit {
  public showCreationComponent = false;
  public showFabComponent = true;
  public articles$: Observable<Article[]>;

  constructor(private staticDataService: StaticDataService) { }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.articles$ = this.staticDataService.getArticles();
  }

  public onCancel() {
    this.showFabComponent = true;
    this.showCreationComponent = false;
  }

  public onCreateArticle(article: Article) {
    this.showFabComponent = true;
    this.showCreationComponent = false;
    this.staticDataService.addArticle(article);
    console.log(article);

  }

  public onClickAdd() {
    if(!this.showCreationComponent) {
      this.showFabComponent = false;
      this.showCreationComponent = true;
    }
  }
}
