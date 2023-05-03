import { TestBed } from '@angular/core/testing';

import { BookKeeperGuard } from './book-keeper.guard';

describe('BookKeeperGuard', () => {
  let guard: BookKeeperGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookKeeperGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
