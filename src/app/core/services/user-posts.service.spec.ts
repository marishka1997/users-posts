import { TestBed } from '@angular/core/testing';

import { UserPostsService } from './user-posts.service';

describe('UserPostsService', () => {
  let service: UserPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
