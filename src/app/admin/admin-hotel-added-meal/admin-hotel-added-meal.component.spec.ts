import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelAddedMealComponent } from './admin-hotel-added-meal.component';

describe('AdminHotelAddedMealComponent', () => {
  let component: AdminHotelAddedMealComponent;
  let fixture: ComponentFixture<AdminHotelAddedMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHotelAddedMealComponent]
    });
    fixture = TestBed.createComponent(AdminHotelAddedMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
