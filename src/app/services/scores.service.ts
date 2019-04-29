import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CredentialService} from './credential.service';
import {environment} from '../../environments/environment';
import {IMatch, IScore, ITeams, ITours} from '../interfaces/game.interface';

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

    return this.http.get<ITeams[]>(environment.teamsUrl, options);
  }

  getMatches(team1: string, team2: string) {
    const options = this.setHeaders();

    return this.http.get<IMatch[]>(environment.matchUrl + '?' + 'team_1=' + team1 + '&team_2=' + team2, options);
  }

  getAllMatches() {
    const options = this.setHeaders();

    return this.http.get<IMatch[]>(environment.matchUrl, options);
  }

  getTeam(player: number) {
    const options = this.setHeaders();

    return this.http.get<ITeams>(environment.teamUrl + player, options);
  }

  postScore(score: IScore) {
    const options = this.setHeaders();

    return this.http.post<IScore>(environment.matchesUrl, score, options);
  }

  getTours() {
    const options = this.setHeaders();

    return this.http.get<ITours>(environment.toursUrl, options);
  }
}
