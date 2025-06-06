import { Component } from '@angular/core';

interface FoodItem {
  name: string;
  category: string;
}


@Component({
  selector: 'app-hotel-add-meal',
  templateUrl: './hotel-add-meal.component.html',
  styleUrls: ['./hotel-add-meal.component.css']
})
export class HotelAddMealComponent {
  newFoodItem: string = '';
  foodItems: FoodItem[] = [
    { name: 'Rice', category: 'Grains' },
    { name: 'Curry', category: 'Main Course' },
    { name: 'Bread', category: 'Bakery' },
    { name: 'Rice', category: 'Grains' }
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

  constructor() { }

  addFoodItem(): void {
    if (this.newFoodItem.trim()) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        const category = this.getFoodCategory(this.newFoodItem.trim());
        this.foodItems.push({
          name: this.newFoodItem.trim(),
          category: category
        });

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
      const category = this.getFoodCategory(this.editingValue.trim());
      this.foodItems[index] = {
        name: this.editingValue.trim(),
        category: category
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
      const donationData = {
        foodItems: this.foodItems,
        deliveryType: this.deliveryType,
        servingSize: this.servingSize,
        timestamp: new Date().toISOString()
      };

      console.log('Food donation submitted:', donationData);

      this.isSubmitting = false;
      this.showToastMessage('Food donation submitted successfully! Thank you for your contribution.', 'success');

      // Reset form after successful submission
      this.resetForm();
    }, 2000);
  }

  private getFoodCategory(foodName: string): string {
    const categories: { [key: string]: string[] } = {
      'Grains': ['rice', 'wheat', 'quinoa', 'barley', 'oats'],
      'Vegetables': ['potato', 'tomato', 'onion', 'carrot', 'spinach', 'cabbage'],
      'Fruits': ['apple', 'banana', 'orange', 'mango', 'grapes'],
      'Dairy': ['milk', 'cheese', 'yogurt', 'butter'],
      'Protein': ['chicken', 'fish', 'eggs', 'beans', 'lentils'],
      'Bakery': ['bread', 'cake', 'cookies', 'pastry'],
      'Main Course': ['curry', 'soup', 'stew', 'pasta', 'pizza'],
      'Snacks': ['chips', 'crackers', 'nuts', 'popcorn']
    };

    const lowerFoodName = foodName.toLowerCase();

    for (const [category, items] of Object.entries(categories)) {
      if (items.some(item => lowerFoodName.includes(item))) {
        return category;
      }
    }

    return 'Other';
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
}