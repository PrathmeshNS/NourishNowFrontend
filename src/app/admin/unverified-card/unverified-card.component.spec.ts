import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedCardComponent } from './unverified-card.component';

describe('UnverifiedCardComponent', () => {
  let component: UnverifiedCardComponent;
  let fixture: ComponentFixture<UnverifiedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnverifiedCardComponent]
    });
    fixture = TestBed.createComponent(UnverifiedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
