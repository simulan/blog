import { Action } from '@ngrx/store';
import { Article } from 'src/app/models/article';
import { DataAction, DataErrorAction } from './data.actions';
import { DataServiceError } from '../services/data-error.service';

export const GET_ARTICLES = '[Article] Get all';
export const GET_ARTICLES_SUCCESS = '[Article] Get all success';
export const GET_ARTICLES_ERROR = '[Article] Get all error';

export const CREATE_ARTICLE = '[Article] Create';
export const CREATE_ARTICLE_SUCCES = '[Article] Create success';
export const CREATE_ARTICLE_ERROR = '[Article] Create error';

export const UPDATE_ARTICLE = '[Article] Update';
export const UPDATE_ARTICLE_SUCCESS = '[Article] Update success';
export const UPDATE_ARTICLE_ERROR = '[Article] Update error';

export const DELETE_ARTICLE = '[Article] Delete';
export const DELETE_ARTICLE_SUCCESS = '[Article] Delete success';
export const DELETE_ARTICLE_ERROR = '[Article] Delete error';

export const SET_ARTICLE_LOADING = '[Article] Set article loading';

export abstract class ArticleAction implements DataAction<Article> {
  readonly type: string;
  constructor(public readonly payload: Article) {}
}

export abstract class ArticleErrorsAction implements DataErrorAction<Article[]> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Article[]>) {}
}

export abstract class ArticleErrorAction implements DataErrorAction<Article> {
  readonly type: string;
  constructor(public readonly payload: DataServiceError<Article>) {}
}

// GET
export class GetArticlesAction implements Action {
  readonly type = GET_ARTICLES;
}
export class GetArticlesSuccessAction implements Action {
  readonly type = GET_ARTICLES_SUCCESS;
  constructor(public payload: Article[]) {}
}
export class GetArticlesErrorAction implements ArticleErrorsAction  {
  readonly type = GET_ARTICLES_ERROR;
  constructor(public readonly payload: DataServiceError<Article[]>) {}
}

// CREATE
export class CreateArticleAction implements ArticleAction {
  readonly type = CREATE_ARTICLE;
  constructor(public payload: Article) {}
}
export class CreateArticleSuccessAction implements ArticleAction {
  readonly type = CREATE_ARTICLE_SUCCES;
  constructor(public payload: Article) {}
}
export class CreateArticleErrorAction implements ArticleErrorAction  {
  readonly type = CREATE_ARTICLE_ERROR;
  constructor(public payload: DataServiceError<Article>) {}
}

// UPDATE
export class UpdateArticleAction implements ArticleAction {
  readonly type = UPDATE_ARTICLE;
  constructor(public payload: Article) {}
}
export class UpdateArticleSuccessAction implements ArticleAction {
  readonly type = UPDATE_ARTICLE_SUCCESS;
  constructor(public payload: Article) {}
}
export class UpdateArticleErrorAction implements ArticleErrorAction  {
  readonly type = UPDATE_ARTICLE_ERROR;
  constructor(public payload: DataServiceError<Article>) {}

}

// DELETE
export class DeleteArticleAction implements ArticleAction {
  readonly type = DELETE_ARTICLE;
  constructor(public payload: Article) {}
}
export class DeleteArticleSuccessAction implements ArticleAction {
  readonly type = DELETE_ARTICLE_SUCCESS;
  constructor(public payload: Article) {}
}
export class DeleteArticleErrorAction implements ArticleErrorAction  {
  readonly type = DELETE_ARTICLE_ERROR;
  constructor(public payload: DataServiceError<Article>) {}
}

// LOAD
export class SetArticleLoadingAction {
  readonly type = SET_ARTICLE_LOADING;
  constructor(public payload = true) {}
}

export type AllArticleActions
 = GetArticlesAction
 | GetArticlesSuccessAction
 | GetArticlesErrorAction
 | CreateArticleAction
 | CreateArticleSuccessAction
 | CreateArticleErrorAction
 | UpdateArticleAction
 | UpdateArticleSuccessAction
 | UpdateArticleErrorAction
 | DeleteArticleAction
 | DeleteArticleSuccessAction
 | DeleteArticleErrorAction
 | SetArticleLoadingAction;
