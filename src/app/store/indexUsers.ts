import {UsersEffects} from './users.effects';
import {
  ErrorUser,
  ErrorUsersList,
  GetUser,
  GetUserError,
  GetUsersList,
  GetUsersListError,
  SuccessUser,
  SuccessUsersList
} from './users.action';
import {UsersReducer} from './users.reducer';
import {getStateError, getStateUser, getStateUsersList} from './users.selector';

export const fromRoot = {
  UsersEffects,
  GetUsersList,
  GetUsersListError,
  GetUser,
  GetUserError,
  ErrorUsersList,
  SuccessUsersList,
  ErrorUser,
  SuccessUser,
  UsersReducer,
  getStateError,
  getStateUsersList,
  getStateUser
};
