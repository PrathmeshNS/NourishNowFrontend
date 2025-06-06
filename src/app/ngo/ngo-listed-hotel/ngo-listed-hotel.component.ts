import { Component } from '@angular/core';

interface AddressCard {
  name: string;
  contactNo: string;
  city: string;
  pincode: string;
  fullAddress: string;
}

@Component({
  selector: 'app-ngo-listed-hotel',
  templateUrl: './ngo-listed-hotel.component.html',
  styleUrls: ['./ngo-listed-hotel.component.css']
})
export class NgoListedHotelComponent {
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