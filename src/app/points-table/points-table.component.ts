import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoresService} from '../services/scores.service';
import {MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {
  displayedColumns: string[] =  ['team_name', 'rr_points'];
  public dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private scoresService: ScoresService,
  ) {
  }


  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.scoresService.getTeams().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    }, error => {
      const MyError: any = error.error;
      console.log(MyError);
    });
  }

}
