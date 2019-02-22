import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IAuthInterface, ISignUpDetails} from '../interfaces/auth.interface';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  signup(signUpDetails: ISignUpDetails) {

    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<IAuthInterface>(environment.signUpUrl, signUpDetails, options).pipe(
      tap(res => {
        try {
          console.log('res = ', res);
          const authRespose: IAuthInterface = res;
          localStorage.setItem('auth', JSON.stringify(authRespose));
        } catch (e) {
          console.error(e);
        }
      }),
    );

  }

}
