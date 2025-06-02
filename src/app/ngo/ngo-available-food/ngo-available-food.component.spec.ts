import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoAvailableFoodComponent } from './ngo-available-food.component';

describe('NgoAvailableFoodComponent', () => {
  let component: NgoAvailableFoodComponent;
  let fixture: ComponentFixture<NgoAvailableFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoAvailableFoodComponent]
    });
    fixture = TestBed.createComponent(NgoAvailableFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
