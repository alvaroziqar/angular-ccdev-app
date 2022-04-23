import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '@shared/interfaces/posts.interfaces';

@Component({
  selector: 'ccd-post-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title">#{{ post.id }} {{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <div class="d-flex align-items-center justify-content-end">
          <button class="btn btn-primary" [routerLink]="['/edit', post.id]">
            Editar
          </button>
        </div>
      </div>
    </div>
  `,
})
export class PostItemComponent {
  @Input() post: Post;
}
