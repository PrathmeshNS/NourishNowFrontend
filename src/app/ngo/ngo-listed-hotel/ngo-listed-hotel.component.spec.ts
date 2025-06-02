import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoListedHotelComponent } from './ngo-listed-hotel.component';

describe('NgoListedHotelComponent', () => {
  let component: NgoListedHotelComponent;
  let fixture: ComponentFixture<NgoListedHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoListedHotelComponent]
    });
    fixture = TestBed.createComponent(NgoListedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
