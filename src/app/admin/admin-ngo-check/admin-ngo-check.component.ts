import { Component, Inject, Renderer2 } from '@angular/core';
import { NavbarClickService } from '../service/navbar-click.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Users } from 'src/app/entity/Users';



@Component({
  selector: 'app-admin-ngo-check',
  templateUrl: './admin-ngo-check.component.html',
  styleUrls: ['./admin-ngo-check.component.css']
})
  
export class AdminNgoCheckComponent {
  isDarkMode = false;
  verified: boolean = true;
  myLink: string = ""

  private ngoUser: Users[] = [];


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  constructor(private navClick: NavbarClickService, private userService: UserServiceService) {
    this.checkNavbarClick()
  }

  ngOnInit() {
    this.getAllNgo()
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


  private getAllNgo() {
    this.userService.getAllNgo().subscribe({
      next: (value) => {
        this.ngoUser = value;
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

  getAllVerifiedNgo() {
    const verifiedNgo: Users[] = [];
    for (let index = 0; index < this.ngoUser.length; index++) {
      if (this.ngoUser[index].status.toString() === 'TRUE') {
        verifiedNgo.push(this.ngoUser[index])
      }
    }
    return verifiedNgo
  }

  getAllUnVerifiedNgo() {
    const unVerifiedNgo: Users[] = [];
    for (let index = 0; index < this.ngoUser.length; index++) {
      if (this.ngoUser[index].status.toString() === 'FALSE') {
        unVerifiedNgo.push(this.ngoUser[index])
      }
    }
    return unVerifiedNgo
  }


}