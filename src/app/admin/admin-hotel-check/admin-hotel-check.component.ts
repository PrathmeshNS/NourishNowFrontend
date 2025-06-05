import { Component, EventEmitter, Output } from "@angular/core"
import { NavbarClickService } from "../service/navbar-click.service";


interface CardData {
  id: string;
  registrationNo: string;
  name: string
  email: string;
  contactNo: string;
  fullAddress: string;
  city: string;
  pincode: string;
  dateOfJoining: string;
}

@Component({
  selector: 'app-admin-hotel-check',
  templateUrl: './admin-hotel-check.component.html',
  styleUrls: ['./admin-hotel-check.component.css'],
})
export class AdminHotelCheckComponent {
  isDarkMode = false;
  verified: boolean = true;
  myLink: string = ''

  constructor(private navClick: NavbarClickService) {
    this.checkNavbarClick()
  }


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }


  private checkNavbarClick() {
    this.navClick.linkData$.subscribe({
      next: (value) => {
        this.myLink = value;
      },
    })
    this.navClick.subLinkData$.subscribe({
      next: (value) => {
        this.myLink += value
        this.changeCard(this.myLink)
        this.myLink = ""
      },
    })
  }

  private changeCard(linkDataValue: String) {
    console.log(linkDataValue)
    if (linkDataValue === "hotelverified" || linkDataValue === "verified") {
      this.verified = true
    }
    else {
      this.verified = false
    }
  }

  cards: CardData[] = [
    {
      id: '8',
      registrationNo: '87sadf32v520.x',
      name:"Samaj Kalyan",
      email: 'kinara@gmail.com',
      contactNo: '7951******',
      fullAddress: 'Samaj Kalyan, Adgaon.',
      city: 'Nashik',
      pincode: '422003',
      dateOfJoining: '2-march-2015'
    },
    {
      id: '2',
      registrationNo: '87456dafsd45123ffdgdf',
      name:"Tarangan",
      email: 'tarangan@gmail.com',
      contactNo: '8288******',
      fullAddress: 'Sambhaji Chauk, Burud Galli, Vinchur',
      city: 'Nashik',
      pincode: '420123',
      dateOfJoining: '28-march-2025'
    },
    {
      id: '10',
      registrationNo: '32d3wde1321dsf32',
      name: "MyWish",
      email: 'my.wish@gmail.com',
      contactNo: '8745******',
      fullAddress: 'Wish Nagar, Wish Wadi, Wish.',
      city: 'Wish',
      pincode: '143143',
      dateOfJoining: '28-may-2025'
    },
    {
      id: '23',
      registrationNo: '1434dsfsd42dfdsd',
      name: "Pranvi",
      email: 'pranvi@gmail.com',
      contactNo: '852******',
      fullAddress: 'Sambhaji Chauk, Burud Galli, Vinchur',
      city: 'Nashik',
      pincode: '422305',
      dateOfJoining: '08-may-2025'
    }
  ];
}