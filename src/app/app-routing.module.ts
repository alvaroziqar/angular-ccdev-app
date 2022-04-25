import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/posts-list/posts-list.module').then(
            (m) => m.PostsListModule
          ),
      },
      {
        path: 'add',
        loadChildren: () =>
          import('./modules/posts-add/posts-add.module').then(
            (m) => m.PostsAddModule
          ),
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('./modules/posts-edit/posts-edit.module').then(
            (m) => m.PostsEditModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
