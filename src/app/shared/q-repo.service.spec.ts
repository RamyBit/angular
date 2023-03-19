import { TestBed } from '@angular/core/testing';

import { QRepoService } from './q-repo.service';

describe('QRepoService', () => {
  let service: QRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
