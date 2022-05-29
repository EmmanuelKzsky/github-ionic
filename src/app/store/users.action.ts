import {createAction, props} from '@ngrx/store';
import {User} from '../model/User';
//Actions for redux
export const GetUsersList = createAction('[API] Git Users', props<{offset: number}>());
export const GetUsersListError = createAction('[API] Git Users Error', props<{offset: number}>());
export const GetUser = createAction('[API] Git User', props<{login: string}>());
export const GetUserError = createAction('[API] Git User Error', props<{login: string}>());

export const ErrorUsersList = createAction('[API] Error UsersLisr', props<{error: string}>());
export const SuccessUsersList = createAction('[API] Success UsersLisr', props<{users: User[]}>());
export const ErrorUser = createAction('[API] Error User', props<{error: string}>());
export const SuccessUser = createAction('[API] Success User', props<{user: User}>());
