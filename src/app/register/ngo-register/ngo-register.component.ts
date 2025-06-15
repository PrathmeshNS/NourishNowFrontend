import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/entity/Users';
import { ReviewStatus } from 'src/app/enums/ReviewStatus';
import { UserRole } from 'src/app/enums/UserRole';
import { NgoServiceService } from 'src/app/service/ngo-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';


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
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent {

  registerData: RegisterData = {
    name: '',
    email: '',
    password: '',
    address: '',
    registrationNo: '',
    dateOfJoining: '',
    contactNo: '',
    website: '',
    city: '',
    pincode: 0,
  };

  showPassword: boolean = false;
  isLoading: boolean = false;
  acceptTerms: boolean = false;

  constructor(private ngoService: NgoServiceService, private router:Router) { }

  onRegister(): void {
    if (this.isFormValid()) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {

        this.ngoService.registerNgo(this.registerData).subscribe({
          next: (value) => {
            console.log(value)
            alert('Registration successful! Please check your email for verification.');
            // this.router.navigate(['../login'])
          },
          error: (err) => {
            alert(err.error)
          },
        });
        console.log(this.registerData)

        this.isLoading = false;


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
    this.router.navigate(['../login']);
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
      this.registerData.pincode && // Added pincode validation
      this.acceptTerms
    );
  }

  private resetForm(): void {
    this.registerData = {
      name: '',
      email: '',
      password: '',
      address: '',
      registrationNo: '',
      dateOfJoining: '',
      contactNo: '',
      website: '',
      city: '',
      pincode: 0,
    };
    this.acceptTerms = false;
    this.showPassword = false;
  }
}