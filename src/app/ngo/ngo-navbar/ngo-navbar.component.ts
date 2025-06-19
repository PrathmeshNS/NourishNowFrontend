import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface NavigationTab {
  id: string;
  label: string;
  icon: string;
  notifications: number;
}

interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface MenuItem {
  label: string;
  icon: string;
  action: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'success' | 'warning' | 'info';
  read: boolean;
}


@Component({
  selector: 'app-ngo-navbar',
  templateUrl: './ngo-navbar.component.html',
  styleUrls: ['./ngo-navbar.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class NgoNavbarComponent {
  activeTab: string = 'add-meal';
  showUserMenu: boolean = false;
  showNotifications: boolean = false;
  hasNotifications: boolean = true;

  navigationTabs: NavigationTab[] = [
    { id: 'view-meal', label: 'View Meal', icon: 'view-meal', notifications: 0 },
    { id: 'history', label: 'History', icon: 'history', notifications: 0 },
    { id: 'hotel', label: 'Listed Hotel', icon: 'hotel', notifications: 3 },
    { id: 'booked', label: 'View Booked Meal', icon: 'booked', notifications: 5 }
  ];

  userProfile: UserProfile = {
    name: 'Vaishnavi Pawar',
    email: 'vaishnavi@example.com',
    role: 'NGO Volunteer',
    avatar: '' // Add avatar URL if available
  };

  userMenuItems: MenuItem[] = [
    { label: 'My Profile', icon: 'profile', action: 'profile' },
    { label: 'Settings', icon: 'settings', action: 'settings' },
    { label: 'Help & Support', icon: 'help', action: 'help' },
    { label: 'Logout', icon: 'logout', action: 'logout' }
  ];

  notifications: Notification[] = [
    {
      id: '1',
      title: 'New Food Donation',
      message: 'A new food donation has been added to your area.',
      time: '2 minutes ago',
      type: 'success',
      read: false
    },
    {
      id: '2',
      title: 'Delivery Reminder',
      message: 'You have a scheduled delivery in 30 minutes.',
      time: '15 minutes ago',
      type: 'warning',
      read: false
    },
    {
      id: '3',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      time: '1 hour ago',
      type: 'info',
      read: true
    },
    {
      id: '4',
      title: 'New NGO Registration',
      message: 'A new NGO has registered in your network.',
      time: '2 hours ago',
      type: 'success',
      read: true
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateNotificationStatus();
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    this.closeDropdowns();

    // Handle tab navigation logic here
    console.log('Navigating to tab:', tabId);
    this.navigateUser(tabId)
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifications = false;
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    this.showUserMenu = false;
  }

  closeDropdowns(): void {
    this.showUserMenu = false;
    this.showNotifications = false;
  }

  handleMenuAction(action: string): void {
    this.closeDropdowns();

    switch (action) {
      case 'profile':
        console.log('Navigate to profile');
        this.router.navigate(['/profile']);
        break;
      case 'settings':
        console.log('Navigate to settings');
        this.router.navigate(['/settings']);
        break;
      case 'help':
        console.log('Navigate to help');
        this.router.navigate(['/help']);
        break;
      case 'logout':
        this.handleLogout();
        break;
      default:
        console.log('Unknown action:', action);
    }
  }

  markAsRead(notificationId: string): void {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.updateNotificationStatus();
    }
  }

  markAllAsRead(): void {
    this.notifications.forEach(notification => {
      notification.read = true;
    });
    this.updateNotificationStatus();
  }

  private updateNotificationStatus(): void {
    this.hasNotifications = this.notifications.some(n => !n.read);
  }

  private handleLogout(): void {
    if (confirm('Are you sure you want to logout?')) {
      console.log('Logging out...');
      // Handle logout logic here
      // this.authService.logout();
      // this.router.navigate(['/login']);
    }
  }

  private navigateUser(value: string) {
    switch (value) {
      case 'view-meal':
        console.log('Navigate to hotel');
        this.router.navigate(['./ngo']);
        break;
      case 'history':
        console.log('Navigate to history');
        this.router.navigate(['./ngo/history']);
        break;
      case 'hotel':
        console.log('Navigate to Listed-ngo');
        this.router.navigate(['./ngo/listed-hotel']);
        break;
      case 'booked':
        console.log('Navigate to View ordder');
        this.router.navigate(['./ngo/view-booked-meal']);
        break;
      default:
        console.log('Unknown action:', value);
    }
  }
}