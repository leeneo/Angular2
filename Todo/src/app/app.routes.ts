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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    }
];

export const routing = RouterModule.forRoot(routes);
