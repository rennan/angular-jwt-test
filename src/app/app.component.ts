import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user.model';
import { AuthenticationService } from './shared/services/authentication.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  user?: User | null;

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private readonly authenticationService: AuthenticationService
  ) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  logout() {
    this.authenticationService.logout();
  }
}
