import { TestBed } from '@angular/core/testing';

import { FactoryEndpointService } from './factory-endpoint.service';

describe('FactoryEndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactoryEndpointService = TestBed.get(FactoryEndpointService);
    expect(service).toBeTruthy();
  });
});
