import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelCheckComponent } from './admin-hotel-check.component';

describe('AdminHotelCheckComponent', () => {
  let component: AdminHotelCheckComponent;
  let fixture: ComponentFixture<AdminHotelCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHotelCheckComponent]
    });
    fixture = TestBed.createComponent(AdminHotelCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
