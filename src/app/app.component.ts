import { Component } from '@angular/core';
import { User } from './shared/models/user.model';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  user?: User | null;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.authenticationService.logout();
  }
}
