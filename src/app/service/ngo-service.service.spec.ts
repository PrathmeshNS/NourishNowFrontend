import { TestBed } from '@angular/core/testing';

import { NgoServiceService } from './ngo-service.service';

describe('NgoServiceService', () => {
  let service: NgoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
