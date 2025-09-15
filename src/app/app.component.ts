import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from './leftMenuModule/left-menu-component/left-menu.component';
import { SharedModule } from './sharedModule/shared.module';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftMenuComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  title = 'my-app';

  ngOnInit() {
    const role = this.authService.getRole();
    if (role) {
      // Load role routes dynamically on app start
      this.authService.loadRoutesForRole(role);
    }
  }
}
