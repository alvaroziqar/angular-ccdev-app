import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListPageComponent } from './pages/posts-list-page/posts-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsListRoutingModule {}
