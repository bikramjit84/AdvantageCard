import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
 
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
   }

    login(username: string, password: string) {

    if ("user1" === username && "password" === password) {
      this.localStorage.set("login", "success");
    } else {
      console.log("Login error from server is ", "failed");
      throw Error('Login is not successful.');
     
    } 
  }

  async logout(redirect: string) {
    try {
      
       this.router.navigate([redirect]);
      this.localStorage.remove("login");
    } catch (err) {
      console.error(err);
    }
  }
 

}
