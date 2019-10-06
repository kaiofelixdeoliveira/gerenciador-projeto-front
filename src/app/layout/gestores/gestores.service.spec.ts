import { TestBed } from '@angular/core/testing';

import { GestoresService } from './gestores.service';

describe('GestoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestoresService = TestBed.get(GestoresService);
    expect(service).toBeTruthy();
  });
});
