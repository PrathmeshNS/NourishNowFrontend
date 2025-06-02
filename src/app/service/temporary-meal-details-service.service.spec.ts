import { TestBed } from '@angular/core/testing';

import { TemporaryMealDetailsServiceService } from './temporary-meal-details-service.service';

describe('TemporaryMealDetailsServiceService', () => {
  let service: TemporaryMealDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporaryMealDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
