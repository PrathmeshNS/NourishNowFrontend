import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserWaitingScreenComponent } from './user-waiting-screen/user-waiting-screen.component';
import { HotelAddMealComponent } from './hotel/hotel-add-meal/hotel-add-meal.component';
import { HotelHistoryComponent } from './hotel/hotel-history/hotel-history.component';
import { HotelListedNgoComponent } from './hotel/hotel-listed-ngo/hotel-listed-ngo.component';
import { HotelNavbarComponent } from './hotel/hotel-navbar/hotel-navbar.component';
import { HotelViewOrderComponent } from './hotel/hotel-view-order/hotel-view-order.component';
import { NgoAvailableFoodComponent } from './ngo/ngo-available-food/ngo-available-food.component';
import { NgoBookMealComponent } from './ngo/ngo-book-meal/ngo-book-meal.component';
import { NgoHistoryComponent } from './ngo/ngo-history/ngo-history.component';
import { NgoListedHotelComponent } from './ngo/ngo-listed-hotel/ngo-listed-hotel.component';
import { NgoNavbarComponent } from './ngo/ngo-navbar/ngo-navbar.component';
import { NgoRegisterComponent } from './register/ngo-register/ngo-register.component';
import { HotelRegisterComponent } from './register/hotel-register/hotel-register.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminScreenComponent } from './admin/admin-screen/admin-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    UserWaitingScreenComponent,
    HotelAddMealComponent,
    HotelHistoryComponent,
    HotelListedNgoComponent,
    HotelNavbarComponent,
    HotelViewOrderComponent,
    NgoAvailableFoodComponent,
    NgoBookMealComponent,
    NgoHistoryComponent,
    NgoListedHotelComponent,
    NgoNavbarComponent,
    NgoRegisterComponent,
    HotelRegisterComponent,
    AdminScreenComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
