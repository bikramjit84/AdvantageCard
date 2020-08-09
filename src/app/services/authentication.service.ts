import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import OktaAuth from '@okta/okta-auth-js';
 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authClient = new OktaAuth({
    issuer: 'https://<YOUR_OKTA_DOMAIN>/oauth2/default',
    clientId: '<YOUR_OKTA_CLIENTID>'
  });

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated() {
    const authenticated = await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string) {
    const transaction = await this.authClient.signIn({username, password});

    if (transaction.status !== 'SUCCESS') {
      console.log("Login error from server is ", transaction.status);
      throw Error('Login is not successful.');
    }
    this.isAuthenticated.next(true);

    this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }

  async logout(redirect: string) {
    try {
      
       this.router.navigate([redirect]);
      await this.authClient.signOut();
    } catch (err) {
      console.error(err);
    }
  }
 

}
