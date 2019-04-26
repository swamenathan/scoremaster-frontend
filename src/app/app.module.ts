import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatTableModule,
  MatTabsModule,
  MatDatepickerModule, MatNativeDateModule, MatSnackBarModule
} from '@angular/material';
import { MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PtcToolbarComponent } from './ptc-toolbar/ptc-toolbar.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { ScoresComponent } from './scores/scores.component';
import { LogOutService } from './services/log-out.service';
import { KnockoutComponent } from './knockout/knockout.component';
import { MatchSubmitComponent } from './match-submit/match-submit.component';
import {AuthGuardService} from './services/auth-guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import {environment} from '../environments/environment';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ToastrModule } from 'ngx-toastr';


export function getToken() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (auth != null) {
    return auth.token;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PtcToolbarComponent,
    PointsTableComponent,
    ScoresComponent,
    KnockoutComponent,
    MatchSubmitComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: [environment.apiUrl],
      }}),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      positionClass: 'toast-top-full-width'
    })
  ],
  providers: [
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
