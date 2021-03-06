import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IMatch, ITeams} from '../interfaces/game.interface';
import {ScoresService} from '../services/scores.service';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';
import {toArray} from 'rxjs/operators';
import index from '@angular/cdk/schematics/ng-add';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  public teams: ITeams[];
  public matchs: IMatch[];
  public team1_selected: string;
  public team2_selected: string;
  public team1_name: string;
  public team2_name: string;

  constructor(
    private scoresService: ScoresService,
  ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.scoresService.getTeams().subscribe(res => {
      this.teams = res;
    }, error => {
      const MyError: any = error.error;
      console.log(MyError);
    });
  }


  onSubmit() {
    this.scoresService.getMatches(this.team1_selected, this.team2_selected).subscribe(res => {
      this.matchs = res;
      console.log('matchs = ', this.matchs);
      }, error => {
        const MyError: any = error.error;
        console.log(MyError);
    });
  }
}
