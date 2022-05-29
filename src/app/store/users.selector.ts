import * as userReducer from './users.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

// const getUsersError = (state: UsersState): string => state.error;
// const getUsersList = (state: UsersState): User[] => state.users;
// const getUser = (state: UsersState): User => state.user;
export const getUsersState = createFeatureSelector<userReducer.UsersState>('userState');

const getStateError = createSelector(
  getUsersState,
  (state: userReducer.UsersState) => state.error,
);

/**
 * Selector to listen only store changes of users list
 */
const getStateUsersList = createSelector(
  getUsersState,
  (state: userReducer.UsersState) => state.users,
);
/**
 * Selector to listen only store changes user detail
 */
const getStateUser = createSelector(
  getUsersState,
  (state: userReducer.UsersState) => state.user,
);

export {
  getStateError,
  getStateUsersList,
  getStateUser
};
