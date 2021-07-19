import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValidatorHelperService } from 'src/app/core/helpers/validator-helper.service';
import { LoginModel } from 'src/app/core/models/login.model';
import { DbService } from 'src/app/core/services/db.service';
import Mexp from 'math-expression-evaluator';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginData: LoginModel;

  constructor(
    private formBuilder: FormBuilder,
    private validatorHelper: ValidatorHelperService,
    private dbService: DbService,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    this.loginData = {
      name: this.loginForm.value.name,
      password: this.loginForm.value.password,
      calcResult: Mexp.eval(this.loginForm.value.polynomial)
    };
    this.dbService.addUser(this.loginData)
      .then(res => {
        // Put some callback part such as reset form and redirect to another page
      });
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required, this.validatorHelper.nameValid],
      password: ['', Validators.required],
      polynomial: ['', Validators.required, this.validatorHelper.polynomialValid],
    });
  }

}
