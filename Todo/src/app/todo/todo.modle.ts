
export class Todo {
  id: string;
  desc: string;
  completed: boolean;

  constructor(_id: string, _desc: string, _completed) {
    this.id = _id;
    this.desc = _desc;
    this.completed = _completed;
  }
  
}
