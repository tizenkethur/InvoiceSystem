import { TestBed } from '@angular/core/testing';

import { RoleTypeIdInterceptor } from './role-type-id.interceptor';

describe('RoleTypeIdInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RoleTypeIdInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: RoleTypeIdInterceptor = TestBed.inject(
      RoleTypeIdInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
