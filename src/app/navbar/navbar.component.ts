import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-10px)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ transform: 'translateY(-10px)', opacity: 0 }))
      ])
    ]),
    trigger('slideDownMobile', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.2s ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  activeLink: string = 'home';
  showDropdown: boolean = false;
  mobileMenuOpen: boolean = false;

  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  registerAsNGO(): void {
    console.log('Redirecting to NGO registration...');
    // Add navigation logic here
  }

  registerAsHotel(): void {
    console.log('Redirecting to Hotel registration...');
    // Add navigation logic here
  }
}