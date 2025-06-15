import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../entity/Users';

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

@Injectable({
  providedIn: 'root'
})
export class NgoServiceService {
  private api = "http://localhost:8080/ngo/"
  constructor(private http: HttpClient) { }

  registerNgo(user: RegisterData) {
    return this.http.post(this.api + "register", user)
  }
  
}
