import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  statistics = [
    { title: 'Listed Ngo', count: 455, position: 'left' },
    { title: 'Listed Hotel', count: 455, position: 'right' },
    { title: 'Active Doner', count: 455, position: 'left' }
  ];
}
