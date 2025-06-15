import { Component } from '@angular/core';
import { History } from 'src/app/entity/History';
import { HistoryServiceService } from 'src/app/service/history-service.service';

export interface DonationHistory {
  srNo: number;
  hotelName: string;
  ngoName: string;
  date: string;
  time: string;
  type: 'Pickup' | 'Delivery';
}


@Component({
  selector: 'app-admin-ngo-hotel-meal-history',
  templateUrl: './admin-ngo-hotel-meal-history.component.html',
  styleUrls: ['./admin-ngo-hotel-meal-history.component.css']
})
export class AdminNgoHotelMealHistoryComponent {
  isDarkMode = false;

  history: History[] = [];


  constructor(private historyService:HistoryServiceService){}

  ngOnInit() {
    this.getAllHistory();
  }


  // Method to get CSS class based on type
  getTypeClass(type: string): string {
    return type.toLowerCase() === 'pickup' ? 'type-pickup' : 'type-delivery';
  }

  // Method to format date
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  private getAllHistory() {
    this.historyService.getAllHistory().subscribe({
      next:(value) =>{
        this.history = value;
      },
      error:(err) =>{
        console.log(err)
      },
    })
  }


}