import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IScore, ITeams} from '../interfaces/game.interface';
import {ErrorMessageService} from '../services/error-message.service';
import {CredentialService} from '../services/credential.service';
import {ScoresService} from '../services/scores.service';
import {matchType} from '../models/data-models';
import {formatDate} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {any} from 'codelyzer/util/function';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-match-submit',
  templateUrl: './match-submit.component.html',
  styleUrls: ['./match-submit.component.scss']
})
export class MatchSubmitComponent implements OnInit {
  public myTeamName: string;
  public myTeamId: string;
  public teams: ITeams[];
  public scoreForm: FormGroup;
  public matchTypes: any;
  public team_2: string;
  public match_type: string;
  public tour_id: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private errorMessageService: ErrorMessageService,
    private credentialService: CredentialService,
    private scoreService: ScoresService,
    private toastMessage: ToastrService

  ) {

    this.scoreForm = this.fb.group({
      team1_set1: ['', [Validators.required, Validators.max(12)]],
      team2_set1: ['', [Validators.required, Validators.max(12)]],
      team1_set2: ['', Validators.max(7)],
      team2_set2: ['', Validators.max(7)],
      team1_set3: ['', Validators.max(7)],
      team2_set3: ['', Validators.max(7)],
      match_date: ['', [Validators.required]]
    });

  }

  ngOnInit() {
    this.matchTypes = matchType;
    const user: any =  this.credentialService.getUser;

    this.scoreService.getTours().subscribe(response => {
        this.tour_id = response[0].id;
    }, error1 => {});

    this.scoreService.getTeam(user.pk).subscribe(
      res => {
        this.myTeamName = res.team_name;
        this.myTeamId = res.id;

        this.scoreService.getTeams().subscribe(
          response => {
            this.teams = response.filter((element) => this.excludeItem(element, this.myTeamName));
          },
          error1 => {
            return null;
          }
        );
      }
    );
  }

  onSubmit() {
    const match_date = new Date(Date.parse(this.scoreForm.value.match_date));
    const month = match_date.getMonth() + 1;
    const formatted_date = match_date.getFullYear() + '-' + month + '-' + match_date.getDate();

    const scoreDetails: IScore = {
      'match_type': this.match_type,
      'team1_set1': this.scoreForm.value.team1_set1,
      'team2_set1': this.scoreForm.value.team2_set1,
      'team1_set2': this.scoreForm.value.team1_set2,
      'team2_set2': this.scoreForm.value.team2_set2,
      'team1_set3': this.scoreForm.value.team1_set3,
      'team2_set3': this.scoreForm.value.team2_set3,
      'match_date': formatted_date,
      'tournament': this.tour_id,
      'team_1': this.myTeamId,
      'team_2': this.team_2
    };

    console.log('score details = ', scoreDetails);
    this.scoreService.postScore(scoreDetails).subscribe(res => {
      console.log('res = ', res);
      this.toastMessage.info('SCORE SUBMITTED');
      this.router.navigate(['./points-table']);

    }, error => {
      let errorMessage: string;
      const myError: any = error.error;

      // non_field_errors
      if (myError.non_field_errors && myError.non_field_errors.length > 0) {
        errorMessage = myError.non_field_errors[0];
      } else {
        console.log('error = ', error.error);
        errorMessage = 'Error 500';
      }

      this.toastMessage.error(errorMessage);
    });

    // console.log('invalid = ', this.findInvalidControls());


  }

  getErrorMessage(controlName: string) {
    return this.errorMessageService.displayMessage(this.scoreForm, controlName);
  }


  excludeItem(element, team_name: string) {
    if (element.team_name !== team_name) {
      return element;
    }
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.scoreForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
