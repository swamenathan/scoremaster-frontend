import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILoginDetails} from '../interfaces/auth.interface';
import {ErrorMessageService} from '../services/error-message.service';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';


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
    private router: Router) {
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
        console.log('error = ', error);
        const myError: any = error.error;
        if (myError) {
          console.log(myError);
        } });


    console.log('submit button clicked username = ', loginDetail.email);
  }
}
