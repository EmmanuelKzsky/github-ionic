import {User} from '../model/User';
import {createReducer, on} from '@ngrx/store';
import {ErrorUser, ErrorUsersList, SuccessUser, SuccessUsersList} from './users.action';

export interface UsersState {
  error: any;
  users: User[];
  user: User;
}

/**
 * InitialState of the app
 */
const initialState: UsersState = {
  error: null,
  users: [],
  user: undefined
};
/**
 * Reducer of the app
 */
export const UsersReducer = createReducer(initialState,
  on(SuccessUsersList, (state, action) => ({...state, error: null, users: [...state.users, ...action.users]})),
  on(ErrorUsersList, (state, action) => ({...state, error: action.error, users: []})),
  on(SuccessUser, (state, action) => ({...state, error: null, user: action.user})),
  on(ErrorUser, (state, action) => ({...state, error: action.error, user: undefined})),
);
