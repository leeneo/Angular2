import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from './../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [`./login.component.css`],
  // DI注入方式，直接引用&本地提供；或者通过令牌方式，在构造中引用
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor( @Inject('auth') private service) { }

  ngOnInit() {
  }

  onSubclck(formvalue) {
    console.log(formvalue);
    console.log('\n' + this.service.loginWithCredentials(formvalue.login.username, formvalue.login.password));
  }
}
