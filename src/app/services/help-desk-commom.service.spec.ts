import { TestBed } from '@angular/core/testing';

import { HelpDeskCommomService } from './help-desk-commom.service';

describe('HelpDeskCommomService', () => {
  let service: HelpDeskCommomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpDeskCommomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
