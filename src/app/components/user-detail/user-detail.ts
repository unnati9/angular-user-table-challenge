import { CommonModule, Location } from '@angular/common'; // Import Location
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule for back button icon
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for back button styling

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule], // Add MatIconModule and MatButtonModule
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  user: any;
  userIdFromUrl: string | null = null; // To store ID from URL

  constructor(private route: ActivatedRoute, private location: Location) {} // Inject ActivatedRoute and Location

  ngOnInit(): void {
    // Attempt to get user data from history state (preferred for full object)
    this.user = history.state.data;

    // Get ID from URL parameters
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
