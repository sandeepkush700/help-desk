import { TestBed } from '@angular/core/testing';

import { HelpdeskCommonService } from './helpdesk-common.service';

describe('HelpdeskCommonService', () => {
  let service: HelpdeskCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpdeskCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
