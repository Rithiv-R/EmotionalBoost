import { TestBed } from '@angular/core/testing';

import { GetchatService } from './getchat.service';

describe('GetchatService', () => {
  let service: GetchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
