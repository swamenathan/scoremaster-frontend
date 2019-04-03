import {Component, OnInit, ViewChild} from '@angular/core';
import {ScoresService} from '../services/scores.service';
import {MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.scss']
})
export class PointsTableComponent implements OnInit {
  displayedColumns: string[] =  ['name', 'seeding', 'robin'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private scoresService: ScoresService,
  ) {
  }


  ngOnInit() {
    this.getTeams();

    this.dataSource.sort = this.sort;
  }

  getTeams() {
    this.scoresService.getTeams().subscribe(res => {
      this.dataSource.data = res;
    }, error => {
      const MyError: any = error.error;
      console.log(MyError);
    });
  }

}
