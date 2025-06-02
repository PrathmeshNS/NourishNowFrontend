import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRegisterComponent } from './ngo-register.component';

describe('NgoRegisterComponent', () => {
  let component: NgoRegisterComponent;
  let fixture: ComponentFixture<NgoRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoRegisterComponent]
    });
    fixture = TestBed.createComponent(NgoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
