import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';


interface NavigationItem {
  name: string;
  icon: string;
  active: boolean;
  subItems?: string[];
}

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
  
  
export class AdminNavbarComponent {

  adminName = 'Admin!!!';
  currentDate = 'Jun 2, 2025';
  searchQuery = '';
  isDarkMode = false;

  navigationItems: NavigationItem[] = [
    { name: 'Home', icon: '🏠', active: true },
    { name: 'Hotel', icon: '🏨', active: false, subItems: ['Verified', 'UnVerified'] },
    { name: 'Ngo', icon: '❤️', active: false, subItems: ['Verified', 'UnVerified'] },
    { name: 'Available Meal', icon: '🍽️', active: false },
    { name: 'History', icon: '🕐', active: false },
    { name: 'Donation', icon: '🎁', active: false }
  ];
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit(): void {
    // Check if dark mode was previously enabled
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.isDarkMode = true;
      this.document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      this.document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      this.document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }

    console.log('Dark mode:', this.isDarkMode ? 'enabled' : 'disabled');
  }

  onNavItemClick(clickedItem: NavigationItem): void {
    this.navigationItems.forEach(item => item.active = false);
    clickedItem.active = true;
  }

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  showNotifications(): void {
    console.log('Show notifications');
  }

  showUserMenu(): void {
    console.log('Show user menu');
  }
}