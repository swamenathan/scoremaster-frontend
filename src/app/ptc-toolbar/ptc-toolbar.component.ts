import { Component, OnInit } from '@angular/core';
import {LogOutService} from '../services/log-out.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ptc-toolbar',
  templateUrl: './ptc-toolbar.component.html',
  styleUrls: ['./ptc-toolbar.component.scss']
})
export class PtcToolbarComponent implements OnInit {

  constructor(
    private logoutService: LogOutService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogout()
  {
    this.logoutService.logout().subscribe(res => {
      console.log('Logout successful');
      this.router.navigate(['./login']);
    });
  }
}
