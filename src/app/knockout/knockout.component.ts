import { Component, OnInit } from '@angular/core';
import {ScoresService} from '../services/scores.service';
import {IMatch, ITeams} from '../interfaces/game.interface';

@Component({
  selector: 'app-knockout',
  templateUrl: './knockout.component.html',
  styleUrls: ['./knockout.component.scss']
})
export class KnockoutComponent implements OnInit {

  public matches: any;
  public qf_matches: IMatch[];
  public sf_matches: IMatch[];
  public ff_matches: IMatch[];

  constructor(
    private scoresService: ScoresService,
  ) { }

  ngOnInit() {
    this.scoresService.getAllMatches().subscribe(
      res => {
        this.matches = res;
        this.filterMatches();
      }, error1 => {
        // handle error
      }
    );
  }

  filterMatches() {
    this.qf_matches = this.matches.filter(mtype => (mtype.match_type === 'QF'));
    this.sf_matches = this.matches.filter(mtype => (mtype.match_type === 'SF'));
    this.ff_matches = this.matches.filter(mtype => (mtype.match_type === 'FF'));
  }

}
