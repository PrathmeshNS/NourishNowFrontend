import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedCardComponent } from './verified-card.component';

describe('VerifiedCardComponent', () => {
  let component: VerifiedCardComponent;
  let fixture: ComponentFixture<VerifiedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiedCardComponent]
    });
    fixture = TestBed.createComponent(VerifiedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
