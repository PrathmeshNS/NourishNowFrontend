import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  donationStats = [
    {
      title: "Unused Ngos",
      count: 20,
      icon: "ngo-icon.svg",
    },
    {
      title: "Food Packet Shared",
      count: 45,
      icon: "food-icon.svg",
    },
    {
      title: "Active Donors",
      count: 30,
      icon: "donor-icon.svg",
    },
  ]
}
