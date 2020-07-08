
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo.modle';

export class InMemoryTodoDbServeice implements InMemoryDbService {


  createDb() {

    let todos: Todo[] = [
      {
        id: "f823b191- 7799- 438d- 8d78- fcb1e468fc78",
        desc: 'get up',
        completed: false
      },
      {
        id: "234234- 2423- fww32- 8d78- fcb1e468fc78",
        desc: 'go to school',
        completed: false
      }
    ];

    return { todos };
  }

}
