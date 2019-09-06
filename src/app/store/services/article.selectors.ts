import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { ArticleState } from '../reducers/article.reducers';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getArticleState = createSelector(
  getEntityState,
  (state: EntityState) => state.articles
);

const getArticles = createSelector(
  getArticleState,
  (state: ArticleState) => state.articles
);

const getArticle = createSelector(
  getArticleState,
  (state: ArticleState) => state.article
);

const getArticleLoading = createSelector(
  getArticleState,
  (state: ArticleState) => state.loading
);

@Injectable()
export class ArticleSelectors {

  constructor(private store: Store<EntityState>) {}

  articles$ = this.store.pipe(select(getArticles));
  articleState$ = this.store.pipe(select(getArticleState));
  loading$ = this.store.pipe(select(getArticleLoading));

}
