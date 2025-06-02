import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;
  isRegisterDropdownOpen = false;
  isMobile = false;

  constructor(private router: Router, private active: ActivatedRoute) {

    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleRegisterDropdown(event: Event) {
    event.preventDefault();
    this.isRegisterDropdownOpen = !this.isRegisterDropdownOpen;
  }

  closeDropdown() {
    this.isRegisterDropdownOpen = false;
  }

  goToLoginComponent() {
    this.router.navigate(['/login']).finally
  }
}