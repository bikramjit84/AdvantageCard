import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocaleConstants } from 'src/app/utils/locale-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailure: LocaleConstants.LOGIN_ERROR = LocaleConstants.LOGIN_ERROR;
    userNameRequiredMsg: LocaleConstants.USERNAME_REQUIRED = LocaleConstants.USERNAME_REQUIRED;
   pwdRequiredMsg: LocaleConstants.PWD_REQUIRED= LocaleConstants.PWD_REQUIRED;
   userNameMinLength: LocaleConstants.USERNAME_MIN = LocaleConstants.USERNAME_MIN;
  
   pwdMinLength: LocaleConstants.PWD_MIN = LocaleConstants.PWD_MIN;
   loginBtn: LocaleConstants.LOGIN_BTN = LocaleConstants.LOGIN_BTN
   form: FormGroup;

  public loginInvalid: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService) { }

    async ngOnInit() {
      this.loginInvalid = false;
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/selectCard';

    this.form = this.fb.group({

      username: ['', [Validators.required,     Validators.minLength(4)]],
      password: ['', [Validators.required,      Validators.minLength(5)]]
    });
 
  }

    onSubmit() {
    this.loginInvalid = false;
       try {
          if (this.form.invalid) {
           return;
         }
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
           this.authService.login(username, password);
           this.router.navigate([this.returnUrl]);

      } catch (err) {
        this.loginInvalid = true;
      }
    }  
  }

 