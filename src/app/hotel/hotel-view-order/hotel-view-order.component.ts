import { Component, HostListener } from '@angular/core';
import { TemporaryMealBookingDetails } from 'src/app/entity/TemporaryMealBookingDetails';
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

  ngoList: NGO[] = [
    {
      id: '1',
      name: 'Sambhaj NGO',
      address: 'Sambhaji Chauk, Burud Galli, Vinchur',
      phone: '9359519620',
      city: 'Nashik',
      pincode: '422305',
      category: 'Food Security',
      rating: 4.8,
      verified: true,
      featured: true,
      status: 'pending',
      backgroundImage: '/placeholder.svg?height=400&width=350',
      yearsActive: 8
    },
    {
      id: '2',
      name: 'Hope Foundation',
      address: 'MG Road, Civil Lines, Mumbai',
      phone: '9876543210',
      city: 'Mumbai',
      pincode: '400001',
      category: 'Education',
      rating: 4.6,
      verified: true,
      featured: false,
      status: 'pending',
      backgroundImage: '/placeholder.svg?height=400&width=350',
      yearsActive: 12
    },
    {
      id: '3',
      name: 'Care & Share',
      address: 'Sector 15, Chandigarh',
      phone: '9123456789',
      city: 'Chandigarh',
      pincode: '160015',
      category: 'Healthcare',
      rating: 4.9,
      verified: true,
      featured: false,
      status: 'pending',
      backgroundImage: '/placeholder.svg?height=400&width=350',
      yearsActive: 15
    },
    {
      id: '4',
      name: 'Green Earth Initiative',
      address: 'Koramangala, Bangalore',
      phone: '9988776655',
      city: 'Bangalore',
      pincode: '560034',
      category: 'Environment',
      rating: 4.4,
      verified: false,
      featured: false,
      status: 'pending',
      backgroundImage: '/placeholder.svg?height=400&width=350',

      yearsActive: 5
    },
  ];

  hasMoreNgos: boolean = true;
  isLoading: boolean = false;
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  constructor(private temporaryMealService: TemporaryMealDetailsServiceService, private userService:UserServiceService) { }

  ngOnInit(): void {
    this.getTemporaryMealbooked(this.userService.userService.id)
    // Initialize component
  }

  acceptNgo(ngo: NGO): void {
    // Always allow accepting
    ngo.status = 'accepted';
    this.showToastMessage(`${ngo.name} has been accepted successfully!`, 'success');

    // Handle accept logic here
    console.log('NGO accepted:', ngo);
  }

  rejectNgo(ngo: NGO): void {
    // Always allow rejecting
    if (confirm(`Are you sure you want to reject ${ngo.name}?`)) {
      ngo.status = 'rejected';
      this.showToastMessage(`${ngo.name} has been rejected.`, 'error');

      // Handle reject logic here
      console.log('NGO rejected:', ngo);
    }
  }

  loadMoreNgos(): void {
    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      // Add more NGOs to the list
      const newNgos: NGO[] = [
        {
          id: '7',
          name: 'Unity Foundation',
          address: 'Anna Nagar, Chennai',
          phone: '9876543211',
          city: 'Chennai',
          pincode: '600040',
          category: 'Women Empowerment',
          rating: 4.3,
          verified: true,
          featured: false,
          status: 'pending',
          backgroundImage: '/placeholder.svg?height=400&width=350',
          yearsActive: 6
        }
      ];

      this.ngoList.push(...newNgos);
      this.isLoading = false;

      // Check if there are more NGOs to load
      if (this.ngoList.length >= 10) {
        this.hasMoreNgos = false;
      }

      this.showToastMessage('More NGOs loaded successfully!', 'success');
    }, 1500);
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
        console.log("From",value)
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}