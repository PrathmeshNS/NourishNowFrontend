import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { History } from 'src/app/entity/History';
import { Users } from 'src/app/entity/Users';
import { HistoryServiceService } from 'src/app/service/history-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-ngo-listed-hotel',
  templateUrl: './ngo-listed-hotel.component.html',
  styleUrls: ['./ngo-listed-hotel.component.css']
})
export class NgoListedHotelComponent {

  private hotelUser: Users[] = [];
  ngoId = 0;

  constructor(private router: Router, private userService: UserServiceService) {
    this.checkUser()
    this.getAllVerfiedHotel()
  }

  private getAllHotel() {
    this.userService.getAllHotel().subscribe({
      next: (value) => {
        this.hotelUser = value;
      },
      error: (err) => {

      },
    })
  }


  private checkUser() {
    if (sessionStorage.getItem("nId") == null) {
      this.router.navigate(['../login'])
    }
    else {
      const str = JSON.parse(sessionStorage.getItem("nId")!)
      if (str != null) {
        this.ngoId = Number.parseInt(str);
      }
    }
  }

  getAllVerfiedHotel() {
    this.getAllHotel()
    const verifiedHotel: Users[] = []
    for (let index = 0; index < this.hotelUser.length; index++) {
      if (this.hotelUser[index].status.toString() === 'TRUE') {
        verifiedHotel.push(this.hotelUser[index])
      }
    }
    return verifiedHotel;
  }
}