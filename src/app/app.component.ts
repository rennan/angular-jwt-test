import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user.model';
import { AuthenticationService } from './shared/services/authentication.service';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  user?: User | null;
  menuItems: MenuItem[] = [];

  constructor(
    private readonly primengConfig: PrimeNGConfig,
    private readonly authenticationService: AuthenticationService,
    private readonly messageService: MessageService
  ) {
    this.authenticationService.user.subscribe(
      (userData) => (this.user = userData)
    );
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getMenuItems();
  }

  private getMenuItems(): void {
    this.menuItems = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logout(),
      },
    ];
  }

  private logout(): void {
    this.authenticationService.logout();
    this.messageService.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'User logged out successfully.',
    });
  }
}
