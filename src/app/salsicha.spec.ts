import { TestBed } from '@angular/core/testing';

import { Salsicha } from './salsicha';

describe('Salsicha', () => {
  let service: Salsicha;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Salsicha);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
