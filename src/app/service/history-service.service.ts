import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { History } from '../entity/History';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  private api = "http://localhost:8080/history/"

  constructor(private http: HttpClient) { }

  addHistory(history: History): Observable<any> {
    return this.http.post(this.api + "add-history", history);
  }

  getHisoryById(hId: number) {
    return this.http.get(`${this.api + 'find-history'} / ${hId}`)
  }

  getAllHistory():Observable<History[]>{
    return this.http.get<History[]>(this.api + "get-all-history")
  }

  getHotelHistory(hotelId: number) {
    return this.http.get(`${this.api + 'get-hotel-history'} / ${hotelId}`)
  }

  getNgoHistory(ngoId: number) {
    return this.http.get(`${this.api + 'get-ngo-history'} / ${ngoId}`)
  }
}
