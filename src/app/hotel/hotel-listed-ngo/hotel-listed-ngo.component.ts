import { Component } from '@angular/core';

interface AddressCard {
  name: string;
  contactNo: string;
  city: string;
  pincode: string;
  fullAddress: string;
}

@Component({
  selector: 'app-hotel-listed-ngo',
  templateUrl: './hotel-listed-ngo.component.html',
  styleUrls: ['./hotel-listed-ngo.component.css'],
})
export class HotelListedNgoComponent {
  addressCards: AddressCard[] = [
    {
      name: 'Sambhaji Ngo',
      contactNo: '93595******',
      city: 'Nashik',
      pincode: '422305',
      fullAddress: 'Sambhaji Chauk, Panchvati, Nashik'
    },
    {
      name: 'World Heri',
      contactNo: '7965******',
      city: 'Vdsfsdf',
      pincode: '456789',
      fullAddress: 'Sambhaji Chauk, Panchvati, Nashik'
    },
    {
      name: 'World Heri',
      contactNo: '7965******',
      city: 'Vdsfsdf',
      pincode: '456789',
      fullAddress: 'Sambhaji Chauk, Panchvati, Nashik'
    },
    {
      name: 'Sambhaji Ngo',
      contactNo: '93595******',
      city: 'Nashik',
      pincode: '422305',
      fullAddress: 'Sambhaji Chauk, Panchvati, Nashik'
    }
  ];
}