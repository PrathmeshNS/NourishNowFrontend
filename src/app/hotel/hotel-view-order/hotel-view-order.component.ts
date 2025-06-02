import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hotel-view-order',
  templateUrl: './hotel-view-order.component.html',
  styleUrls: ['./hotel-view-order.component.css']
})
export class HotelViewOrderComponent {

  isMobile: boolean = false;
  ngOnInit(): void {
    this.updateDeviceType();
    if (this.isMobile) {
      alert("Please click on the card to perform the action!!")
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateDeviceType();
  }


  onAccept() {
    console.log('Accept button clicked');
  }

  onReject() {
    console.log('Reject button clicked');
  }


  private updateDeviceType(): void {
    const width = window.innerWidth;
    this.isMobile = width >= 400 && width <= 1024;
    // Optional: console.log
    console.log(`Screen width: ${width}, isMobile: ${this.isMobile}`);
  }
}
