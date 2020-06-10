import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginWithCredentials(userName: string, password: string): boolean {
    if (userName.trim() == 'leeneo')
      return true;
    return false;
  }
}
