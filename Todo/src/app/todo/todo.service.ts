import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  // 定义你的假WebAPI地址，这个定义成什么都无所谓
  // 只要确保是无法访问的地址就好
  private api_url = 'res/todos'; // /todos前的地址随意，/todos来源于todo-data.ts/return{todos}，结果集名字
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  // POST /todos
  addTodo(desc: string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    // angular 的http 封装了get(查),put（更）,delete(删),post（增）等方法
    return this.http
      .post(this.api_url, JSON.stringify(todo), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }
  // put /todos/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, { completed: !todo.completed });
    return this.http
      .put(url, JSON.stringify(updatedTodo), { headers: this.headers })
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }
  // delete /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    console.log(url);
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  // get /todos
  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.api_url)
      .toPromise()
      .then(res => res.json().data as Todo[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
