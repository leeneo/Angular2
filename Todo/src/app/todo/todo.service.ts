import { Injectable } from '@angular/core';
import { Todo } from './todo.modle';
import { ReturnStatement } from '@angular/compiler';
import { UUID } from 'angular2-uuid';
import { Http, Headers, CookieXSRFStrategy } from '@angular/http';
import { } from 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: Http) { }

  private api_url = 'api/todos';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  //POST /TODOS
  addTodo(des: string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: des,
      'completed': false
    };
    return this.http.post(this.api_url, JSON.stringify(todo), { headers: this.headers }).toPromise()
      .then(res => res.json() as Todo)
      .catch(this.handleError);
  }


  toggleTodo(todo: Todo): Promise<Todo> {
    let url = '${this.api_url}/${todo.id}';
    console.log(url);
    let updatedTodo = Object.assign({}, todo, { completed: !todo.completed });
    return this.http.put(url, JSON.stringify(updatedTodo)).toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }

  deleteTodoById(id: string): Promise<void> {
    let url = '${this.api_url}/${id}';
    return this.http.delete(url, { headers: this.headers }).toPromise()
      .then(() => console.log('删除成功！'))
      .catch(this.handleError);
  }

  getTodos(): Promise<Todo[]> {
    let todos: Todo[] = [];

    return this.http.get(this.api_url).toPromise()
      .then(res => res.json() as Todo[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
