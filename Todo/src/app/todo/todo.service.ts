import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Todo } from './todo.model';
import 'rxjs/add/operator/toPromise';

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

  private handleError(error: any): Promise<any> {
    console.error('erro occured', error);
    return Promise.reject(error.message || error);
  }
}
