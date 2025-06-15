import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../entity/Users';
import { Observable, tap } from 'rxjs';
import { UserRole } from '../enums/UserRole';
import { ReviewStatus } from '../enums/ReviewStatus';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userService: Users = {
    id: 52,
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
    role: UserRole.HOTEL,
    status: ReviewStatus.FALSE
  }

  private api = "http://localhost:8080/user";

  constructor(private http: HttpClient, private router: Router) {
  }

  getToken(user: Users): Observable<any> {
    return this.http.post<any>('http://localhost:8080/login', user).pipe(
      tap((response: any) => {
        console.log(response)
        user = response.user
        localStorage.setItem('token', response.token);
        this.storeUserId(response.user.id, response.user.role);
        this.navigateUser(response.user.role);
      })
    );
  }


  public loginUser(users: Users): Observable<Users> {
    return this.http.post<Users>(this.api + "/login", users);
  }

  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.api + 'get-by-id'} / ${id}`)
  }

  public getAllHotel(): Observable<Users[]> {
    return this.http.get<Users[]>(this.api + "/get-all-hotel");
  }

  public getAllNgo(): Observable<Users[]> {
    return this.http.get<Users[]>(this.api + "/get-all-ngo");
  }

  public getNoOfHotel(): Observable<number> {
    return this.http.get<number>(this.api + "/no-of-hotel");
  }

  public getNoOfNgo(): Observable<number> {
    return this.http.get<number>(this.api + "/no-of-ngo");
  }


  public getNoOfActiveHotel(): Observable<number> {
    return this.http.get<number>(this.api + "/no-of-active-hotel");
  }
  

  public getAllUnVerifiedHotel(): Observable<number> {
    return this.http.get<number>(this.api + "/no-of-unactive-hotel");
  }

  public getAllUnVerifiedNgo(): Observable<number> {
    return this.http.get<number>(this.api + "/no-of-unactive-ngo");
  }


  private storeUserId(id: Number, role: UserRole) {
    if (role.toString() == 'HOTEL') {
      localStorage.setItem('hId', id.toString())
    }
    if (role.toString() == 'NGO') {
      localStorage.setItem('nId', id.toString())
    }
    if (role.toString() == 'ADMIN') {
      localStorage.setItem('aId', id.toString())
    }
  }

  private navigateUser(role: UserRole) {
    if (role.toString() == 'HOTEL') {
      console.log('Navigate to Hotel DashBaord');
      this.router.navigate(['./hotel']);
    }
    if (role.toString() == 'NGO') {
      console.log('Navigate to Ngo DashBoard');
      this.router.navigate(['./ngo']);
    }
    if (role.toString() == 'ADMIN') {
      console.log('Navigate to Admin DashBoard');
      this.router.navigate(['./admin']);
    }
  }
}
