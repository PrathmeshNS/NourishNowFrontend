import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUploadScreenComponent } from './profile-upload-screen.component';

describe('ProfileUploadScreenComponent', () => {
  let component: ProfileUploadScreenComponent;
  let fixture: ComponentFixture<ProfileUploadScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUploadScreenComponent]
    });
    fixture = TestBed.createComponent(ProfileUploadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
