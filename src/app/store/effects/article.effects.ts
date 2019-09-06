import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, switchMap } from 'rxjs/operators';
import * as ArticleActions from '../actions/article.actions';
import * as DataActions from '../actions/data.actions';
import { ArticleDataService } from '../services/article-data.service';

const toAction = DataActions.toAction();
type ArticleAction = ArticleActions.ArticleAction;

@Injectable()
export class ArticleEffects {

  @Effect()
  getArticles$: Observable<Action> = this.actions$
    .pipe(
      ofType(ArticleActions.GET_ARTICLES),
      switchMap(() =>
        toAction(
          this.articleDataService.getArticles(),
          ArticleActions.GetArticlesSuccessAction,
          ArticleActions.GetArticlesErrorAction
        )
      )
    );
  @Effect()
  addArticle$: Observable<Action> = this.actions$
    .pipe(
      ofType(ArticleActions.CREATE_ARTICLE),
      concatMap((action: ArticleAction) =>
        toAction(
          this.articleDataService.createArticle(action.payload),
          ArticleActions.CreateArticleSuccessAction,
          ArticleActions.CreateArticleErrorAction
        )
      )
    );

  @Effect()
  deleteArticle$: Observable<Action> = this.actions$
    .pipe(
      ofType(ArticleActions.DELETE_ARTICLE),
      concatMap((action: ArticleAction) =>
        toAction(
          this.articleDataService.deleteArticle(action.payload),
          ArticleActions.DeleteArticleSuccessAction,
          ArticleActions.DeleteArticleErrorAction
        )
      )
    );

  @Effect()
  updateArticle$: Observable<Action> = this.actions$
    .pipe(
      ofType<ArticleActions.UpdateArticleAction>(ArticleActions.UPDATE_ARTICLE),
      concatMap((action: ArticleAction) =>
        toAction(
          this.articleDataService.updateArticle(action.payload),
          ArticleActions.UpdateArticleAction,
          ArticleActions.UpdateArticleErrorAction
        )
      )
    );

  constructor(
    private actions$: Actions,
    private articleDataService: ArticleDataService
  ) {}

}
