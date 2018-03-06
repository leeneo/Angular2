import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/RX';

// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: '';
  @Input() placeholder: 'What needs to be done?';
  @Input() delay: 300;

  // detect the input value and output this to parent
  @Output() textChanges = new EventEmitter<string>();
  // detect the enter keyup event and output this to parent
  @Output() KeyEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
    let event$: any = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));

    let observ = Observable.fromEvent(window, 'hashchange');
  }
  ngOnInit() {
  }
  enterUp() {
    this.KeyEnterUp.emit(true);
    this.inputValue = '';
  }
}
