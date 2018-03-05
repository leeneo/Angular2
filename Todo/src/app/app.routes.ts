import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    },
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing = RouterModule.forRoot(routes);
