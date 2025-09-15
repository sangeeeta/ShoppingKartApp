import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-menu',  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  ngOnInit() {
    debugger;
  }

}
