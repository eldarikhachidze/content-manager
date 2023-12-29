import { TestBed } from '@angular/core/testing';

import { SingsService } from './sings.service';

describe('SingsService', () => {
  let service: SingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
