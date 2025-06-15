import { Injectable } from '@angular/core';
import { Users } from '../entity/Users';
import { UserRole } from '../enums/UserRole';
import { ReviewStatus } from '../enums/ReviewStatus';
import { HttpClient } from '@angular/common/http';
import { AvailableFood } from '../entity/AvailableFood';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AvailableFoodServiceService {
  hotel: Users = {
    id: 0,
    name: '',
    email: '',
    password: '',
    address: '',
    registrationNo: '',
    dateOfJoining: '',
    contactNo: '',
    website: '',
    role: UserRole.HOTEL,
    status: ReviewStatus.TRUE,
    city: '',
    pincode: 0
  };

  availableFood: AvailableFood = {
    aId: 0,
    dateTime: '',
    foodItem: [],
    approxPersonCanEat: 0,
    typeOfProviding: '',
    hotelUsers: this.hotel
  }

  private api = "http://localhost:8080/available-food/";

  constructor(private http: HttpClient) { }

  addAvailableFood(availableFood: AvailableFood): Observable<any> {
    return this.http.post(this.api + "add-available-food", availableFood);
  }

  getAvailableFood(): Observable<AvailableFood[]> {
    return this.http.get<AvailableFood[]>(this.api+"get-all-available-food");
  }

  getAvailableFoodId(availableFoodId:number): Observable<any> {
    return this.http.get(`${this.api + 'food-by-id'}/${availableFoodId}`);
  }

  
}
