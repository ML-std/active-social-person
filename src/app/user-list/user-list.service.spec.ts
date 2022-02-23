import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListService);
  });
  it('should return a User list with 16 users', (done: DoneFn) => {
    service.getAll().then(response => {
      expect(response.length).toBe(16);
      done();
    })
  }
  );
});
