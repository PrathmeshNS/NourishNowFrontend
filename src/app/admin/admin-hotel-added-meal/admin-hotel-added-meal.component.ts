import { Component, Inject, Renderer2, type OnInit, } from "@angular/core"
import { AvailableFood } from "src/app/entity/AvailableFood";
import { AvailableFoodServiceService } from "src/app/service/available-food-service.service";

@Component({
  selector: 'app-admin-hotel-added-meal',
  templateUrl: './admin-hotel-added-meal.component.html',
  styleUrls: ['./admin-hotel-added-meal.component.css']
})
export class AdminHotelAddedMealComponent {

  isDarkMode = false;

  availableFood: AvailableFood[] = [];

  hotels =
    [
      {
        name: 'Grand Palace Hotel',
        status: 'Available Now',
        foodItems: [
          { category: 'Food Item', items: 'Rice, Curry, Bread, Rice, ' },
        ],
        servingCapacity: '50-80 people',
        freshness: 'Fresh today',
        contact: '+91 98765 43210',
        location: 'MG Road, Bangalore, Karnataka'
      },
      {
        name: 'Grand Palace Hotel',
        status: 'Available Now',
        foodItems: [
          { category: 'Main Course', items: 'Rice, Curry, Bread' },
        ],
        servingCapacity: '50-80 people',
        freshness: 'Fresh today',
        contact: '+91 98765 43210',
        location: 'MG Road, Bangalore, Karnataka'
      }
    ];

  constructor(private availableFoodService: AvailableFoodServiceService) { }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }


  getAllAvailableFood() {
    this.availableFoodService.getAvailableFood().subscribe({
      next: (value) => {
        this.availableFood = value;
      },
      error: (err) => {
        console.log(err)
      },
    })
  }

}