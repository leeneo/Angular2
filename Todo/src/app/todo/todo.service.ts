import { Injectable } from '@angular/core';
import { Todo } from './todo.modle';
import { ReturnStatement } from '@angular/compiler';
import { UUID } from 'angular2-uuid';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: Http) { }

  private api_url = 'api/todos';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  // todos: Todo[] = [];

  addTodo(des: string): Promise<Todo> {
    let todo = { id: UUID.UUID(), desc: des, 'completed': false };
    return this.http.post(this.api_url, JSON.stringify(todo), { headers: this.headers }).toPromise()
      .then(res => res.json().data as Todo)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

}
