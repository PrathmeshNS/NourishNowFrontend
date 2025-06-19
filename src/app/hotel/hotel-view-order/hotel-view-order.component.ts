import { Component, HostListener } from '@angular/core';
import { TemporaryMealBookingDetails } from 'src/app/entity/TemporaryMealBookingDetails';
import { MealBookingStatus } from 'src/app/enums/MealBookingStatus';
import { TemporaryMealDetailsServiceService } from 'src/app/service/temporary-meal-details-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

interface NGO {
  id: string;
  name: string;
  address: string;
  phone: string;
  city: string;
  pincode: string;
  category: string;
  rating: number;
  verified: boolean;
  featured: boolean;
  status: 'pending' | 'accepted' | 'rejected';
  backgroundImage: string;
  yearsActive: number;
}


@Component({
  selector: 'app-hotel-view-order',
  templateUrl: './hotel-view-order.component.html',
  styleUrls: ['./hotel-view-order.component.css']
})
export class HotelViewOrderComponent {

  tempMealDetails: TemporaryMealBookingDetails[] = [];
  mealType = MealBookingStatus;


  hasMoreNgos: boolean = true;
  isLoading: boolean = false;
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private temporaryMealService: TemporaryMealDetailsServiceService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getTemporaryMealbooked(JSON.parse(sessionStorage.getItem("hId")!))  
  }

  acceptNgo(tempMeal: TemporaryMealBookingDetails): void {
    // Always allow accepting
    tempMeal.mealBookingStatus = this.mealType.ACCEPTED;
    
    this.temporaryMealService.addTemporaryMeal(JSON.parse(sessionStorage.getItem("hId")!)).subscribe({
      next:(value)=> {
        console.log(value)
        this.showToastMessage(`${tempMeal.ngoUsers.name} has been accepted successfully!`, 'success');
      },
      error:(err)=>{
        console.log(err)
      },
    })
    // Handle accept logic here
    console.log('NGO accepted:', tempMeal.tmdId);
  }

  rejectNgo(tempMeal: TemporaryMealBookingDetails): void {
    // Always allow rejecting
    if (confirm(`Are you sure you want to reject ${tempMeal.ngoUsers.name}?`)) {
      tempMeal.mealBookingStatus = this.mealType.REJECTED;
      this.showToastMessage(`${tempMeal.ngoUsers.name} has been rejected.`, 'error');

      // Handle reject logic here
      console.log('NGO rejected:', tempMeal.ngoUsers.name);
    }
  }

  loadMoreNgos(): void {
    this.isLoading = true;
  }

  private showToastMessage(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  getTemporaryMealbooked(hotelId: number) {
    this.temporaryMealService.getHotelBookedMealById(hotelId).subscribe({
      next: (value) => {
        console.log("From", value)
        this.tempMealDetails = value;
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}