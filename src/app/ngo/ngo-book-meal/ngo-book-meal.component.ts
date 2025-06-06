import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ngo-book-meal',
  templateUrl: './ngo-book-meal.component.html',
  styleUrls: ['./ngo-book-meal.component.css']
})
export class NgoBookMealComponent {

  menuItems: string[] = [
    'Varn bhat',
    'Papad',
    'Lonch',
    'Shev bhaji',
    'Masale bhat',
    'Pahner tikka'
  ];

  address: string = 'Sambhaji Chauk, Burud Galli, Vinchur';
  contactNumber: string = '93595******';
  city: string = 'Nashik';
  pincode: string = '422305';

  constructor() { }
}