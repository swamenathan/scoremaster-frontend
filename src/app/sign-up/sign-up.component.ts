import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ISignUpDetails} from '../interfaces/auth.interface';
import {ErrorMessageService} from '../services/error-message.service';
import { SignUpService } from '../services/sign-up.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})


export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private errorMessageService: ErrorMessageService,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, Validators.minLength(8)]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  getErrorMessage(controlName: string) {
    return this.errorMessageService.displayMessage(this.signUpForm, controlName);
  }

  onSubmit() {
    const signUpDetails: ISignUpDetails = {
      'email': this.signUpForm.value.email,
      'password1': this.signUpForm.value.password1,
      'password2': this.signUpForm.value.password2,
      'first_name': this.signUpForm.value.first_name,
      'last_name': this.signUpForm.value.last_name


    };

    this.signUpService.signup(signUpDetails).subscribe(res => {
        console.log('Welcome! You are now logged in = ', res);
        this.router.navigate(['./points-table']);
      },
      error => {
        const MyError: any = error.error;
        console.log(MyError);
      }
      );


    console.log('submit button clicked username = ', signUpDetails.email);
  }

}
