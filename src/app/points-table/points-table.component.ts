import { Component, OnInit } from '@angular/core';
import {ScoresService} from '../services/scores.service';
import {ITeams} from '../interfaces/game.interface';


@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {

  public teams: ITeams;

  constructor(
    private scoresService: ScoresService,
  ) {
    this.getTeams();

  }
  displayedColumns: string[] =  ['name', 'seeding', 'robin'];


  ngOnInit() {
  }

  getTeams() {
    this.scoresService.getTeams().subscribe(res => {
      this.teams = res;
    }, error => {
      const MyError: any = error.error;
      console.log(MyError);
    });
  }


}
