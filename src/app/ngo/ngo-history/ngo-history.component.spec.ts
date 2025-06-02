import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoHistoryComponent } from './ngo-history.component';

describe('NgoHistoryComponent', () => {
  let component: NgoHistoryComponent;
  let fixture: ComponentFixture<NgoHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgoHistoryComponent]
    });
    fixture = TestBed.createComponent(NgoHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
