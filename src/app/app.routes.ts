import { Routes } from '@angular/router';

import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { ViewComponent } from './post/view/view.component';
import { EditComponent } from './post/edit/edit.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'post/index',
        pathMatch: 'full'
    },
    {
        path: 'post/index',
        component: IndexComponent
    },
    {
        path: 'post/create',
        component: CreateComponent
    },
    {
        path: 'post/:idPost/view',
        component: ViewComponent
    },
    {
        path: 'post/:idPost/edit',
        component: EditComponent
    }
];
