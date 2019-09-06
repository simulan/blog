import { ActionReducerMap } from '@ngrx/store';

import * as actions from '../actions/article.actions';
import * as articleReducers from './article.reducers';

export type Action = actions.ArticleAction;

export interface EntityState {
  articles: articleReducers.ArticleState;
  article: articleReducers.ArticleState;
}

export const reducers: ActionReducerMap<EntityState> = {
  articles: articleReducers.reducer,
  article: articleReducers.reducer,
};
