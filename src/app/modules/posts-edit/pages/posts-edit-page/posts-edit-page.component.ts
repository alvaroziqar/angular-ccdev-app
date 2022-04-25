import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PostsService } from '@core/services/posts.service';
import { Post } from '@shared/interfaces/posts.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@core/services/toast.service';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Store } from '@core/store/store';

@Component({
  selector: 'ccd-posts-edit-page',
  templateUrl: 'posts-edit-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsEditPageComponent implements OnInit, OnDestroy {
  selectedPost$: Observable<Post>;
  private unsubscribe = new Subject<void>();

  constructor(
    private postsService: PostsService,
    private toastService: ToastService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.selectedPost$ = this.store.select('selectedPost');

    this.route.params
      .pipe(
        takeUntil(this.unsubscribe),
        switchMap(({ id }) => {
          return this.postsService.getPost(id);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.store.set('selectedPost', null);
  }

  onFormSubmit(post: Post) {
    this.postsService.updatePost(post.id, post).subscribe(() => {
      this.toastService.success('Post guardado correctamente');
      this.router.navigate(['/']);
    });
  }
}
