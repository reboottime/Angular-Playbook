import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
    loggedIn: boolean;
    username: string | null;
}

const initialState: AuthState = {
    loggedIn: false,
    username: null
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state, action) => {
        return {
            ...state,
            loggedIn: true,
            user: action
        };
    }),
    on(AuthActions.logout, (state) => {
        return {
            ...state,
            loggedIn: false,
            user: null
        };
    })
);
