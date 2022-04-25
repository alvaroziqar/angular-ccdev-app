import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostsAddRoutingModule } from './posts-add-routing.module';
// Pages
import { PostsAddPageComponent } from './pages/posts-add-page/posts-add-page.component';

@NgModule({
  declarations: [PostsAddPageComponent],
  imports: [SharedModule, PostsAddRoutingModule],
})
export class PostsAddModule {}
