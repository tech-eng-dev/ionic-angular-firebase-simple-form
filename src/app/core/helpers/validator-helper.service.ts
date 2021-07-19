import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { findDuplicates, isAlphaNumeric, isValidPolynomial } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ValidatorHelperService {

  constructor() { }

  emailValid(control: FormControl) {
    return new Promise(resolve => {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(control.value)) {
        resolve({invalidEmail: true});
      }
      resolve(null);
    });
  }

  nameValid(control: FormControl) {
    return new Promise(resolve => {
      const strArr = control.value.split('');
      const isAN = isAlphaNumeric(control.value);
      const isDuplicated = findDuplicates(strArr).length;
      if (!isAN || isDuplicated) {
        resolve({invalidName: true});
      }
      resolve(null);
    });
  }

  polynomialValid(control: FormControl) {
    return new Promise(resolve => {
      const isValid = isValidPolynomial(control.value);
      if (!isValid) {
        resolve({inValidPolynomial: true});
      }
      resolve(null);
    });
  }

}
