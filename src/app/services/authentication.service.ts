import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import OktaAuth from '@okta/okta-auth-js';

import {LocalStorageService} from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router
    ,private localStorage: LocalStorageService
    ) {
  }

  async checkAuthenticated() {
    const authLogin = this.localStorage.get("login");
    if(authLogin && "success" === authLogin) {
      return "true"
    }
    return false;
    /*
    const authenticated = await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
    */
  }

    login(username: string, password: string) {

    if ("bikramjit" === username && "password" === password) {
      this.localStorage.set("login", "success");
    } else {
      console.log("Login error from server is ", "failed");
      throw Error('Login is not successful.');
     
    }
    /*
    const transaction = await this.authClient.signIn({username, password});

    if (transaction.status !== 'SUCCESS') {
      console.log("Login error from server is ", transaction.status);
      throw Error('Login is not successful.');
    }
    this.isAuthenticated.next(true);

    this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
    */
  }

  async logout(redirect: string) {
    try {
      
       this.router.navigate([redirect]);
     // await this.authClient.signOut();
     this.localStorage.remove("login");
    } catch (err) {
      console.error(err);
    }
  }
 

}
