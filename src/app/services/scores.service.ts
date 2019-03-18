import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CredentialService} from './credential.service';
import {environment} from '../../environments/environment';
import {IMatch, ITeams} from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor(
    private http: HttpClient,
    private credentialService: CredentialService,

  ) { }

  setHeaders() {
    const options = {
      headers: new HttpHeaders()
        .set('Authorization', 'JWT ' + (this.credentialService.getToken))
        .set('Content-Type', 'application/json')
    };
    return options;
  }

  getTeams() {
    const options = this.setHeaders();
    console.log('options = ', options);
    return this.http.get<ITeams>(environment.teamsUrl, options);
  }

  getMatches(team1: string, team2: string) {
    const options = this.setHeaders();

    return this.http.get<IMatch>(environment.matchUrl + '?' + 'team_1=' + team1 + '&team_2=' + team2, options);
  }
}
