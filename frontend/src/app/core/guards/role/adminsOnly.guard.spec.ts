import { TestBed } from '@angular/core/testing';

import { AdminsOnlyGuard } from './adminsOnly.guard';

describe('AdminsOnlyGuard', () => {
  let guard: AdminsOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminsOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
