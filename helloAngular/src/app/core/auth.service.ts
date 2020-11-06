import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //boolean 返回类型；string 参数类型
  loginWithCredentials(username: string, password: string): boolean {
    if (username === 'leeneo')
      return true
    return false
  }
}
