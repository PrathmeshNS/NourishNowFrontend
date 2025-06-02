import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-navbar',
  templateUrl: './hotel-navbar.component.html',
  styleUrls: ['./hotel-navbar.component.css']
})
export class HotelNavbarComponent {
  navLinks = [
    { name: "Add Meal", route: "/hotel/..", active: true },
    { name: "History", route: "./history", active: false },
    { name: "Listed Ngo", route: "../listed-ngo", active: false },
    { name: "View order", route: "../view-order", active: false },
  ]

  setActive(index: number) {
    this.navLinks.forEach((link, i) => {
      link.active = i === index
    })
  }
}
