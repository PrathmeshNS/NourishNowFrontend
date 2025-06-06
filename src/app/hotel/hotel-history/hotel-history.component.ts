import { Component } from '@angular/core';

interface Contribution {
  srNo: number;
  date: string;
  ngoName: string;
  type: string;
  time: string;
}

@Component({
  selector: 'app-hotel-history',
  templateUrl: './hotel-history.component.html',
  styleUrls: ['./hotel-history.component.css']
})
export class HotelHistoryComponent {
  contributionData: Contribution[] = [
    {
      srNo: 1,
      date: "28-05-2025",
      ngoName: "Sambhaj Ngo",
      type: "Pick",
      time: "22:05:50",
    },
    {
      srNo: 2,
      date: "08-05-2025",
      ngoName: "Sambhaj Ngo",
      type: "Pick",
      time: "22:05:50",
    },
    {
      srNo: 3,
      date: "17-08-2025",
      ngoName: "Sambhaj Ngo",
      type: "Pick",
      time: "22:05:50",
    },
    {
      srNo: 4,
      date: "08-09-2025",
      ngoName: "Sambhaj Ngo",
      type: "Pick",
      time: "22:05:50",
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}