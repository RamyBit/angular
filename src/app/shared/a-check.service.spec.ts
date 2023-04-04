import { TestBed } from '@angular/core/testing';

import { ACheckService } from './a-check.service';

describe('ACheckService', () => {
  let service: ACheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ACheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
