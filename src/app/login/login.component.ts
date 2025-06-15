import { Component } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Users } from '../entity/Users';
import { UserRole } from '../enums/UserRole';
import { ReviewStatus } from '../enums/ReviewStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLogin: boolean = false;

  user: Users = {
    id: 0,
    name: '',
    email: '',
    password: '',
    address: '',
    registrationNo: '',
    dateOfJoining: '',
    contactNo: '',
    website: '',
    status: ReviewStatus.FALSE,
    role: UserRole.ADMIN,
    city: '',
    pincode: 0
  };


  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(private userservice: UserServiceService, private router: Router) { }

  onLogin(): void {
    if (this.user.email && this.user.password) {
      this.isLoading = true;

      this.userservice.getToken(this.user).subscribe({
        next: (value) => {
          console.log("User Next")
          this.userLogin = true;
        },
        error: (value) => {
          console.log("User error")
        },
      });

      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        if (this.userLogin) {
          alert('Login successful!!');
        }
        else {
          alert('Invalid Username and Password!!');

        }
      }, 2000);
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onForgotPassword(event: Event): void {
    event.preventDefault();
    console.log('Forgot password clicked');
    // Handle forgot password logic
    alert('Forgot password functionality would be implemented here');
  }

  onRegister(event: Event): void {
    event.preventDefault();
    console.log('Register clicked');
    this.router.navigate(['/']);
  }


}