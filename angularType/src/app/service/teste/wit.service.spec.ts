import { TestBed } from '@angular/core/testing';

import { WitService } from './wit.service';

describe('WitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WitService = TestBed.get(WitService);
    expect(service).toBeTruthy();
  });
});
