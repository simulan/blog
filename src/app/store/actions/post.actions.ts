import { DataAction } from './data.actions';
import { Post } from 'src/app/models/post';

export abstract class PostAction implements DataAction<Post> {
  type: string;
  constructor(public readonly payload: Post) {}

}
