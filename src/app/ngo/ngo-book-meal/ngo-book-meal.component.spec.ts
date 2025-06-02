import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoBookMealComponent } from './ngo-book-meal.component';

describe('NgoBookMealComponent', () => {
  let component: NgoBookMealComponent;
  let fixture: ComponentFixture<NgoBookMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoBookMealComponent]
    });
    fixture = TestBed.createComponent(NgoBookMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
