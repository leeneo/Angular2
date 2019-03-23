import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core'
import { TodoComponent } from './todo/todo.component';
import { TestComponent } from './test/test.component';


export const routes: Routes = [{
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
},{
    path:'todo',
    component:TodoComponent
},{
    path:'test',
    component:TestComponent
}]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);