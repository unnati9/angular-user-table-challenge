import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() closeSidebar = new EventEmitter<void>();
  // Dummy navigation items
  navItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Users', icon: 'people', route: '/users' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
    { label: 'Reports', icon: 'bar_chart', route: '/reports' },
  ];

  onNavItemClick(): void {
    if (window.innerWidth <= 768) {
      // Only close on mobile
      this.closeSidebar.emit();
    }
  }
}
