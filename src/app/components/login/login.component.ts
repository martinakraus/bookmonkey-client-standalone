import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent {
  user$: Observable<any> = this.auth.user$;

  constructor(public readonly auth: AuthService) {
  }

  login() {
    this.auth.loginWithRedirect();

  }

  logout() {
    this.auth.logout();
  }
}
