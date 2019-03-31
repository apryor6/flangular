import { TestBed } from '@angular/core/testing';

import { FlaskService } from './flask.service';

describe('FlaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlaskService = TestBed.get(FlaskService);
    expect(service).toBeTruthy();
  });
});
