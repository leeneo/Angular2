import { Component } from '@angular/core';

@Component({
  selector: 'neo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo';

  constructor(){
    console.log(123);
  }
}
