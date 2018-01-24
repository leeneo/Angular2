import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //  作为顶级标签显示， 这里这个selector 不能改
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '英雄之路';
}
