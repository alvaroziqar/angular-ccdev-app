import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PostsService } from '@core/services/posts.service';
import { Post } from '@shared/interfaces/posts.interfaces';
import { Router } from '@angular/router';
import { ToastService } from '@core/services/toast.service';

@Component({
  selector: 'ccd-posts-add-page',
  templateUrl: 'posts-add-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsAddPageComponent {
  constructor(
    private postsService: PostsService,
    private toastService: ToastService,
    private router: Router
  ) {}

  onFormSubmit(post: Post) {
    this.postsService.addPost(post).subscribe(() => {
      this.toastService.success('Post guardado correctamente');
      this.router.navigate(['/']);
    });
  }
}
