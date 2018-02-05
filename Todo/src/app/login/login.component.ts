import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <p><span>用户名：</span><input #usernameRef type='text'></p>
      <p><span>密　码：</span><input #passwordRef type='password'></p>
      <button (click)='btnClick(usernameRef.value,passwordRef.value)'>Login</button>

    </div>
  `,
  styles: [
    'div{margin:0 auto;overflow:hidden;text-align:center;}',
    'input{display: inline-block}',
    'span{width:20%}',
    'button{}'
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnClick(username, password) {
    console.log('用户名：' + username + '\r\npassword:' + password);
  }

}
