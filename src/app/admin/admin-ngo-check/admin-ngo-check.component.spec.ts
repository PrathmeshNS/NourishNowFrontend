import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNgoCheckComponent } from './admin-ngo-check.component';

describe('AdminNgoCheckComponent', () => {
  let component: AdminNgoCheckComponent;
  let fixture: ComponentFixture<AdminNgoCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNgoCheckComponent]
    });
    fixture = TestBed.createComponent(AdminNgoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
