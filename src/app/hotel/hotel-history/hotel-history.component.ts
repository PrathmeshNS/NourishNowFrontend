import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { History } from 'src/app/entity/History';
import { HistoryServiceService } from 'src/app/service/history-service.service';

@Component({
  selector: 'app-hotel-history',
  templateUrl: './hotel-history.component.html',
  styleUrls: ['./hotel-history.component.css']
})
export class HotelHistoryComponent {

  private id = 0;

  contributions: History[] = []

  filteredContributions: History[] = [];
  searchTerm: string = '';
  filterType: string = 'all';



  contributionTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'pick', label: 'Pick' },
    { value: 'delivery', label: 'Delivery' },
  ];

  ngOnInit(): void {
    console.log("get Calleed")
  }
  
  constructor(private historyservice: HistoryServiceService,private router:Router) {
    this.checkUser()
    this.getAllHistory();
   }


  getAllHistory() {
    this.historyservice.getHotelHistory(this.id).subscribe({
      next: (value) => {
        this.contributions = value;
        this.filteredContributions = [...this.contributions];

      },
      error: (err) => {
        console.log("error: ", err)
      },
    })
  }

  applyFilters(): void {
    this.filteredContributions = this.contributions.filter(contribution => {
      const matchesSearch =
        contribution.ngoUsers.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contribution.typeOfProviding.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesFilter =
        this.filterType === 'all' ||
        contribution.typeOfProviding.toLowerCase() === this.filterType.toLowerCase();

      return matchesSearch && matchesFilter;
    });
  }

  onSearchChange(event: any): void {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  onFilterChange(event: any): void {
    this.filterType = event.target.value;
    this.applyFilters();
  }

  getTypeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'pick':
        return 'bg-success text-white';
      case 'donation':
        return 'bg-purple text-white';
      default:
        return 'bg-secondary text-white';
    }
  }

  getTotalNgos(): number {
    return new Set(this.contributions.map(c => c.ngoUsers.name)).size;
  }

  getTotalTypes(): number {
    return new Set(this.contributions.map(c => c.typeOfProviding)).size;
  }

  private checkUser() {
    if (localStorage.getItem("hId") == null) {
      this.router.navigate(['../login'])
    }
    else {
      const str = localStorage.getItem('hId');
      if (str != null)
        this.id = Number.parseInt(str)
    }
  }

}