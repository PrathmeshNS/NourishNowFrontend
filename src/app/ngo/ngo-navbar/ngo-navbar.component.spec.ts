import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoNavbarComponent } from './ngo-navbar.component';

describe('NgoNavbarComponent', () => {
  let component: NgoNavbarComponent;
  let fixture: ComponentFixture<NgoNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoNavbarComponent]
    });
    fixture = TestBed.createComponent(NgoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
