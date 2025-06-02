import { Component } from '@angular/core';

@Component({
  selector: 'app-ngo-navbar',
  templateUrl: './ngo-navbar.component.html',
  styleUrls: ['./ngo-navbar.component.css']
})
export class NgoNavbarComponent {
  navLinks = [
    { name: "View Meal", route: "/ngo", active: true },
    { name: "Booked Meal", route: "./view-booked-meal", active: false },
    { name: "History", route: "./history", active: false },
    { name: "Listed Hotel", route: "./listed-hotel", active: false },
  ]

  setActive(index: number) {
    this.navLinks.forEach((link, i) => {
      link.active = i === index
    })
  }
}
