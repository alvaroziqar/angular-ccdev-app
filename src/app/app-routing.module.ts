import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login/login-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
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
