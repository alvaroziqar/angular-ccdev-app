import { Post } from '@shared/interfaces/posts.interfaces';

export interface State {
  loading: boolean;
  posts: Post[];
  selectedPost: Post;
}
