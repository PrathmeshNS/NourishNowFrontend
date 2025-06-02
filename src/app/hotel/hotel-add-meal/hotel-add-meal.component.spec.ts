import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAddMealComponent } from './hotel-add-meal.component';

describe('HotelAddMealComponent', () => {
  let component: HotelAddMealComponent;
  let fixture: ComponentFixture<HotelAddMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelAddMealComponent]
    });
    fixture = TestBed.createComponent(HotelAddMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
