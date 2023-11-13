import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<Omit<User, 'password'>>()
);

export const logout = createAction(
  '[Auth] Logout'
);
