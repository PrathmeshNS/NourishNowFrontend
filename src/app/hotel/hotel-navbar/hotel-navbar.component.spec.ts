import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelNavbarComponent } from './hotel-navbar.component';

describe('HotelNavbarComponent', () => {
  let component: HotelNavbarComponent;
  let fixture: ComponentFixture<HotelNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelNavbarComponent]
    });
    fixture = TestBed.createComponent(HotelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
