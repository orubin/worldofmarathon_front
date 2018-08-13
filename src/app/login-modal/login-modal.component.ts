import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  view:string = 'login';

  loginPass: string = '';
  loginPassValidator: boolean = true;
  loginEmail: string = '';
  loginEmailValidator: boolean = true;


  userName: string = '';
  userNameValidator: boolean = true;
  signupEmail: string = '';
  signupEmailValidator: boolean = true;
  signupPassword: string = '';
  signupPasswordValidator: boolean = true;
  signupRepeatPassword: string = '';
  repeatPasswordValidator: boolean = true;
  userTargertScore: string = '';
  unmatchpasswords: boolean = true;

  forgotEmail: string = '';
  forgotEmailValidator: boolean = true;

  isValidLogin: boolean = true;
  isValidSignUp: boolean = true;

  registrationError: boolean = false;
  registrationErrorMsg: string = '';
  loginError: boolean = false;
  loginErrorMsg: string = '';
  forgotError: boolean = false;
  forgotErrorMsg: string = '';

  registrationSubscription: Subscription;
  loginSubscription: Subscription;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
      this.registrationSubscription = this.apiService.registerUserEmitter.subscribe((response)=> {
          if(response.data === 'Success') {
            this.view = 'successRegister';
            this.apiService.userLoggedEmitter.emit(this.userName)
          }else {
            this.registrationError = true;
            this.registrationErrorMsg = response.data;
          }
      });

      this.loginSubscription = this.apiService.loginEmitter.subscribe((response)=> {
          if(response.jwt) {
            console.log(response.data);
            this.view = 'successRegister';
            this.userName = response.name;
            this.apiService.userLoggedEmitter.emit(this.userName)
          }else {
            this.loginError = true;
            this.loginErrorMsg = response.data;
          }
      });
  }

  switchView(value) {
    this.userNameValidator = this.signupEmailValidator = this.signupPasswordValidator = this.repeatPasswordValidator =  this.unmatchpasswords = true;
    this.loginEmailValidator = this.loginPassValidator = true;
    this.forgotEmailValidator = true;
    this.view = value;
  }

  sendForm() {
    if(this.view === 'login') {
      if(this.validateLogin()) {
        this.apiService.userLogin(this.loginEmail, this.loginPass);
      }
    } else if (this.view === 'signup') {
      if(this.validateSignup()) {
        this.apiService.newUserRegistration ( this.signupEmail, this.userName, this.signupPassword, this.signupRepeatPassword, this.userTargertScore)
      }
    } else if (this.view === 'forgot') {
        if(this.forgotEmail === '') {
           this.forgotEmailValidator = false;
        }else {
          this.apiService.resetPassword(this.forgotEmail);
        }
    }
  }

  validateLogin() {
    this.loginEmailValidator = this.loginPassValidator = true;
    if (this.loginPass === '') {
      this.isValidLogin = false;
      this.loginPassValidator = false;
    }
    if (this.loginEmail === '') {
      this.isValidLogin = false;
      this.loginEmailValidator = false;
    }
    return this.isValidLogin;
  }

  validateSignup() {
    this.userNameValidator = this.signupEmailValidator = this.signupPasswordValidator = this.repeatPasswordValidator =  this.unmatchpasswords =  true;
    if (this.userName === '') {
      this.isValidLogin = false;
      this.userNameValidator = false;
    }
    if (this.signupEmail === '') {
      this.isValidLogin = false;
      this.signupEmailValidator = false;
    }
    if (this.signupPassword === '') {
      this.isValidLogin = false;
      this.signupPasswordValidator = false;
    }
    if (this.signupRepeatPassword === '') {
      this.isValidLogin = false;
      this.repeatPasswordValidator = false;
    }
    if(this.signupPassword !== this.signupRepeatPassword) {
      this.isValidLogin = false;
      this.unmatchpasswords = false;
    }
    return this.isValidSignUp;
  }
}
