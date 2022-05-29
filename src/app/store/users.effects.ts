import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../api/user.service';
import {ErrorUser, ErrorUsersList, GetUser, GetUsersList, SuccessUser, SuccessUsersList} from './users.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../model/User';
import {of} from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions: Actions, private userService: UserService) {
  }

  /**
   * Effect used to retrieve users data
   */
  getUsers = createEffect(() => this.actions.pipe(
    ofType(GetUsersList),
    mergeMap(
      (action) => this.userService.getUsers(action.offset).pipe(
        map((users) => SuccessUsersList({users})),
        catchError(error => of(ErrorUsersList({error}))),
      ))
  ));

  /**
   * Effect used to retrieve user data
   */
  getUser = createEffect(() => this.actions.pipe(
    ofType(GetUser),
    mergeMap(
      (action) => this.userService.getUser(action.login).pipe(
        map((user: User) => SuccessUser({user})),
        catchError(error => of(ErrorUser({error}))),
      ))
  ));
}
