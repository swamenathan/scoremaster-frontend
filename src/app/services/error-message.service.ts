import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  constructor() { }

  displayMessage(formGroup, controlName) {
    const errorType = formGroup.controls[controlName].errors;
    let errorMessage: string;
    switch (true) {
      case (errorType.minlength && (errorType.minlength.actualLength < errorType.minlength.requiredLength)):
        errorMessage = 'Minimum length of 8 chars';
        break;
      case errorType.required:
        errorMessage = 'This is a required field';
        break;
      case errorType.email:
        errorMessage = 'Invalid email type';
        break;
      case errorType.set:
        errorMessage = 'Invalid set type';
        break;

    }

    return errorMessage;
  }
}
