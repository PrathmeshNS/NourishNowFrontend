import { TestBed } from '@angular/core/testing';

import { NavbarClickService } from './navbar-click.service';

describe('NavbarClickService', () => {
  let service: NavbarClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
