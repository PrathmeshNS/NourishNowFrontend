import { Component } from '@angular/core';

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

  donationHistory: DonationHistory[] = [
    {
      srNo: 1,
      hotelName: 'Grand Palace Hotel',
      ngoName: 'Food For All NGO',
      date: '2024-01-15',
      time: '14:30',
      type: 'Pickup'
    },
    {
      srNo: 2,
      hotelName: 'Royal Inn Restaurant',
      ngoName: 'Helping Hands Foundation',
      date: '2024-01-15',
      time: '16:45',
      type: 'Delivery'
    },
    {
      srNo: 3,
      hotelName: 'Luxury Suites Hotel',
      ngoName: 'Care & Share Organization',
      date: '2024-01-16',
      time: '12:15',
      type: 'Pickup'
    },
    {
      srNo: 4,
      hotelName: 'City Center Hotel',
      ngoName: 'Meal Bridge NGO',
      date: '2024-01-16',
      time: '18:20',
      type: 'Delivery'
    },
    {
      srNo: 5,
      hotelName: 'Heritage Hotel',
      ngoName: 'Community Kitchen',
      date: '2024-01-17',
      time: '13:00',
      type: 'Pickup'
    },
    {
      srNo: 6,
      hotelName: 'Business Hotel',
      ngoName: 'Food Rescue Initiative',
      date: '2024-01-17',
      time: '15:30',
      type: 'Delivery'
    },
    {
      srNo: 7,
      hotelName: 'Garden View Resort',
      ngoName: 'Nourish Network',
      date: '2024-01-18',
      time: '11:45',
      type: 'Pickup'
    },
    {
      srNo: 8,
      hotelName: 'Metro Plaza Hotel',
      ngoName: 'Hope Foundation',
      date: '2024-01-18',
      time: '17:10',
      type: 'Delivery'
    }
  ];

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


}