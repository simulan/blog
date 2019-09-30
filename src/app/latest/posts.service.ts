import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';
import { Post } from '../models/post';

export class PostsService extends EntityCollectionServiceBase<Post>
 {
   constructor(factory: EntityCollectionServiceElementsFactory) {
     super('Post', factory);
   }
 }
