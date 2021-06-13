import { TestBed } from '@angular/core/testing';

import { LeaderBordDataService } from './leader-bord-data.service';

describe('LeaderBordDataService', () => {
  let service: LeaderBordDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaderBordDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
