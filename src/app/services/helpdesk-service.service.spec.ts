import { TestBed } from '@angular/core/testing';

import { HelpdeskServiceService } from './helpdesk-service.service';

describe('HelpdeskServiceService', () => {
  let service: HelpdeskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpdeskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
