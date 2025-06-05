import { Component } from '@angular/core';

@Component({
  selector: 'app-user-waiting-screen',
  templateUrl: './user-waiting-screen.component.html',
  styleUrls: ['./user-waiting-screen.component.css']
})
export class UserWaitingScreenComponent {

  adminMessage: string = '';

  onSubmit(): void {
    if (this.adminMessage.trim()) {
      console.log('Message to admin:', this.adminMessage);
      // Handle form submission here
      // You can add your API call or service method here

      // Reset the form after submission
      this.adminMessage = '';

      // Optional: Show success message
      alert('Message sent successfully!');
    }
  }
}
