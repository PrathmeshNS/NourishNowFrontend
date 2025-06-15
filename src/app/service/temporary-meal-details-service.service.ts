import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TemporaryMealBookingDetails } from '../entity/TemporaryMealBookingDetails';
import { Observable } from 'rxjs';
import { MealBookingStatus } from '../enums/MealBookingStatus';
import { AvailableFood } from '../entity/AvailableFood';
import { Users } from '../entity/Users';

export interface TemporaryMealBookingDetailsInsert {
  mealBookingStatus: MealBookingStatus,

  food: AvailableFood,

  ngoUsers: Users
}


@Injectable({
  providedIn: 'root'
})
export class TemporaryMealDetailsServiceService {

  private api = "http://localhost:8080/temporary-meal-details/"

  constructor(private http: HttpClient) { }

  addTemporaryMeal(temporaryDeatils: TemporaryMealBookingDetailsInsert) {
    return this.http.post(this.api + "add-temporary-data", temporaryDeatils)
  }

  getAllMealDetails() {
    return this.http.get(this.api + "get-all-meal")
  }

  getHotelBookedMealById(id: number): Observable<TemporaryMealBookingDetails[]>{
    return this.http.get<TemporaryMealBookingDetails[]>(`${this.api + 'get-hotel-booked-meal'}/${id}`)
  }


  getNgoBookedMealById(id: number) : Observable<TemporaryMealBookingDetails[]>{
    return this.http.get<TemporaryMealBookingDetails[]>(`${this.api + 'get-ngo-booked-meal'}/${id}`)
  }

  approveBookedMeal(tmdId: number) {
    return this.http.get(`${this.api + 'approve-food'}/${tmdId}`)
  }

}
