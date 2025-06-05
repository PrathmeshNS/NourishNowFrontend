import { Component, Input, Output, EventEmitter } from "@angular/core"

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
  @Input() cardData: CardData[] = [];

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