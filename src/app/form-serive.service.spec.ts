import { TestBed } from '@angular/core/testing';

import { FormSeriveService } from './form-serive.service';

describe('FormSeriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormSeriveService = TestBed.get(FormSeriveService);
    expect(service).toBeTruthy();
  });
});
