import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogOutService} from '../services/log-out.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IChangePassword} from '../interfaces/game.interface';
import {HttpClient} from '@angular/common/http';
import {ChangePasswordService} from '../services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public changePwdForm: FormGroup;

  constructor(
    private router: Router,
    private logOutService: LogOutService,
    private fb: FormBuilder,
    private changePwdService: ChangePasswordService,
    private logoutService: LogOutService
  ) {
    this.changePwdForm = this.fb.group({
      old_password: ['', Validators.required],
      new_password1: ['', Validators.required],
      new_password2: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    const passwordDetails: IChangePassword = {
      'old_password': this.changePwdForm.value.old_password,
      'new_password1': this.changePwdForm.value.new_password1,
      'new_password2': this.changePwdForm.value.new_password2
    };

    this.changePwdService.changePassword(passwordDetails).subscribe(res => {
      console.log('Password has been changed');
      this.logoutService.logout().subscribe(response => {
        console.log('Logout successful');
        this.router.navigate(['./login']);
      });
    }, error1 => {
      console.log('An error has occured = ', error1);
    });

  }
}
