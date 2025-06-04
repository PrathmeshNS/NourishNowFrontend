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
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHotelCheckComponent } from './admin/admin-hotel-check/admin-hotel-check.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: "register", children: [
      {
        path: 'ngo', component: NgoRegisterComponent
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
        path: '', component: AdminScreenComponent, pathMatch:'full'
      },
      {
        path: 'navbar', component: AdminNavbarComponent
      },
      {
        path:'hotel-verified',component:AdminHotelCheckComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
