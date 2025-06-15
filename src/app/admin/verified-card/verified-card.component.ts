import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Users } from "src/app/entity/Users";

interface CardData {
  id: string;
  registrationNo: string;
  email: string;
  contactNo: string;
  fullAddress: string;
  city: string;
  pincode: string;
  dateOfJoining: string;
}

@Component({
  selector: 'app-verified-card',
  templateUrl: './verified-card.component.html',
  styleUrls: ['./verified-card.component.css']
})
export class VerifiedCardComponent {

  @Input() verifiedUser: Users[] = [];

  cards: CardData[] = [
    {
      id: '1',
      registrationNo: '87456dafsd45123ffdgdf',
      email: 'blue@gmail.com',
      contactNo: '9788******',
      fullAddress: 'Sambhaji Chauk, Burud Galli, Vinchur',
      city: 'Nashik',
      pincode: '420123',
      dateOfJoining: '28-march-2025'
    },
    {
      id: '2',
      registrationNo: '87456dafsd45123ffdgdf',
      email: 'blue@gmail.com',
      contactNo: '9788******',
      fullAddress: 'Sambhaji Chauk, Burud Galli, Vinchur',
      city: 'Nashik',
      pincode: '420123',
      dateOfJoining: '28-march-2025'
    }
  ];

  trackByFn(index: number, item: CardData): string {
    return item.id;
  }

  acceptRequest(id: string) {
    console.log('Accepting request:', id);
    // Implement accept logic
  }

  declineRequest(id: string) {
    console.log('Declining request:', id);
    // Implement decline logic
  }
}