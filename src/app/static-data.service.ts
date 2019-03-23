import { Injectable } from '@angular/core';
import { Article } from './models/article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }

  getArticle(): Article {
    const a = new Article();
    a.text = `
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
      (The Extremes of Good and Evil) by Cicero, written in 45 BC.
      This book is a treatise on the theory of ethics, very popular during the Renaissance.
      The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
      exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    `;
    a.date = '25 feb 2017';
    a.title = 'Article Title';
    a.tags = ['<Design>', '<Typography>', '<Journal>', '<Sander>'];
    return a;
  }

  getArticles(): Observable<Article[]> {
    return of([this.getArticle()]);
  }

}
