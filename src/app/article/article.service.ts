import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { Article } from '../models/article';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ArticleService extends EntityCollectionServiceBase<Article>
 {
   constructor(factory: EntityCollectionServiceElementsFactory) {
     super('Article', factory);
   }
 }
