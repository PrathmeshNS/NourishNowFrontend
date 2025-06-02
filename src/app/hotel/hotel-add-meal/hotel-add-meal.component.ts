import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-add-meal',
  templateUrl: './hotel-add-meal.component.html',
  styleUrls: ['./hotel-add-meal.component.css']
})
export class HotelAddMealComponent {

  title = 'HotelAddMeal';
  foodItems: string = '';
  deliveryType: string = 'Delivery';
  personCount: number | null = null;
  foodContainer: string[] = ["79dfsaff", "sgfdf5422", "dfsf64553w", "saf79541", "574sfsadfa",
    "fssafsaf75421", "5742sfdas"
  ];


  addItem(): void {
    if (this.foodContainer.length <= 0) {
      alert("need to add food item")
    }
    else {
      console.log('Delivery Type:', this.deliveryType);
      console.log('Person Count:', this.personCount);
      alert('Item added successfully!');
      console.log(this.foodContainer)
      this.resetForm()
    }
  }

  addFood() {
    if (this.foodItems != null && this.foodItems != "") {
      this.foodContainer.push(this.foodItems);
      this.foodItems = ""
    }
    else {
      alert("The Food Item Name Requied To Add Into List!!")
    }
  }

  private resetForm(): void {
    this.foodItems = '';
    this.deliveryType = 'Delivery';
    this.personCount = null;
    this.removeFood()
  }

  private removeFood(): void {
    this.foodContainer.pop()
    for (let index = 0; index < this.foodContainer.length + 1; index++) {
      this.foodContainer.pop()
    }
  }
}
