import { Component } from '@angular/core';

interface Contribution {
  id: number;
  date: string;
  ngoName: string;
  type: string;
  time: string;
}


@Component({
  selector: 'app-ngo-history',
  templateUrl: './ngo-history.component.html',
  styleUrls: ['./ngo-history.component.css']
})
export class NgoHistoryComponent {

  contributions: Contribution[] = [
    { id: 1, date: "28-05-2025", ngoName: "Sambhaj Ngo", type: "Pick", time: "22:05:50" },
    { id: 2, date: "08-05-2025", ngoName: "Sambhaj Ngo", type: "Delivered", time: "22:05:50" },
    { id: 3, date: "17-08-2025", ngoName: "Sambhaj Ngo", type: "Pick", time: "22:05:50" },
    { id: 4, date: "08-09-2025", ngoName: "Sambhaj Ngo", type: "Delivered", time: "22:05:50" }
  ];

  filteredContributions: Contribution[] = [];
  searchTerm: string = '';
  filterType: string = 'all';

  contributionTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'pick', label: 'Pick' },
    { value: 'drop', label: 'Drop' },
  ];

  ngOnInit(): void {
    this.filteredContributions = [...this.contributions];
  }

  applyFilters(): void {
    this.filteredContributions = this.contributions.filter(contribution => {
      const matchesSearch =
        contribution.ngoName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        contribution.type.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesFilter =
        this.filterType === 'all' ||
        contribution.type.toLowerCase() === this.filterType.toLowerCase();

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
    return new Set(this.contributions.map(c => c.ngoName)).size;
  }

  getTotalTypes(): number {
    return new Set(this.contributions.map(c => c.type)).size;
  }
}