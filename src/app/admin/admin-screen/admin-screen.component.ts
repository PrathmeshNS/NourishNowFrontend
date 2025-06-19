import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

interface StatsCard {
  title: string;
  verified: any;
  unverified: number;
  color: string;
}

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent {


  adminName = 'Admin!!!';
  currentDate = 'Jun 2, 2025';
  isDarkMode = false;
  verifiedNgo: any = 0
  verifiedHotel: any = 0;
  unverifiedNgo = 0
  unverifiedHotel = 0



  constructor(private userService: UserServiceService, private router: Router) {
    this.checkUser()
  }

  ngOnInit() {
    this.callAllMethod();
  }


  statsCards: StatsCard[] = [
    {
      title: 'Ngo',
      verified: this.verifiedHotel,
      unverified: this.unverifiedNgo,
      color: 'pink'
    },
    {
      title: 'Hotel',
      verified: this.verifiedHotel,
      unverified: this.unverifiedHotel,
      color: 'blue'
    }
  ];


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  // getAllVerifiedNgo() {
  //   this.userService.getAllVerifiedNgo().subscribe({
  //     next: (value) => {
  //       console.log(value)
  //     },
  //     error: (error) => {

  //     },
  //   });
  // }


  // getAllVerifiedHotel() {
  //   this.userService.getAllVerifiedHotel().subscribe({
  //     next: (value) => {
  //       console.log(value)
  //     },
  //     error: (error) => {

  //     },
  //   });
  // }

  // getAllUnVerifiedNgo() {
  //   this.userService.getAllUnVerifiedNgo().subscribe({
  //     next: (value) => {
  //       console.log(value)
  //     },
  //     error: (error) => {

  //     },
  //   });
  // }

  // getAllUnVerifiedHotel() {
  //   this.userService.getAllUnVerifiedHotel().subscribe({
  //     next: (value) => {
  //       console.log(value)
  //     },
  //     error: (error) => {

  //     },
  //   });
  // }

  getNoOfHotel() {
    this.userService.getAllHotel().subscribe({
      next: (value) => {
        console.log("from next", value)
        this.verifiedHotel = value;
      },
      error: (value) => {
        console.log("from error", value)
      },
    })
  }

  getNoOfNgo() {
    this.userService.getAllNgo().subscribe({
      next: (value) => {
        console.log("from next", value);
        this.verifiedNgo = value;
      },
      error: (value) => {
        console.log("from error", value)
      },
    })
  }

  callAllMethod() {
    this.getNoOfHotel()
    this.getNoOfNgo()
  }

  private checkUser() {
    if (sessionStorage.getItem("aId") == null) {
      this.router.navigate(['../login'])
    }
  }
}