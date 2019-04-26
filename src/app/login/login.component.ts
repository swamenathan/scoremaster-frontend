import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginDetails} from '../interfaces/auth.interface';
import {ErrorMessageService} from '../services/error-message.service';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private errorMessageService: ErrorMessageService,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private toastMessage: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  getErrorMessage(controlName: string) {
    return this.errorMessageService.displayMessage(this.loginForm, controlName);
  }

  onSubmit() {
    const loginDetail: ILoginDetails = {
      'email': this.loginForm.value.email,
      'password': this.loginForm.value.password
    };

    this.loginService.login(loginDetail).subscribe(res => {
        console.log('Welcome! You are now logged in = ', res);
        this.router.navigate(['./points-table']);
      },
      error => {
        let errorMessage: string;
        const myError: any = error.error;

        // non_field_errors
        if (myError.non_field_errors && myError.non_field_errors.length > 0) {
          errorMessage = myError.non_field_errors[0];
        } else if (myError.email && myError.email.length > 0) {
          errorMessage = myError.email[0];
        } else {
          errorMessage = 'Error 500';
        }

        this.toastMessage.error(errorMessage);
      });


    console.log('submit button clicked username = ', loginDetail.email);
  }
}
