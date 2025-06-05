import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginData = {
    email: '',
    password: ''
  };

  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor() { }

  onLogin(): void {
    if (this.loginData.email && this.loginData.password) {
      this.isLoading = true;

      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', this.loginData);
        this.isLoading = false;

        // Handle successful login here
        // For example: this.router.navigate(['/dashboard']);
        alert('Login successful!');
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
    // Handle navigation to register page
    // For example: this.router.navigate(['/register']);
    alert('Register functionality would be implemented here');
  }
}