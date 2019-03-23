import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {
  article: Article;

  constructor() { }

  ngOnInit() {
  }

}
