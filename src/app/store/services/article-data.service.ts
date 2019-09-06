import { Injectable } from '@angular/core';
import { StaticDataService } from 'src/app/static-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from 'src/app/models/article';
import { Observable, throwError, of } from 'rxjs';
import { DataServiceError } from './data-error.service';

@Injectable()
export class ArticleDataService {
  constructor(private http: HttpClient, private dataService: StaticDataService) {}

  getArticles(): Observable<Article[]> {
    return this.dataService.getArticles();
  }
  createArticle(article: Article): Observable<Article> {
    return this.dataService.addArticle(article);
  }
  updateArticle(article: Article): Observable<Article> {
    return of(article); // not implemented shhhhh ;)))
  }
  deleteArticle(article: Article): Observable<Article> {
    return of(article); // not implemented shhhhh ;)))
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }


}
