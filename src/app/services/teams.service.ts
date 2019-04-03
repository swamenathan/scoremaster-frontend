import { Injectable } from '@angular/core';
import {ITeams} from '../interfaces/game.interface';
import {any} from 'codelyzer/util/function';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private resultingTeam: ITeams;

  constructor() { }

  setTeams(allTeams: ITeams[]) {
    sessionStorage.setItem('teams', JSON.stringify(allTeams));
  }

  getAllTeams() {
    return sessionStorage.getItem('teams');
  }

  getATeam(id: string) {
    const listTeam: ITeams[] = JSON.parse(this.getAllTeams());
    console.log('listTeams = ', listTeam);
    listTeam.forEach((x) => {if (x.main_player.toString() === id) { this.resultingTeam = x; } });
    console.log('result team = ', this.resultingTeam);
    return this.resultingTeam;
  }
}
