import { TestBed } from '@angular/core/testing';

import { UiPostServiceService } from './ui-post-service.service';

describe('UiPostServiceService', () => {
  let service: UiPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
