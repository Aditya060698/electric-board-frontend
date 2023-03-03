import { TestBed } from '@angular/core/testing';

import { ApplicantsInfoService } from './applicants-info.service';

describe('ApplicantsInfoService', () => {
  let service: ApplicantsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
