import { TestBed } from '@angular/core/testing';

import { SetchatService } from './setchat.service';

describe('SetchatService', () => {
  let service: SetchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
