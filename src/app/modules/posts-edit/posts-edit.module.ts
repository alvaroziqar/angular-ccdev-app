import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { PostsEditRoutingModule } from './posts-edit-routing.module';
// Pages
import { PostsEditPageComponent } from './pages/posts-edit-page/posts-edit-page.component';

@NgModule({
  declarations: [PostsEditPageComponent],
  imports: [SharedModule, PostsEditRoutingModule],
})
export class PostsEditModule {}
