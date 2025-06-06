import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

interface Activity {
  name: string;
  action: string;
  details: string;
  time: string;
  avatar: string;
  foodImage: string;
  type: string;
  typeIcon: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.6s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        animate('0.8s ease-in-out', keyframes([
          style({ transform: 'scale(0)', opacity: 0, offset: 0 }),
          style({ transform: 'scale(1.2)', opacity: 0.8, offset: 0.6 }),
          style({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
      ])
    ]),
    trigger('slideInFromRight', [
      transition(':enter', [
        style({ transform: 'translateX(50px)', opacity: 0 }),
        animate('0.4s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DashboardComponent {

  // Animated counters
  animatedNgoCount: number = 0;
  animatedHotelCount: number = 0;
  animatedDonorCount: number = 0;

  // Target values
  ngoCount: number = 455;
  hotelCount: number = 455;
  donorCount: number = 455;

  // Impact data
  todayMeals: number = 1247;
  peopleFed: number = 892;
  wasteReduced: number = 750;

  // Visual elements
  floatingFoods: string[] = ['🍛', '🍞', '🥗', '🍎', '🥘', '🍲'];
  peopleArray: number[] = Array.from({ length: 10 }, (_, i) => i);

  hearts = [
    { delay: '0s', left: '10%', size: '1rem' },
    { delay: '1s', left: '20%', size: '1.5rem' },
    { delay: '2s', left: '30%', size: '1rem' },
    { delay: '3s', left: '40%', size: '1.2rem' },
    { delay: '4s', left: '50%', size: '1rem' },
    { delay: '5s', left: '60%', size: '1.3rem' },
    { delay: '6s', left: '70%', size: '1rem' },
    { delay: '7s', left: '80%', size: '1.4rem' },
    { delay: '8s', left: '90%', size: '1rem' }
  ];

  liveActivities: Activity[] = [
    {
      name: 'Hotel Sunshine',
      action: 'donated 25 meals',
      details: 'Vam bhat, Papad, Masale bhat and more delicious items',
      time: '2 minutes ago',
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      foodImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      type: 'donation',
      typeIcon: 'fas fa-gift'
    },
    {
      name: 'Hope Foundation',
      action: 'picked up donation',
      details: 'Successfully collected 25 meals from Hotel Sunshine',
      time: '15 minutes ago',
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      foodImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      type: 'pickup',
      typeIcon: 'fas fa-truck'
    },
    {
      name: 'Blue Owens Restaurant',
      action: 'joined as partner',
      details: 'New restaurant partner ready to donate excess food',
      time: '1 hour ago',
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      foodImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      type: 'registration',
      typeIcon: 'fas fa-user-plus'
    },
    {
      name: 'Care Foundation',
      action: 'distributed 120 meals',
      details: 'Food distribution completed in Gandhi Nagar area',
      time: '2 hours ago',
      avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      foodImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-za8VRmF8yBnCjBmhe1RB1QLVQDeniM.png',
      type: 'distribution',
      typeIcon: 'fas fa-hands'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.animateCounters();
    this.simulateLiveUpdates();
  }

  animateCounters(): void {
    // Animate NGO count
    const ngoInterval = setInterval(() => {
      if (this.animatedNgoCount < this.ngoCount) {
        this.animatedNgoCount += Math.ceil((this.ngoCount - this.animatedNgoCount) / 10);
      } else {
        clearInterval(ngoInterval);
      }
    }, 50);

    // Animate Hotel count
    const hotelInterval = setInterval(() => {
      if (this.animatedHotelCount < this.hotelCount) {
        this.animatedHotelCount += Math.ceil((this.hotelCount - this.animatedHotelCount) / 10);
      } else {
        clearInterval(hotelInterval);
      }
    }, 60);

    // Animate Donor count
    const donorInterval = setInterval(() => {
      if (this.animatedDonorCount < this.donorCount) {
        this.animatedDonorCount += Math.ceil((this.donorCount - this.animatedDonorCount) / 10);
      } else {
        clearInterval(donorInterval);
      }
    }, 70);
  }

  simulateLiveUpdates(): void {
    setInterval(() => {
      this.todayMeals += Math.floor(Math.random() * 3) + 1;
      this.peopleFed += Math.floor(Math.random() * 2) + 1;
      this.wasteReduced += Math.floor(Math.random() * 5) + 1;
    }, 5000);
  }

  joinAsNGO(): void {
    alert('Redirecting to NGO registration...');
  }

  joinAsRestaurant(): void {
    alert('Redirecting to Restaurant registration...');
  }
}