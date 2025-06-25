import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../services/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatTooltipModule } from '@angular/material/tooltip'; // Import MatTooltipModule

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule, // Add MatButtonModule here
    MatTooltipModule, // Add MatTooltipModule here
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
})
export class UserTable implements OnInit {
  users: any[] = [];
  headers: string[] = [];
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  editingRowId: string | null = null;

  startEdit(row: any) {
    this.editingRowId = row.id;
  }

  cancelEdit() {
    this.editingRowId = null;
  }

  saveEdit(row: any) {
    // You can add logic to track/save changes if needed
    this.editingRowId = null;
  }

  isEditing(row: any): boolean {
    return this.editingRowId === row.id;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: User, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.displayedColumns = [...Object.keys(data[0]), 'actions'];
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onRowClick(event: MouseEvent, row: any): void {
    // Navigate to details if the click was not on an editable element or action button
    // this.router.navigate(['/details'], { state: { data: row } });
    this.router.navigate(['/details', row.id], { state: { data: row } });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
