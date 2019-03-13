import { Injectable } from '@angular/core';
import {IAuthInterface} from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor() { }

  public get getToken(): string {
    try {
      const data: string = localStorage.getItem('auth');
      if (data != null) {
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  }

  public setToken(user_token: IAuthInterface) {
    try {
      if (user_token != null) {
        localStorage.setItem('auth', JSON.stringify(user_token));
      }
    } catch (e) {
      console.error(e);
    }
  }

  public clearToken() {
    try {
      localStorage.removeItem('auth');

    } catch (e) {
      console.error(e);
    }
  }
}
