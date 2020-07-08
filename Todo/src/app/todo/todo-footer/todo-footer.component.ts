import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'neo-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() itemCount: number;

}
