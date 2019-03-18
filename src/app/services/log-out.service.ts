import { Injectable } from '@angular/core';
import {IAuthInterface} from '../interfaces/auth.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {CredentialService} from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class LogOutService {

  constructor(
    private http: HttpClient,
    private credentialService: CredentialService,
  ) {
  }


  logout() {
    const options = {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT ' + (this.credentialService.getToken ))
        .set('Content-Type', 'application/json')
    };
    console.log('options = ', options);

    return this.http.post<IAuthInterface>(environment.logoutUrl, options).pipe(
      tap(res => {
        try {
          console.log('logout successful ', res);
          this.credentialService.clearToken();

        } catch (e) {
          console.error(e);
        }
      }),
    );
  }
}
