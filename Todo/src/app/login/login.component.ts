import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type='text'>
      <input #passwordRef type='password'>
      <button (click)='btnClick(usernameRef.value,passwordRef.value)'>Login</button>

    </div>
  `,
  styles: [
    'div{width:50%}',
    'input{margin-bottom: 10px;float: left}',
    'button{}'
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  btnClick(username, password) {
    console.log('用户名：' + username + '\npassword:' + password);
  }

}
