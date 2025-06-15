import { Component } from '@angular/core';
import { HotelServiceService } from 'src/app/service/hotel-service.service';


interface RegisterData {
  name: string;
  email: string;
  password: string;
  registrationNo: string;
  address: string;
  contactNo: string;
  city: string;
  pincode: number; // Added pincode field
  website: string;
  dateOfJoining: string;
}


@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.css']
})

export class HotelRegisterComponent {

  registerData: RegisterData = {
    name: '',
    email: '',
    password: '',
    registrationNo: '',
    address: '',
    contactNo: '',
    city: '',
    pincode: 0,
    website: '',
    dateOfJoining: ''
  }

  showPassword: boolean = false;
  isLoading: boolean = false;
  acceptTerms: boolean = false;

  constructor(private hotelService: HotelServiceService) { }

  onRegister(): void {
    if (this.isFormValid()) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Registration attempt:', this.registerData);

        this.hotelService.registerHotel(this.registerData).subscribe({
          next: (value) => {

          },
        })
        this.isLoading = false;

        // Handle successful registration here
        // For example: this.router.navigate(['/verification']);
        alert('Registration successful! Please check your email for verification.');

        // Reset form
        this.resetForm();
      }, 2500);
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(event: Event): void {
    event.preventDefault();
    console.log('Navigate to login');
    // Handle navigation to login page
    // For example: this.router.navigate(['/login']);
    alert('Navigating to login page...');
  }

  private isFormValid(): boolean {
    return !!(
      this.registerData.name &&
      this.registerData.email &&
      this.registerData.password &&
      this.registerData.registrationNo &&
      this.registerData.address &&
      this.registerData.contactNo &&
      this.registerData.city &&
      this.registerData.dateOfJoining &&
      this.registerData.pincode && // Added pincode validation
      this.acceptTerms
    );
  }

  private resetForm(): void {
    this.registerData = {
      name: '',
      email: '',
      password: '',
      registrationNo: '',
      address: '',
      contactNo: '',
      city: '',
      pincode: 0, // Reset pincode
      website: '',
      dateOfJoining: ''
    };
    this.acceptTerms = false;
    this.showPassword = false;
  }
}