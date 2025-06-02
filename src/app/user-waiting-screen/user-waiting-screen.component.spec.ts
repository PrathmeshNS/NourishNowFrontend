import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWaitingScreenComponent } from './user-waiting-screen.component';

describe('UserWaitingScreenComponent', () => {
  let component: UserWaitingScreenComponent;
  let fixture: ComponentFixture<UserWaitingScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserWaitingScreenComponent]
    });
    fixture = TestBed.createComponent(UserWaitingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
