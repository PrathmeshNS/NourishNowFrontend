import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminScreenComponent } from './admin/admin-screen/admin-screen.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHotelCheckComponent } from './admin/admin-hotel-check/admin-hotel-check.component';
import { AdminNgoCheckComponent } from './admin/admin-ngo-check/admin-ngo-check.component';
import { AdminHotelAddedMealComponent } from './admin/admin-hotel-added-meal/admin-hotel-added-meal.component';
import { AdminNgoHotelMealHistoryComponent } from './admin/admin-ngo-hotel-meal-history/admin-ngo-hotel-meal-history.component';
import { VerifiedCardComponent } from './admin/verified-card/verified-card.component';
import { UnverifiedCardComponent } from './admin/unverified-card/unverified-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationComponent } from './donation/donation.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileUploadScreenComponent } from './profile-upload-screen/profile-upload-screen.component';


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
    AdminScreenComponent,
    AdminNavbarComponent,
    AdminHotelCheckComponent,
    AdminNgoCheckComponent,
    AdminHotelAddedMealComponent,
    AdminNgoHotelMealHistoryComponent,
    VerifiedCardComponent,
    UnverifiedCardComponent,
    ContactUsComponent,
    AboutUsComponent,
    DonationComponent,
    ProfileUploadScreenComponent,    
  ],
  imports: [
    BrowserModule,
    RouterLink,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
