import { Component } from '@angular/core';
import { Users } from 'src/app/entity/Users';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-hotel-listed-ngo',
  templateUrl: './hotel-listed-ngo.component.html',
  styleUrls: ['./hotel-listed-ngo.component.css'],
})
  
export class HotelListedNgoComponent {

  ngoUsers: Users[] = [];

  constructor(private userService: UserServiceService) {
  }
  
  ngOnInit() {
    this.getAllNgo();
  }

  private getAllNgo() {
    this.userService.getAllNgo().subscribe({
      next: (value) => {
        this.ngoUsers = value
      },
      error: (err) => {
        console.log(err)
      },
    })
  }


}