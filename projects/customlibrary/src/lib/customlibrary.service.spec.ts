import { TestBed } from '@angular/core/testing';

import { CustomlibraryService } from './customlibrary.service';

describe('CustomlibraryService', () => {
  let service: CustomlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
