import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  constructor() { }

  displayMessage(formGroup, controlName) {
    const errorType = formGroup.controls[controlName].errors;
    let inputError: string;
    switch (true) {
      case (errorType.minlength && (errorType.minlength.actualLength < errorType.minlength.requiredLength)):
        inputError = 'minlength';
        break;
      case errorType.required:
        inputError = 'required';
        break;
      case errorType.email:
        inputError = 'email';
        break;
      case errorType.set:
        inputError = 'set';
        break;
      case (errorType.pattern && (errorType.pattern.actualValue)):
        inputError = 'pattern';
        break;
      case (errorType.max && (errorType.max.max < errorType.max.actual)):
        inputError = 'max';
        break;
      case (errorType.min && (errorType.min.min > errorType.min.actual)):
        inputError = 'min';
        break;
    }

    return this.getErrorMessage(controlName, inputError);
  }

  getErrorMessage(controlName: string, errorType: string) {
    let message: string;
    switch (controlName) {

      case 'password2':
      case 'new_password1':
      case 'new_password2':
      case 'password1':
        switch (errorType) {
          case 'minlength':
            message = 'Password min length should be 8';
            break;
          case 'required':
            message = 'This is a required field';
            break;
        }
        break;

      case 'password':
      case 'old_password':
      case 'first_name':
      case 'last_name':
      case 'match_date':
      case 'match_type':
      case 'team_2':
        switch (errorType) {
          case 'required':
            message = 'This is a required field';
            break;
        }
        break;

      case 'email':
        switch (errorType) {
          case 'email':
            message = 'Enter valid email address';
            break;
          case 'required':
            message = 'This is a required field';
            break;
        }
        break;

      case 'team1_set1':
      case 'team2_set1':
      case 'team1_set2':
      case 'team2_set2':
      case 'team1_set3':
      case 'team2_set3':
        switch (errorType) {
          case 'pattern':
            message = 'Enter numbers only';
            break;
          case 'max':
            message = 'ERR';
            break;
          case 'maxlength':
            message = 'ERR';
            break;
          case 'required':
            message = 'REQ';
            break;
        }
        break;
    }
    return message;

  }
}
