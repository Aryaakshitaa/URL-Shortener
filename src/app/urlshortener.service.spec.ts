import { TestBed } from '@angular/core/testing';

import { URLshortenerService } from './urlshortener.service';

describe('URLshortenerService', () => {
  let service: URLshortenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URLshortenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
