import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostsListRoutingModule } from './posts-list-routing.module';
// Pages
import { PostsListPageComponent } from './pages/posts-list-page/posts-list-page.component';
// Components
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [PostsListPageComponent, PostItemComponent],
  imports: [SharedModule, PostsListRoutingModule],
})
export class PostsListModule {}
