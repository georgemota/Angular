import { TestBed } from '@angular/core/testing';

import { PerritoRestApiService } from './perrito-rest-api.service';

describe('PerritoRestApiService', () => {
  let service: PerritoRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerritoRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
