import { TestBed } from '@angular/core/testing';

import { NoUserGuard } from './noUser.guard';

describe('NoUserGuard', () => {
  let guard: NoUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
