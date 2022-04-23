import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListPageComponent } from './pages/posts-list-page/posts-list-page.component';

@NgModule({
  declarations: [PostsListPageComponent],
  imports: [SharedModule, PostsListRoutingModule],
})
export class PostsListModule {}
