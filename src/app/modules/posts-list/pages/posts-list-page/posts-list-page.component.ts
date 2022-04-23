import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@core/store/store';
import { PostsService } from '@core/services/posts.service';
import { Post } from '@shared/interfaces/posts.interfaces';

@Component({
  selector: 'ccd-posts-list-page',
  templateUrl: 'posts-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListPageComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService, private store: Store) {}

  ngOnInit() {
    this.posts$ = this.store.select<Post[]>('posts');

    // Init dataflow
    this.postsService.getPosts().subscribe();
  }

  trackByFn(_: number, post: Post) {
    return post.id;
  }
}
