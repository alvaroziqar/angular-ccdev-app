import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsEditPageComponent } from './pages/posts-edit-page/posts-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostsEditPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsEditRoutingModule {}
