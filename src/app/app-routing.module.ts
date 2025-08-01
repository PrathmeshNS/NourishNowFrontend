import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgoRegisterComponent } from './register/ngo-register/ngo-register.component';
import { HotelRegisterComponent } from './register/hotel-register/hotel-register.component';
import { HotelAddMealComponent } from './hotel/hotel-add-meal/hotel-add-meal.component';
import { HotelHistoryComponent } from './hotel/hotel-history/hotel-history.component';
import { HotelListedNgoComponent } from './hotel/hotel-listed-ngo/hotel-listed-ngo.component';
import { HotelViewOrderComponent } from './hotel/hotel-view-order/hotel-view-order.component';
import { NgoAvailableFoodComponent } from './ngo/ngo-available-food/ngo-available-food.component';
import { NgoHistoryComponent } from './ngo/ngo-history/ngo-history.component';
import { NgoListedHotelComponent } from './ngo/ngo-listed-hotel/ngo-listed-hotel.component';
import { NgoBookMealComponent } from './ngo/ngo-book-meal/ngo-book-meal.component';
import { AdminScreenComponent } from './admin/admin-screen/admin-screen.component';
import { AdminHotelCheckComponent } from './admin/admin-hotel-check/admin-hotel-check.component';
import { AdminNgoCheckComponent } from './admin/admin-ngo-check/admin-ngo-check.component';
import { AdminHotelAddedMealComponent } from './admin/admin-hotel-added-meal/admin-hotel-added-meal.component';
import { AdminNgoHotelMealHistoryComponent } from './admin/admin-ngo-hotel-meal-history/admin-ngo-hotel-meal-history.component';
import { UserWaitingScreenComponent } from './user-waiting-screen/user-waiting-screen.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationComponent } from './donation/donation.component';
import { ProfileUploadScreenComponent } from './profile-upload-screen/profile-upload-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'verification', component: UserWaitingScreenComponent, pathMatch: 'full'
  },
  {
    path: 'profile', component: ProfileUploadScreenComponent, pathMatch: 'full'
  },
  {
    path: 'contact-us', component: ContactUsComponent, pathMatch: 'full'
  },
  {
    path: 'about-us', component: AboutUsComponent, pathMatch: 'full'
  },
  {
    path: 'donation', component: DonationComponent, pathMatch: 'full'
  },
  {
    path: "register", children: [
      {
        path: '', component: NgoRegisterComponent
      },
      {
        path: 'hotel', component: HotelRegisterComponent
      },
    ]
  },
  {
    path: 'hotel', children: [
      {
        path: '', component: HotelAddMealComponent, pathMatch: 'full'
      },
      {
        path: 'history', component: HotelHistoryComponent
      },
      {
        path: 'listed-ngo', component: HotelListedNgoComponent
      },
      {
        path: 'view-order', component: HotelViewOrderComponent
      },
    ],
  },

  {
    path: 'ngo', children: [
      {
        path: '', component: NgoAvailableFoodComponent, pathMatch: 'full'
      },
      {
        path: 'history', component: NgoHistoryComponent
      },
      {
        path: 'listed-hotel', component: NgoListedHotelComponent
      },
      {
        path: 'view-booked-meal', component: NgoBookMealComponent
      },
    ],
  },
  {
    path: 'admin', children: [
      {
        path: '', component: AdminScreenComponent, pathMatch: 'full'
      },
      {
        path: 'hotel-verified', component: AdminHotelCheckComponent
      },
      {
        path: 'ngo-verified', component: AdminNgoCheckComponent
      },
      {
        path: 'available-meal', component: AdminHotelAddedMealComponent
      },
      {
        path: 'history', component: AdminNgoHotelMealHistoryComponent
      },
    ]
  },
  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
