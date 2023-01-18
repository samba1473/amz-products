import { TestBed } from '@angular/core/testing';

import { SaleryService } from './salery.service';

describe('SaleryService', () => {
  let service: SaleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
