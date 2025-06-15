import { Component, Input, Output, EventEmitter } from "@angular/core"
import { Users } from "src/app/entity/Users";

interface CardData {
  id: string;
  registrationNo: string;
  name:string
  email: string;
  contactNo: string;
  fullAddress: string;
  city: string;
  pincode: string;
  dateOfJoining: string;
}

@Component({
  selector: 'app-unverified-card',
  templateUrl: './unverified-card.component.html',
  styleUrls: ['./unverified-card.component.css']
})
export class UnverifiedCardComponent {
  
  @Input() unVerifiedUser: Users[] = [];

  trackByFn(index: number, item: Users): number {
    return item.id;
  }

  acceptRequest(id: number) {
    console.log('Accepting request:', id);
    // Implement accept logic
  }

  declineRequest(id: number) {
    console.log('Declining request:', id);
    // Implement decline logic
  }
}