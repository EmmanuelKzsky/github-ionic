import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Get user', () => {
    it('Should return users data', () => {
      const mockUser = {
        login: 'dafunkt',
        id: 5945189,
        node_id: 'MDQ6VXNlcjU5NDUxODk=',
        avatar_url: 'https://avatars.githubusercontent.com/u/5945189?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dafunkt',
        html_url: 'https://github.com/dafunkt',
        followers_url: 'https://api.github.com/users/dafunkt/followers',
        following_url: 'https://api.github.com/users/dafunkt/following{/other_user}',
        gists_url: 'https://api.github.com/users/dafunkt/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dafunkt/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dafunkt/subscriptions',
        organizations_url: 'https://api.github.com/users/dafunkt/orgs',
        repos_url: 'https://api.github.com/users/dafunkt/repos',
        events_url: 'https://api.github.com/users/dafunkt/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dafunkt/received_events',
        type: 'User',
        site_admin: false,
        name: null,
        company: null,
        blog: '',
        location: null,
        email: null,
        hireable: null,
        bio: null,
        twitter_username: null,
        public_repos: 10,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: '2013-11-15T05:14:10Z',
        updated_at: '2022-03-06T18:28:13Z'
      };
      service.getUser('dafunkt')
        .subscribe(user => {
          expect(user.login).toEqual(mockUser.login);
        });

      const req = httpTestingController.expectOne('https://api.github.com/users/dafunkt');
      req.flush(mockUser);
    });
  });
});
