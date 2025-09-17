import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logout() {
    // Implement logout functionality here
    console.log('Logout clicked');
  }

}
