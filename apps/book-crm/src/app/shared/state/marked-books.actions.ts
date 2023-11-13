import { createAction, props } from '@ngrx/store';

export const markBook = createAction(
  '[Marked Books]  Mark Book',
  props<{ bookId: string }>()
);

export const unmarkBook = createAction(
  '[Marked Books] Unmark Book',
  props<{ bookId: string }>()
);
