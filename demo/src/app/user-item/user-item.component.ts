import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
    <li>
      {{person}}
    </li>
  `,
  styles: []
})
export class UserItemComponent implements OnInit {

  @Input() person :string[]

  constructor() { 
    // this.name='Leeneo'
  }

  ngOnInit() {
  }

}
