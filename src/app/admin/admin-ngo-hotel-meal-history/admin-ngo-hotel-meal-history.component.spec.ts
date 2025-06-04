import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgoHotelMealHistoryComponent } from './admin-ngo-hotel-meal-history.component';

describe('AdminNgoHotelMealHistoryComponent', () => {
  let component: AdminNgoHotelMealHistoryComponent;
  let fixture: ComponentFixture<AdminNgoHotelMealHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNgoHotelMealHistoryComponent]
    });
    fixture = TestBed.createComponent(AdminNgoHotelMealHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
