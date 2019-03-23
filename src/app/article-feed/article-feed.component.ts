import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../static-data.service';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.scss']
})
export class ArticleFeedComponent implements OnInit {
  private articles$: Observable<Article[]>;

  constructor(private staticDataService: StaticDataService) { }

  ngOnInit() {
    this.articles$ = this.staticDataService.getArticles();
  }

}
