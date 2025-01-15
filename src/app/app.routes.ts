import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { postResolver } from './post/post.resolver';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'post/index',
    pathMatch: 'full',
  },
  {
    path: 'post/index',
    component: IndexComponent,
  },
  {
    path: 'post/create',
    loadComponent: () =>
      import('./post/create/create.component').then((c) => c.CreateComponent),
  },
  {
    path: 'post/:idPost/view',
    resolve: {post : postResolver},
    loadComponent: () =>
      import('./post/view/view.component').then((c) => c.ViewComponent),
  },
  {
    path: 'post/:idPost/edit',
    resolve: {post : postResolver},
    loadComponent: () =>
      import('./post/edit/edit.component').then((c) => c.EditComponent),
  },
];
