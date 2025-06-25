import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  user: any;

  constructor(private location: Location) {} // Inject Location service

  ngOnInit(): void {
    this.user = history.state.data;
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Function to navigate back
  goBack(): void {
    this.location.back();
  }
}
