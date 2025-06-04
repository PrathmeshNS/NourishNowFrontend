import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations"

export interface RegistrationDetails {
  registrationNo: string
  email: string
  contactNo: string
  fullAddress: string
  city: string
  pincode: string
  dateOfJoining: string
}

@Component({
  selector: 'app-admin-hotel-check',
  templateUrl: './admin-hotel-check.component.html',
  styleUrls: ['./admin-hotel-check.component.css'],
  animations: [
    trigger("cardAnimation", [
      state(
        "void",
        style({
          opacity: 0,
          transform: "translateY(20px)",
        }),
      ),
      transition("void => *", [animate("0.4s ease-out")]),
    ]),
    trigger("contentAnimation", [
      state(
        "void",
        style({
          opacity: 0,
        }),
      ),
      transition("void => *", [animate("0.5s 0.2s ease-out")]),
    ]),
  ],
})
export class AdminHotelCheckComponent {
  @Input() registrationDetails: RegistrationDetails = {
    registrationNo: "87456dafsd45123ffdgdf",
    email: "blue@gmail.com",
    contactNo: "9788******",
    fullAddress: "Sambhaji Chauk, Burud Galli, Vinchur",
    city: "Nashik",
    pincode: "420123",
    dateOfJoining: "28-march-2025",
  }

  @Output() accept = new EventEmitter<void>()
  @Output() decline = new EventEmitter<void>()

  onAccept(): void {
    this.accept.emit()
  }

  onDecline(): void {
    this.decline.emit()
  }
}
