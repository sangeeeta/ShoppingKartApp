import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './sharedModule/shared.module';
import { AuthService } from './auth/service/auth.service';
import { CommonModule } from '@angular/common';
import { MENU_ITEMS } from './sharedModule/components/left-menu-component/menu-items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  constructor(private readonly authService: AuthService) {
    // subscribe to login changes
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;

      if (loggedIn) {
        const role = this.authService.getRole();
        if (role) {
          this.menuItems = MENU_ITEMS[role];
        }
      } else {
        this.menuItems = [];
      }
    });

  }
  title = 'my-app';
  isLoggedIn = false;
  menuItems: { label: string, path: string }[] = [];

  ngOnInit() {
    // Check token in localStorage
    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      const role = this.authService.getRole();
      if (role) {
        this.menuItems = MENU_ITEMS[role];
        this.authService.loadRoutesForRole(role); // inject role-specific routes
      }
    }
  }

}
