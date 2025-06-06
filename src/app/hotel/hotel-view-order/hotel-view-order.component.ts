import { Component, HostListener } from '@angular/core';

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
  totalDonations: number;
  peopleHelped: number;
  yearsActive: number;
}


@Component({
  selector: 'app-hotel-view-order',
  templateUrl: './hotel-view-order.component.html',
  styleUrls: ['./hotel-view-order.component.css']
})
export class HotelViewOrderComponent {
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
      totalDonations: 1250,
      peopleHelped: 5600,
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
      totalDonations: 890,
      peopleHelped: 3200,
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
      totalDonations: 2100,
      peopleHelped: 8900,
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
      totalDonations: 450,
      peopleHelped: 1200,
      yearsActive: 5
    },
    {
      id: '5',
      name: 'Helping Hands',
      address: 'Connaught Place, New Delhi',
      phone: '9445566778',
      city: 'New Delhi',
      pincode: '110001',
      category: 'Community Service',
      rating: 4.7,
      verified: true,
      featured: true,
      status: 'pending',
      backgroundImage: '/placeholder.svg?height=400&width=350',
      totalDonations: 1800,
      peopleHelped: 6700,
      yearsActive: 10
    },
    {
      id: '6',
      name: 'Smile Foundation',
      address: 'Park Street, Kolkata',
      phone: '9334455667',
      city: 'Kolkata',
      pincode: '700016',
      category: 'Child Welfare',
      rating: 4.5,
      verified: true,
      featured: false,
      status: 'pending',
      backgroundImage: '/placeholder.svg?height=400&width=350',
      totalDonations: 950,
      peopleHelped: 4100,
      yearsActive: 7
    }
  ];

  hasMoreNgos: boolean = true;
  isLoading: boolean = false;
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';

  constructor() { }

  ngOnInit(): void {
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
          totalDonations: 720,
          peopleHelped: 2800,
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
}