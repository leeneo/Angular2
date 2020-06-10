import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'neo-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  // username: string = '';
  // password: string = '';
  password2='password223';

  constructor(@Inject('auth') private service) { }

  ngOnInit(): void {
  }

  onThisClick(name: string, pwd: string) {
    // let name = this.username;
    // let pwd = this.password;
    console.log('userName--' + name + '\n\rpassWord--' + pwd);
    console.log(this.service.loginWithCredentials(name, pwd));
  }

  testValue='123131';

}
