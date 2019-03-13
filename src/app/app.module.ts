import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule} from '@angular/material';
import { MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PtcToolbarComponent } from './ptc-toolbar/ptc-toolbar.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { ScoresComponent } from './scores/scores.component';
import {LogOutService} from './services/log-out.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PtcToolbarComponent,
    PointsTableComponent,
    ScoresComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
