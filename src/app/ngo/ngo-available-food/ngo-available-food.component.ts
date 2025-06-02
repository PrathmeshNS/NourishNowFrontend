import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ngo-available-food',
  templateUrl: './ngo-available-food.component.html',
  styleUrls: ['./ngo-available-food.component.css']
})
export class NgoAvailableFoodComponent {

  item = "Varn bhat, papad, lonch, shev bhaji, masale bhat, panner tikka";

  myItem: string[] = this.item.split(",");
  foodItem = ["Varn bhat", "papad", "lonch", "shev bhaji", "masale bhat", "panner tikka"];

  isMobile: boolean = false;
  
  ngOnInit(): void {
    this.updateDeviceType();
    if (this.isMobile) {
      alert("Please click on the card to perform the action!!")
    }
    console.log(this.myItem)
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
    this.isMobile = width >= 100 && width <= 1024;
    // Optional: console.log
    console.log(`Screen width: ${width}, isMobile: ${this.isMobile}`);
  }
}
