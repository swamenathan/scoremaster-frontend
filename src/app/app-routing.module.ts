import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ScoresComponent} from './scores/scores.component';
import {PointsTableComponent} from './points-table/points-table.component';
import {KnockoutComponent} from './knockout/knockout.component';
import {MatchSubmitComponent} from './match-submit/match-submit.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ChangePasswordComponent} from './change-password/change-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'points-table', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'scores', component: ScoresComponent, canActivate: [AuthGuardService]},
  {path: 'points-table', component: PointsTableComponent, canActivate: [AuthGuardService]},
  {path: 'knockout', component: KnockoutComponent, canActivate: [AuthGuardService]},
  {path: 'submit-score', component: MatchSubmitComponent, canActivate: [AuthGuardService]},
  {path: 'change-pass', component: ChangePasswordComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
