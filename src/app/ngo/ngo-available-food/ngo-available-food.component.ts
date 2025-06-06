import { Component, HostListener } from '@angular/core';

interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
}

@Component({
  selector: 'app-ngo-available-food',
  templateUrl: './ngo-available-food.component.html',
  styleUrls: ['./ngo-available-food.component.css']
})
export class NgoAvailableFoodComponent {
  foodItems: string[] = [
    'Vam bhat',
    'Papad',
    'Lonch',
    'Shev bhaji',
    'Masale bhat',
    'Panner tikka'
  ];

  deliveryMethod: string = 'Pick Up';

  address: Address = {
    street: 'Shop No. 15, Gandhi Nagar',
    city: 'Nashik',
    state: 'Maharashtra',
    pincode: '422305',
    landmark: 'Near City Hospital'
  };

  isLoading: boolean = false;

  constructor() { }

  requestFood(): void {
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert('Food request submitted successfully! Blue Owens will contact you soon.');
    }, 2000);
  }
}