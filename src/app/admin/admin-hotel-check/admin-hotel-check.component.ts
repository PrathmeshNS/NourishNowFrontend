import { Component, EventEmitter, Output } from "@angular/core"
import { NavbarClickService } from "../service/navbar-click.service";
import { UserServiceService } from "src/app/service/user-service.service";
import { Users } from "src/app/entity/Users";



@Component({
  selector: 'app-admin-hotel-check',
  templateUrl: './admin-hotel-check.component.html',
  styleUrls: ['./admin-hotel-check.component.css'],
})
export class AdminHotelCheckComponent {
  isDarkMode = false;
  verified: boolean = true;
  myLink: string = ''

  private hotelUser: Users[] = [];

  constructor(private navClick: NavbarClickService, private userService: UserServiceService) {
    this.checkNavbarClick()
  }

  ngOnInit() {
    this.getAllhotel()
    this.getAllVerfiedHotel();
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
    if (linkDataValue === "HotelVerified" ) {
      this.verified = true
    }
    else {
      this.verified = false
    }
  }

  private getAllhotel() {
    this.userService.getAllHotel().subscribe({
      next: (value) => {
        this.hotelUser = value;
      },
    })
  }

  getAllVerfiedHotel() {
    const verifiedHotel: Users[] = []
    for (let index = 0; index < this.hotelUser.length; index++) {
      if (this.hotelUser[index].status.toString() === 'TRUE') {
        verifiedHotel.push(this.hotelUser[index])
      }
    }
    console.log(verifiedHotel)
    return verifiedHotel;
  }

  getAllUnVerfiedHotel() {
    const unVerifiedHotel: Users[] = []
    for (let index = 0; index < this.hotelUser.length; index++) {
      if (this.hotelUser[index].status.toString() === 'FALSE') {
        unVerifiedHotel.push(this.hotelUser[index])
      }
    }
    console.log(unVerifiedHotel)
    return unVerifiedHotel;
  }
}