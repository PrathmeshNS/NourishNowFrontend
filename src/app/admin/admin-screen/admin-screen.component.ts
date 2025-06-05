import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Route, Router } from '@angular/router';

interface StatsCard {
  title: string;
  verified: number;
  unverified: number;
  color: string;
}

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent {
  adminName = 'Admin!!!';
  currentDate = 'Jun 2, 2025';
  isDarkMode = false;

  statsCards: StatsCard[] = [
    {
      title: 'Ngo',
      verified: 65,
      unverified: 5,
      color: 'pink'
    },
    {
      title: 'Hotel',
      verified: 65,
      unverified: 5,
      color: 'blue'
    }
  ];


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

}