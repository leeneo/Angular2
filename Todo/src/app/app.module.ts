import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbServeice } from './todo/todo.data';
import { HttpModule } from '@angular/http';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbServeice),

  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

