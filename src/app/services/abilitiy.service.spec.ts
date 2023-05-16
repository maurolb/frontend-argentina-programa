import { TestBed } from '@angular/core/testing';

import { AbilitiyService } from './abilitiy.service';

describe('AbilitiyService', () => {
  let service: AbilitiyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilitiyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
