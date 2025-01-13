import { Routes } from '@angular/router';

import { IndexComponent } from './post/index/index.component';
import { EditComponent } from './post/edit/edit.component';

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
    loadComponent: () =>
      import('./post/view/view.component').then((c) => c.ViewComponent),
  },
  {
    path: 'post/:idPost/edit',
    component: EditComponent,
  },
];
