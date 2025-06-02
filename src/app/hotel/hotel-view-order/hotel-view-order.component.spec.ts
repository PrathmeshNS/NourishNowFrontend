import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelViewOrderComponent } from './hotel-view-order.component';

describe('HotelViewOrderComponent', () => {
  let component: HotelViewOrderComponent;
  let fixture: ComponentFixture<HotelViewOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelViewOrderComponent]
    });
    fixture = TestBed.createComponent(HotelViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
