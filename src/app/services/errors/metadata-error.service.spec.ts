import { TestBed } from '@angular/core/testing';

import { MetadataErrorService } from './metadata-error.service';

describe('MetadataErrorService', () => {
  let service: MetadataErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetadataErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
