import { Post } from '@shared/interfaces/posts.interfaces';

export interface State {
  loading: boolean;
  user: { email: string; name: string };
  posts: Post[];
  selectedPost: Post;
}
