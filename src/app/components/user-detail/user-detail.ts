import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  user: any;
  userIdFromUrl: string | null = null;

  constructor(private route: ActivatedRoute, private location: Location) {} // Inject ActivatedRoute and Location

  ngOnInit(): void {
    // Attempt to get user data from history state (preferred for full object)
    this.user = history.state.data;

    this.route.paramMap.subscribe((params) => {
      this.userIdFromUrl = params.get('id');
      // Optional: If 'user' is null (e.g., direct URL access), and you had a getUserById service,
      // you would call it here:
      // if (!this.user && this.userIdFromUrl) {
      //   this.userService.getUserById(this.userIdFromUrl).subscribe(data => this.user = data);
      // }
    });
  }

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Method to go back to the previous page
  goBack(): void {
    this.location.back();
  }
}
