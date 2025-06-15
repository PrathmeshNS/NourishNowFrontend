import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableFood } from 'src/app/entity/AvailableFood';
import { TemporaryMealBookingDetails } from 'src/app/entity/TemporaryMealBookingDetails';
import { Users } from 'src/app/entity/Users';
import { MealBookingStatus } from 'src/app/enums/MealBookingStatus';
import { ReviewStatus } from 'src/app/enums/ReviewStatus';
import { UserRole } from 'src/app/enums/UserRole';
import { AvailableFoodServiceService } from 'src/app/service/available-food-service.service';
import { TemporaryMealDetailsServiceService } from 'src/app/service/temporary-meal-details-service.service';

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

  availableFood: AvailableFood[] = []

  private userDetails: Users = {
    id: 0,
    name: '',
    email: '',
    password: '',
    address: '',
    registrationNo: '',
    dateOfJoining: '',
    contactNo: '',
    website: '',
    city: '',
    pincode: 0,
    role: UserRole.NGO,
    status: ReviewStatus.TRUE
  };
  
  isLoading: boolean = false;

  constructor(private availableFoodService: AvailableFoodServiceService, private temporaryMealService: TemporaryMealDetailsServiceService, private router:Router) {
    this.getAllAvailableFood()
    this.checkUser()
  }

  requestFood(index: number): void {
    this.isLoading = true;
    const ngoId = localStorage.getItem("nId");

    if (ngoId != null)
      this.userDetails.id = Number.parseInt(ngoId);
    const temporaryMeal: TemporaryMealBookingDetails = {
      tmdId: 0,
      mealBookingStatus: MealBookingStatus.ACCEPTED,
      food: this.availableFood[index],
      ngoUsers:this.userDetails
    }

    this.temporaryMealService.addTemporaryMeal(temporaryMeal).subscribe({
      next: (value) => {
        console.log("from Next : ",value)
      },
      error: (err) => {
        console.log("from Error : ", err)
      },
    })
    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      alert('Food request submitted successfully! Blue Owens will contact you soon.');
    }, 2000);
  }

  getAllAvailableFood() {
    this.availableFoodService.getAvailableFood().subscribe({
      next: (value) => {
        this.availableFood = value;
        console.log(this.availableFood)
      },
      error: (err) => {
        console.log("Erro  : ", err)
      },
    })
  }

  private checkUser() {
    if (localStorage.getItem("nId") == null) {
      this.router.navigate(['../login'])
    }
  }
}