import { Component } from '@angular/core';

@Component({
  selector: 'app-ngo-history',
  templateUrl: './ngo-history.component.html',
  styleUrls: ['./ngo-history.component.css']
})
export class NgoHistoryComponent {


  contributions = [
    { id: 1, date: '28-05-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 2, date: '08-05-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 3, date: '17-08-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 4, date: '08-09-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 5, date: '08-05-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 6, date: '17-08-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 7, date: '08-09-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 8, date: '08-05-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 9, date: '17-08-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' },
    { id: 10, date: '08-09-2025', ngoName: 'Sambhaj Ngo', type: 'Pick', time: '22:05:50' }
  ];
}
