import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TemporaryMealBookingDetails } from 'src/app/entity/TemporaryMealBookingDetails';
import { TemporaryMealDetailsServiceService } from 'src/app/service/temporary-meal-details-service.service';

@Component({
  selector: 'app-ngo-book-meal',
  templateUrl: './ngo-book-meal.component.html',
  styleUrls: ['./ngo-book-meal.component.css']
})
export class NgoBookMealComponent {

  temporaryMeal: TemporaryMealBookingDetails[] = [];

  private id = 0;

  constructor(private router: Router, private temporaryMealService: TemporaryMealDetailsServiceService) {
    this.checkUser()
    this.getAllBooking()
  }

  private checkUser() {
    if (localStorage.getItem("nId") == null) {
      this.router.navigate(['../login'])
    }
    else {
      const str = localStorage.getItem('nId');
      if (str != null) {
        this.id = Number.parseInt(str)
      }
    }
  }

  getAllBooking() {
    this.temporaryMealService.getNgoBookedMealById(this.id).subscribe({
      next: (value) => {
        this.temporaryMeal = value;
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

}