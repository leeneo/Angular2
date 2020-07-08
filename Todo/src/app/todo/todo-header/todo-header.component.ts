import { Component, OnInit, Input, Output,EventEmitter, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'neo-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {

  inputValue: string = '';

  @Input() placeholder: string = 'what needs to be done?';
  @Input() delay: number = 300;

  //detect the input value and output this to parent
  @Output() textChanges = new EventEmitter();
  //detect the enter keyup event and output this to parent
  @Output() onEnterUp = new EventEmitter();

  constructor(private elementRef: ElementRef) {

    let event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));
  }

  ngOnInit(): void {
  }

  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }


}

