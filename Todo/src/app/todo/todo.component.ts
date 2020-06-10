import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.modle';
import { TodoService } from './todo.service';

@Component({
  selector: 'neo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoService) { }

  ngOnInit(): void {
  }

  todos: Todo[] = [];

  things: string = '';

  addTodo() {
    this.service.addTodo(this.things).then(todo => {
      this.todos = [...this.todos, todo],
      this.things = ''
    });
  }

}
