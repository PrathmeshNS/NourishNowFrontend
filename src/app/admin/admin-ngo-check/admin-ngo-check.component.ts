import { Component, Inject, Renderer2 } from '@angular/core';
import { NavbarClickService } from '../service/navbar-click.service';

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
  selector: 'app-admin-ngo-check',
  templateUrl: './admin-ngo-check.component.html',
  styleUrls: ['./admin-ngo-check.component.css']
})
export class AdminNgoCheckComponent {
  isDarkMode = false;
  verified: boolean = true;
  myLink: string = ""

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  constructor(private navClick: NavbarClickService) {
    this.checkNavbarClick()
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
    if (linkDataValue === "ngoverified" || linkDataValue === "verified") {
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
      name: "Sambhaj",
      email: 'sambhaj@gmail.com',
      contactNo: '7951******',
      fullAddress: 'New Delhi, Delhi.',
      city: 'Delhi',
      pincode: '865452',
      dateOfJoining: '5-march-2015'
    },
    {
      id: '2',
      registrationNo: '87456dafsd45123ffdgdf',
      name: "XYZ",
      email: 'xya@gmail.com',
      contactNo: '8288******',
      fullAddress: 'Xyz Nagar, Xyz Road, Xyz',
      city: 'XYZ',
      pincode: '451232',
      dateOfJoining: '28-may-2025'
    },
  ];

}