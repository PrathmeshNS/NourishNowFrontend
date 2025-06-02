import { TestBed } from '@angular/core/testing';

import { AvailableFoodServiceService } from './available-food-service.service';

describe('AvailableFoodServiceService', () => {
  let service: AvailableFoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableFoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
