import { FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, Inject, LOCALE_ID } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {
  @Output()
  cancel = new EventEmitter();
  @Output()
  create = new EventEmitter();
  public article: Article;

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    this.initializeArticle();
  }

  onKeyUp($event) {
    console.log($event);
  }

  initializeArticle() {
    this.article = {
      date: formatDate(new Date(), 'dd MMM yyyy', this.locale),
      text: '',
      title: '',
      tags: []
    };
  }

  onClickCreate() {
    console.log(this.article.title);
    this.create.emit(this.article);
  }

  onClickCancel() {
    this.cancel.emit();
  }

}
