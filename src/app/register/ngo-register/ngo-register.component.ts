import { Component } from '@angular/core';


interface RegisterData {
  name: string;
  email: string;
  password: string;
  registerNo: string;
  address: string;
  contactNo: string;
  city: string;
  pincode: string; // Added pincode field
  website: string;
}

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent {

  registerData: RegisterData = {
    name: '',
    email: '',
    password: '',
    registerNo: '',
    address: '',
    contactNo: '',
    city: '',
    pincode: '', // Added pincode initialization
    website: ''
  };

  showPassword: boolean = false;
  isLoading: boolean = false;
  acceptTerms: boolean = false;

  constructor() { }

  onRegister(): void {
    if (this.isFormValid()) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Registration attempt:', this.registerData);
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
      this.registerData.registerNo &&
      this.registerData.address &&
      this.registerData.contactNo &&
      this.registerData.city &&
      this.registerData.pincode && // Added pincode validation
      this.acceptTerms
    );
  }

  private resetForm(): void {
    this.registerData = {
      name: '',
      email: '',
      password: '',
      registerNo: '',
      address: '',
      contactNo: '',
      city: '',
      pincode: '', // Reset pincode
      website: ''
    };
    this.acceptTerms = false;
    this.showPassword = false;
  }
}