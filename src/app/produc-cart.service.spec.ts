import { TestBed } from '@angular/core/testing';

import { ProducCartService } from './produc-cart.service';

describe('ProducCartService', () => {
  let service: ProducCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
