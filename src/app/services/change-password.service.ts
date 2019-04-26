import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CredentialService} from './credential.service';
import {environment} from '../../environments/environment.prod';
import {IChangePassword} from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(
    private http: HttpClient,
    private credentialService: CredentialService,
  ) { }

  changePassword(passwordDetails: IChangePassword) {
    const options = {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT ' + (this.credentialService.getToken ))
        .set('Content-Type', 'application/json')
    };

    return this.http.post(environment.changePassUrl, passwordDetails, options);
  }
}
