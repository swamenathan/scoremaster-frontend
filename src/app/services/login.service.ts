import {Injectable} from '@angular/core';
import {IAuthInterface, ILoginDetails} from '../interfaces/auth.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(loginDetails: ILoginDetails) {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<IAuthInterface>(environment.loginUrl, loginDetails, options).pipe(
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
