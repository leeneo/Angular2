import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from './../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class='loginWrap'>
      <form #formRef='ngForm' (ngSubmit)='onSubclck(formRef.value)'>
      <fieldset ngModelGroup='login'>
          <div *ngIf='usernameRef.errors?.required'>must be required</div>
          <div *ngIf='usernameRef.errors?.minlength'>minlenght>3</div>
          <p>
            <span>用户名：</span>
            <input name='username' required minlength='3' [(ngModel)]='username' #usernameRef='ngModel' placeholder='请输入用户名' type='text'>
          </p>
          <div *ngIf='passwordRef.errors?.required'>must be required</div>
          <p>
            <span>密　码：</span>
            <input name='password' required [(ngModel)]='password' #passwordRef='ngModel' type='password' placeholder='请输入密码'>
          </p>
          <button type='submit' class='loginBtn'>Login</button>
        </fieldset>
      </form>
    </div>
  `,
  styles: [`
    .loginWrap{width:274px;margin:0 auto;overflow:hidden;text-align:center;}
    input{display: inline-block}
    span{width:20%}
    .loginBtn{float:right}
    input.ng-invalid{outline:1px solid red}
    input.ng-valid{outline:1px solid gold}
  `],
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
