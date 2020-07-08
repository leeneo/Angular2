import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.modle';
import { TodoService } from './todo.service';

@Component({
  selector: 'neo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  todos: Todo[] = [];

  things: string = '';

  addTodo() {
    this.service.addTodo(this.things)
      .then(todo => {
        this.todos = [...this.todos, todo],
          this.things = ''
      });
  }

  toggleTodo(todo: Todo) {
    let i = this.todos.indexOf(todo);
    this.service.toggleTodo(todo)
      .then(newTodo => {
        this.todos = [...this.todos.slice(0, i), newTodo, ...this.todos.slice(i + 1)];
      });
  }

  removeTodo(todo: Todo) {
    let i = this.todos.indexOf(todo);
    this.service.deleteTodoById(todo.id)
      .then(() => {
        this.todos = [...this.todos.slice(0, i), ...this.todos.slice(i + 1)];
      });
  }

  getTodos(): void {
    this.service.getTodos()
      .then(res => {
        console.log('component')
        console.log(res);
        this.todos=res;
      });
  }

  onTextChanges(value) {
    this.things = value;
  }
}
