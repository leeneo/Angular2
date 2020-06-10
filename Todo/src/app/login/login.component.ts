import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'neo-login',
  template: `
  <div>
    <form #formRef='ngForm' (ngSubmit)='onSubmit(formRef.value)'>
      <fieldset ngModelGroup='login'>
        <input type="text" name='username' [(ngModel)]='username' required #usernameRef="ngModel" minlength='3' >{{usernameRef.valid|json}}
        <div *ngIf='usernameRef.errors?.required'>username is required!</div>
        <div *ngIf='usernameRef.errors?.minlength'>should be at least 3 charactors</div>
        <input type="password" name='password' [(ngModel)]='password' #passwordRef="ngModel" required >{{passwordRef.errors|json}}
        <div *ngIf='passwordRef.errors?.required'>password is required!</div>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  </div>
  `,
  styles: [`
    input.ng-invalid{
      border:1px solid red;
    }

    input.ng-valid{
      border:1px solid green;
    }

  `]
})
export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private service) { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';


  onSubmit(formValue) {
    console.log(formValue);
    let name = formValue.login.username;
    let pwd = formValue.login.password;
    console.log('userName--' + name + '\n\rpassWord--' + pwd);
    console.log(this.service.loginWithCredentials(name, pwd));
  }

}
