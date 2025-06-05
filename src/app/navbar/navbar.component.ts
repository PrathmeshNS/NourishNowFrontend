import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false
  isMobile = false

  constructor() {
    this.checkScreenSize()
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.checkScreenSize()
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768
    if (!this.isMobile) {
      this.isMenuOpen = false
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}
