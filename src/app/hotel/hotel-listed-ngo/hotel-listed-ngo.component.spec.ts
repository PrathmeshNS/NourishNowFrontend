import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListedNgoComponent } from './hotel-listed-ngo.component';

describe('HotelListedNgoComponent', () => {
  let component: HotelListedNgoComponent;
  let fixture: ComponentFixture<HotelListedNgoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelListedNgoComponent]
    });
    fixture = TestBed.createComponent(HotelListedNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
