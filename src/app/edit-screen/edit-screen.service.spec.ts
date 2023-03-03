import { TestBed } from '@angular/core/testing';

import { EditScreenService } from './edit-screen.service';

describe('EditScreenService', () => {
  let service: EditScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
