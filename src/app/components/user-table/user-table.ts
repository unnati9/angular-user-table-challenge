import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { User } from '../../services/user';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css',
})
export class UserTable implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  editingRowId: string | null = null;
  displayedColumns: string[] = [];

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

  startEdit(row: any) {
    this.editingRowId = row.id;
  }

  cancelEdit() {
    this.editingRowId = null;
  }

  saveEdit(row: any) {
    // Logic to track/save changes
    this.editingRowId = null;
  }

  isEditing(row: any): boolean {
    return this.editingRowId === row.id;
  }

  onRowClick(row: any): void {
    this.router.navigate(['/details', row.id], { state: { data: row } });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
