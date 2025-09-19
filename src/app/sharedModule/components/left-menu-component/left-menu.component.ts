import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS, MenuItem } from './menu-items';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    const role = this.authService.getRole() || '';
    this.menuItems = MENU_ITEMS[role] || [];
    console.log('Loaded menu for role:', role, this.menuItems);
  }
}
