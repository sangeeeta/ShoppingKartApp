import { Component } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private readonly authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

}
