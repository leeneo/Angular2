import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';
import { TodoComponent } from './todo/todo.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],              //根模块中的这个providers是配置在模块中全局可用的service或参数的
  bootstrap: [AppComponent]   //bootstrap指明哪个组件为引导性组件（本案例中的AppComponent）当Angular引导应用时，它会在DOM中渲染这个引导性组件，并把结果放进index.html的该组件的元素标签中（本案例中的app-root）
})
export class AppModule { }
