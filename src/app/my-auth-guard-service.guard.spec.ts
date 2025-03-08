import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myAuthGuardServiceGuard } from './my-auth-guard-service.guard';

describe('myAuthGuardServiceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myAuthGuardServiceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
