import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsAddPageComponent } from './pages/posts-add-page/posts-add-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostsAddPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsAddRoutingModule {}
