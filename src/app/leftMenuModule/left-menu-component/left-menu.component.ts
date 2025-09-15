import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../menu-items';

@Component({
  selector: 'app-left-menu',  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
   @Input() menuItems: MenuItem[] = [];
   
  ngOnInit() {
    debugger;
  }

}
