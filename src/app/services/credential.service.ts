import { Injectable } from '@angular/core';
import { IAuthInterface } from '../interfaces/auth.interface';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(
    private jwtHelperService: JwtHelperService,
    private router: Router

  ) { }

  public get getToken(): string {
    try {
      const data: string = JSON.parse(localStorage.getItem('auth')).token;
      console.log('token = ', data);
      if (data != null) {
        return data;
      }
    } catch (e) {
      this.router.navigate(['./login']);
    }
  }

  public get getUser(): string {
    try {
      const data: string = JSON.parse(localStorage.getItem('auth')).user;
      console.log('user = ', data);
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
        console.log('user token = ', user_token);
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

  public isLoggedIn(): boolean {
    if (!this.jwtHelperService.isTokenExpired(this.getToken)) {
      return true;
    } else {
      this.clearToken();
      return false;
    }
  }
}
