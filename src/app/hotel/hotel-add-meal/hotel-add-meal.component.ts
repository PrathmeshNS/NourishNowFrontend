import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableFood } from 'src/app/entity/AvailableFood';
import { AvailableFoodServiceService } from 'src/app/service/available-food-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { __values } from 'tslib';

interface FoodItem {
  name: string;
}

@Component({
  selector: 'app-hotel-add-meal',
  templateUrl: './hotel-add-meal.component.html',
  styleUrls: ['./hotel-add-meal.component.css']
})
export class HotelAddMealComponent {
  newFoodItem: string = '';

  avaiableFood: AvailableFood = {
    aId: 0,
    dateTime: '',
    foodItem: [],
    approxPersonCanEat: 0,
    typeOfProviding: '',
    hotelUsers: this.availableFoodService.hotel
}

  foodItems: FoodItem[] = [
    { name: 'Rice' },{ name: 'Curry'},{ name: 'Bread' },{ name: 'Rice' }
  ];

  deliveryType: string = 'delivery';
  servingSize: number = 4;

  editingIndex: number = -1;
  editingValue: string = '';

  isLoading: boolean = false;
  isSubmitting: boolean = false;

  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private availableFoodService:AvailableFoodServiceService, private router:Router) { this.checkUser()}

  addFoodItem(): void {
    if (this.newFoodItem.trim()) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.foodItems.push({
          name: this.newFoodItem.trim(),
        });
        console.log(this.foodItems)

        this.newFoodItem = '';
        this.isLoading = false;

        this.showToastMessage('Food item added successfully!', 'success');
      }, 500);
    }
  }

  startEdit(index: number, currentValue: string): void {
    this.editingIndex = index;
    this.editingValue = currentValue;
  }

  saveEdit(index: number): void {
    if (this.editingValue.trim()) {
      this.foodItems[index] = {
        name: this.editingValue.trim(),
      };
      this.cancelEdit();
      this.showToastMessage('Food item updated successfully!', 'success');
    }
  }

  cancelEdit(): void {
    this.editingIndex = -1;
    this.editingValue = '';
  }

  deleteItem(index: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.foodItems.splice(index, 1);
      this.showToastMessage('Food item deleted successfully!', 'success');
    }
  }

  clearAllItems(): void {
    if (confirm('Are you sure you want to clear all items?')) {
      this.foodItems = [];
      this.showToastMessage('All items cleared successfully!', 'success');
    }
  }

  increaseServing(): void {
    if (this.servingSize < 100) {
      this.servingSize++;
    }
  }

  decreaseServing(): void {
    if (this.servingSize > 1) {
      this.servingSize--;
    }
  }

  submitFoodDonation(): void {
    if (this.foodItems.length === 0) {
      this.showToastMessage('Please add at least one food item!', 'error');
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      
      this.avaiableFood.foodItem =  this.foodItems.map(item =>item.name)
      this.avaiableFood.approxPersonCanEat = this.servingSize;
      this.avaiableFood.typeOfProviding = this.deliveryType;
      
      const hotelId = JSON.parse(sessionStorage.getItem("hId")!);

      if (hotelId != null) {
        this.avaiableFood.hotelUsers.id = Number.parseInt(hotelId);
      }
      
      this.availableFoodService.addAvailableFood(this.avaiableFood).subscribe({
        next:(value)=> {
          console.log(value)
        },
        error:(err) =>{
          console.log(err)
        },
      })

      this.isSubmitting = false;
      this.showToastMessage('Food donation submitted successfully! Thank you for your contribution.', 'success');

      // Reset form after successful submission
      this.resetForm();
    }, 2000);
  }

  private showToastMessage(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  private resetForm(): void {
    this.foodItems = [];
    this.deliveryType = 'delivery';
    this.servingSize = 4;
    this.newFoodItem = '';
    this.cancelEdit();
  }

  private checkUser() {
    if (sessionStorage.getItem("hId") == null) {
      this.router.navigate(['../login']) 
    }
  }

}