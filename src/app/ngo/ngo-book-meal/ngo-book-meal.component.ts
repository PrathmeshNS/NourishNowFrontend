import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ngo-book-meal',
  templateUrl: './ngo-book-meal.component.html',
  styleUrls: ['./ngo-book-meal.component.css']
})
export class NgoBookMealComponent {


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

  private updateDeviceType(): void {
    const width = window.innerWidth;
    this.isMobile = width >= 100 && width <= 1024;
    // Optional: console.log
    console.log(`Screen width: ${width}, isMobile: ${this.isMobile}`);
  }


}
