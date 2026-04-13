import { TestBed } from '@angular/core/testing';

import { OrganizationApi } from './organization-api';

describe('Organization', () => {
  let service: OrganizationApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
