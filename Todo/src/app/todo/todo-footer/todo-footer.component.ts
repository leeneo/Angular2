import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  // @Input() 是输入型变量修饰符，使用时需要在Import语句中引用；
  @Input() itemCount: number;

  constructor() { }

  ngOnInit() {
  }

}
