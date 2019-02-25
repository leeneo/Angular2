import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from './../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  // 内部模板语法：template:'',
  styleUrls: ['./login.component.css']    // 内部样式集语法：styles:[],
  // DI注入方式，直接引用&本地提供；或者通过令牌方式，在构造中引用
  // ,providers: [AuthService]
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(@Inject('auth') private service) {
  }

  // onClick(username, password) {
  //   // console.log('username:' + username + "\n"+"password:" + password);
  //   console.log('auth result is:' + this.service.loginWithCredentials(username, password));
  // }
  onSubmit(formvalues) {
    console.log(formvalues.ogin)
    console.log('auth result is:' + this.service.loginWithCredentials(formvalues.ogin.username, formvalues.ogin.password));
  }
  ngOnInit() {
  }

  onFocus(username){
    console.log(username.valueAccessor._elementRef.nativeElement.placeholder)
    username.valueAccessor._elementRef.nativeElement.placeholder=''
  }
}
