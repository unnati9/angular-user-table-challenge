import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'user-management';
  isSidebarOpen: boolean = false;

  @ViewChild('sidebarRef') sidebarRef!: ElementRef;
  @ViewChild('menuButtonRef') menuButtonRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Listen for clicks anywhere on the document
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (window.innerWidth <= 768) {
      const clickedInsideSidebar = this.sidebarRef?.nativeElement.contains(
        event.target
      );
      const clickedOnMenuButton = this.menuButtonRef?.nativeElement.contains(
        event.target
      );

      if (this.isSidebarOpen && !clickedInsideSidebar && !clickedOnMenuButton) {
        this.isSidebarOpen = false;
      }
    }
  }
}
